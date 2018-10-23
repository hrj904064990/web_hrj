let time = 16;
function countDown(get_play){
		timer=setInterval(function(){
			$('.countDown').eq(get_play).css({'display':'block'});
			time--;
			$('.countDown').eq(get_play).html(time);
			if(time==-1){
				$('.countDown').eq(get_play).css({'display':'none'});
				clearInterval(timer);
				$('.cancel').eq(get_play).click();
				time=16;
				return;
			}
		},1000)
	}

	//出牌倒计时函数
let time2 = 31;
function countDown2(get_play){
	timer2=setInterval(function(){
		$('.countDown').eq(get_play).css({'display':'block'});
		time2--;
		$('.countDown').eq(get_play).html(time2);
		if(time2==-1){
			$('.countDown').eq(get_play).css({'display':'none'});
			clearInterval(timer2);
			$('.pass').eq(get_play).click();
			time2=31;
			return;
		}
	},1000)
}