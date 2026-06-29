export const scenarios = [
  {
    id: "peds-fever",
    title: "고열 및 탈수 증상을 보이는 소아 환자",
    age: "만 4세",
    gender: "남아",
    chiefComplaint: "발열, 처짐, 구토로 인한 수분 섭취 불가",
    rawData: {
      bodyTemperature: "39.0°C",
      heartRate: "125회/분",
      respiratoryRate: "24회/분",
      bloodPressure: "90/60 mmHg",
      skinTurgor: "감소됨 (느리게 평평해짐)",
      oralMucosa: "건조함",
      urineOutput: "최근 8시간 동안 소변 안 봄",
      weight: "15kg (이전 대비 1kg 감소)"
    },
    steps: [
      {
        dikw: "Data",
        adpie: "Assessment (사정)",
        title: "데이터 단계 ↔ 간호사정",
        badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
        description: "환자의 몸에서 직접 측정되거나 관찰된 정제되지 않은 사실과 임상 수치들입니다.",
        clinicalFocus: "객관적/주관적 자료(V/S 및 신체 검진 결과) 수집",
        details: [
          "체온(BT): 39.0°C",
          "심박수(HR): 125회/분",
          "피부 긴장도(Skin Turgor): 감소",
          "구강 점막: 건조함",
          "소변량(Urine Output): 8시간 동안 무뇨",
          "체중: 15kg (1kg 감소, 약 6%의 체중 감소)"
        ],
        context: "단독 수치 자체는 의미를 지니지 않으며, 환자의 상태를 보여주는 가장 원초적인 사실적 기초를 형성합니다."
      },
      {
        dikw: "Information",
        adpie: "Diagnosis (진단)",
        title: "정보 단계 ↔ 간호진단",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        description: "수집된 데이터를 표준 임상 기준값과 비교 분석하여 데이터 간의 관계를 파악하고 의미를 부여한 상태입니다.",
        clinicalFocus: "의미 있는 단서(Cues)의 그룹화 및 문제 규정",
        details: [
          "BT 39.0°C: 연령 기준 정상 범위(36.5~37.5°C)를 초과한 고열(Hyperthermia) 상태",
          "HR 125회/분: 고열 및 탈수로 인한 대상성 빈맥(Tachycardia)",
          "구강 건조, 피부 긴장도 감소, 소변량 감소, 체중 6% 감소: 중등도 탈수(Moderate Dehydration) 상태를 시사함"
        ],
        diagnosisName: "체액 부족 (Deficient Fluid Volume) 관련 간호 진단 도출",
        context: "정상 임상 지표(Normal Range)와의 비교 연산 및 생리적 단서들을 조합(Clustering)하여 '고열'과 '탈수'라는 의미 있는 임상 정보를 도출했습니다."
      },
      {
        dikw: "Knowledge",
        adpie: "Planning (계획)",
        title: "지식 단계 ↔ 간호계획",
        badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
        description: "도출된 임상 정보에 간호학적 가이드라인, 질병 이론, 프로토콜 등의 이론적 근거를 결합하여 해결책을 수립하는 단계입니다.",
        clinicalFocus: "근거기반 임상 실무 지침(Evidence-based Practice Guide) 적용",
        details: [
          "소아 발열 간호 지침: 아세트아미노펜(Acetaminophen) 또는 이부프로펜(Ibuprofen) 등의 해열제 투여 계획 수립.",
          "소아 탈수 치료 프로토콜: 5% 포도당 생리식염수(D5NS) 등 정맥 수액 치료 요법(20mL/kg 볼루스 투여 고려) 계획.",
          "탈수 및 섭취량/배설량(I/O) 모니터링 계획 수립."
        ],
        context: "간호 교과서 및 '소아 탈수 임상 지침'에 기초하여 고열과 탈수를 해결하기 위한 최적의 처치 경로를 논리적으로 매핑하고 구체적인 계획을 설계합니다."
      },
      {
        dikw: "Wisdom",
        adpie: "Implementation & Evaluation (수행 및 평가)",
        title: "지혜 단계 ↔ 간호수행 및 평가",
        badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
        description: "임상 지식을 기반으로 하되, 환자의 개별성, 보호자의 심리적 상태, 윤리적 고려 및 임상적 직관을 더해 수행하고 재평가하는 최상위 단계입니다.",
        clinicalFocus: "개인화된 돌봄 실천 및 즉각적인 임상 판단을 통한 결과 검증",
        details: [
          "수행: 정맥 주사 시 환아가 느끼는 극심한 공포를 줄이기 위해 애착 인형을 쥐여주고 보호자가 안아주도록 유도하면서 바늘을 유치함. 구토가 없는 시점에 환아가 좋아하는 보리차나 전해질 음료를 소량씩 자주 마시도록 격려함.",
          "평가: 수액 투입 1시간 후 V/S 재측정. BT 37.8°C로 감소, HR 105회/분으로 안정화, 구강 점막에 수분기 관찰됨. 소변 배출 여부를 지속 모니터링하기로 함."
        ],
        context: "단순히 지침을 기계적으로 따르는 것이 아니라, 환아의 정서적 특성 및 보호자의 요구사항을 포함한 전인적(Holistic) 맥락을 반영하여 돌봄을 조정하고 치료 성과를 최종적으로 입증합니다."
      }
    ],
    quizzes: [
      {
        question: "환아의 체온이 '39.0°C'이고, 최근 8시간 동안 소변을 보지 않았다는 수치를 간호기록지에 있는 그대로 받아 적는 단계는 DIKW와 간호과정의 어느 매핑에 해당할까요?",
        options: [
          "데이터 (Data) - 사정 (Assessment)",
          "정보 (Information) - 진단 (Diagnosis)",
          "지식 (Knowledge) - 계획 (Planning)",
          "지혜 (Wisdom) - 수행 및 평가 (Implementation & Evaluation)"
        ],
        answerIndex: 0,
        explanation: "가공되지 않은 순수한 측정값 자체를 수집하여 기록하는 행위는 '데이터(Data)' 단계이자 간호과정의 '사정(Assessment)' 단계입니다."
      },
      {
        question: "소아 탈수 임상 가이드라인과 교과서적 수액 요법 공식을 참고하여 '이 환아에게 5% 포도당 식염수 처방을 확인하고 수액 속도를 계산하는 과정'은 DIKW 계층의 무엇에 해당하나요?",
        options: [
          "데이터 (Data)",
          "정보 (Information)",
          "지식 (Knowledge)",
          "지혜 (Wisdom)"
        ],
        answerIndex: 2,
        explanation: "임상 가이드라인, 학술적 이론, 표준 프로토콜 등 검증된 원칙과 논리를 현재 환자 정보에 결합하는 단계는 '지식(Knowledge)' 단계입니다."
      },
      {
        question: "바늘을 무서워하는 소아의 심리적 상태와 보호자의 협조를 고려하여, 애착 인형을 활용한 정서적 지지와 함께 수액을 투여하고 1시간 후 활력징후의 변화를 추적 관찰하여 계획을 수정하는 과정은 무엇에 해당할까요?",
        options: [
          "데이터 (Data)",
          "정보 (Information)",
          "지식 (Knowledge)",
          "지혜 (Wisdom)"
        ],
        answerIndex: 3,
        explanation: "개별 환자의 맥락, 윤리적 판단, 정서적 돌봄과 임상적 직관을 융합하여 실제 중재를 개인 맞춤형으로 수행하고 그 효과를 종합적으로 재평가하는 최상위 단계는 '지혜(Wisdom)'입니다."
      }
    ]
  },
  {
    id: "adult-chest-pain",
    title: "급성 가슴 통증을 호소하는 노인 환자",
    age: "만 72세",
    gender: "여성",
    chiefComplaint: "1시간 전 시작된 쥐어짜는 듯한 흉통, 턱과 왼쪽 어깨로 방사되는 통증",
    rawData: {
      bodyTemperature: "36.6°C",
      heartRate: "110회/분",
      respiratoryRate: "26회/분",
      bloodPressure: "155/95 mmHg",
      oxygenSaturation: "91% (Room Air)",
      painScore: "NRS 8점 (10점 만점)",
      ecgOutput: "ST분절 상승 (ST-segment Elevation)"
    },
    steps: [
      {
        dikw: "Data",
        adpie: "Assessment (사정)",
        title: "데이터 단계 ↔ 간호사정",
        badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
        description: "응급실 내원 즉시 측정된 활력징후, 환자의 언어적 진술, 심전도 모니터의 파형 수치입니다.",
        clinicalFocus: "신속한 주호소 파악 및 응급 검사 수치 수집",
        details: [
          "흉통 강도: NRS 8점 (지속 시간: 1시간, 양상: 쥐어짜는 듯함)",
          "방사통: 턱, 왼쪽 어깨",
          "산소포화도(SpO2): 91%",
          "혈압: 155/95 mmHg, 심박수: 110회/분",
          "ECG 리드: II, III, aVF에서 ST분절 상승 관찰됨"
        ],
        context: "응급실 간호사가 즉각적으로 모니터링하여 기록한 수치 및 신체적 호소 정보 그 자체입니다."
      },
      {
        dikw: "Information",
        adpie: "Diagnosis (진단)",
        title: "정보 단계 ↔ 간호진단",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        description: "흉통의 양상, ST분절 상승, 저산소증 데이터를 비교 분석하여 심각한 심장 손상 상태를 식별한 상태입니다.",
        clinicalFocus: "치명적인 응급 상황(Red Flags) 판단 및 문제 정식화",
        details: [
          "SpO2 91%: 정상(95% 이상) 이하의 경미한 저산소혈증(Hypoxemia) 상태",
          "흉통 NRS 8점 + ST분절 상승: 급성 심근경색(Acute Myocardial Infarction, AMI), 특히 하벽 심근경색(Inferior Wall MI) 가능성이 매우 높음",
          "심장 펌프 기능 부하로 인한 이차성 고혈압 및 빈맥 상태"
        ],
        diagnosisName: "심근 허혈과 관련된 급성 통증 / 심박출량 감소 위험성 진단",
        context: "NRS 8점의 심한 통증과 심전도상 ST분절 상승이라는 두 데이터 간의 상관관계를 해석하여 '심장 근육의 급성 허혈 및 산소 공급 부족'이라는 결정적 임상 정보를 추출했습니다."
      },
      {
        dikw: "Knowledge",
        adpie: "Planning (계획)",
        title: "지식 단계 ↔ 간호계획",
        badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
        description: "급성 관상동맥 증후군(ACS) 가이드라인에 근거하여 골든타임(내원 90분 이내 재관류)을 지키기 위한 응급 중재 및 검사 협업 계획을 세우는 단계입니다.",
        clinicalFocus: "ACS 응급 프로토콜(MONA 요법 등) 및 재관류 치료 대기 계획",
        details: [
          "산소 공급 지침: SpO2 94% 이상 유지를 위해 비강 캐뉼라로 산소 2L/min 투여 계획.",
          "약물 투여 계획: 심근 산소 요구량을 줄이기 위한 니트로글리세린(NTG) 설하 투여, 아스피린 씹어서 복용 유도, 필요시 모르핀 투여 처방 확인.",
          "응급 심혈관 중재술(PCI) 준비 프로토콜 작동: 동의서 확인, 혈액검사(Cardiac Marker - Troponin) 긴급 의뢰, NPO 상태 확인."
        ],
        context: "대한심장학회 및 AHA의 '급성 관상동맥 증후군 치료 가이드라인'을 소환하여 골든타임을 확보하기 위한 일련의 표준 행위 흐름을 구성합니다."
      },
      {
        dikw: "Wisdom",
        adpie: "Implementation & Evaluation (수행 및 평가)",
        title: "지혜 단계 ↔ 간호수행 및 평가",
        badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
        description: "죽음의 공포를 느끼는 노인 환자의 불안을 다독이며 신속하고 침착하게 응급 중재를 수행하고, 투약 후의 부작용이나 통증 경감 여부를 복합적으로 판단 및 재검증하는 단계입니다.",
        clinicalFocus: "위기 관리, 정서적 지지 및 응급 상황 재평가",
        details: [
          "수행: '많이 무서우시겠지만 의료진이 최선을 다해 치료 중이니 걱정 마세요'라고 안심시키며 침상 안정을 유지함. NTG 투여 즉시 혈압을 재측정하여 저혈압 쇼크 방지를 위한 수축기 혈압 90 mmHg 이상 유지 여부를 감시함. PCI실 이송 전 환자의 소지품과 의치 등을 보호자에게 인계하며 수술 과정을 명료하게 재설명함.",
          "평가: NTG 및 산소 투여 15분 후, 환자의 NRS 통증 점수가 8점에서 3점으로 감소함. 혈압 125/80 mmHg로 안정 유지. PCI 준비 완료 후 30분 이내 시술실로 안전하게 이송함."
        ],
        context: "단순히 기계적으로 산소와 약물만 투여하는 것이 아니라, 급사의 불안을 통제하고 저혈압 유발 등 약물의 위험 요소를 동시 모니터링하며 이송까지의 전 과정을 총체적이고 현명하게 조율합니다."
      }
    ],
    quizzes: [
      {
        question: "환자의 심전도 모니터에 'ST분절 상승(ST-segment Elevation)' 파형이 나타나고 산소포화도가 91%로 기록된 현상은 DIKW 중 어느 단계인가요?",
        options: [
          "데이터 (Data)",
          "정보 (Information)",
          "지식 (Knowledge)",
          "지혜 (Wisdom)"
        ],
        answerIndex: 0,
        explanation: "심전도 모니터 및 펄스 옥시미터가 출력해 주는 원시적 측정 파형과 숫자는 가공되지 않은 상태이므로 '데이터(Data)'에 해당합니다."
      },
      {
        question: "가슴 통증(NRS 8점)과 심전도의 ST분절 상승 수치를 결합하여 '심근의 급성 허혈 상태(급성 심근경색 의심)'로 문제를 규정하는 간호과정의 단계는 무엇인가요?",
        options: [
          "사정 (Assessment)",
          "진단 (Diagnosis)",
          "계획 (Planning)",
          "수행 및 평가 (Implementation & Evaluation)"
        ],
        answerIndex: 1,
        explanation: "수집된 임상 지표들의 패턴과 맥락을 파악하고 비정상성을 확인하여 환자의 간호 문제를 결정하는 것은 '진단(Diagnosis)' 단계이자 '정보(Information)' 획득 과정입니다."
      },
      {
        question: "니트로글리세린(NTG) 투여 후 부작용인 급격한 저혈압이 올 수 있음을 인지하고, 약물 투여 직후 즉각 혈압을 모니터링하면서 동시에 죽음의 공포를 느끼는 노인 환자의 손을 잡아주며 안심시키는 간호사의 행위는 DIKW 모델의 어느 차원입니까?",
        options: [
          "데이터 (Data)",
          "정보 (Information)",
          "지식 (Knowledge)",
          "지혜 (Wisdom)"
        ],
        answerIndex: 3,
        explanation: "표준적 약물 투여 요법(지식)에 머무르지 않고, 저혈압 쇼크 대비 모니터링(임상적 판단)과 환자의 정서적 지지(윤리적 돌봄)를 통합하여 실천하고 재평가하는 것은 임상적 '지혜(Wisdom)'의 발현입니다."
      }
    ]
  },
  {
    id: "diabetic-coma",
    title: "당뇨 합병증(고혈당증) 환자",
    age: "만 45세",
    gender: "남성",
    chiefComplaint: "심한 갈증(다뇨/다음), 무기력증 및 호흡 시 과일 향 냄새(아세톤 향)",
    rawData: {
      bodyTemperature: "37.2°C",
      heartRate: "105회/분",
      respiratoryRate: "28회/분 (깊고 빠른 호흡)",
      bloodPressure: "110/70 mmHg",
      bloodGlucose: "450 mg/dL",
      arterialpH: "7.15",
      urineKetone: "Positive (3+)"
    },
    steps: [
      {
        dikw: "Data",
        adpie: "Assessment (사정)",
        title: "데이터 단계 ↔ 간호사정",
        badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
        description: "간이 혈당측정기 및 동맥혈 가스분석(ABGA), 소변 간이 검사 등을 통해 얻은 날것 그대로의 수치들입니다.",
        clinicalFocus: "생화학적 혈액 및 소변 검사 수치, 독특한 호흡 양상 사정",
        details: [
          "식후 혈당(BST): 450 mg/dL",
          "동맥혈 pH: 7.15",
          "뇨중 케톤체: 3+ (양성)",
          "호흡수: 28회/분 (매우 깊고 빠름 - Kussmaul 호흡)",
          "숨결: 달콤한 과일 향(아세톤 냄새) 발생"
        ],
        context: "개별 수치는 측정 장비로부터 출력된 숫자에 불과하며, 아직 이들이 결합되어 환자의 구체적인 대사 장애를 진단하기 전의 원시 자료들입니다."
      },
      {
        dikw: "Information",
        adpie: "Diagnosis (진단)",
        title: "정보 단계 ↔ 간호진단",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        description: "초고혈당, 산성 pH, 뇨케톤 양성, 그리고 Kussmaul 호흡 수치를 연계하여 중증 대사 이상 상태임을 알아차리는 단계입니다.",
        clinicalFocus: "대사적 이상 상태의 인지 및 병태생리학적 단서 매핑",
        details: [
          "혈당 450 mg/dL + pH 7.15 + Ketone 3+: 환자는 단순 고혈당을 넘어 체내에 케톤산이 축적된 당뇨병성 케토산증(Diabetic Ketoacidosis, DKA) 상태임.",
          "pH 7.15: 정상(7.35~7.45) 대비 매우 낮은 심각한 대사성 산증(Metabolic Acidosis).",
          "Kussmaul 호흡 및 아세톤 향: 산증을 보상하기 위해 이산화탄소를 다량 배출하려는 호흡계의 대상작용 및 케톤산 배출 작용."
        ],
        diagnosisName: "인슐린 부족 및 대사 장애와 관련된 전해질 불균형 위험성 / 가스교환 장애",
        context: "개별 데이터 요소를 '대사성 산성 혈증'과 '당뇨 합병증'이라는 맥락으로 묶어, 생명을 위협할 수 있는 'DKA 응급 상태'라는 정보로 가공했습니다."
      },
      {
        dikw: "Knowledge",
        adpie: "Planning (계획)",
        title: "지식 단계 ↔ 간호계획",
        badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
        description: "당뇨병성 케토산증(DKA) 관리 표준 가이드라인에 의거하여, 다량의 수액 요법과 인슐린 지속 주입을 설계하는 계획 단계입니다.",
        clinicalFocus: "DKA 수액 및 인슐린 치료 표준 알고리즘 적용",
        details: [
          "탈수 교정 계획: 초기 1~2시간 동안 생리식염수(0.9% NaCl) 1~1.5L 수액 공급 프로토콜.",
          "인슐린 요법 수립: 속효성 인슐린(Regular Insulin)을 0.1 unit/kg/hr 속도로 정맥 내 지속 주입(IV infusion) 계획.",
          "전해질 모니터링: 혈청 칼륨(Potassium) 수치 변화 확인 후 인슐린 투여 시 칼륨 저하 대처 계획 수립.",
          "혈당이 250 mg/dL 근처로 떨어질 때 수액을 5% 포도당 혼합액(D5W + 0.45% NS)으로 전환할 기준 계획."
        ],
        context: "대한당뇨병학회 및 ADA의 DKA 치료 가이드라인 지식을 기반으로, 전해질 쇼크나 급격한 혈당 하강에 따른 뇌부종을 막기 위한 안전 투약 프로토콜을 수립합니다."
      },
      {
        dikw: "Wisdom",
        adpie: "Implementation & Evaluation (수행 및 평가)",
        title: "지혜 단계 ↔ 간호수행 및 평가",
        badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
        description: "인슐린 주입에 따른 전해질 급변 위험을 정밀하게 감시하고, 회복기 환자에게 재발 방지를 위한 개별화된 자가 간호(인슐린 보관법, 자가혈당 관리) 교육 및 최종 평가를 내리는 단계입니다.",
        clinicalFocus: "정밀 약물 관리, 자가 관리 역량 강화 및 대사 지표 최종 평가",
        details: [
          "수행: 정밀 수액 펌프를 가동하여 정량 인슐린을 주입함. 환자의 요흔성 부종이나 호흡 곤란 징후가 없는지 수시 확인. 혈당이 저하되기 시작하자 환자가 과거 인슐린 주사를 임의 중단했던 원인(바쁜 직장 생활, 자가 주사의 수치심)을 심층 상담하고 환자의 라이프스타일에 맞춘 복약 달력을 함께 제작함.",
          "평가: 인슐린 주입 4시간 후 혈당 240 mg/dL로 강하, 동맥혈 pH 7.32로 교정 추세 진입, 요케톤 음성화(Negative). 환자는 퇴원 후 자가 인슐린 투여 일정을 준수하겠다고 다짐함."
        ],
        context: "기계적인 인슐린 투여에 그치지 않고, DKA 발생의 근본 원인이었던 '임의 투약 중단'이라는 환자의 인적 맥락을 파악하여 이를 개선할 교육 중재를 결합하고 임상 수치의 안전한 정상화를 최종 입증합니다."
      }
    ],
    quizzes: [
      {
        question: "당뇨 환자가 깊고 빠른 Kussmaul 호흡을 보이고 간이혈당계가 '450 mg/dL'를 표시한 것은 DIKW 체계의 무엇인가요?",
        options: [
          "데이터 (Data)",
          "정보 (Information)",
          "지식 (Knowledge)",
          "지혜 (Wisdom)"
        ],
        answerIndex: 0,
        explanation: "환자 몸에서 실시간으로 사정한 맥락 없는 단순 지표값이나 호흡수는 '데이터(Data)' 단계에 해당합니다."
      },
      {
        question: "혈당 수치, 요케톤 양성, 산성 pH 결과를 바탕으로 환자가 '당뇨병성 케토산증(DKA)'이라는 심각한 대사 위기에 직면해 있음을 명확히 파악하는 것은 DIKW 모델에서 무엇입니까?",
        options: [
          "데이터 (Data)",
          "정보 (Information)",
          "지식 (Knowledge)",
          "지혜 (Wisdom)"
        ],
        answerIndex: 1,
        explanation: "데이터들의 상관관계를 파악하여 현재 상태에 'DKA'라는 구체적인 임상적 판단(의미)을 부여하는 것은 '정보(Information)' 획득이자 간호과정의 '진단(Diagnosis)' 단계입니다."
      },
      {
        question: "DKA 표준 지침에 따라 수액과 정맥 인슐린을 투여할 계획을 세우되, 환자가 평소 바쁜 스케줄 때문에 주사 시간을 놓친다는 고충을 듣고 그에 맞는 맞춤형 복약 달력을 설계하여 자가 간호 역량을 높이도록 중재하고 최종 대사 수치를 안전하게 평가하는 활동은 무엇에 해당합니까?",
        options: [
          "데이터 (Data)",
          "정보 (Information)",
          "지식 (Knowledge)",
          "지혜 (Wisdom)"
        ],
        answerIndex: 3,
        explanation: "가이드라인 지식(Knowledge)을 환자의 개별 삶의 맥락과 윤리적 요구에 통합하여 현명하게 실행(수행)하고 다차원적으로 검증(평가)하는 단계는 '지혜(Wisdom)'입니다."
      }
    ]
  },
  {
    id: "copd-exacerbation",
    title: "만성 폐쇄성 폐질환(COPD) 급성 악화 환자",
    age: "만 68세",
    gender: "남성",
    chiefComplaint: "점점 심해지는 호흡 곤란 및 화농성 누런 가래 배출 증가",
    rawData: {
      bodyTemperature: "37.8°C",
      heartRate: "102회/분",
      respiratoryRate: "26회/분 (보조호흡근 사용)",
      bloodPressure: "140/85 mmHg",
      oxygenSaturation: "87% (Room Air)",
      skinTurgor: "정상",
      oralMucosa: "약간 건조함",
      urineOutput: "정상"
    },
    steps: [
      {
        dikw: "Data",
        adpie: "Assessment (사정)",
        title: "데이터 단계 ↔ 간호사정",
        badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
        description: "호흡 상태 관찰 및 생체징후 측정을 통해 수집된 날것의 호흡 임상 데이터입니다.",
        clinicalFocus: "호흡 패턴 및 산소화 관련 핵심 객관적 지표 수집",
        details: [
          "산소포화도(SpO2): 87% (대기 상태)",
          "호흡수: 26회/분 (호흡 곤란으로 보조호흡근 및 코날개짓 관찰)",
          "청진 소견: 양측 폐 하엽에서 거친 천명음(Wheezing) 청진",
          "객담 양상: 점도가 높고 노란색을 띠는 화농성 가래 배출"
        ],
        context: "SpO2 수치와 호흡수, 폐 청진 소견 등은 호흡 보조 장치 및 임상 사정을 통해 획득된 단편적 팩트입니다."
      },
      {
        dikw: "Information",
        adpie: "Diagnosis (진단)",
        title: "정보 단계 ↔ 간호진단",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        description: "낮은 산소포화도와 빠른 호흡수, 폐포 폐쇄 신호를 종합 분석하여 산소 유입 및 가스교환에 장애가 있음을 판정한 상태입니다.",
        clinicalFocus: "기위증 유발 단서 결합 및 산소화 위기 감지",
        details: [
          "SpO2 87%: 중증도의 저산소혈증(Hypoxemia)에 해당하며 즉각적인 보조 산소 공급이 요구됨.",
          "Wheezing + 화농성 가래: 기관지 협착 및 기도 내 점액 축적으로 인해 기도가 부분적으로 폐쇄되어 가스교환 면적이 급감함.",
          "COPD 병력을 고려할 때, 과도한 이산화탄소 저류(CO2 Retention)의 위험 가능성 상존."
        ],
        diagnosisName: "기도 점막 부종 및 점액 분비물 축적과 관련된 가스교환 장애 / 비효과적 기도 청결",
        context: "대기 산소포화도가 90% 미만으로 강하하고 기도 내 천명음이 동반된 상태를 결합 분석하여 '가스교환 장애'라는 병태생리학적 의미를 창출했습니다."
      },
      {
        dikw: "Knowledge",
        adpie: "Planning (계획)",
        title: "지식 단계 ↔ 간호계획",
        badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
        description: "COPD 가이드라인(GOLD Guideline)을 소환하여 저농도 산소 투여 및 약물 투여, 자세 변화 일정을 계획하는 단계입니다.",
        clinicalFocus: "COPD 환자 맞춤형 저농도 산소화 및 흡입제 처방 계획",
        details: [
          "저농도 산소 요법: CO2 뇌증(Carbon Dioxide Narcosis) 방지를 위해 비강 캐뉼라로 산소를 1~2L/min로 제한 투여하며 target SpO2를 88~92%로 설정.",
          "기관지 확장 약물 요법: 속효성 베타2 항진제(Salbutamol - Ventolin) 흡입 요법 배치.",
          "호흡 보조 체위 계획: 횡격막 하강을 돕고 폐 팽창을 극대화하기 위해 고파울러씨 체위(High-Fowler's position, 상체 60-90도 올림) 수립."
        ],
        context: "COPD 환자에게 고농도 산소를 급격히 주면 연수의 호흡 중추가 마비될 수 있다는 병태생리 지식과 표준 치료 알고리즘을 치료 계획에 통합합니다."
      },
      {
        dikw: "Wisdom",
        adpie: "Implementation & Evaluation (수행 및 평가)",
        title: "지혜 단계 ↔ 간호수행 및 평가",
        badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
        description: "극도의 질식 공포를 겪고 있는 고령 환자를 진정시키며 자가 호흡법을 지도하고, 정밀하게 산소 유입 속도를 감시하여 재평가하는 종합 단계입니다.",
        clinicalFocus: "공포 심리 조절, 입술오므리기 호흡 지도 및 저농도 산소 안정성 평가",
        details: [
          "수행: '숨쉬기 힘드셨죠, 지금 저를 보시고 입술을 오므려 천천히 후- 하고 내쉬어보세요'라며 입술오므리기 호흡(Pursed-lip breathing)을 시범 보여 환자가 따라 하도록 심리적으로 지지함. 의사의 고농도 산소 처방 오더 가능성을 사전에 스크리닝하여 저농도 비강 주입으로 유도하고 산소 유량계의 유입량을 실시간 감시함.",
          "평가: 산소 공급 및 호흡법 수행 30분 후, 환자의 SpO2가 90%로 안전하게 타겟 범위에 안착함. 호흡수 19회/분으로 이완되었고 비정상적 보조호흡근 사용이 소실됨."
        ],
        context: "CO2 Narcosis를 막기 위해 기계적인 과산소 투여를 통제하면서, 호흡 곤란으로 인한 급박한 공포 상태인 노인의 정서까지 포함하여 전인적 중재를 펼치고 생화학적 수치 안정화를 유도합니다."
      }
    ],
    quizzes: [
      {
        question: "COPD 환자의 동맥혈 산소포화도가 87%로 기계에 찍히고, 청진 시 천명음(Wheezing) 소리가 들리는 현상을 있는 그대로 관찰하고 기록하는 단계는?",
        options: [
          "데이터 (Data) - 사정 (Assessment)",
          "정보 (Information) - 진단 (Diagnosis)",
          "지식 (Knowledge) - 계획 (Planning)",
          "지혜 (Wisdom) - 수행 및 평가 (Implementation & Evaluation)"
        ],
        answerIndex: 0,
        explanation: "계산이나 해석이 배제된 채, 청진 음상 및 기계 화면상의 맥락 없는 순수 사실 값을 수집하는 것은 '데이터(Data)'이자 '사정(Assessment)' 단계입니다."
      },
      {
        question: "만성 폐 질환자가 고농도의 산소를 마실 경우 자가 호흡 자극이 줄어들어 혼수에 빠질 수 있다는 생리학적 원리를 근거로 '비강 캐뉼라 1.5L/min 저농도 산소 투여 계획을 세우는 것'은 DIKW 중 어느 단계인가요?",
        options: [
          "데이터 (Data)",
          "정보 (Information)",
          "지식 (Knowledge)",
          "지혜 (Wisdom)"
        ],
        answerIndex: 2,
        explanation: "임상 생리학적 지식과 임상 진료 지침(GOLD 가이드라인)이라는 규칙 체계를 개입시켜 간호 처치를 도출하고 설계하는 것은 '지식(Knowledge)' 단계입니다."
      },
      {
        question: "질식할 것 같은 공포로 패닉에 빠진 노인 환자에게 손을 잡고 눈을 맞추며 '입술오므리기 호흡'을 지도하여 안심시키고, 환자가 편안해하는 각도로 침대를 조절하며 SpO2 변화를 확인하는 행위는 무엇인가요?",
        options: [
          "데이터 (Data)",
          "정보 (Information)",
          "지식 (Knowledge)",
          "지혜 (Wisdom)"
        ],
        answerIndex: 3,
        explanation: "기계적인 치료 알고리즘에 고령 환자의 불안 심리와 안전한 물리적 환경 조율(임상적 판단과 돌봄)을 결합하여 실천하고 재평가하는 최상위 단계는 '지혜(Wisdom)'입니다."
      }
    ]
  },
  {
    id: "postop-pain-infection",
    title: "수술 후 통증 및 감염 위험 환자",
    age: "만 32세",
    gender: "여성",
    chiefComplaint: "복강경 충수절제술 후 8시간 경과, 수술 부위의 날카로운 통증 및 오한",
    rawData: {
      bodyTemperature: "38.3°C",
      heartRate: "98회/분",
      respiratoryRate: "20회/분",
      bloodPressure: "135/85 mmHg",
      painScore: "NRS 7점 (10점 만점)",
      skinTurgor: "정상",
      oralMucosa: "정상",
      urineOutput: "150ml (지난 4시간)"
    },
    steps: [
      {
        dikw: "Data",
        adpie: "Assessment (사정)",
        title: "데이터 단계 ↔ 간호사정",
        badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
        description: "수술 후 병동에 입실한 환자에게서 사정한 활력징후 및 수술 부위 통증 척도 데이터입니다.",
        clinicalFocus: "수술 부위 물리적 사정 및 통증 호소 지표 수집",
        details: [
          "통증 척도: NRS 7점 (수술 부위가 바늘로 찌르듯 쑤시고 욱신거림)",
          "체온(BT): 38.3°C, 심박수(HR): 98회/분",
          "수술 부위(복부 절개창): 드레싱 외관상 출혈은 없으나 주변부가 붉게 발적되어 있고 부종이 촉진됨"
        ],
        context: "수술 직후 주기적으로 측정하여 전자의무기록(EMR)에 입력한 단순 수치와 육안 사정 소견 그 자체입니다."
      },
      {
        dikw: "Information",
        adpie: "Diagnosis (진단)",
        title: "정보 단계 ↔ 간호진단",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        description: "수술 부위 발적, 체온 상승, 높은 통증 지수를 연계하여 급성 통증 및 수술 부위 감염 가능성을 감지한 상태입니다.",
        clinicalFocus: "비정상 임상 징후 조합 및 수술 합병증 위험 판별",
        details: [
          "NRS 7점: 수술 후 통증 조절이 제대로 이루어지지 않고 있는 중등도 이상의 급성 통증 상태.",
          "BT 38.3°C + 수술 부위 발적 및 부종: 수술 후 정상적으로 나타날 수 있는 흡수열 범위를 넘어서는 국소적/전신적 감염(SSI: Surgical Site Infection) 징후 가능성이 매우 높음."
        ],
        diagnosisName: "외과적 수술 절개 부위와 관련된 급성 통증 / 감염 위험성",
        context: "수술 후 경과 시간 대비 높은 체온과 국소 부위 발적이라는 생리적 단서들을 병합 분석하여 '감염 시작 의심 및 통증 미조절' 정보를 식별했습니다."
      },
      {
        dikw: "Knowledge",
        adpie: "Planning (계획)",
        title: "지식 단계 ↔ 간호계획",
        badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
        description: "수술 후 통증 간호 프로토콜 및 수술 부위 무균 무균적 드레싱 프로토콜 지식을 결합하여 해결책을 구성하는 단계입니다.",
        clinicalFocus: "무균적 드레싱 교환 및 처방 진통제/항생제 스케줄링",
        details: [
          "통증 중재 계획: 처방된 자가통증조절장치(PCA) 사용법 재교육 및 추가적인 정맥 내 진통제(Tramadol 등) 투여 스케줄링.",
          "감염 예방 계획: 처방된 예방적 항생제 정맥 투여 확인 및 수술 부위 드레싱 교환 시 무균술(Aseptic technique) 준수 계획 수립.",
          "폐 합병증 예방: 통증으로 심호흡을 못해 올 수 있는 무기폐 방지를 위해 기침 및 심호흡 격려 일정 계획."
        ],
        context: "수술 부위의 미생물 유입 방지 원칙과 수술 후 폐 감염 합병증 예방 가이드라인을 기반으로 맞춤형 중재 우선순위를 결정합니다."
      },
      {
        dikw: "Wisdom",
        adpie: "Implementation & Evaluation (수행 및 평가)",
        title: "지혜 단계 ↔ 간호수행 및 평가",
        badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
        description: "환자가 기침 시 통증으로 겪는 어려움을 파악하여 물리적 지지를 제공하고, 처방 약물의 효과와 무균 드레싱을 현명하게 수행 및 최종 평가하는 단계입니다.",
        clinicalFocus: "인체 공학적 통증 완화 기법 적용, 철저한 무균 실행 및 통증/발열 지표 최종 평가",
        details: [
          "수행: 복부 수술 환자가 통증으로 기침을 거부하자, 베개로 복부를 단단히 지지해 복압 상승을 상쇄시키는 지지 기침법(Splinting)을 적용하여 안전하게 기침하도록 도움. PCA 버튼의 오작용 여부와 주입 라인을 이중 점검함. 보호자에게 수술 부위를 손으로 만지지 말 것과 상처 오염 예방 위생 수칙을 정서적으로 교육함.",
          "평가: 진통제 및 수액 투여 1시간 후, 환자의 NRS 점수 7점에서 2점으로 확연히 경감됨. 4시간 후 체온 37.4°C로 안정화됨. 수술 부위의 삼출물 누출 없음."
        ],
        context: "기계적인 약물 주입에 머무르지 않고, 복부 절개부 압력을 제어하는 물리적 돌봄(베개 지지)과 감염 통제를 위한 철저한 환경적 관리 및 최종 치료 지표 호전을 검증하는 고도화된 간호적 의사결정입니다."
      }
    ],
    quizzes: [
      {
        question: "복강경 수술을 받은 환자가 복부 상처 부위의 심한 통증을 NRS 7점이라고 진술하고 체온이 38.3°C로 측정된 것은 DIKW 중 무엇인가요?",
        options: [
          "데이터 (Data)",
          "정보 (Information)",
          "지식 (Knowledge)",
          "지혜 (Wisdom)"
        ],
        answerIndex: 0,
        explanation: "측정 도구(체온계, NRS 척도)를 통해 획득한 있는 그대로의 주관적/객관적 원시 값들은 '데이터(Data)' 단계에 해당합니다."
      },
      {
        question: "수술 후 환자가 통증 때문에 깊은 숨을 쉬기 힘들어하여 폐포가 찌부러지는 '무기폐' 합병증이 생길 수 있다는 원리를 적용하여, 심호흡 시 베개로 수술 부위를 지지해 주도록 처치를 설계하는 단계는 간호과정의 무엇입니까?",
        options: [
          "사정 (Assessment)",
          "진단 (Diagnosis)",
          "계획 (Planning)",
          "수행 및 평가 (Implementation & Evaluation)"
        ],
        answerIndex: 2,
        explanation: "질병 예방 생리학적 원리와 표준 간호 가이드라인(무기폐 예방 지침)을 기반으로 간호 계획을 수립하고 설계하는 것은 '계획(Planning)' 단계이자 '지식(Knowledge)' 단계의 속성입니다."
      },
      {
        question: "드레싱 교환 시 눈에 보이지 않는 공기 중 감염원 차단을 위해 무균 대기를 철저히 구성하고, 보호자가 상처를 만져 오염시키지 않도록 친근하고 명확히 눈높이 위생 교육을 실시한 것은 DIKW 모델에서 무엇에 해당하나요?",
        options: [
          "데이터 (Data)",
          "정보 (Information)",
          "지식 (Knowledge)",
          "지혜 (Wisdom)"
        ],
        answerIndex: 3,
        explanation: "무균술 지식과 환자/보호자의 심리 및 환경적 변수(눈높이 소통, 감염 차단 본능)를 융합하여 실제 임상 현장에서 수행하고 평가하는 것은 '지혜(Wisdom)'의 발현입니다."
      }
    ]
  },
  {
    id: "geriatric-dementia-fall",
    title: "알츠하이머 치매 환자의 낙상 위험",
    age: "만 81세",
    gender: "여성",
    chiefComplaint: "야간 치매 배회 증상 및 침대 위에서 갑자기 내려오려는 행동 반복",
    rawData: {
      bodyTemperature: "36.5°C",
      heartRate: "80회/분",
      respiratoryRate: "18회/분",
      bloodPressure: "120/75 mmHg",
      skinTurgor: "정상",
      oralMucosa: "정상",
      urineOutput: "정상 (기저귀 착용 중)"
    },
    extraData: {
      morseFallScale: "75점 (45점 이상 고위험군)",
      mmseKScore: "12점 (중증 인지 장애)",
      gaitStyle: "보행 시 좌우 비틀거림 및 균형 소실"
    },
    steps: [
      {
        dikw: "Data",
        adpie: "Assessment (사정)",
        title: "데이터 단계 ↔ 간호사정",
        badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
        description: "인지기능 및 운동기능 사정 도구들을 활용하여 수집한 요양 병동 치매 환자의 데이터입니다.",
        clinicalFocus: "낙상 위험 평가 척도 및 신경학적 간이 인지 점수 수집",
        details: [
          "낙상 위험도 점수(Morse Fall Scale): 75점",
          "간이 정신상태 검사(MMSE-K): 12점",
          "보행 양상: 부축 없이 일어설 때 비틀거리며 중심을 잡지 못함",
          "행동 특성: 자신이 병원인지 인식하지 못하고 밤마다 '집에 가야 한다'며 침대 난간을 넘어 밖으로 배회함"
        ],
        context: "검사 도구와 신체적 관찰을 통해 측정된 고유 점수 및 행동 패턴을 기록하는 날것의 입력 단계입니다."
      },
      {
        dikw: "Information",
        adpie: "Diagnosis (진단)",
        title: "정보 단계 ↔ 간호진단",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        description: "높은 낙상 점수, 중증 인지 저하, 보행 비틀거림 단서들을 종합 연계하여 심각한 신체 손상 위험 상태임을 판정한 단계입니다.",
        clinicalFocus: "인지 부족과 행동 조절 장애가 신체 안전에 미치는 관계성 식별",
        details: [
          "Morse 75점: 기준값인 45점을 훨씬 초과하는 '낙상 고위험군' 상태.",
          "MMSE-K 12점: 시간과 장소 구별(지남력)이 상실되어 침대 위가 높은 낙상 위험 지역임을 전혀 인지하지 못하는 상태.",
          "야간 배회 및 균형 장애: 약화된 근력과 섬망 증세가 겹쳐 야간 골절 사고 확률이 매우 높음."
        ],
        diagnosisName: "인지 저하 및 근력 약화와 관련된 낙상의 위험",
        context: "개별 평가 척도 점수들의 위험 임계값 초과 사실을 연동하여, 언제든지 뼈 부러짐이나 머리 부상이 야기될 수 있는 '낙상 위험성' 진단을 식별했습니다."
      },
      {
        dikw: "Knowledge",
        adpie: "Planning (계획)",
        title: "지식 단계 ↔ 간호계획",
        badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
        description: "의료기관 낙상 예방 표준 가이드라인 및 노인 치매 환자 신체 억제대 사용 지침을 바탕으로 예방 계획을 수립하는 단계입니다.",
        clinicalFocus: "물리적 안전 환경 구성 및 비약물적 섬망 중재 수립",
        details: [
          "물리적 안전망 계획: 침대 바퀴 완전 잠금 확인, 침대 높이를 바닥까지 최저로 낮추기, 낙상 경보 센서 매트 설치.",
          "시각 정보 전달: 병실문과 침대에 낙상 위험 고위험군 주의 표지판 부착.",
          "신체 억제 최소화 원칙: 환자를 묶어두는 억제대 사용 시 오히려 흥분도가 증가하므로, 보호자 상주를 권장하고 야간 은은한 미등을 켜두어 불안을 최소화하는 계획 수립."
        ],
        context: "안전 지침과 의료기관 평가 인증원의 낙상 표준 예방 가이드라인에 근거하여 낙상 발생 빈도를 원천 봉쇄할 수 있는 환경 및 케어 계획을 구축합니다."
      },
      {
        dikw: "Wisdom",
        adpie: "Implementation & Evaluation (수행 및 평가)",
        title: "지혜 단계 ↔ 간호수행 및 평가",
        badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
        description: "강제로 신체를 구속하기보다는 환자의 불안의 원인에 공감하여 대처하고, 침대 높이를 조절하는 물리적 창의성을 더해 수행하며 성과를 입증하는 최종 단계입니다.",
        clinicalFocus: "억제대 없는 윤리적 케어 실천, 심리적 지남력 제공 및 야간 무사고 상태 평가",
        details: [
          "수행: 야간에 '엄마한테 가야 한다'며 흥분해 내려오려 하자, 억제대로 묶지 않고 침대 높이를 바닥까지 밀착하여 낮추고 매트리스를 병풍처럼 바닥에 깔아 떨어져도 다치지 않게 조치함. 환자에게 '할머니, 지금은 깜깜한 밤이라 차가 안 다녀요. 날이 밝으면 모셔다드릴 테니 여기서 같이 주무셔요'라고 시공간적 안도감을 반복 제공함.",
          "평가: 야간에 센서 매트의 미세 경보 알림을 인지하여 2회 즉각 개입함. 환자는 억제 구속 없이 정서적으로 안정되어 안전하게 수면을 취함. 입원 기간 중 낙상 무사고(0건) 유지."
        ],
        context: "침대 난간을 무작위로 올리면 환자가 그걸 타고 넘어가 오히려 더 큰 낙상을 초래한다는 임상적 지혜에 따라 침대 높이를 지면 밀착형으로 낮추고, 억제대를 지양하는 윤리적 대인 관계 처치를 통해 골절 사고 예방 목적을 달성합니다."
      }
    ],
    quizzes: [
      {
        question: "치매 노인의 MMSE-K 인지 점수가 12점이고, 낙상 평가 도구(Morse Fall Scale) 점수가 75점인 단순 결과값을 수집하는 단계는 무엇인가요?",
        options: [
          "데이터 (Data) - 사정 (Assessment)",
          "정보 (Information) - 진단 (Diagnosis)",
          "지식 (Knowledge) - 계획 (Planning)",
          "지혜 (Wisdom) - 수행 및 평가 (Implementation & Evaluation)"
        ],
        answerIndex: 0,
        explanation: "사정 도구를 사용하여 도출된 수치 자체를 있는 그대로 수집하고 서면 기록하는 것은 '데이터(Data)' 및 '사정(Assessment)' 단계입니다."
      },
      {
        question: "낙상 고위험 점수와 밤에 침대 난간을 넘어 밖으로 배회하려는 특징을 묶어 '환자의 안전을 위협하는 낙상 위험 상태'로 문제를 정의하는 것은 무엇인가요?",
        options: [
          "데이터 (Data)",
          "정보 (Information)",
          "지식 (Knowledge)",
          "지혜 (Wisdom)"
        ],
        answerIndex: 1,
        explanation: "수집된 단서들의 내적 관계를 비교 검토하여 '환자가 안전사고 확률이 높은 상태'임을 인식하여 이름표(간호진단)를 붙이는 과정은 '정보(Information)' 단계이자 '진단(Diagnosis)' 단계입니다."
      },
      {
        question: "치매 노인의 낙상을 막기 위해 환자를 억박지르거나 억제대로 묶어두는 대신, 침대를 바닥과 완전히 밀착되도록 내리고 안전한 조도를 유지하며 따뜻한 대화로 환자의 야간 배회 심리를 완화시켜 다치지 않게 돌본 간호사의 행위는 DIKW 모델의 무엇인가요?",
        options: [
          "데이터 (Data)",
          "정보 (Information)",
          "지식 (Knowledge)",
          "지혜 (Wisdom)"
        ],
        answerIndex: 3,
        explanation: "규격화된 규칙(지식)에 치매 환자의 독특한 정서적 취약성, 구속 금지의 간호 윤리적 자각, 침대 높이 조절이라는 실용적 조율(수수 및 평가)을 융합해낸 것은 최상의 임상 '지혜(Wisdom)'입니다."
      }
    ]
  }
];
