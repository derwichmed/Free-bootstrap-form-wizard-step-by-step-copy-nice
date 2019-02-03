$(function (){
    $('.form_wizard section .form_control input').focus(function (){
        $('.form_wizard section .form_control em:visible').hide();
        $(this).parent().find('em').show();
    });
    
    nbrStep = 0;
    $('.nxt_step').click(function (){
       nbrStep = nbrStep + 1;
       if(nbrStep == $('.form_wizard header .item').length - 1){
            $('.form_wizard footer > div:last-child input').hide();
            $('.form_wizard footer > div .submit_form').show();
       }
       $('.form_item:visible').hide();
       $('.form_item').eq(nbrStep).show();
       $('.form_wizard header .item').eq(nbrStep - 1).removeClass("loding");
       $('.form_wizard header .item').eq(nbrStep - 1).addClass("check");
       $('.form_wizard header .item').eq(nbrStep - 1).find('img')
               .attr('src',$('.form_wizard header .item').eq(nbrStep - 1).
               find('img').attr('chek-img'));
       
       $('.form_wizard header .item').eq(nbrStep).removeClass("disable");
       $('.form_wizard header .item').eq(nbrStep).addClass("loding");
    });
    
    $('.pre_step').click(function (){
       nbrStep = nbrStep - 1;
       if(nbrStep < 0){
           nbrStep = 0;
       }
       $('.form_item:visible').hide();
       $('.form_item').eq(nbrStep).show();
       
       $('.form_wizard footer > div:last-child input:hidden').show();
       $('.form_wizard footer > div .submit_form:visible').hide();
       $('.form_wizard header .item').eq(nbrStep + 1).removeClass("loding");
       $('.form_wizard header .item').eq(nbrStep + 1).addClass("disable");
       
       $('.form_wizard header .item').eq(nbrStep).find('img')
               .attr('src',$('.form_wizard header .item').eq(nbrStep).
               find('img').attr('init-img'));
       
       $('.form_wizard header .item').eq(nbrStep).removeClass("check");
       $('.form_wizard header .item').eq(nbrStep).addClass("loding");
       
    });
});