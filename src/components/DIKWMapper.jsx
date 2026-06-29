import React from 'react';
import { ChevronLeft, ChevronRight, Brain, Lightbulb, Compass, FileText, ArrowLeftRight } from 'lucide-react';

const levelMeta = [
  {
    index: 0,
    dikw: "Data",
    adpie: "Assessment",
    label: "데이터 (Data) ↔ 사정 (Assessment)",
    width: "w-full",
    gradient: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-200",
    icon: FileText
  },
  {
    index: 1,
    dikw: "Information",
    adpie: "Diagnosis",
    label: "정보 (Information) ↔ 진단 (Diagnosis)",
    width: "w-[85%]",
    gradient: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-200",
    icon: ArrowLeftRight
  },
  {
    index: 2,
    dikw: "Knowledge",
    adpie: "Planning",
    label: "지식 (Knowledge) ↔ 계획 (Planning)",
    width: "w-[70%]",
    gradient: "from-purple-500 to-indigo-500",
    shadow: "shadow-purple-200",
    icon: Brain
  },
  {
    index: 3,
    dikw: "Wisdom",
    adpie: "Implementation & Evaluation",
    label: "지혜 (Wisdom) ↔ 수행 및 평가 (I & E)",
    width: "w-[55%]",
    gradient: "from-amber-500 to-orange-500",
    shadow: "shadow-amber-200",
    icon: Compass
  }
];

export default function DIKWMapper({ selectedScenario, activeStep, onStepChange, rawData }) {
  const currentStepData = selectedScenario.steps[activeStep];
  const meta = levelMeta[activeStep];

  const handlePrev = () => {
    if (activeStep > 0) onStepChange(activeStep - 1);
  };

  const handleNext = () => {
    if (activeStep < 3) onStepChange(activeStep + 1);
  };

  // 실시간 사정 데이터 연계
  const renderDetails = (stepIndex, dataList) => {
    if (stepIndex === 0) {
      // 0단계(Data - 사정)는 학생이 고쳐 쓴 rawData를 화면에 노출
      const labelMap = {
        bodyTemperature: "체온",
        heartRate: "심박수",
        respiratoryRate: "호흡수",
        bloodPressure: "혈압",
        skinTurgor: "피부 긴장도",
        oralMucosa: "구강 점막",
        urineOutput: "소변량",
        weight: "체중",
        oxygenSaturation: "산소포화도",
        painScore: "통증 점수",
        ecgOutput: "심전도 소견",
        bloodGlucose: "간이 혈당",
        arterialpH: "동맥혈 pH",
        urineKetone: "뇨 케톤체"
      };

      return Object.entries(rawData).map(([key, val]) => (
        <div key={key} className="flex justify-between items-center py-2 px-3 bg-white/70 rounded-lg border border-slate-100/50 shadow-sm">
          <span className="font-semibold text-slate-500 text-xs">{labelMap[key] || key}</span>
          <span className="font-bold text-blue-700 text-xs">{val || "N/A"}</span>
        </div>
      ));
    }

    // 다른 단계들은 기존 정의된 시나리오 세부 정보를 렌더링
    return dataList.map((item, idx) => (
      <div key={idx} className="flex gap-2.5 items-start py-2 px-3 bg-white/70 rounded-lg border border-slate-100/50 shadow-sm text-xs leading-relaxed text-slate-600">
        <span className="text-blue-500 font-bold mt-0.5">•</span>
        <span>{item}</span>
      </div>
    ));
  };

  return (
    <div className="glass-panel p-6 rounded-2xl border border-blue-100 flex flex-col gap-6 shadow-sm">
      
      {/* 타이틀 및 네비게이션 */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-500 animate-pulse-subtle" />
            <span>DIKW & 간호과정 매핑 가시화</span>
          </h2>
          <p className="text-slate-400 text-xs mt-0.5">
            피라미드의 각 층을 클릭하거나 이전/다음 버튼으로 진행 흐름을 시뮬레이션해 보세요.
          </p>
        </div>

        {/* 내비게이션 버튼 */}
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={activeStep === 0}
            className={`p-2 rounded-xl border border-slate-200 transition-all ${
              activeStep === 0 
                ? 'bg-slate-50 text-slate-300 cursor-not-allowed' 
                : 'bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 shadow-sm active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            disabled={activeStep === 3}
            className={`p-2 rounded-xl border border-slate-200 transition-all ${
              activeStep === 3 
                ? 'bg-slate-50 text-slate-300 cursor-not-allowed' 
                : 'bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 shadow-sm active:scale-95'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 시각화 피라미드 영역 */}
      <div className="flex flex-col items-center justify-center py-6 bg-slate-50/50 rounded-2xl border border-slate-100 relative overflow-hidden">
        {/* 장식용 배경 그리드 */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50 pointer-events-none" />

        {/* 피라미드 레이어 컨테이너 (역순으로 렌더링하여 위가 꼭대기가 되도록 함) */}
        <div className="flex flex-col gap-2.5 w-full max-w-lg px-6 relative z-10">
          {[...levelMeta].reverse().map((level) => {
            const isSelected = activeStep === level.index;
            const LevelIcon = level.icon;
            
            return (
              <button
                key={level.dikw}
                onClick={() => onStepChange(level.index)}
                className={`pyramid-level ${level.width} mx-auto py-4 cursor-pointer text-center text-white font-bold transition-all relative group focus:outline-none 
                  ${isSelected ? `pyramid-level-active bg-gradient-to-r ${level.gradient} scale-[1.03] z-20 shadow-lg ${level.shadow}` : 'bg-slate-300 hover:bg-slate-400/90 text-slate-100'}
                `}
              >
                {/* 선택된 계층의 테두리 하이라이트 */}
                {isSelected && (
                  <div className="absolute inset-0 border-2 border-white/60 clip-path-inherit pointer-events-none" />
                )}

                {/* 계층 내부 구조 */}
                <div className="flex items-center justify-center gap-2 px-6">
                  <LevelIcon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isSelected ? 'text-white' : 'text-slate-100'}`} />
                  <span className="text-[11px] sm:text-xs md:text-sm tracking-wide font-extrabold uppercase">
                    {level.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 단계별 상세 텍스트 패널 */}
      <div className={`p-5 rounded-2xl border transition-all duration-300 bg-white shadow-sm flex flex-col gap-4.5
        ${activeStep === 0 ? 'border-blue-200' : ''}
        ${activeStep === 1 ? 'border-emerald-200' : ''}
        ${activeStep === 2 ? 'border-purple-200' : ''}
        ${activeStep === 3 ? 'border-amber-200' : ''}
      `}>
        {/* 헤더 배지 */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 text-xs font-bold rounded-full border ${currentStepData.badgeColor}`}>
              DIKW: {meta.dikw}
            </span>
            <span className="text-slate-400 text-sm">↔</span>
            <span className={`px-3 py-1 text-xs font-bold rounded-full border ${currentStepData.badgeColor}`}>
              간호과정: {currentStepData.adpie}
            </span>
          </div>
          
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
            Step {activeStep + 1} of 4
          </span>
        </div>

        {/* 텍스트 설명 */}
        <div>
          <h3 className="font-extrabold text-slate-800 text-sm mb-1">{currentStepData.title}</h3>
          <p className="text-slate-500 text-xs leading-relaxed">{currentStepData.description}</p>
        </div>

        {/* 임상 데이터 가공 내역 */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <span className="text-xs font-bold text-slate-700 block mb-2">
            📍 {currentStepData.clinicalFocus}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {renderDetails(activeStep, currentStepData.details)}
          </div>
          
          {currentStepData.diagnosisName && (
            <div className="mt-3.5 pt-3 border-t border-slate-200/60 text-xs">
              <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 block text-center">
                👉 도출된 의학/간호 진단: {currentStepData.diagnosisName}
              </span>
            </div>
          )}
        </div>

        {/* 핵심: 연산 및 간호적 판단 개입 (Context) */}
        <div className={`p-4 rounded-xl border leading-relaxed text-xs 
          ${activeStep === 0 ? 'bg-blue-50/70 border-blue-100 text-blue-900' : ''}
          ${activeStep === 1 ? 'bg-emerald-50/70 border-emerald-100 text-emerald-950' : ''}
          ${activeStep === 2 ? 'bg-purple-50/70 border-purple-100 text-purple-900' : ''}
          ${activeStep === 3 ? 'bg-amber-50/70 border-amber-100 text-amber-950' : ''}
        `}>
          <div className="flex gap-2 items-center font-bold mb-1.5">
            <span className="inline-block p-1 bg-white rounded shadow-sm">🧠</span>
            <span>개입된 연산 및 간호적 판단 준거 (Context)</span>
          </div>
          <p className="font-medium">{currentStepData.context}</p>
        </div>

      </div>

    </div>
  );
}
