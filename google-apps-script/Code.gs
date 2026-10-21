const SPREADSHEET_ID = "16KDnPYhTRJxTwrztyexnNKrWsyVENW5xWeqnQBkSFJM";
const SHEET_NAME = "문의";
const NOTIFICATION_EMAIL = "mailtoreve@gmail.com";
const TIME_ZONE = "Asia/Seoul";

/**
 * Google Apps Script Web App endpoint.
 * Configure the deployment to execute as the owner and allow access as needed.
 * Sheet columns A:G are timestamp, company, name, phone, email, type, content.
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const payload = (e && e.parameter) || {};
    const timestamp = new Date();
    const timestampText = Utilities.formatDate(
      timestamp,
      TIME_ZONE,
      "yyyy/MM/dd HH:mm"
    );
    const phoneDigits = String(payload.phone || "").replace(/\D/g, "");
    const phone = formatPhone(phoneDigits);
    const company = String(payload.company || "");
    const name = String(payload.name || "");
    const email = String(payload.email || "");
    const type = String(payload.type || "");
    const content = String(payload.content || "");

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    spreadsheet.setSpreadsheetTimeZone(TIME_ZONE);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() < 2) {
      sheet.getRange(2, 1, 1, 7).setValues([[
        "timestamp",
        "company",
        "name",
        "phone",
        "email",
        "type",
        "content",
      ]]);
    }
    sheet.getRange(2, 8, 1, 2).setValues([["email_status", "email_error"]]);
    const lastRow = sheet.getLastRow();
    const timestamps = lastRow >= 3
      ? sheet.getRange(3, 1, lastRow - 2, 1).getValues()
      : [];
    const emptyIndex = timestamps.findIndex(([value]) => value === "" || value === null);
    const row = emptyIndex === -1 ? Math.max(lastRow + 1, 3) : emptyIndex + 3;
    sheet.getRange(row, 1, 1, 7).setValues([[
      timestamp,
      company,
      name,
      phone,
      email,
      type,
      content,
    ]]);
    sheet.getRange(row, 1).setNumberFormat("yyyy/MM/dd HH:mm");

    let emailStatus = "sent";
    let emailError = "";
    try {
      MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: `[대원소방 문의] ${name || "이름 미입력"}`,
        body: [
          `일시 : ${timestampText}`,
          `회사 : ${company}`,
          `성명 : ${name}`,
          `연락처 : ${phone}`,
          `이메일 : ${email}`,
          `문의 유형 : ${type}`,
          `문의 내용 : ${content}`,
        ].join("\n\n"),
      });
    } catch (error) {
      emailStatus = "failed";
      emailError = error && error.message ? error.message : String(error);
      console.error(`MailApp.sendEmail failed: ${emailError}`);
    }
    sheet.getRange(row, 8, 1, 2).setValues([[emailStatus, emailError]]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, emailSent: emailStatus === "sent" }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function formatPhone(digits) {
  if (digits.length <= 4) return digits;
  if (digits.length <= 8) return `${digits.slice(0, -4)}-${digits.slice(-4)}`;
  return `${digits.slice(0, -8)}-${digits.slice(-8, -4)}-${digits.slice(-4)}`;
}

// Run once from the Apps Script editor to authorize MailApp and inspect quota.
function authorizeMailApp() {
  const remainingQuota = MailApp.getRemainingDailyQuota();
  console.log(`Remaining email quota: ${remainingQuota}`);
}
