import React, { useState, useEffect } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw, ChevronRight } from 'lucide-react';

export default function QuizSection({ selectedScenario }) {
  const quizzes = selectedScenario.quizzes;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // 시나리오가 바뀌면 퀴즈를 처음부터 다시 세팅
  useEffect(() => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setIsFinished(false);
  }, [selectedScenario]);

  const handleOptionClick = (optIdx) => {
    if (showFeedback) return; // 정답 확인 후에는 선택 불가
    setSelectedOption(optIdx);
    setShowFeedback(true);
    
    if (optIdx === quizzes[currentIdx].answerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    if (currentIdx < quizzes.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="glass-panel p-6 rounded-2xl border border-blue-100 flex flex-col items-center justify-center text-center gap-5 shadow-sm min-h-[300px]">
        <div className="p-4 bg-blue-50 text-blue-600 rounded-full shadow-inner animate-bounce">
          <Award className="w-12 h-12" />
        </div>
        <div>
          <h2 className="text-xl font-extrabold text-slate-800">퀴즈 학습 완료!</h2>
          <p className="text-slate-500 text-sm mt-1">
            {selectedScenario.title}의 DIKW 매핑 원리를 완전히 익히셨습니다.
          </p>
        </div>
        <div className="bg-blue-600 text-white font-extrabold px-6 py-2.5 rounded-2xl text-lg shadow-md shadow-blue-200">
          점수: {score} / {quizzes.length}
        </div>
        
        <p className="text-xs text-slate-400">
          {score === quizzes.length 
            ? "훌륭합니다! 모든 문제의 매핑 관계를 완벽하게 이해하고 계시네요."
            : "오답 해설을 다시 읽어보고 한 번 더 도전해 보세요!"}
        </p>

        <button
          onClick={handleRestart}
          className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all shadow-sm active:scale-95 text-xs"
        >
          <RotateCcw className="w-4 h-4" />
          <span>퀴즈 다시 풀기</span>
        </button>
      </div>
    );
  }

  const currentQuiz = quizzes[currentIdx];

  return (
    <div className="glass-panel p-6 rounded-2xl border border-blue-100 flex flex-col gap-5 shadow-sm min-h-[380px]">
      
      {/* 상단 퀴즈 진행률 헤더 */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2 text-blue-600 font-bold text-lg">
          <HelpCircle className="w-5 h-5 text-blue-500" />
          <span>학습 확인 미니 퀴즈</span>
        </div>
        
        <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-100">
          문제 {currentIdx + 1} / {quizzes.length}
        </span>
      </div>

      {/* 질문 영역 */}
      <div>
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Question</p>
        <h3 className="font-bold text-slate-800 text-sm leading-relaxed mt-1">
          {currentQuiz.question}
        </h3>
      </div>

      {/* 보기 (옵션) 목록 */}
      <div className="flex flex-col gap-2.5">
        {currentQuiz.options.map((option, idx) => {
          const isCorrectAnswer = idx === currentQuiz.answerIndex;
          const isSelected = idx === selectedOption;
          
          let optionStyle = "bg-white hover:bg-slate-50 border-slate-200 text-slate-700";
          
          if (showFeedback) {
            if (isCorrectAnswer) {
              // 정답인 경우 (선택 여부 상관없이 초록색 강조)
              optionStyle = "bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold";
            } else if (isSelected) {
              // 틀린 보기를 선택한 경우 (빨간색 강조)
              optionStyle = "bg-rose-50 border-rose-300 text-rose-900 font-semibold";
            } else {
              // 선택하지 않은 오답
              optionStyle = "bg-slate-50/50 border-slate-100 text-slate-400 opacity-60";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleOptionClick(idx)}
              disabled={showFeedback}
              className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-center justify-between gap-3 font-medium cursor-pointer ${optionStyle} ${!showFeedback ? 'hover:-translate-y-[1px] active:translate-y-0 shadow-sm' : ''}`}
            >
              <span>{option}</span>
              {showFeedback && (
                <div>
                  {isCorrectAnswer ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  ) : isSelected ? (
                    <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  ) : null}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* 정답 해설 및 피드백 피드 */}
      {showFeedback && (
        <div className={`p-4 rounded-xl border leading-relaxed text-xs transition-all animate-fadeIn
          ${selectedOption === currentQuiz.answerIndex 
            ? 'bg-emerald-50/60 border-emerald-100 text-emerald-900' 
            : 'bg-rose-50/60 border-rose-100 text-rose-900'}`}
        >
          <div className="flex items-center gap-1.5 font-bold mb-1">
            <span>{selectedOption === currentQuiz.answerIndex ? '🎉 정답입니다!' : '😢 아쉬워요!'}</span>
          </div>
          <p className="font-medium text-slate-600 mt-1">
            <span className="font-bold text-slate-700 block">해설:</span>
            {currentQuiz.explanation}
          </p>
          
          <button
            onClick={handleNext}
            className="mt-3.5 w-full flex items-center justify-center gap-1 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-sm transition-all active:scale-[0.98] text-[11px]"
          >
            <span>{currentIdx === quizzes.length - 1 ? '결과 보기' : '다음 문제'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

    </div>
  );
}
