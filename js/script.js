// 헤더
document.addEventListener("DOMContentLoaded", function () {
    const pcHeader = document.getElementById("pc_header");
    const pcmDep1Items = document.querySelectorAll(".pcm_dep1 li");
    const pcmDep2Items = document.querySelectorAll(".pcm_dep2");
    const gnbSub = document.querySelector(".gnb_sub");
    const w_100p = document.querySelector("#pc_header #pc_menu_wrap .w_100p");

    pcHeader.addEventListener("mouseenter", function () {
        // pc_header에 마우스가 들어왔을 때, gnb_sub를 표시하고 height를 256px로 설정
        gnbSub.style.height = "256px";
    });

    pcHeader.addEventListener("mouseleave", function () {
        // pc_header에서 마우스가 떠날 때, gnb_sub를 숨기고 height를 0px로 설정
        gnbSub.style.height = "0px";
    });

    gnbSub.addEventListener("mouseenter", function () {
        // gnb_sub에 마우스가 들어왔을 때, height를 256px로 유지
        gnbSub.style.height = "256px";
    });

    gnbSub.addEventListener("mouseleave", function () {
        // gnb_sub에서 마우스가 떠날 때, height를 0px로 설정하여 숨깁니다.
        gnbSub.style.height = "0px";
    });

    pcmDep1Items.forEach(function (item) {
        item.addEventListener("mouseenter", function () {
        // pcm_dep1 li에 마우스가 들어왔을 때, gnb_sub를 표시하고 height를 256px로 설정
        gnbSub.style.height = "256px";
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
        // pcm_dep2 li에 마우스가 들어왔을 때, gnb_sub를 표시하고 height를 256px로 설정
        gnbSub.style.height = "256px";
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