import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 - 대원소방",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8">개인정보처리방침</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <p>
            (주)대원소방 설비공사(이하 &quot;회사&quot;)는 고객님의 개인정보를 중요시하며, 
            「정보통신망 이용촉진 및 정보보호에 관한 법률」 및 「개인정보보호법」을 
            준수하고 있습니다. 회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 
            개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 
            어떠한 조치가 취해지고 있는지 알려드립니다.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">1. 수집하는 개인정보의 항목</h2>
          <p>회사는 문의하기, 견적 요청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>필수항목: 성명, 연락처</li>
            <li>선택항목: 이메일, 문의 유형, 문의 내용</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">2. 개인정보의 수집 및 이용 목적</h2>
          <p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>고객 문의에 대한 답변 및 상담</li>
            <li>견적 요청에 대한 회신</li>
            <li>서비스 관련 정보 제공</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">3. 개인정보의 보유 및 이용 기간</h2>
          <p>
            회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 
            파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 
            관계법령에서 정한 일정한 기간 동안 개인정보를 보관합니다.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">4. 개인정보의 파기절차 및 방법</h2>
          <p>
            회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 
            지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>파기절차: 이용자가 문의 등을 위해 기재한 개인정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후 파기됩니다.</li>
            <li>파기방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">5. 개인정보 제공</h2>
          <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>이용자들이 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">6. 문의처</h2>
          <p>
            개인정보와 관련된 문의사항이 있으시면 아래로 연락해 주시기 바랍니다.
          </p>
          <p>
            전화: (051) 266-5106<br />
            이메일: dwfe1199@naver.com
          </p>
        </div>
      </div>
    </div>
  );
}