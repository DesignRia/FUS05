$(document).ready(function(){
    // console.log('OK');
    var menubar = $('.menubar, .btn-menubar');
    var bar = $('.menubar');
    var btn = $('.btn-menubar');
    var menu = $('.menu');

    menubar.on('click',function(){
        menu.toggleClass('menu-act'); //Class라고 알려줬으므로 . 삭제
        bar.toggleClass('menubar-act');
        if(menu.hasClass('menu-act')){
            btn.text('메뉴 닫기');
        } else {
            btn.text('메뉴 열기');
        }
    });
    // if문은 끝날때 ;을 넣지 않는다.
});