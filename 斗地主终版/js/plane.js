//飞机动画
	function planeAnimate(){
		$('.planeAnimate').css({'display':'block'});
		setTimeout(function(){
			$('.planeAnimate').css({'display':'none'});
		},1500)
	}

	//火箭（王炸）动画
	function rocketAnimate(){
		$('.rocketAnimate,.rocketAnimate_bottom,.rocketAnimate_yan').css({'display':'block'});
		setTimeout(function(){
			$('.rocketAnimate,.rocketAnimate_bottom,.rocketAnimate_yan').css({'display':'none'});
		},1500);
		$('.rocketAnimate_yanquan').css({'display':'block'});
		setTimeout(function(){
			$('.rocketAnimate_yanquan').css({'display':'none'});
		},1800);
	}


	//boom动画
	function boomAnimate(){
		$('.boomAnimate').css({'display':'block'});
		setTimeout(function(){
			$('.boomAnimate').css({'display':'none'});
		},1500);
		$('.boomAnimate_guang').css({'display':'block'});
		setTimeout(function(){
			$('.boomAnimate_guang').css({'display':'none'});
		},1800);
	}
	//春天动画
	function chuntianAnimate(){
		$('.chuntianFont,.chuntianGlass1').css({'display':'block'});
		$('.chuntianFlower1').css({'display':'block'});
		$('.chuntianFlower2').css({'display':'block'});
		$('.chuntianFlower3').css({'display':'block'});
		$('.chuntianFlower4').css({'display':'block'});
		$('.chuntianFlower5').css({'display':'block'});
		$('.chuntianFlower6').css({'display':'block'});
		$('.chuntianFlower7').css({'display':'block'});
		$('.chuntianFlower8').css({'display':'block'});
		$('.chuntianFlower9').css({'display':'block'});
		$('.chuntianFlower10').css({'display':'block'});
		$('.btf1').css({'display':'block'});
		$('.btf2').css({'display':'block'});
		$('.btf3').css({'display':'block'});
		$('.btf4').css({'display':'block'});
	}
	function chuntianAnimate_end(){
		$('.chuntianFont,.chuntianGlass1').css({'display':'none'});
		$('.chuntianFlower1').css({'display':'none'});
		$('.chuntianFlower2').css({'display':'none'});
		$('.chuntianFlower3').css({'display':'none'});
		$('.chuntianFlower4').css({'display':'none'});
		$('.chuntianFlower5').css({'display':'none'});
		$('.chuntianFlower6').css({'display':'none'});
		$('.chuntianFlower7').css({'display':'none'});
		$('.chuntianFlower8').css({'display':'none'});
		$('.chuntianFlower9').css({'display':'none'});
		$('.chuntianFlower10').css({'display':'none'});
		$('.btf1').css({'display':'none'});
		$('.btf2').css({'display':'none'});
		$('.btf3').css({'display':'none'});
		$('.btf4').css({'display':'none'});
	}

	//连对动画
	function pairAnimate(){
		$('.pair2').css({'display':'block'});
		setTimeout(function(){
			$('.pair2').css({'display':'none'});
			$('.pair,.pair2,.pair3,.pair4,.pair5,.pair6,.pair7').css({'display':'block'});
		},300)
		setTimeout(function(){
			$('.pair,.pair2,.pair3,.pair4,.pair5,.pair6,.pair7').css({'display':'none'});
		},2000)
	}

	//顺子动画
	function shunziAnimate(){
		$('.shunzi2').css({'display':'block'});
		setTimeout(function(){
			$('.shunzi1,.shunzi3,.shunzi2,.shunzi4').css({'display':'block'})
		},300);
		setTimeout(function(){
			$('.shunzi1,.shunzi2,.shunzi3,.shunzi4').css({'display':'none'});
		},3000);
	}
