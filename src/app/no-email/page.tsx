import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이메일무단수집거부 - 대원소방",
};

export default function NoEmailPage() {
  return (
    <div className="min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8">이메일무단수집거부</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <p>
            본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 
            기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다. 이를 위반 시 
            「정보통신망 이용촉진 및 정보보호에 관한 법률」에 의해 처벌받을 수 있습니다.
          </p>
          <p className="mt-6">
            본 웹사이트에서 수집된 이메일 주소를 이용한 영리 목적의 광고성 정보 
            수집 및 전송은 명백히 금지되며, 이를 위반하는 경우, 관계 법령에 따라 
            형사 처벌 대상이 될 수 있습니다.
          </p>
          <p className="mt-6 font-semibold text-navy">
            게시일: 2024년 1월 1일
          </p>
        </div>
      </div>
    </div>
  );
}