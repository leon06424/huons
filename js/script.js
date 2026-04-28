// // 헤더
// document.addEventListener("DOMContentLoaded", function () {
//     const pcHeader = document.getElementById("pc_header");
//     const pcmDep1Items = document.querySelectorAll(".pcm_dep1 li");
//     const pcmDep2Items = document.querySelectorAll(".pcm_dep2");
//     const gnbSub = document.querySelector(".gnb_sub");
//     const w_100p = document.querySelector("#pc_header #pc_menu_wrap .w_100p");

//     pcHeader.addEventListener("mouseenter", function () {
//         // pc_header에 마우스가 들어왔을 때, gnb_sub를 표시하고 height를 230px로 설정
//         gnbSub.style.height = "230px";
//     });

//     pcHeader.addEventListener("mouseleave", function () {
//         // pc_header에서 마우스가 떠날 때, gnb_sub를 숨기고 height를 0px로 설정
//         gnbSub.style.height = "0px";
//     });

//     gnbSub.addEventListener("mouseenter", function () {
//         // gnb_sub에 마우스가 들어왔을 때, height를 230px로 유지
//         gnbSub.style.height = "230px";
//     });

//     gnbSub.addEventListener("mouseleave", function () {
//         // gnb_sub에서 마우스가 떠날 때, height를 0px로 설정하여 숨깁니다.
//         gnbSub.style.height = "0px";
//     });

//     pcmDep1Items.forEach(function (item) {
//         item.addEventListener("mouseenter", function () {
//         // pcm_dep1 li에 마우스가 들어왔을 때, gnb_sub를 표시하고 height를 230px로 설정
//         gnbSub.style.height = "230px";
//         gnbSub.classList.add("active");
//         item.classList.add("active");
//         });

//         item.addEventListener("mouseleave", function () {
//         // pcm_dep1 li에서 마우스가 떠날 때, gnb_sub를 숨기고 height를 0px로 설정
//         gnbSub.style.height = "0px";
//         gnbSub.classList.remove("active");
//         item.classList.remove("active");
//         });
//     });

//     pcmDep2Items.forEach(function (item) {
//         item.addEventListener("mouseenter", function () {
//         // pcm_dep2 li에 마우스가 들어왔을 때, gnb_sub를 표시하고 height를 230px로 설정
//         gnbSub.style.height = "230px";
//         gnbSub.classList.add("active");
//         // 해당 li가 속한 .pcm_dep2에 'active' 클래스 추가
//         const pcmDep2 = item.closest(".pcm_dep2");
//         pcmDep2.classList.add("active");
//         });

//         item.addEventListener("mouseleave", function () {
//         // 해당 li가 속한 .pcm_dep2_wrap에 'active' 클래스 제거
//         const pcmDep2 = item.closest(".pcm_dep2");
//         pcmDep2.classList.remove("active");
//         gnbSub.classList.remove("active");
//         });
//     });

//     const pcmDep1li = document.querySelectorAll(".pcm_dep1 > li");
//     const pcmDep2 = document.querySelectorAll(".pcm_dep2");

//     pcmDep2.forEach(function (item) {
//         item.addEventListener("mouseenter", function () {
//         const pcmDep1w = item.closest(".pcm_dep2_wrap");
//         const index = Array.from(pcmDep1w.children).indexOf(item.closest("ul"));
//         pcmDep1li[index].classList.add("active");
//         });

//         item.addEventListener("mouseleave", function () {
//         pcmDep1li.forEach(function (dep1Item) {
//             dep1Item.classList.remove("active");
//         });
//         });
//     });

//     pcmDep1li.forEach(function (item, index1) {
//         item.addEventListener("mouseenter", function () {
//         // 해당 li에 active 클래스 추가
//         item.classList.add("active");

//         // 연결된 pcmDep2를 찾아서 active 클래스 추가
//         const connectedDep2 = pcmDep2[index1];
//         connectedDep2.classList.add("active");
//         });

//         item.addEventListener("mouseleave", function () {
//         // 해당 li에서 active 클래스 제거
//         item.classList.remove("active");
//         // 연결된 pcmDep2를 찾아서 active 클래스 추가
//         const connectedDep2 = pcmDep2[index1];
//         connectedDep2.classList.remove("active");
//         });
//     });

//     pcmDep2.forEach(function (item) {
//         item.addEventListener("mouseleave", function () {
//         // 모든 pcmDep2에서 active 클래스 제거
//         pcmDep2.forEach(function (dep2Item) {
//             dep2Item.classList.remove("active");
//         });
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const pcHeader = document.getElementById("pc_header");
    const pcmDep1Items = document.querySelectorAll(".pcm_dep1 > li");
    const pcmDep2Items = document.querySelectorAll(".pcm_dep2");
    const gnbSub = document.querySelector(".gnb_sub");

    let isOpen = false; // 열림 상태 체크

    // 높이 계산 (딱 1번만 실행됨)
    function setGnbHeight() {
        const wrap = gnbSub.querySelector(".pcm_dep2_wrap");
        const bannerLeft = gnbSub.querySelector(".header_banner.left");
        const bannerRight = gnbSub.querySelector(".header_banner.right");

        const heights = [
            wrap ? wrap.scrollHeight : 0,
            bannerLeft ? bannerLeft.offsetHeight : 0,
            bannerRight ? bannerRight.offsetHeight : 0
        ];

        const maxHeight = Math.max(...heights);

        // 60px 추가
        gnbSub.style.height = (maxHeight + 60) + "px";
    }

    // 메뉴 열기 (한 번만 height 계산)
    function openGnb() {
        if (!isOpen) {
            setGnbHeight();
            isOpen = true;
        }
        gnbSub.classList.add("active");
    }

    // 메뉴 닫기
    function closeGnb() {
        gnbSub.style.height = "0px";
        gnbSub.classList.remove("active");

        pcmDep1Items.forEach(li => li.classList.remove("active"));
        pcmDep2Items.forEach(ul => ul.classList.remove("active"));

        isOpen = false;
    }

    // header 영역
    pcHeader.addEventListener("mouseenter", openGnb);
    pcHeader.addEventListener("mouseleave", closeGnb);

    // gnb_sub 영역 유지
    gnbSub.addEventListener("mouseenter", openGnb);
    gnbSub.addEventListener("mouseleave", closeGnb);

    // 1depth → 2depth 연결
    pcmDep1Items.forEach(function (item, index) {
        item.addEventListener("mouseenter", function () {
            openGnb();

            pcmDep1Items.forEach(li => li.classList.remove("active"));
            pcmDep2Items.forEach(ul => ul.classList.remove("active"));

            item.classList.add("active");

            if (pcmDep2Items[index]) {
                pcmDep2Items[index].classList.add("active");
            }
        });
    });

    // 2depth hover 시 1depth 활성화
    pcmDep2Items.forEach(function (item, index) {
        item.addEventListener("mouseenter", function () {
            openGnb();

            pcmDep1Items.forEach(li => li.classList.remove("active"));
            pcmDep2Items.forEach(ul => ul.classList.remove("active"));

            item.classList.add("active");

            if (pcmDep1Items[index]) {
                pcmDep1Items[index].classList.add("active");
            }
        });
    });
});

//메인 업무바로가기, 구매프로세스, ESG경영 카드
$(function () {

    // 카드 hover
    $('.card').on('mouseenter', function (e) {
        e.preventDefault(); // a태그 방지

        const target = $(this).data('target');

        $('.card-hover').removeClass('on');
        $('.card-hover.' + target).addClass('on');
    });

    // cardWrap 벗어나면만 제거
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

// 회원가입 전체동의 체크, 개별체크 전부 하면 전체동의 체크
document.addEventListener('DOMContentLoaded', function(){

    const allAgree = document.getElementById('all_agree');
    const checkboxes = document.querySelectorAll('#board .board_contents input[type="checkbox"]');

    // ❗ 핵심
    if (!allAgree) return;

    // 전체동의 클릭
    allAgree.addEventListener('change', function(){
        checkboxes.forEach(chk => {
            chk.checked = allAgree.checked;
        });
    });

    // 개별 체크 클릭
    checkboxes.forEach(chk => {
        chk.addEventListener('change', function(){
            const total = checkboxes.length;
            const checked = document.querySelectorAll('#board .board_contents input[type="checkbox"]:checked').length;

            allAgree.checked = (total === checked);
        });
    });

});

// 회원가입 join03 파일첨부
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.join_table .flex').forEach(function (wrap) {
        const btn = wrap.querySelector('.upload-btn');
        const fileInput = wrap.querySelector('input[type="file"]');
        const textInput = wrap.querySelector('input[type="text"]');

        // null 체크
        if (!btn || !fileInput || !textInput) return;

        btn.addEventListener('click', function () {
            fileInput.click();
        });

        fileInput.addEventListener('change', function () {
            if (this.files.length > 0) {
                textInput.value = this.files[0].name;
            }
        });
    });
});
// 명함 이미지 썸네일 미리보기
document.querySelectorAll('.card-upload').forEach(function (wrap) {
    const btn = wrap.querySelector('.upload-btn');
    const fileInput = wrap.querySelector('.file-input');
    const textInput = wrap.querySelector('input[type="text"]');
    const img = wrap.querySelector('.preview-img');
    const placeholder = wrap.querySelector('.placeholder');

    if (!btn || !fileInput) return;

    // 버튼 클릭
    btn.addEventListener('click', function () {
        fileInput.click();
    });

    // 파일 선택
    fileInput.addEventListener('change', function () {
        const file = this.files[0];
        if (!file) return;

        // 파일명 표시
        textInput.value = file.name;

        // 이미지 미리보기
        const reader = new FileReader();
        reader.onload = function (e) {
            img.src = e.target.result;
            img.style.display = 'block';
            placeholder.style.display = 'none';
        };
        reader.readAsDataURL(file);
    });
});

// 견적페이지 tr 클릭시 링크 이동
$(document).on('click', '.click-row', function(e){
    // a 클릭 시 중복 이동 방지
    if($(e.target).is('a')) return;

    const url = $(this).data('href');
    if(url){
        location.href = url;
    }
});

// 견적페이지 파일 추가
const addFileBtn = document.getElementById('addFileBtn');
const fileList = document.getElementById('fileList');
const fileInputs = document.getElementById('fileInputs');

if (addFileBtn && fileList && fileInputs) {
    addFileBtn.addEventListener('click', function () {

        const input = document.createElement('input');
        input.type = 'file';
        input.name = 'files[]';
        input.style.display = 'none';

        input.addEventListener('change', function () {
            if (this.files.length > 0) {
                const fileName = this.files[0].name;

                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';

                const span = document.createElement('span');
                span.className = 'file-name';
                span.textContent = fileName;

                const removeBtn = document.createElement('span');
                removeBtn.className = 'file-remove';
                removeBtn.textContent = '✕';

                removeBtn.addEventListener('click', function () {
                    fileItem.remove();
                    input.remove();
                });

                fileItem.appendChild(span);
                fileItem.appendChild(removeBtn);

                fileList.appendChild(fileItem);
            }
        });

        fileInputs.appendChild(input);
        input.click();
    });
}

// 견적포기 팝업
// 열기
document.querySelectorAll('.openModal').forEach(btn => {
    btn.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('estimateModal').style.display = 'block';
    });
});

// 취소 버튼 닫기
const cancelBtn = document.querySelector('.btn-cancel');

if (cancelBtn) {
    cancelBtn.addEventListener('click', function(){
        const modal = document.getElementById('estimateModal');
        if (modal) modal.style.display = 'none';
    });
}

// 배경 클릭 시 닫기
const modal = document.getElementById('estimateModal');

if (modal) {
    modal.addEventListener('click', function(e){
        if(e.target === this){
            this.style.display = 'none';
        }
    });
}

// ESC 눌러서 닫기 
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        document.getElementById('estimateModal').style.display = 'none';
    }
});

// 신규제품제안 view 파일첨부
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('upload-btn')) {
        const wrap = e.target.closest('.file-upload');
        const fileInput = wrap.querySelector('input[type="file"]');
        fileInput.click();
    }
});

document.addEventListener('change', function (e) {
    if (e.target.matches('.file-upload input[type="file"]')) {
        const wrap = e.target.closest('.file-upload');
        const textInput = wrap.querySelector('input[type="text"]');

        if (e.target.files.length > 0) {
            textInput.value = e.target.files[0].name;
        }
    }
});