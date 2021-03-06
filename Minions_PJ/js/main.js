//제이쿼리 기본 JS-main.js

/// 제이쿼리 로드구역 /////
$(function () {

    // 타이틀 오버시 글자색, 배경색 변경
    // 대상 : .tit
    let tit = $(".tit");
    tit.mouseover(function () {
        // 변경대상 : .tit -> 나 자신 this키워드
        $(this).css({
            color: "red",
            background: "yellow"
        }); /// css ///
    }); ///mouseover/////
    //mouseout()메서드
    tit.mouseout(function () {
        $(this).css({
            color: "yellow",
            background: "pink"
        }); /// css ///
    }); ///mouseover/////


    //////////////////////////////////
    /// 1. 대상선정 변수할당 ///////////

    // 대상1 : 버튼 - .btns button
    let btns = $(".btns button");

    // 대상2 : 미니언즈 - .mi
    let mi = $(".mi");

    // 대상3: 빌딩 - .building li
    let bd = $(".building li");

    // 대상4: 메시지 - .msg
    let msg = $(".msg");

    // 좀비 태그 셋업
    let mz1 = '<img src = "images/mz1.png" alt = "좀비1" class = "mz">';
    let mz2 = '<img src = "images/mz2.png" alt = "좀비2" class = "mz">';
    let zom = '<img src = "images/zom.png" alt = "좀비들" class = "mz">';

    // 주사기 태그 셋업
    let inj = '<img src = "images/inj.png" alt = "주사기" class = "inj">';

    // 미니언즈 가로크기 보정값
    let win5 = $(window).width() * 0.05;

    ////////////////////////////////
    // 2. 초기화 셋팅 ///////////////

    // 2-1. 모든 버튼 숨기고 첫번째만 보이게하기
    btns.hide().first().show();

    bd.each(function (idx, ele) {
        //console.log(idx);
        // 1. 각 li요소에 글자넣기(순번)
        $(ele).text(idx);

        // 2. 좀비 + 주사기넣기
        if (idx === 9)
            $(ele).append(mz1);
        else if (idx === 7)
            $(ele).append(mz2);
        else if (idx === 1)
            $(ele).append(zom);
        else if (idx === 2)
            $(ele).append(inj);
    }); //////each ///////

    // 2-3. 모든 좀비 숨기기
    $(".mz").hide();

    /////////////////////////////////////////////
    // 3. 버튼별 순서대로 클릭 이벤트 함수 만들기//

    // 3-1. '들어가기' 버튼 
    btns.first().click(function () {

        // console.log("들어가기 버튼;")

        // 자기자신 버튼 없애기
        $(this).slideUp(300);

        // 메시지 지우기
        msg.fadeOut(200);

        // 이동할 li타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(8);
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left; // 화면에서의 left값
        console.log(tval + "/" + lval);

        // 미니언즈 이동하기
        // 대상 .mi -> mi변수에 할당
        mi.animate({
            top: tval + "px",
            left: lval + win5 + "px"
        }, 1000, function () { // 콜백함수(애니후 실행!)
            //메시지 변경하기
            msg.text("와~! 아늑하다! 옆방으로 가보자!")
                // 나타나기
                .fadeIn(200);

            // 다음변경버튼 보이기
            btns.eq(1).slideDown(400);
        }); /// animate ///

    }); ///3-1 들어가기 버튼

    // 3-2. 옆방으로! 버튼
    btns.eq(1).click(function () {

        // 자기자신 버튼 없애기
        $(this).slideUp(300);

        // 메시지 지우기
        msg.fadeOut(200);

        // 이동할 li타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(9);
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left; // 화면에서의 left값
        console.log(tval + "/" + lval);

        // 미니언즈 이동하기
        // 대상 .mi -> mi변수에 할당
        mi.animate({
            top: tval + "px",
            left: lval + win5 + "px"
        }, 1000, function () { // 콜백함수(애니후 실행!)

            // 좀비 나타나기 (콜백에서 2초 후)
            setTimeout(() => {
                // 현재 li에 있는 좀비만 보여라!
                tg.find(".mz").fadeIn(300);

                //메시지 변경하기
                msg.html("악! 좀비 <br> 어서 피하자~!")
                    // .css({left : "-120%"})
                    .attr("style", "left : -120%")
                    .delay(400) //0.4초 후
                    // 나타나기
                    .fadeIn(200)

                // 다음변경버튼 보이기
                btns.eq(2).delay(700).slideDown(400);

            }, 1000);


        }); /// animate ///



    }); // 3-2. 옆방으로! 버튼

    // 3-3. 윗층으로 도망가! 버튼
    btns.eq(2).click(function () {

        // 자기자신 버튼 없애기
        $(this).slideUp(300);

        // 메시지 지우기
        msg.fadeOut(200);

        // 이동할 li타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(7);
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left; // 화면에서의 left값
        console.log(tval + "/" + lval);

        // 미니언즈 이동하기
        // 대상 .mi -> mi변수에 할당
        mi.animate({
            top: tval + "px",
            left: lval + win5 + "px"
        }, 1000, function () { // 콜백함수(애니후 실행!)

            msg.text("여긴없겠지?")
                .delay(500).fadeIn(200);

            // 좀비 나타나기 (콜백에서 2초 후)
            setTimeout(() => {
                // 현재 li에 있는 좀비만 보여라!
                tg.find(".mz").fadeIn(300);

                //메시지 변경하기
                msg.text("헉! 여기도!")
                    .delay(400) //0.4초 후
                    // 나타나기
                    .fadeIn(200)

                // 다음변경버튼 보이기
                btns.eq(3).delay(700).slideDown(400);

            }, 2000);


        }); /// animate ///



    }); // 3-3. 윗층으로 도망가 버튼

    // 3-4. 다시 옆방으로! 버튼
    btns.eq(3).click(function () {

        // 자기자신 버튼 없애기
        $(this).slideUp(300);

        // 메시지 지우기
        msg.fadeOut(200);

        // 이동할 li타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(6);
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left; // 화면에서의 left값
        console.log(tval + "/" + lval);

        // 미니언즈 이동하기
        // 대상 .mi -> mi변수에 할당
        mi.animate({
            top: tval + "px",
            left: lval + win5 + "px"
        }, 1000, function () { // 콜백함수(애니후 실행!)

            msg.html("여긴없겠지?...")
                .css({
                    left: "100%"
                })
                .delay(500).fadeIn(200);


            // 6. 다음메시지
            setTimeout(() => {
                msg.html("그래도 <br> 무서우니까 <br>윗층으로 가자!")


                btns.eq(4).delay(700).slideDown(400);

            }, 2000);


        }); /// animate ///

    }); // 3-4. 다시 옆방으로 버튼

    // 3-5. '무서우니 윗층으로!' 버튼 //////////////////
    btns.eq(4).click(function () {
        console.log("무서우니 윗층으로! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(4); // 4번방
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값
        // win5는 미니언즈를 left값 보정함!(화면의 5%)
        console.log(tval + "/" + lval);

        // 4. 미니언즈 이동하기
        // 대상: .mi -> mi변수에 할당!
        // animate({CSS설정},시간,이징,함수)
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        }, 1000, function () { // 콜백함수 (애니후 실행!) //

            // 5. 메시지변경 : 1초후
            setTimeout(() => {
                msg.empty() // empty() 선택요소 텍스트 데이터 지우기
                    .fadeIn(200, () => {
                        msg.text("무.");
                    })
                    .delay(1500).fadeIn(200, () => {
                        msg.text("무.서.");
                    })
                    .delay(1500).fadeIn(200, () => {
                        msg.text("무.서.워...");
                    });
            }, 1000);

            // 6. 아랫층 좀비 올라와서 달려들기!
            setTimeout(() => {
                // 좀비는? 7번방 좀비
                bd.eq(7).find(".mz")
                    .animate({
                        top: -tg.height() + "px"

                    }, 500)
                    // 주인공에게 달려들기
                    .animate({
                        right: tg.width() * 1.3 + "px"
                    }, 3000, "easeOutBounce", function () {
                        // 애니 후 주인공 이미지 변경하기!
                        mi.find("img").attr("src", "./images/mz1.png")

                        // 메시지 변경하기
                        msg.html("나도좀비!;;; <br> 어서치료 주사를!")

                        btns.eq(5).delay(700).slideDown(400);

                    })

            }, 4000, );


        }); ////////// animate //////////

    }); /// 3-5. '무서우니 윗층으로!' 버튼 click ////////

    // 3-6. '치료주사방으로' 버튼 //////////////////
    btns.eq(5).click(function () {
        // console.log("무서우니 윗층으로! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(2); // 4번방
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값
        console.log(tval + "/" + lval);

        // 4. 미니언즈 이동하기
        // 대상: .mi -> mi변수에 할당!
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        }, 1000, function () { // 콜백함수 (애니후 실행!) //

            // 1. 주사기 돌기!
            $(".inj").css({
                transform: "rotate(212deg)",
                transition: ".5s ease-out",
                zIndex: "999"
            }).delay(1000) /// css ///

            setTimeout(() => {
                // 미니언즈 이미지 변경하기
                mi.find("img").attr("src", "./images/m2.png");

                //메시지 넣기
                msg.text("치료 완료!!").fadeIn(200).delay(1500)
                    .fadeIn(200, () => {
                        msg.text("이제 조금만 더 가면 탈출이다!")
                    })


                // 주사기 사라지기
                $(".inj").remove();

                btns.eq(6).delay(700).slideDown(400);

            }, 1500);



        }); ////////// animate //////////

    }); /// 3-6. '치료주사방으로' 버튼 click ////////

    // 3-7. '3번 방으로!' 버튼 //////////////////
    btns.eq(6).click(function () {
        // console.log("무서우니 윗층으로! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(3); // 4번방
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값
        console.log(tval + "/" + lval);

        // 4. 미니언즈 이동하기
        // 대상: .mi -> mi변수에 할당!
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        }, 1000, function () { // 콜백함수 (애니후 실행!) //

            // 메세지 출력
            msg.text("어서 윗층으로 가자!").fadeIn(200).delay(1500);

            btns.eq(7).delay(700).slideDown(400);

        }); ////////// animate //////////

    }); /// 3-7. '3번 방으로!' 버튼 click ////////

    // 3-8. '헬기호출' 버튼 //////////////////
    btns.eq(7).click(function () {
        // console.log("무서우니 윗층으로! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(1); // 4번방
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값
        console.log(tval + "/" + lval);

        // 4. 미니언즈 이동하기
        // 대상: .mi -> mi변수에 할당!
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        }, 1000, function () { // 콜백함수 (애니후 실행!) //

            // 메세지 출력
            msg.text("이제 곧 탈출이닷!").fadeIn(200).delay(1500);

            btns.last().delay(700).slideDown(400);

        }); ////////// animate //////////

    }); /// 3-8. '1번 방으로!' 버튼 click ////////

    // 3-9. '1번 방으로!' 버튼 //////////////////
    btns.last().click(function () {
        // console.log("무서우니 윗층으로! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(0); // 4번방
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값
        console.log(tval + "/" + lval);

        // 4. 미니언즈 이동하기
        // 대상: .mi -> mi변수에 할당!
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        }, 1000, function () { // 콜백함수 (애니후 실행!) //

            // 메세지 출력
            msg.text("도와줘!").fadeIn(200).delay(1500);

            // 좀비들 최종 추적
            bd.eq(1).find(".mz").fadeIn(200, function () {

                // 좀비들 움직이기
                $(this).animate({
                    right: tg.width() * 1.3 + "px"
                }, 6000);

                // 헬기 등장
                $(".heli").animate({
                        left: "20%"
                    }, 3000, function () { // 콜백함수
                        // 애니 후
                        // 주인공이 헬기에 탄 이미지로 변경
                        $(this).attr("src", "images/heli2.png")
                        mi.hide();
                    }).delay(1000)
                    .animate({
                        // 조금 이동하기
                        left: "70%"
                    }, 2000, function () { //콜백함수 애니 후
                        //헬기 조종사 좀비로 바뀐 이미지 변경
                        $(this).attr("src", "images/heli3.png");

                        // 미리 지정한 class를 타이틀에 줘서 간판 떨어짐
                        // 대상 : .tit
                        setTimeout(() => {
                            tit.addClass("on")
                        }, 3000);
                        // addClass(클래스명) - 선택요소에 class넣기
                        setTimeout(() => {
                            tit.addClass("on2")
                        }, 6000);

                    })
                    .animate({
                        left: "100%"
                    }, 10000);
            }); ///좀비들 추적



        }); ////////// animate //////////

    }); /// 3-9. '헬기호출' 버튼 click ////////


}); ////////////////////jQB////////////////