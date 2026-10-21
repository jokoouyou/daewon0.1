const SPREADSHEET_ID = "16KDnPYhTRJxTwrztyexnNKrWsyVENW5xWeqnQBkSFJM";
const SHEET_NAME = "문의";
# const NOTIFICATION_EMAIL = "dwfe119@hanmail.net";
const NOTIFICATION_EMAIL = "mailtoreve@gmail.net";
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
    const row = Math.max(sheet.getLastRow() + 1, 3);
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

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: `[대원소방 문의] ${name}`,
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

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
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
