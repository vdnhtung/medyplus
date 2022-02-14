$(document).ready(function () {
    $('.web-info-button').click(function (e) { 
        e.preventDefault();
        $(this).find('.info-content').toggle('show');
        $(this).siblings().toggle('hide');
    });
    $('.nav-icon').click(function (e) { 
        e.preventDefault();
        $('.navbar').addClass('active');
        $('.cover').addClass('active');
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.navbar').removeClass('active');
        $('.cover').removeClass('active');
    });
    var day = $('.days span').html();
    var hrs = $('.hours span').html();
    var min = $('.mins span').html();
    var sec = $('.secs span').html();
    setInterval(function(){
        sec--;
        if (sec==-1) {
            sec=59;
            min--;
            if (min==-1) {
                mins=59;
                hrs--;
                if (hrs==-1) {
                    hrs=23;
                    day--;
                }
            }
        }
        $('.days span').html(day);
        $('.hours span').html(hrs);
        $('.mins span').html(min); 
        $('.secs span').html(sec);
    }, 1000);
});