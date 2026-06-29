import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ScenarioSelector from './components/ScenarioSelector';
import DIKWMapper from './components/DIKWMapper';
import QuizSection from './components/QuizSection';
import { scenarios } from './data/scenarios';

export default function App() {
  // 선택된 시나리오 상태 관리
  const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);
  
  // 현재 시뮬레이션 중인 DIKW 단계 상태 관리 (0: Data, 1: Info, 2: Knowledge, 3: Wisdom)
  const [activeStep, setActiveStep] = useState(0);

  // 원시 데이터(Raw Data) 수정 상태 관리
  const [rawData, setRawData] = useState({ ...scenarios[0].rawData });

  // 시나리오 변경 처리
  const handleScenarioChange = (id) => {
    const scenario = scenarios.find((s) => s.id === id);
    if (scenario) {
      setSelectedScenario(scenario);
      setRawData({ ...scenario.rawData });
      setActiveStep(0); // 시나리오가 바뀌면 데이터 단계로 리셋
    }
  };

  // 원시 데이터 리셋
  const handleResetRawData = () => {
    setRawData({ ...selectedScenario.rawData });
    setActiveStep(0); // 리셋 시 첫 번째 단계로 리셋
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-slate-50 to-sky-100 p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col gap-6">
        
        {/* 상단 헤더 영역 */}
        <Header />

        {/* 메인 2열 반응형 그리드 레이아웃 */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* 좌측 섹션: 환자 프로필 & 시나리오 선택 (4 cols) */}
          <div className="lg:col-span-5 xl:col-span-4 h-full">
            <ScenarioSelector
              scenarios={scenarios}
              selectedScenario={selectedScenario}
              onScenarioChange={handleScenarioChange}
              rawData={rawData}
              onRawDataChange={setRawData}
              onResetRawData={handleResetRawData}
            />
          </div>

          {/* 우측 섹션: DIKW 매퍼 & 미니 퀴즈 (8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
            
            {/* DIKW 피라미드 및 ADPIE 연계 시각화 */}
            <DIKWMapper
              selectedScenario={selectedScenario}
              activeStep={activeStep}
              onStepChange={setActiveStep}
              rawData={rawData}
            />

            {/* 퀴즈 섹션 */}
            <QuizSection 
              selectedScenario={selectedScenario} 
            />

          </div>

        </main>

        {/* 하단 푸터 */}
        <footer className="text-center text-[11px] text-slate-400 mt-8 border-t border-slate-200/50 pt-4 pb-2">
          <p>© 2026 AI융합 간호정보학 실습 도구 - DIKW-간호과정(ADPIE) 연계 시뮬레이터. All Rights Reserved.</p>
          <p className="mt-1">Designed for nursing students to bridge clinical assessment and data informatics.</p>
        </footer>

      </div>
    </div>
  );
}
