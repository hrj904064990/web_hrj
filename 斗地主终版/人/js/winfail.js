
window.onload=function win(){
    $('.btn1').click(function(){
      $('#fail_box').css({'display':'none'});
      $('#win_box').css({'display':'block'});
      // $('.mp1').attr({src:'mp3/MusicEx_Win.mp3'});
      // $('.mp1').css({'controls':'controls','autoplay':'true','autostart':'true','hidden':'true','loop':'true'})
});
function fail(){
    setInterval( function(){$('.btn2').click(function(){
            $('#win_box').css({'display':'none'});
            $('#fail_box').css({'display':'block'});
            $('.mp2').attr({src:'mp3/MusicEx_Lose.mp3',controls:'controls',autoplay:'true',autostart:'true',hidden:'true',loop:'loop'});
          });
      },500)
    }
    fail();
}
