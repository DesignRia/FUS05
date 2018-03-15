$(document).ready(function(){
    console.log('hello');
    var box1 = $('.box1'), box2 = $('.box2');
    var btn = $('.btn');

    // on은 어떤 이벤트가 발생해도 다 제어
    btn.on('click', function(){
        box1.toggleClass('box-act'); //Class라고 알려주므로 . 생략
        //if(box1.hasClass('box-act')){
        //     box1.removeClass('box-act');
        // }else{
        //     box1.addClass('box-act');
        // }
        box2.toggleClass('box-act2');
    });
});