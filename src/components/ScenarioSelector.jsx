import React from 'react';
import { ClipboardList, User, Edit3, RotateCcw } from 'lucide-react';

const labelMap = {
  bodyTemperature: "체온 (BT)",
  heartRate: "심박수 (HR)",
  respiratoryRate: "호흡수 (RR)",
  bloodPressure: "혈압 (BP)",
  skinTurgor: "피부 긴장도",
  oralMucosa: "구강 점막",
  urineOutput: "소변량",
  weight: "체중",
  oxygenSaturation: "산소포화도 (SpO2)",
  painScore: "통증 점수 (NRS)",
  ecgOutput: "심전도 (ECG)",
  bloodGlucose: "간이 혈당 (BST)",
  arterialpH: "동맥혈 pH",
  urineKetone: "뇨 케톤체"
};

export default function ScenarioSelector({ 
  scenarios, 
  selectedScenario, 
  onScenarioChange, 
  rawData, 
  onRawDataChange,
  onResetRawData
}) {

  const handleInputChange = (key, value) => {
    onRawDataChange({
      ...rawData,
      [key]: value
    });
  };

  return (
    <div className="glass-panel p-6 rounded-2xl border border-blue-100 flex flex-col gap-6 shadow-sm h-full">
      {/* 타이틀 및 선택 */}
      <div>
        <div className="flex items-center gap-2 text-blue-600 font-bold text-lg mb-4">
          <User className="w-5 h-5" />
          <span>환자 시나리오 선택</span>
        </div>
        
        <label htmlFor="scenario-select" className="block text-xs font-semibold text-slate-500 mb-1">
          실습 대상 시나리오
        </label>
        <select
          id="scenario-select"
          value={selectedScenario.id}
          onChange={(e) => onScenarioChange(e.target.value)}
          className="w-full p-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner text-sm"
        >
          {scenarios.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title} ({s.gender}, {s.age})
            </option>
          ))}
        </select>
      </div>

      {/* 선택된 환자 기본 프로필 */}
      <div className="bg-blue-50/50 border border-blue-100/50 p-4 rounded-xl flex flex-col gap-2.5 text-xs text-slate-600">
        <div className="flex justify-between items-center pb-2 border-b border-blue-100/50">
          <span className="font-semibold text-slate-700 text-sm">환자 프로필</span>
          <span className="px-2 py-0.5 bg-blue-100/80 text-blue-800 rounded font-semibold text-[10px]">
            {selectedScenario.gender} / {selectedScenario.age}
          </span>
        </div>
        <div>
          <span className="font-semibold text-slate-700 block mb-0.5">주호소 (Chief Complaint)</span>
          <p className="bg-white p-2.5 rounded border border-slate-100 text-slate-600 leading-relaxed">
            "{selectedScenario.chiefComplaint}"
          </p>
        </div>
      </div>

      {/* 원시 데이터 입력/수정 폼 */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between text-blue-600 font-bold text-lg mb-3">
          <div className="flex items-center gap-2">
            <ClipboardList className="w-5 h-5" />
            <span>원시 데이터 (Raw Data)</span>
          </div>
          
          <button
            onClick={onResetRawData}
            title="초기값으로 재설정"
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-slate-500 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 rounded-lg transition-all border border-transparent hover:border-blue-100"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>초기화</span>
          </button>
        </div>
        
        <p className="text-slate-400 text-xs mb-4">
          * 장비로 측정된 환자의 날것의 임상 데이터를 직접 수정해 보세요. 오른쪽 사정(Assessment) 단계에 실시간 반영됩니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[380px] overflow-y-auto pr-1">
          {Object.keys(rawData).map((key) => (
            <div key={key} className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-slate-500 pl-0.5">
                {labelMap[key] || key}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={rawData[key]}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-8 shadow-sm"
                />
                <Edit3 className="w-3.5 h-3.5 text-slate-300 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
