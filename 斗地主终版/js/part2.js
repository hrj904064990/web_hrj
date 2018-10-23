/*调用 start*/
clickBotton();
/*调用 end*/
/*点击按钮切换界面*/
function clickBotton()
{
	$('.part1_mid').click(function(){
		$('.part1_left').css({'-webkit-animation':'runl 2.5s linear','-webkit-animation-fill-mode':'forwards'});
		$('.part1_right').css({'-webkit-animation':'runr 2.5s linear','-webkit-animation-fill-mode':'forwards'});
		$('.part1_mid').css({'display':'none'});
		$('.part2').css({'-webkit-transform':'scale(1,1)'});
		setTimeout(function(){
			$('.part1').css({'-webkit-transform':'scale(1.5,1.5)','z-index':'10'});
		},1500);
	});
}