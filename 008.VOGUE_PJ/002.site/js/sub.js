// 보그코리아 서브페이지 JS - sub.js //

// 파라미터 받기 -> Get방식으로 데이터 받기 //////
let pm = location.href;
// location.href 를 이퀄 오른쪽에 쓰면 url을 읽어옴

// console.log("원본:"+pm);

/// 물음표로 넘어오는 파라미터 체크하기
// 왜 체크하나? 없으면 에러나니까!!!
// 무엇으로 체크하나? indexOf(문자열) -> 없으면 -1
// 원래 idexOf(문자열)은 찾는 문자열 우치 순번을 리턴함
if(pm.indexOf("?")=== -1){
    alert("비정상적인 접근입니다")
    location.href = "index.html";


}

// 파라미터값 가공하기 
// -> ?로 자르고 뒤엣것, =로 자르고 뒤엣것
pm = pm.split("?");
// console.log(pm);

pm = pm[1];
// console.log(pm);


pm = pm.split("=");
// console.log(pm);

pm = pm[1];
// console.log(pm);

///// 각 서브별 데이터 셋팅하기 /////
let sinfo = {
    "fashion": {
        "제목": "Fashion",
        "메뉴": ["전체", "트렌드", "아이템", "피플", "화보"],
        "경로": "fashion",
        "타이틀": [
            "&lt;고양이를 부탁해&gt;의 20주년 기획전",
            "패션계에서 가장 주목받는 신인 디자이너, 자크무스",
            "서울국제여성영화제 장편 경쟁 한국 영화 4편",
            "드라마 &lt;알고 있지만&gt;의 나비가 유행이라고?",
            "홍콩 누아르 영화 주인공으로 변신한 민주",
            "MSG워너비여, 영원하라!"
        ]
    },
    "beauty": {
        "제목": "Beauty",
        "메뉴": ["전체", "트렌드", "아이템", "헬스", "피플"],
        "경로": "beauty",
        "타이틀": [
            "매실의 놀라운 효능",
            "맥시멀 뷰티의 신세계",
            "브라렛보다 니플 패치?",
            "지금 고쳐야 할 샤워 습관 6",
            "‘급찐살’ 저격! 셀럽들의 비건 식단",
            "팝한 여름 헤어 액세서리 활용법"
        ]
    },
    "living": {
        "제목": "Living",
        "메뉴": ["전체", "여행", "음식", "문화", "인테리어", "키즈", "테크"],
        "경로": "living",
        "타이틀": [
            "파리에 도버 스트리트 ‘리틀’ 마켓이 오픈했다",
            "전망 좋은 홈 오피스",
            "랜선 눈꽃 여행",
            "2021년 새 계절을 위한 새것 모음",
            "눈 호강 제대로, 뉴 호텔 5",
            "고요한 겨울, 호캉스"
        ]
    },
    "people": {
        "제목": "People",
        "메뉴": "없음",
        "경로": "people",
        "타이틀": [
            "아르마니의 시간, 아르마니의 약속",
            "슈퍼모델 나오미 캠벨의 그림 같은 빌라",
            "가구와 오브제를 창조하는 젊은 디자이너 6인",
            "지지와 벨라의 엄마, 욜란다가 말하는 ‘라임병’",
            "성별 고정관념을 깨는 파격 캐스팅",
            "멋쟁이 엄마를 소개합니다"
        ]
    },
    "video": {
        "제목": "Video",
        "메뉴": "없음",
        "경로": "video",
        "타이틀": [
            "발렌시아가의 50th 꾸뛰르 컬렉션 라이브 스트리밍",
            "뉴욕 패션 위크에 소개된 한국 디자이너 브랜드",
            "에디터 제니가 선택한 주얼리는?",
            "디올 FALL-WINTER 2021-2022 레디 투 웨어 컬렉션 라이브 스트리밍",
            "프라다 2021 F/W 시즌 여성복 컬렉션 라이브 스트리밍",
            "발렌시아가 SUMMER 21 (PRE-COLLECTION)"
        ]
    },
    "runway": {
        "제목": "Runway",
        "메뉴": "없음",
        "경로": "runway",
        "타이틀": [
            "<small>Ready To Wear 2021 F/W</small><br>Rick Owens",
            "<small>Ready To Wear 2021 F/W</small><br>We11done",
            "<small>Ready To Wear 2021 F/W</small><br>Comme des Garçons",
            "<small>Ready To Wear 2021 F/W</small><br>Chloé",
            "<small>Ready To Wear 2021 F/W</small><br>Balmain",
            "<small>Ready To Wear 2021 F/W</small><br>Loewe"
        ]
    },
    "shopping": {
        "제목": "Shopping",
        "메뉴": ["전체", "패션", "뷰티", "리빙"],
        "경로": "shopping",
        "타이틀": [
            "여름과 찰떡궁합! 세라믹 바구니",
            "사용할수록 매력적인 테크 제품",
            "취향 있는 플랜터",
            "감사의 마음을 담은, 부모님을 위한 선물",
            "성년을 위한 선물",
            "작고 소중한 아이들을 위한 선물"
        ]
    }
}; ////////// sinfo ////////////////


$(function(){

    // 1. 데이터 선택하기
    // 방법 : Get방식으로 받은 파라미터 값 pm변수를 이용하여
    // 셋팅된 서브메뉴 데이터 객체인 sinfo 속성 중 해당 이름의 속성을 선택하여
    // 값을 셋팅한다 그 해당이름은 pm변수에 담겨있다!
    let data = sinfo[pm];
    // console.log(data);

    // 2. 데이터 셋팅하기
    // 원리 : 가져온 데이터에서 속성명으로 각 파트에 맞는 값을 셋팅한다!

    // 2-1. 제목넣기
    // 대상 : .stit
    let stit = $(".stit");
    stit.text(data["제목"]);

    // 제목 예외 : runway
    if(pm === "runway"){
        stit.css({
            // 배경넣기
            background: "url(images/bg_02.jpg) no-repeat center/cover",
            color : "#fff"
        });
    }///////if

    //2 -2. 서브메뉴(LNB) 넣기
    // 메뉴 데이터 넣기
    let lnb = data["메뉴"];
    // 메뉴값이 "없음"이 아닐때만 셋팅하기
    if(lnb !=="없음"){

        // 메뉴는 ul>li구조로 되어있다
        // 이것을 html로 구성하여 넣어준다!
        let mhtml = "<ul>";

        // 메뉴배열값 만큼 돌기 -> for of문
        for(let x of lnb){
            mhtml += '<li><a href = "#">'+ x +'<a></li>';

        }////// for of //////

        mhtml += "</ul>";

        console.log(mhtml);

        // LNB 메뉴 박스요소에 html 메뉴 코드넣기!
    $(".lnb").html(mhtml);

    }////if////

    // 2-3. 컨텐츠박스 배경이미지 넣기
    // 미리 셋팅된 클래스를 .cont박스에 적용하여
    // 하위 .cbx의 배경이미지가 변경되게 한다!

    // 클래스 넣을 대상 : .cont
    $(".cont").addClass(data["경로"]);
    // data['경로']는 이미지 분류 경로 이름이다!
    // 이 이름으로 클래스를 부모요소에 준다!

    // 2-4. 컨텐츠 박스의 h2태그에 타이틀 넣기
    // 대상 : .cbx h2
    //사용할 매서드 : each(function(idx, ele){구현코드})
    // -> idx는 순번(0부터), ele는 요소 자신(this와 동일)
    $(".cbx h2").each(function(idx, ele){
        // console.log(idx);

        // 타이틀 넣기
        $(ele).html(data["타이틀"][idx]);
        // data["타이틀"][순번] -> 해당순번의 타이틀 배열값

    })





    // 효율적이지 않은 방법 그냥 참고용
    // 2-3. 컨텐츠박스 배경이미지 넣기
    // // 대상 : .cbx
    // // 사용메서드 : 
    // // each(function(idx, ele){구현코드})
    // // -> idx는 순번(0부터), ele는 요소자신(this 동일)

    // //이미지 번호 변수
    // // 앞수
    // let n1 = 1;
    // // 뒷수
    // let n2 = 0;

    // $(".cbx").each(
    //     function(idx, ele){
    //         console.log(idx);

    //         // 이미지 번호 만들기
    //         // 1-1, 1-2, 1-3, 2-1, 2-2, 2-3
    //         // idx 순서는 0, 1, 2, 3, 4, 5
    //         if(idx === 3) n1 = 2;

    //         // 뒷수 변경
    //         n2++; //1씩 증가
    //         if(n2===4) n2 = 1;
            
    //         $(ele).css({
    //             backgroundImage : 
    //             "url(images/"+data["경로"]+"/cont"+ n1 +"-"+ n2 +"a.jpg)"
    //         });
    //     }
    // );

    


});//////jqb


 