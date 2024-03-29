// import { Record } from "immutable";
import { ICategories } from "Interfaces/ICategory";

export interface ICategoryReducer {
  categoryList: ICategories[];
}

// export const CategoryData1: Record.Factory<ICategory> = Record({

export const CategoryData: ICategoryReducer = {
  categoryList: [
    {
      id: "korbook",
      list: [
        {
          categoryIndex: "1",
          id: "daa",
          displayName: "소설",
          isBig: true,
          subList: [
            { id: "0101", displayName: "한국소설" },
            { id: "0103", displayName: "영미소설" },
            { id: "0105", displayName: "일본소설" },
            { id: "0107", displayName: "중국소설" },
            { id: "0109", displayName: "러시아소설" },
            { id: "0111", displayName: "프랑스소설" },
            { id: "0112", displayName: "독일소설" },
            { id: "0115", displayName: "북유럽소설" },
            { id: "0116", displayName: "그외유럽소설" },
            { id: "0117", displayName: "기타나라소설" },
            { id: "0118", displayName: "청소년소설" },
            { id: "0121", displayName: "고전소설/문학선" },
            { id: "0124", displayName: "세계문학전집" },
            { id: "0126", displayName: "라이트노벨" },
            { id: "0128", displayName: "장르소설" },
          ],
        },
        {
          categoryIndex: "1",
          id: "dab",
          displayName: "시/에세이",
          isBig: true,
          subList: [
            { id: "0301", displayName: "한국시" },
            { id: "0302", displayName: "해외시" },
            { id: "0304", displayName: "테마에세이" },
            { id: "0307", displayName: "나라별 에세이" },
            { id: "0311", displayName: "인물/자전적에세이" },
            { id: "0317", displayName: "청소년 시/에세이" },
            { id: "0319", displayName: "시/에세이문고" },
          ],
        },
        {
          categoryIndex: "1",
          id: "dag",
          displayName: "경제/경영",
          subList: [
            { id: "1301", displayName: "경영일반" },
            { id: "1303", displayName: "경영이론" },
            { id: "1305", displayName: "경영관리" },
            { id: "1307", displayName: "경영전략" },
            { id: "1309", displayName: "경제일반" },
            { id: "1311", displayName: "경제이론" },
            { id: "1313", displayName: "경제실무" },
            { id: "1315", displayName: "각국경제" },
            { id: "1316", displayName: "세무/회계" },
            { id: "1319", displayName: "마케팅/광고/고객" },
            { id: "1321", displayName: "유통/창업" },
            { id: "1323", displayName: "재테크/금융" },
            { id: "1325", displayName: "무역/운송" },
            { id: "1327", displayName: "관광/호텔" },
            { id: "1329", displayName: "경제/경영문고" },
            { id: "1331", displayName: "대학교재" },
          ],
        },
        {
          categoryIndex: "1",
          id: "dah",
          displayName: "자기계발",
          isBig: true,
          subList: [
            { id: "1501", displayName: "성공/처세" },
            { id: "1503", displayName: "자기능력계발" },
            { id: "1505", displayName: "비즈니스능력계발" },
            { id: "1506", displayName: "인간관계" },
            { id: "1507", displayName: "화술/협상" },
            { id: "1508", displayName: "청소년자기계발" },
            { id: "1509", displayName: "오디오북" },
            { id: "1519", displayName: "전자책단말기" },
          ],
        },

        {
          categoryIndex: "2",
          id: "dac",
          displayName: "인문",
          isBig: true,
          subList: [
            { id: "0501", displayName: "인문학일반" },
            { id: "0503", displayName: "심리학" },
            { id: "0505", displayName: "교육학" },
            { id: "0507", displayName: "유아교육" },
            { id: "0509", displayName: "특수교육" },
            { id: "0511", displayName: "임용고시" },
            { id: "0513", displayName: "철학" },
            { id: "0515", displayName: "문학이론" },
            { id: "0517", displayName: "한국문학론" },
            { id: "0519", displayName: "영미문학론" },
            { id: "0520", displayName: "중국문학론" },
            { id: "0521", displayName: "세계문학론" },
            { id: "0523", displayName: "언어학" },
            { id: "0525", displayName: "독서/글쓰기" },
            { id: "0527", displayName: "문헌정보학" },
            { id: "0529", displayName: "역학/사주" },
            { id: "0532", displayName: "대학교재" },
            { id: "0551", displayName: "방송통신대교재" },
            { id: "0533", displayName: "인문교양총서" },
            { id: "0535", displayName: "인문고전총서" },
          ],
        },
        {
          categoryIndex: "2",
          id: "dad",
          displayName: "역사/문화",
          subList: [
            { id: "1901", displayName: "역사일반" },
            { id: "1903", displayName: "세계사" },
            { id: "1905", displayName: "서양사" },
            { id: "1907", displayName: "동양사" },
            { id: "1909", displayName: "한국사" },
            { id: "1911", displayName: "신화" },
            { id: "1912", displayName: "민속학" },
            { id: "1913", displayName: "문화일반" },
            { id: "1915", displayName: "문화사" },
            { id: "1917", displayName: "역사인물" },
            { id: "1918", displayName: "역사기행" },
            { id: "1919", displayName: "청소년 역사" },

            { id: "1920", displayName: "지리학" },
            { id: "1921", displayName: "대학교재" },
          ],
        },
        {
          categoryIndex: "2",
          id: "dae",
          displayName: "종교",
          subList: [
            { id: "2101", displayName: "종교일반" },
            { id: "2103", displayName: "기독교(개신교)" },
            { id: "2105", displayName: "가톨릭" },
            { id: "2107", displayName: "불교" },
            { id: "2109", displayName: "그외종교" },
            { id: "2111", displayName: "CD/TAPE/악보" },
          ],
        },
        {
          categoryIndex: "2",
          id: "daf",
          displayName: "정치/사회",
          subList: [
            { id: "1701", displayName: "정치/외교" },
            { id: "1703", displayName: "행정/정책" },
            { id: "1705", displayName: "국방/군사" },
            { id: "1707", displayName: "법학" },
            { id: "1709", displayName: "사회학" },
            { id: "1711", displayName: "사회문제/복지" },
            { id: "1713", displayName: "언론/신문/방송" },
            { id: "1715", displayName: "정치/사회문고" },
            { id: "1717", displayName: "대학교재" },
            { id: "1720", displayName: "정부간행물" },
          ],
        },
        {
          categoryIndex: "2",
          id: "dap",
          displayName: "예술/대중문화",
          subList: [
            { id: "2301", displayName: "예술일반" },
            { id: "2303", displayName: "미술" },
            { id: "2305", displayName: "만화/애니메이션" },
            { id: "2307", displayName: "디자인/색채" },
            { id: "2309", displayName: "패션/의류" },
            { id: "2313", displayName: "음악" },
            { id: "2315", displayName: "사진/영상" },
            { id: "2317", displayName: "연극" },
            { id: "2319", displayName: "영화" },
            { id: "2320", displayName: "예술기행" },
            { id: "2321", displayName: "예술문고" },
            { id: "2325", displayName: "청소년예술" },
            { id: "2327", displayName: "대학교재" },
          ],
        },
        {
          categoryIndex: "2",
          id: "daz",
          displayName: "과학",
          subList: [
            { id: "2901", displayName: "과학이론" },
            { id: "2903", displayName: "도감" },
            { id: "2905", displayName: "교양과학" },
            { id: "2907", displayName: "수학" },
            { id: "2909", displayName: "물리학" },
            { id: "2911", displayName: "화학" },
            { id: "2913", displayName: "생물학" },
            { id: "2915", displayName: "지구과학" },
            { id: "2917", displayName: "천문학" },
            { id: "2918", displayName: "청소년 교양과학" },
            { id: "2919", displayName: "과학문고" },
            { id: "2921", displayName: "대학교재" },
            { id: "2923", displayName: "초과학" },
          ],
        },
        {
          categoryIndex: "2",
          id: "da1",
          displayName: "기술/공학",
          subList: [
            { id: "2601", displayName: "건축/인테리어" },
            { id: "2603", displayName: "토목/건설" },
            { id: "2605", displayName: "환경/소방/도시/조경" },
            { id: "2607", displayName: "자동차/운전" },
            { id: "2608", displayName: "운전면허" },
            { id: "2609", displayName: "공학일반" },
            { id: "2611", displayName: "금속/재료" },
            { id: "2613", displayName: "기계/역학/항공" },
            { id: "2615", displayName: "전기/전자" },
            { id: "2617", displayName: "농수산/축산" },
            { id: "2619", displayName: "생활과학" },
            { id: "2621", displayName: "의학" },
            { id: "2623", displayName: "대학교재" },
          ],
        },
        {
          categoryIndex: "2",
          id: "da2",
          displayName: "컴퓨터/IT",
          subList: [
            { id: "3301", displayName: "컴퓨터공학" },
            { id: "3302", displayName: "IT일반" },
            { id: "3303", displayName: "컴퓨터입문/활용" },
            { id: "3305", displayName: "전산통계/해석" },
            { id: "3307", displayName: "OS" },
            { id: "3309", displayName: "네트워크" },
            { id: "3310", displayName: "보안/해킹" },
            { id: "3311", displayName: "데이터베이스" },
            { id: "3312", displayName: "개발방법론" },
            { id: "3313", displayName: "게임" },
            { id: "3314", displayName: "웹프로그래밍" },
            { id: "3315", displayName: "프로그래밍/언어" },
            { id: "3316", displayName: "모바일프로그래밍" },
            { id: "3317", displayName: "OA/사무자동화" },
            { id: "3319", displayName: "웹사이트" },
            { id: "3321", displayName: "그래픽" },
            { id: "3323", displayName: "멀티미디어" },
            { id: "3325", displayName: "CAD" },
            { id: "3328", displayName: "자격증/수험서" },
            { id: "3329", displayName: "대학교재" },
          ],
        },

        {
          categoryIndex: "3",
          id: "dai",
          displayName: "유아(0~7세)",
          subList: [
            { id: "4107", displayName: "유아놀이" },
            { id: "4109", displayName: "유아그림책" },
            { id: "4111", displayName: "유아교양" },
            { id: "4115", displayName: "유아학습" },
            { id: "4117", displayName: "유아캐릭터" },
            { id: "4119", displayName: "0세부터 100세그림책" },
            { id: "4121", displayName: "0~3세" },
            { id: "4123", displayName: "4~7세" },
          ],
        },
        {
          categoryIndex: "3",
          id: "daj",
          displayName: "어린이(초등)",
          isBig: true,
          subList: [
            { id: "4202", displayName: "교과서수록/연계도서" },
            { id: "4204", displayName: "어린이문학" },
            { id: "4206", displayName: "어린이교양" },
            { id: "4208", displayName: "어린이만화" },
            { id: "4210", displayName: "초등학교 입학준비" },
            { id: "4212", displayName: "초등1~2학년" },
            { id: "4214", displayName: "초등3~4학년" },
            { id: "4216", displayName: "초등5~6학년" },
            { id: "4220", displayName: "초등1~6학년" },
          ],
        },
        {
          categoryIndex: "3",
          id: "dal",
          displayName: "어린이전집",
          subList: [
            { id: "5101", displayName: "유아" },
            { id: "5103", displayName: "아동" },
            { id: "5105", displayName: "외서전집" },
          ],
        },
        {
          categoryIndex: "3",
          id: "dak",
          displayName: "어린이영어",
          subList: [
            { id: "4501", displayName: "유아영어" },
            { id: "4502", displayName: "교과영어" },
            { id: "4504", displayName: "영어시험대비" },
            { id: "4506", displayName: "영역별영어학습" },
            { id: "4508", displayName: "코스북" },
            { id: "4509", displayName: "동화/그림책/리더스북" },
            { id: "4513", displayName: "미국교과서" },
            { id: "4515", displayName: "CD/DVD/복합상품" },
            { id: "4517", displayName: "영어사전" },
            { id: "4519", displayName: "게임으로 배우기" },
            { id: "4520", displayName: "어린이중국어" },
            { id: "4523", displayName: "어린이일본어" },
          ],
        },
        {
          categoryIndex: "3",
          id: "dao",
          displayName: "청소년",
          subList: [
            { id: "3801", displayName: "논술(단행본)" },
            { id: "3802", displayName: "공부방법" },
            { id: "3803", displayName: "진로" },
            { id: "3804", displayName: "명문대진학가이드" },
            { id: "3805", displayName: "성교육" },
            { id: "3809", displayName: "청소년 자기계발" },
            { id: "3811", displayName: "청소년 에세이" },
            { id: "3813", displayName: "청소년 소설" },
            { id: "3815", displayName: "청소년 시" },
            { id: "3817", displayName: "청소년 고전" },
            { id: "3819", displayName: "청소년 문학기타" },
            { id: "3821", displayName: "청소년 철학" },
            { id: "3823", displayName: "청소년 역사" },
            { id: "3825", displayName: "청소년 예술" },
            { id: "3827", displayName: "청소년 인문교양" },
            { id: "3829", displayName: "청소년 경제" },
            { id: "3831", displayName: "청소년 정치사회" },
            { id: "3833", displayName: "청소년 교양과학" },
            { id: "3835", displayName: "청소년 교양공학" },
          ],
        },
        {
          categoryIndex: "4",
          id: "dam",
          displayName: "초등참고서",
          subList: [
            { id: "3901", displayName: "초등학교 학년별" },
            { id: "3902", displayName: "예비중학" },
            { id: "3905", displayName: "전과" },
            { id: "3907", displayName: "경시대회" },
            { id: "3909", displayName: "단계별시리즈" },
            { id: "3911", displayName: "영재학습지" },
            { id: "3913", displayName: "학습교구" },
            { id: "3919", displayName: "출판사별" },
            { id: "3921", displayName: "논술" },
            { id: "3923", displayName: "한자" },
            { id: "3931", displayName: "미취학아동</a" },
            { id: "3901", displayName: "학년별 개념/문제" },
            { id: "3903", displayName: "전과" },
            { id: "3904", displayName: "학교시험 기출문제" },
            { id: "3908", displayName: "EBS 초등" },
            { id: "3906", displayName: "월간 학습지" },
            { id: "3909", displayName: "단계별시리즈" },
            { id: "3910", displayName: "미취학아동" },
            { id: "3911", displayName: "영재학습지" },
            { id: "3914", displayName: "경시대회/올림피아드" },
            { id: "3915", displayName: "예비중학" },
            { id: "3921", displayName: "논술" },
            { id: "3923", displayName: "한자" },
            { id: "3925", displayName: "출판사별" },
          ],
        },
        {
          categoryIndex: "4",
          id: "dan",
          displayName: "중/고등참고서",
          isBig: true,
          subList: [
            { id: "2501", displayName: "고등학교 출판사별</a>" },
            { id: "2503", displayName: "고등학교 과목별" },
            { id: "2505", displayName: "중학교 출판사별</a>" },
            { id: "2509", displayName: "중학교 학년별" },
            { id: "2513", displayName: "예비중학" },
            { id: "2515", displayName: "중간고사(중등)" },
            { id: "2517", displayName: "기말고사(중등)" },
            { id: "2521", displayName: "EBS 중학" },
            { id: "2522", displayName: "EBS 고등" },
            { id: "2523", displayName: "강남구청 인터넷교재" },
            { id: "2524", displayName: "중고등경시/올림피아드" },
            { id: "2525", displayName: "특목고대비교재" },
            { id: "2526", displayName: "NEAT(국가영어능력평가)" },
            { id: "2527", displayName: "영어/수학일반/한자" },
            { id: "2529", displayName: "논술/면접대비" },
            { id: "2531", displayName: "중고학습문학" },
            { id: "2533", displayName: "검정고시" },
            { id: "2535", displayName: "공부방법/진학" },
          ],
        },
        {
          categoryIndex: "4",
          id: "da5",
          displayName: "대학교재",
          subList: [
            { id: "5001", displayName: "인문" },
            { id: "5003", displayName: "정치/사회/법" },
            { id: "5005", displayName: "경제/경영" },
            { id: "5007", displayName: "자연과학" },
            { id: "5009", displayName: "기술공학" },
            { id: "5011", displayName: "컴퓨터" },
            { id: "5013", displayName: "예술" },
            { id: "5015", displayName: "외국어" },
            { id: "5021", displayName: "한국판 원서교재" },
            { id: "5031", displayName: "전문사전" },
            { id: "5051", displayName: "방송통신대교재" },
          ],
        },
        {
          categoryIndex: "4",
          id: "da8",
          displayName: "방송통신대교재",
          isBig: true,
          subList: [
            { id: "3101", displayName: "취업" },
            { id: "3102", displayName: "공무원 과목별" },
            { id: "3104", displayName: "공무원 직군별" },
            { id: "3105", displayName: "인적성/직무능력" },
            { id: "3106", displayName: "공인중개사/주택관리사" },
            { id: "3108", displayName: "고시" },
            { id: "3110", displayName: "전문직자격증" },
            { id: "3112", displayName: "국가자격증" },
            { id: "3114", displayName: "경제/금융/회계자격증" },
            { id: "3116", displayName: "편입/독학사" },
          ],
        },
        {
          categoryIndex: "4",
          id: "da3",
          displayName: "취업/수험서",
          isBig: true,
          subList: [
            { id: "3103", displayName: "9급공무원" },
            { id: "3105", displayName: "7급공무원" },
            { id: "3107", displayName: "경찰직" },
            { id: "3109", displayName: "기타공무원수험서" },
            { id: "3113", displayName: "편입/대학원" },
            { id: "3114", displayName: "고시/수험영어" },
            { id: "3115", displayName: "금융수험서" },
            { id: "3117", displayName: "부동산수험서" },
            { id: "3119", displayName: "공인중개사" },
            { id: "3121", displayName: "회계수험서" },
            { id: "3123", displayName: "고시" },
            { id: "3125", displayName: "법무사" },
            { id: "3127", displayName: "변리사" },
            { id: "3129", displayName: "기타수험서</a" },
            { id: "3130", displayName: "한자능력시험" },
          ],
        },
        {
          categoryIndex: "4",
          id: "dax",
          displayName: "외국어",
          subList: [
            { id: "2701", displayName: "영어일반" },
            { id: "2703", displayName: "영어회화/청취" },
            { id: "2705", displayName: "비즈니스영어" },
            { id: "2707", displayName: "영어문법/독해/작문" },
            { id: "2709", displayName: "영어문고" },
            { id: "2711", displayName: "영어수입교재" },
            { id: "2715", displayName: "방송영어교재" },
            { id: "2717", displayName: "수험영어" },
            { id: "2719", displayName: "유학" },
            { id: "2721", displayName: "번역/통역" },
            { id: "2723", displayName: "일본어일반" },
            { id: "2725", displayName: "일본어회화" },
            { id: "2727", displayName: "일본어문법/작문" },
            { id: "2729", displayName: "일본어능력시험/JPT" },
            { id: "2733", displayName: "중국어일반" },
            { id: "2735", displayName: "중국어회화" },
            { id: "2737", displayName: "중국어문법/독해" },
            { id: "2739", displayName: "HSK/중국어시험" },
            { id: "2740", displayName: "중국원서" },
            { id: "2741", displayName: "독일어" },
            { id: "2743", displayName: "프랑스어" },
            { id: "2745", displayName: "기타외국어" },
            { id: "2747", displayName: "어학사전" },
            { id: "2750", displayName: "대학교재" },
          ],
        },

        {
          categoryIndex: "5",
          id: "das",
          displayName: "가정/육아",
          subList: [
            { id: "0701", displayName: "결혼/가정" },
            { id: "0703", displayName: "임신/출산" },
            { id: "0704", displayName: "육아" },
            { id: "0705", displayName: "자녀교육" },
            { id: "0707", displayName: "살림의지혜" },
            { id: "0709", displayName: "홈인테리어" },
          ],
        },
        {
          categoryIndex: "5",
          id: "dav",
          displayName: "건강",
          subList: [
            { id: "0901", displayName: "건강일반" },
            { id: "0903", displayName: "뇌건강" },
            { id: "0905", displayName: "한방치료" },
            { id: "0907", displayName: "자연건강" },
            { id: "0908", displayName: "건강식사" },
            { id: "0909", displayName: "질병치료/예방" },
            { id: "0911", displayName: "다이어트" },
            { id: "0913", displayName: "운동/트레이닝" },
            { id: "0915", displayName: "피부관리/메이크업" },
            { id: "0920", displayName: "건강문고" },
          ],
        },
        {
          categoryIndex: "5",
          id: "daq",
          displayName: "여행",
          subList: [
            { id: "3201", displayName: "국내여행" },
            { id: "3203", displayName: "해외여행" },
            { id: "3204", displayName: "여행에세이" },
            { id: "3205", displayName: "테마여행" },
            { id: "3206", displayName: "인기지역" },
            { id: "3214", displayName: "지도" },
          ],
        },
        {
          categoryIndex: "5",
          id: "dat",
          displayName: "요리",
          subList: [
            { id: "0801", displayName: "요리일반" },
            { id: "0802", displayName: "요리에세이" },
            { id: "0803", displayName: "테마별요리" },
            { id: "0805", displayName: "베이킹/간식" },
            { id: "0807", displayName: "계절요리" },
            { id: "0809", displayName: "재료별요리" },
            { id: "0811", displayName: "나라별요리" },
            { id: "0813", displayName: "생활요리" },
            { id: "0815", displayName: "전문요리" },
            { id: "0817", displayName: "와인/커피/음료" },
            { id: "0819", displayName: "요리수험서" },
          ],
        },
        {
          categoryIndex: "5",
          id: "dar",
          displayName: "취미/실용/스포츠",
          subList: [
            { id: "1101", displayName: "가정원예" },
            { id: "1102", displayName: "홈인테리어/수납" },
            { id: "1103", displayName: "생활공예/DIY" },
            { id: "1104", displayName: "살림의지혜" },
            { id: "1105", displayName: "반려동물" },
            { id: "1107", displayName: "등산/낚시" },
            { id: "1109", displayName: "바둑/골프" },
            { id: "1111", displayName: "골프" },
            { id: "1113", displayName: "무술" },
            { id: "1115", displayName: "스포츠" },
            { id: "1117", displayName: "레크레이션/게임" },
            { id: "1118", displayName: "퀴즈/퍼즐/스도쿠" },
            { id: "1119", displayName: "무용" },
            { id: "1121", displayName: "체육" },
            { id: "1124", displayName: "취미일반" },
            { id: "1125", displayName: "취미관련상품" },
            { id: "1130", displayName: "대학교재" },
          ],
        },
        {
          categoryIndex: "6",
          id: "dau",
          displayName: "잡지",
          subList: [
            { id: "3501", displayName: "여성/남성/패션" },
            { id: "3503", displayName: "인문/사회/종교" },
            { id: "3505", displayName: "자연/공학" },
            { id: "3507", displayName: "문학/교양" },
            { id: "3509", displayName: "어학/교육" },
            { id: "3511", displayName: "예술/대중문화" },
            { id: "3513", displayName: "취미/레포츠" },
            { id: "3515", displayName: "컴퓨터/게임" },
            { id: "3516", displayName: "기타 국내잡지</a>" },
            { id: "3517", displayName: "외국잡지" },
            { id: "3519", displayName: "주간/월간/계간지" },
          ],
        },
        {
          categoryIndex: "6",
          id: "daw",
          displayName: "만화",
          subList: [
            { id: "4701", displayName: "교양만화" },
            { id: "4702", displayName: "역사만화" },
            { id: "4703", displayName: "직업만화" },
            { id: "4704", displayName: "일상생활/드라마/가족" },
            { id: "4705", displayName: "동물등장만화" },
            { id: "4706", displayName: "요리만화" },
            { id: "4707", displayName: "도박만화" },
            { id: "4708", displayName: "고전/문학작품만화" },
            { id: "4709", displayName: "드라마</a" },
            { id: "4711", displayName: "성인만화" },
            { id: "4712", displayName: "BL만화" },
            { id: "4713", displayName: "로맨스만화" },
            { id: "4715", displayName: "스포츠만화" },
            { id: "4717", displayName: "SF/판타지" },
            { id: "4718", displayName: "액션/무협만화" },
            { id: "4719", displayName: "명랑/코믹만화" },
            { id: "4720", displayName: "탐정/추리" },
            { id: "4721", displayName: "공포/스릴러" },
            { id: "4723", displayName: "기타만화" },
            { id: "4724", displayName: "웹툰/카툰에세이" },
            { id: "4726", displayName: "그래픽노블" },
            { id: "4728", displayName: "캐릭터상품" },
            { id: "4730", displayName: "일러스트/작법" },
            { id: "4732", displayName: "만화잡지" },
          ],
        },
        {
          categoryIndex: "7",
          id: "da6",
          displayName: "한국소개도서",

          subList: [
            { id: "5301", displayName: "한국일반" },
            { id: "5303", displayName: "한국문학" },
            { id: "5305", displayName: "한국역사" },
            { id: "5307", displayName: "한국문화예술" },
            { id: "5309", displayName: "한국어학습" },
            { id: "5311", displayName: "한국요리" },
            { id: "5313", displayName: "한국판 원서교재" },
          ],
        },
      ],
    },
    {
      id: "otherbook",
      list: [
        { categoryIndex: "1", id: "c35", displayName: "영미도서" },
        { categoryIndex: "1", id: "xaa", displayName: "문학" },
        { categoryIndex: "1", id: "xae", displayName: "인문/사회" },
        { categoryIndex: "1", id: "xaf", displayName: "경제/경영" },
        { categoryIndex: "1", id: "xag", displayName: "과학/기술" },
        { categoryIndex: "1", id: "xab", displayName: "취미/실용/여행" },
        { categoryIndex: "1", id: "xai", displayName: "ELT/어학/사전" },
        { categoryIndex: "1", id: "xaj", displayName: "교재" },
        { categoryIndex: "1", id: "xac", displayName: "생활/요리/건강" },
        { categoryIndex: "1", id: "xad", displayName: "예술/건축" },
        { categoryIndex: "2", id: "xah", displayName: "어린이영어" },
        { categoryIndex: "2", id: "c37", displayName: "유아영어" },
        { categoryIndex: "2", id: "c38", displayName: "영역별영어학습" },
        { categoryIndex: "2", id: "c39", displayName: "코스북" },
        { categoryIndex: "2", id: "c3b", displayName: "영어동화/그림책" },
        { categoryIndex: "2", id: "c3a", displayName: "미국교과서" },
        { categoryIndex: "2", id: "c3c", displayName: "어린이중국어" },
        { categoryIndex: "2", id: "c3d", displayName: "어린이일본어" },
        { categoryIndex: "3", id: "c36", displayName: "일본도서" },
        { categoryIndex: "3", id: "rDq", displayName: "잡지" },
        { categoryIndex: "3", id: "rDv", displayName: "실용서/예술" },
        { categoryIndex: "3", id: "rDp", displayName: "만화/애니" },
        { categoryIndex: "3", id: "rDx", displayName: "문학" },
        { categoryIndex: "3", id: "rDt", displayName: "문고" },
        { categoryIndex: "3", id: "rDy", displayName: "라이트노벨" },
        { categoryIndex: "3", id: "rDr", displayName: "어학/학습" },
        { categoryIndex: "3", id: "rDs", displayName: "엔터테인먼트" },
        { categoryIndex: "3", id: "rDa", displayName: "아동" },
        { categoryIndex: "3", id: "rDw", displayName: "인문/사회" },
        { categoryIndex: "3", id: "rDz", displayName: "자연/기술과학" },
        { categoryIndex: "3", id: "rDu", displayName: "신서" },
      ],
    },
    {
      id: "ebook",
      list: [
        { categoryIndex: "1", id: "c3h", displayName: "소설", isBig: true },
        {
          categoryIndex: "1",
          id: "c3n",
          displayName: "경제/경영",
          isBig: true,
        },
        { categoryIndex: "1", id: "c3k", displayName: "자기계발", isBig: true },
        {
          categoryIndex: "1",
          id: "c3l",
          displayName: "시/에세이",
          isBig: true,
        },
        { categoryIndex: "1", id: "c3m", displayName: "인문" },
        { categoryIndex: "1", id: "c3n", displayName: "국어/외국어" },
        { categoryIndex: "1", id: "c3o", displayName: "역사/풍속/신화" },
        { categoryIndex: "1", id: "c3p", displayName: "사회/정치/법" },
        { categoryIndex: "1", id: "c3q", displayName: "가정/생활/요리" },
        { categoryIndex: "1", id: "c44", displayName: "여행/취미" },
        { categoryIndex: "1", id: "c3s", displayName: "건강/의학" },
        { categoryIndex: "1", id: "c3t", displayName: "종교/역학" },

        { categoryIndex: "2", id: "c3i", displayName: "장르소설" },
        { categoryIndex: "2", id: "c45", displayName: "외국도서" },
        { categoryIndex: "2", id: "c3u", displayName: "코믹스", isBig: true },
        { categoryIndex: "2", id: "c3v", displayName: "아동" },
        { categoryIndex: "2", id: "c8e", displayName: "유아" },
        { categoryIndex: "2", id: "c3w", displayName: "예술/대중문화" },
        { categoryIndex: "2", id: "c3x", displayName: "교재/수험서" },
        { categoryIndex: "2", id: "c3y", displayName: "청소년교양" },
        { categoryIndex: "2", id: "c3z", displayName: "자연과학/공학" },
        { categoryIndex: "2", id: "c41", displayName: "컴퓨터/인터넷" },
        { categoryIndex: "2", id: "c42", displayName: "매거진" },
        { categoryIndex: "2", id: "c9l", displayName: "북모닝" },
        { categoryIndex: "2", id: "c8x", displayName: "e-오디오북" },
      ],
    },
    {
      id: "webnovel",
      list: [
        { categoryIndex: "1", id: "cc2", displayName: "로맨스", isBig: true },
        { categoryIndex: "1", id: "cc4", displayName: "판타지", isBig: true },
        { categoryIndex: "1", id: "cc3", displayName: "무협", isBig: true },
        { categoryIndex: "1", id: "cc6", displayName: "라이트노벨" },
        { categoryIndex: "1", id: "cc9", displayName: "BL" },

        { categoryIndex: "2", id: "cek", displayName: "연재", isBig: true },
        {
          categoryIndex: "2",
          id: "ce2",
          displayName: "고화질만화",
          isBig: true,
        },
        { categoryIndex: "2", id: "ce3", displayName: "무료만화", isBig: true },
        { categoryIndex: "2", id: "ce4", displayName: "교양만화" },
        { categoryIndex: "2", id: "ce5", displayName: "순정만화" },
        { categoryIndex: "2", id: "ce6", displayName: "학원만화" },
        { categoryIndex: "2", id: "ce7", displayName: "드라마" },
        { categoryIndex: "2", id: "ce8", displayName: "성인만화" },
        { categoryIndex: "2", id: "ce9", displayName: "BL만화" },
      ],
    },
    {
      id: "gift",
      list: [
        { categoryIndex: "1", id: "c5b", displayName: "고급필기구" },
        { categoryIndex: "1", id: "c5l", displayName: "오피스" },
        { categoryIndex: "1", id: "c5x", displayName: "리빙/생활가전" },

        { categoryIndex: "2", id: "c5y", displayName: "키친/푸드" },
        { categoryIndex: "2", id: "c5f", displayName: "가구/수납" },
        { categoryIndex: "2", id: "c5h", displayName: "뷰티/헬스" },

        { categoryIndex: "3", id: "c5e", displayName: "패션잡화" },
        { categoryIndex: "3", id: "c5z", displayName: "여행/자동차" },
        { categoryIndex: "3", id: "c5d", displayName: "취미/펫" },
        { categoryIndex: "3", id: "c5g", displayName: "유아동" },

        { categoryIndex: "4", id: "c5b", displayName: "고급필기구" },
        { categoryIndex: "4", id: "c5l", displayName: "오피스" },
        { categoryIndex: "4", id: "c5i", displayName: "화방" },
        { categoryIndex: "4", id: "c5f", displayName: "가구" },
        { categoryIndex: "4", id: "c5y", displayName: "키친/푸드" },
        { categoryIndex: "4", id: "c5g", displayName: "베이비/키즈" },
        { categoryIndex: "4", id: "c5z", displayName: "여행/레저" },
        { categoryIndex: "4", id: "c5h", displayName: "패션" },
        { categoryIndex: "4", id: "c5d", displayName: "키덜트" },
        { categoryIndex: "4", id: "c5d", displayName: "키덜트/펫" },
        { categoryIndex: "4", id: "c5k", displayName: "독서용품" },
        { categoryIndex: "4", id: "c5j", displayName: "PET" },
      ],
    },
    {
      id: "music",
      list: [
        { categoryIndex: "1", id: "c46", displayName: "가요", isBig: true },
        { categoryIndex: "1", id: "c4e", displayName: "클래식", isBig: true },
        { categoryIndex: "1", id: "c47", displayName: "팝", isBig: true },
        { categoryIndex: "1", id: "c48", displayName: "락" },
        { categoryIndex: "1", id: "c49", displayName: "재즈" },
        { categoryIndex: "1", id: "c4b", displayName: "O.S.T/뮤지컬" },
        { categoryIndex: "1", id: "c4a", displayName: "일본음악" },
        { categoryIndex: "1", id: "c4g", displayName: "유아/아동" },

        { categoryIndex: "2", id: "cc2", displayName: "블루레이" },
        { categoryIndex: "2", id: "c4m", displayName: "드라마/로맨스" },
        { categoryIndex: "2", id: "c4n", displayName: "애니메이션" },
        { categoryIndex: "2", id: "c4v", displayName: "MUSIC BLU-RAY" },

        { categoryIndex: "3", id: "cb7", displayName: "DVD" },
        { categoryIndex: "3", id: "c4x", displayName: "드라마/로맨스" },
        { categoryIndex: "3", id: "c4y", displayName: "애니메이션" },
        { categoryIndex: "3", id: "c56", displayName: "MUSIC DVD" },
      ],
    },
    {
      id: "usedthing",
      list: [
        { categoryIndex: "1", id: "ca9", displayName: "중고도서" },
        { categoryIndex: "1", id: "caa", displayName: "소설" },
        { categoryIndex: "1", id: "cab", displayName: "시/에세이" },
        { categoryIndex: "1", id: "cac", displayName: "경제/경영" },
        { categoryIndex: "1", id: "cad", displayName: "자기계발" },
        { categoryIndex: "1", id: "cae", displayName: "인문" },
        { categoryIndex: "1", id: "caf", displayName: "정치/사회" },
        { categoryIndex: "1", id: "cag", displayName: "기술/공학" },
        { categoryIndex: "1", id: "cah", displayName: "컴퓨터/IT" },
        { categoryIndex: "1", id: "cai", displayName: "아동" },
        { categoryIndex: "1", id: "caj", displayName: "중/고등학습" },
        { categoryIndex: "1", id: "cak", displayName: "외국어" },
        { categoryIndex: "1", id: "cal", displayName: "취업/수험서" },

        { categoryIndex: "2", id: "cam", displayName: "중고음반" },
        { categoryIndex: "2", id: "can", displayName: "중고DVD" },
      ],
    },
  ],
};
