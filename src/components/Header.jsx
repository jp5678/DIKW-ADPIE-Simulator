import React from 'react';
import { Stethoscope, GraduationCap, School } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full mb-6 transition-all duration-300">
      <div className="glass-panel p-6 rounded-2xl border border-blue-100 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm">
        
        {/* 타이틀 영역 */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-md shadow-blue-200 animate-pulse-subtle">
            <Stethoscope className="w-8 h-8" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200 flex items-center gap-1.5 shadow-sm">
                <School className="w-3.5 h-3.5" />
                청암대학교 간호학과
              </span>
              <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200">
                정종필 교수 ∙ AI융합 간호정보학
              </span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight mt-2">
              DIKW - 간호과정(ADPIE) 연계 시뮬레이터
            </h1>
            <p className="text-slate-500 text-xs md:text-sm mt-0.5">
              임상 시나리오를 통해 데이터(Data)가 어떻게 간호적 지혜(Wisdom)로 승화되는지 직접 탐구해 보세요.
            </p>
          </div>
        </div>

        {/* 학습 목표 안내판 */}
        <div className="flex flex-wrap items-center gap-3 bg-white/60 p-3.5 rounded-xl border border-slate-100 max-w-lg">
          <div className="text-blue-600 bg-blue-50 p-2 rounded-lg">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="text-xs text-slate-600 flex-1">
            <span className="font-semibold text-slate-700 block">학습 안내</span>
            환자 시나리오를 선택한 후, 우측의 <strong className="text-blue-600 font-bold">DIKW 계층</strong>을 클릭하여 
            사정(A) → 진단(D) → 계획(P) → 수행/평가(I&E)가 어떻게 유기적으로 연계되는지 시뮬레이션하고 퀴즈를 풀어보세요!
          </div>
        </div>

      </div>
    </header>
  );
}
