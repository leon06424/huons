// 헤더
document.addEventListener("DOMContentLoaded", function () {
    const pcHeader = document.getElementById("pc_header");
    const pcmDep1Items = document.querySelectorAll(".pcm_dep1 li");
    const pcmDep2Items = document.querySelectorAll(".pcm_dep2");
    const gnbSub = document.querySelector(".gnb_sub");
    const w_100p = document.querySelector("#pc_header #pc_menu_wrap .w_100p");

    pcHeader.addEventListener("mouseenter", function () {
        // pc_header에 마우스가 들어왔을 때, gnb_sub를 표시하고 height를 230px로 설정
        gnbSub.style.height = "230px";
    });

    pcHeader.addEventListener("mouseleave", function () {
        // pc_header에서 마우스가 떠날 때, gnb_sub를 숨기고 height를 0px로 설정
        gnbSub.style.height = "0px";
    });

    gnbSub.addEventListener("mouseenter", function () {
        // gnb_sub에 마우스가 들어왔을 때, height를 230px로 유지
        gnbSub.style.height = "230px";
    });

    gnbSub.addEventListener("mouseleave", function () {
        // gnb_sub에서 마우스가 떠날 때, height를 0px로 설정하여 숨깁니다.
        gnbSub.style.height = "0px";
    });

    pcmDep1Items.forEach(function (item) {
        item.addEventListener("mouseenter", function () {
        // pcm_dep1 li에 마우스가 들어왔을 때, gnb_sub를 표시하고 height를 230px로 설정
        gnbSub.style.height = "230px";
        gnbSub.classList.add("active");
        item.classList.add("active");
        });

        item.addEventListener("mouseleave", function () {
        // pcm_dep1 li에서 마우스가 떠날 때, gnb_sub를 숨기고 height를 0px로 설정
        gnbSub.style.height = "0px";
        gnbSub.classList.remove("active");
        item.classList.remove("active");
        });
    });

    pcmDep2Items.forEach(function (item) {
        item.addEventListener("mouseenter", function () {
        // pcm_dep2 li에 마우스가 들어왔을 때, gnb_sub를 표시하고 height를 230px로 설정
        gnbSub.style.height = "230px";
        gnbSub.classList.add("active");
        // 해당 li가 속한 .pcm_dep2에 'active' 클래스 추가
        const pcmDep2 = item.closest(".pcm_dep2");
        pcmDep2.classList.add("active");
        });

        item.addEventListener("mouseleave", function () {
        // 해당 li가 속한 .pcm_dep2_wrap에 'active' 클래스 제거
        const pcmDep2 = item.closest(".pcm_dep2");
        pcmDep2.classList.remove("active");
        gnbSub.classList.remove("active");
        });
    });

    const pcmDep1li = document.querySelectorAll(".pcm_dep1 > li");
    const pcmDep2 = document.querySelectorAll(".pcm_dep2");

    pcmDep2.forEach(function (item) {
        item.addEventListener("mouseenter", function () {
        const pcmDep1w = item.closest(".pcm_dep2_wrap");
        const index = Array.from(pcmDep1w.children).indexOf(item.closest("ul"));
        pcmDep1li[index].classList.add("active");
        });

        item.addEventListener("mouseleave", function () {
        pcmDep1li.forEach(function (dep1Item) {
            dep1Item.classList.remove("active");
        });
        });
    });

    pcmDep1li.forEach(function (item, index1) {
        item.addEventListener("mouseenter", function () {
        // 해당 li에 active 클래스 추가
        item.classList.add("active");

        // 연결된 pcmDep2를 찾아서 active 클래스 추가
        const connectedDep2 = pcmDep2[index1];
        connectedDep2.classList.add("active");
        });

        item.addEventListener("mouseleave", function () {
        // 해당 li에서 active 클래스 제거
        item.classList.remove("active");
        // 연결된 pcmDep2를 찾아서 active 클래스 추가
        const connectedDep2 = pcmDep2[index1];
        connectedDep2.classList.remove("active");
        });
    });

    pcmDep2.forEach(function (item) {
        item.addEventListener("mouseleave", function () {
        // 모든 pcmDep2에서 active 클래스 제거
        pcmDep2.forEach(function (dep2Item) {
            dep2Item.classList.remove("active");
        });
        });
    });
});

//메인 업무바로가기, 구매프로세스, ESG경영 카드
$(function () {

    // 카드 hover
    $('.card').on('mouseenter', function (e) {
        e.preventDefault(); // 🔥 a태그 방지

        const target = $(this).data('target');

        $('.card-hover').removeClass('on');
        $('.card-hover.' + target).addClass('on');
    });

    // 🔥 cardWrap 벗어나면만 제거
    $('.cardWrap').on('mouseleave', function () {
        $('.card-hover').removeClass('on');
    });

});

// 서브 탭 sub tab 이동
document.addEventListener('DOMContentLoaded', function() {

    const tabWrap = document.querySelector('.tab_wrap');

    //  활성 탭 중앙으로 스크롤
    function scrollToActiveTab() {
        const active = document.querySelector('.tab_wrap li.on');
        if (!active) return;

        const wrapRect = tabWrap.getBoundingClientRect();
        const activeRect = active.getBoundingClientRect();

        const offset = activeRect.left - wrapRect.left - (tabWrap.clientWidth / 2) + (active.clientWidth / 2);
        tabWrap.scrollLeft += offset;
    }

    //  탭 활성화
    function activateTab(targetId) {
        // li on 제거
        document.querySelectorAll('.tab_wrap li').forEach(li => li.classList.remove('on'));

        // 컨텐츠 숨김
        document.querySelectorAll('.tab_content').forEach(con => con.style.display = 'none');

        // 해당 탭 찾기
        const activeLink = document.querySelector(`.tab_wrap a[href="${targetId}"]`);
        if (!activeLink) return;

        const activeLi = activeLink.closest('li');
        activeLi.classList.add('on');

        // 컨텐츠 표시
        const target = document.querySelector(targetId);
        if (target) target.style.display = 'block';

        // 스크롤 이동
        scrollToActiveTab();
    }

    //  탭 클릭
    document.querySelectorAll('.tab_wrap li a').forEach(tab => {
        tab.addEventListener('click', function(e) {

            // 닫기 버튼 클릭이면 무시
            if (e.target.classList.contains('closeBtn')) return;

            e.preventDefault();

            const targetId = this.getAttribute('href');
            activateTab(targetId);
        });
    });

    //  개별 닫기 (X)
    document.querySelectorAll('.closeBtn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const li = this.closest('li');

            // 활성 탭이면 옆 탭으로 이동
            if (li.classList.contains('on')) {
                let next = li.nextElementSibling || li.previousElementSibling;

                if (next) {
                    const link = next.querySelector('a');
                    activateTab(link.getAttribute('href'));
                } else {
                    // 남은 탭 없으면 컨텐츠 전체 숨김
                    document.querySelectorAll('.tab_content').forEach(con => con.style.display = 'none');
                }
            }

            li.remove();
        });
    });

    //  이전 버튼
    document.querySelector('.tab_prev').addEventListener('click', function() {
        const current = document.querySelector('.tab_wrap li.on');
        if (!current) return;

        const prev = current.previousElementSibling;
        if (!prev) return;

        const link = prev.querySelector('a');
        activateTab(link.getAttribute('href'));
    });

    //  다음 버튼
    document.querySelector('.tab_next').addEventListener('click', function() {
        const current = document.querySelector('.tab_wrap li.on');
        if (!current) return;

        const next = current.nextElementSibling;
        if (!next) return;

        const link = next.querySelector('a');
        activateTab(link.getAttribute('href'));
    });

    //  전체 닫기
    document.querySelector('.tab_close_all').addEventListener('click', function() {
        document.querySelectorAll('.tab_wrap li').forEach(li => li.remove());
        document.querySelectorAll('.tab_content').forEach(con => con.style.display = 'none');
    });

    //  초기 실행 (처음 on 탭 보여주기)
    const first = document.querySelector('.tab_wrap li.on a');
    if (first) {
        activateTab(first.getAttribute('href'));
    }
});