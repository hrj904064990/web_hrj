$(function(){
	let click_count=1;
	let shuffle_status=false;
	let num=0;
	let play1_time_status=false;
	let play2_time_status=true;
	let play3_time_status=true;
	let all_poker=[];
	let chushiImg='./images/defaultHeader.png';
	let player1=new player('李雷',1000,[],'0','0',chushiImg,0);
	let player2=new player('韩梅梅',1000,[],'0','0',chushiImg,0);
	let player3=new player('杰克',1000,[],'0','0',chushiImg,0);
	let all_player=[player1,player2,player3];
	let selectPoker=new comparePoker([],0,0);
	let tablePoker=new comparePoker([],0,0);
	let gameSituation=new game(null,selectPoker,tablePoker);
	let clickcancel_status=false;
	let clickplayout_status=false;
	let clickqiang_status=false;
	let clickbuqiang_status=false;
	let tempPoker=[];
	/*调用 start*/
	/*调用 end*/
	/*遍历初始牌*/
	/*初始化数据*/
	for(let i=1;i<=13;i++)
	{
		for(let j=0;j<4;j++)
		{
			let my_poker=new poker(i,j);
			all_poker.push(my_poker);
		}
	}	
	my_poker_dagui=new poker(14,0);
	my_poker_xiaogui=new poker(14,1);
	all_poker.push(my_poker_dagui);
	all_poker.push(my_poker_xiaogui);
	/*初始化排序*/
	for(let i=0;i<10;i++)
	{
		all_poker.sort(function(){
			return Math.random()-0.5;
		});
	}
	console.log(all_poker);
	for(let i=0;i<54;i++)
	{
		let $poker_li=$('<li class="back"></li>').css({'top':-i});
		$('.all_poker').append($poker_li);
	}
	
	$('body').on('click','.all_poker>li',function(){	
		if(!shuffle_status)
		{
			shuffle_status=true;
			if(click_count==1)
			{		
				shuffle();
				click_count++;
			}
			else if(click_count==2)
			{
				 deal();
				 click_count++;
				 music('images/Special_Dispatch.mp3');
			}
		}
	});
	/*洗牌方法*/
	function shuffle()
	{
		for(let i=0;i<55;i++){
			if(i%4==0){
				setTimeout(function(){
					$('.all_poker li:nth-child('+i+')').animate({left:'-400px',top:''+50-i/2+'px'},200).addClass('rotate');
				},i*20)
			}else if(i%4==1){
				setTimeout(function(){
					$('.all_poker li:nth-child('+i+')').animate({left:'400px',top:''+50-i/2+'px'},200).addClass('rotate');
				},i*20)
			}else if(i%4==2){
				setTimeout(function(){
					$('.all_poker li:nth-child('+i+')').animate({left:'-400px',top:''+400-i/2+'px'},200).addClass('rotate');
				},i*20)
			}else{
				setTimeout(function(){
					$('.all_poker li:nth-child('+i+')').animate({left:'400px',top:''+400-i/2+'px'},200).addClass('rotate');
				},i*20)
			}
		}
		setTimeout(function(){
			for(let i=0;i<55;i++){
				if(i%2==0){
					setTimeout(function(){
						$('.all_poker li:nth-child('+i+')').animate({left:'0px',top:''+200-i*2+'px'},200).removeClass('rotate');
					},i*30)
				}else{
					setTimeout(function(){
						$('.all_poker li:nth-child('+i+')').animate({left:'0px',top:''+200-i*2+'px'},200).removeClass('rotate');
					},i*30)
				}
			}
		},3500)
		setTimeout(function(){
			for(let i=0;i<55;i++){
				setTimeout(function(){
					$('.all_poker li:nth-child('+i+')').animate({left:'0px',top:''+0+'px'},100).addClass('rotate');
				},i*30)
			}
		},4000)
		setTimeout(function(){
			for(let i=0;i<55;i++){
				setTimeout(function(){
					$('.all_poker li:nth-child('+i+')').animate({left:'0px',top:''+-i+'px'},100).removeClass('rotate');
				},i*30)
			}
			shuffle_status=false;
		},8000)
	}
	/*发牌方法*/
	function deal(num)
	{
		if(num==undefined)
		{
			num=0;
		}
		//头像显示
		for(let i=0;i<all_player.length;i++)
		{
			$('.jifen').eq(i).css({display:'block'});
		}
		if(num<17)
		{
			$('.all_poker>li:last').animate({'left':-500,'top':100},50);
			setTimeout(function(){
				$('.all_poker>li:last').remove();
				all_player[0].poker.push(all_poker.pop());
				$('.play_1').append(pokerHtml(all_player[0].poker[all_player[0].poker.length-1]));
				$('.play_1>li:last').css({'top':20*num});
			},55);	
			setTimeout(function(){
				$('.all_poker>li:last').animate({'top':400},50);
				$('.all_poker>li:last').remove();
				all_player[1].poker.push(all_poker.pop());
				$('.play_2').append(pokerHtml(all_player[1].poker[all_player[1].poker.length-1]));
				$('.play_2>li:last').css({'left':30*num});
				$('.play_2').css({'left':-15*num});
			},58);	
			setTimeout(function(){
				$('.all_poker>li:last').animate({'left':500,'top':100},50);
				setTimeout(function()
				{
					$('.all_poker>li:last').remove();
					all_player[2].poker.push(all_poker.pop());
					$('.play_3').append(pokerHtml(player3.poker[player3.poker.length-1]));
					setTimeout(function(){
						$('.play_3>li:last').css({'top':20*num});
					},300);
					deal(num+1);
				},55);
			},116);
			// console.log('num  '+num);
		}
		else
		{
			$('.all_poker>li').eq(0).animate({'left':-200},500);
			$('.all_poker>li').eq(1).animate({'left':0},500);
			$('.all_poker>li').eq(2).animate({'left':200},500);

			 $('.play_1>li').animate({'top':0},500).parent().animate({'top':0},500).children().css({'background':'url("./images/14.png")','background-position':'-87px -225px'});	
			 $('.play_2>li').animate({'left':0},500).parent().animate({'left':0},500).children().css({'background':'url("./images/14.png")','background-position':'-87px -225px'});	
			 $('.play_3>li').animate({'top':0},500).parent().animate({'top':0},500).children().css({'background':'url("./images/14.png")','background-position':'-87px -225px'});		
			setTimeout(function(){
				sortAll();
				getDiZhu();
			},500);
			// console.log('num  '+num);		
		}
	}
	function pokerHtml(pokerdata)
	{
		let htmlstr='';
		let typearr=[
			['-17','-225'],  //方块
			['-17','-5'],//梅花
			['-160','-5'],//红心
			['-160','-225']//黑桃
		];
		let x,y=0;
		if(pokerdata.value<14)
		{
			x=typearr[pokerdata.type][0];
			y=typearr[pokerdata.type][1];
		}
		else
		{
			if(pokerdata.type==0)
			{
				x=typearr[2][0];
				y=typearr[2][1];
			}
			else{
				x=typearr[1][0];
				y=typearr[1][1];
			}
		}
		htmlstr+='<li style="width: 125px; height: 175px; background: url(./images/'+pokerdata.value+'.png) '+x+'px '+y+'px;" data-value="'+pokerdata.value+'" data-type="'+pokerdata.type+'"></li>';
		return	htmlstr;
	}
	function pokerHtml2(pokerdata)
	{
		let htmlstr='';
		let typearr=[
			['-17','-225'],  //方块
			['-17','-5'],//梅花
			['-160','-5'],//红心
			['-160','-225']//黑桃
		];
		let x,y=0;
		if(pokerdata.value<14)
		{
			x=typearr[pokerdata.type][0];
			y=typearr[pokerdata.type][1];
		}
		else
		{
			if(pokerdata.type==0)
			{
				x=typearr[2][0];
				y=typearr[2][1];
			}
			else{
				x=typearr[1][0];
				y=typearr[1][1];
			}
		}
		// htmlstr+='<li background: url(./images/'+pokerdata.value+'.png) '+x+'px '+y+'px;" data-value="'+pokerdata.value+'" data-type="'+pokerdata.type+'"></li>';
		htmlstr+='<li style="background: url(./images/'+pokerdata.value+'.png) '+x+'px '+y+'px;" data-value="'+pokerdata.value+'" data-type="'+pokerdata.type+'"></li>';
		return	htmlstr;
	}
	/*所有玩家从新把牌排序*/
	function sortAll()
	{
		sortPlayer(all_player[0].poker);
		sortPlayer(all_player[1].poker);
		sortPlayer(all_player[2].poker);
		setTimeout(function(){
			$('.play_1>li').remove();
			$('.play_2>li').remove();
			$('.play_3>li').remove();
			for(let i=0;i<all_player[0].poker.length;i++)
			{
				$('.play_1').append(pokerHtml(all_player[0].poker[i]));
				$('.play_1>li:last').css({'top':20*i});
			}
			for(let j=0;j<all_player[1].poker.length;j++)
			{
				$('.play_2').append(pokerHtml(all_player[1].poker[j]));
				$('.play_2').css({'left':-15*j});
				$('.play_2>li:last').css({'left':30*j});						
				// console.log('j  '+j);
			}
			for(let k=0;k<all_player[2].poker.length;k++)
			{
				$('.play_3').append(pokerHtml(all_player[2].poker[k]));
				$('.play_3>li:last').css({'top':20*k});
			}
		},500)
	}
	/*给每一位玩家的牌排序*/
	function sortPlayer(player_poker){
		player_poker.sort(function(x,y){
			if(x.value != y.value)
			{
				return x.value-y.value;
			}
			else
			{
				return x.type-y.type;
			}
		});
	}
	/*确定哪位玩家是地主*/
	function getDiZhu(getPlay,cancelNumber)
	{
		if(getPlay==undefined)
		{
			getPlay=Math.floor(Math.random()*3);
		}
		if(cancelNumber==undefined)
		{
			cancelNumber=0;
		}
		
		// 调用倒计时函数
		countDown(getPlay);

		/*按钮显示*/	
		$('.play_btn').eq(getPlay).css('display','block');
		/*抢地主*/
		$('.play_btn').eq(getPlay).on('click','.get',function(){
			if(!clickqiang_status)
			{
				//显示地主标识
				$('.dizhu').eq(getPlay).css({'display':'block'});
				//调用音频
				music('images/Man_Order.mp3')
				//清除计时器
				clearInterval(timer);
				$('.countDown').eq(getPlay).css({'display':'none'});
				time = 16;

				clickqiang_status=true;
				console.log('抢地主');
				$('.play_btn').eq(getPlay).off('click','.get');
				$('.play_btn').eq(getPlay).off('click','.cancel');
				$('.play_btn').css('display','none');
				for(let i=0;i<all_player.length;i++)
				{
					all_player[i].img='./images/head.jpg';
				}
				/*设置谁是地主，当role为1的时候为地主，为0时为农民*/
				all_player[getPlay].role='1';
				/*设置谁是地主，当role为1的时候为地主，为0时为农民,该值是最后用来判断是地主赢还是农民赢*/
				all_player[getPlay].role2='1';
				all_player[getPlay].img='./images/head_boss.jpg';
				console.log(all_player[getPlay].img);
				/*翻开地主牌 start*/
				let all_poker_str=""
				setTimeout(function()
				{	
					for(let i=0;i<all_poker.length;i++)
					{		
						all_poker_str+=pokerHtml(all_poker[i])
					}
					$('.all_poker>li').remove();
					$('.all_poker').append(all_poker_str);
					$('.all_poker>li').eq(0).animate({'left':-200,'top':-50},500);
					$('.all_poker>li').eq(1).animate({'left':0,'top':-50},500);
					$('.all_poker>li').eq(2).animate({'left':200,'top':-50},500);
				},500);
				/*翻开地主牌 end*/
				/*把地主牌发到地主上*/
				let pokerHtml_str='';
				for(let i=0;i<all_poker.length;i++)
				{
					all_player[getPlay].poker.push(all_poker[i]);
					pokerHtml_str=pokerHtml(all_player[getPlay].poker[i]);
					$('.play').eq(getPlay).append(pokerHtml_str);
					if(getPlay==1)
					{
						$('.play').eq(getPlay).find('li:last').css({left:(17+i)*30});
					}
					else if(getPlay==0)
					{
						$('.play').eq(getPlay).find('li:last').css({top:(17+i)*20});
					}
					else if(getPlay==2)
					{
						$('.play').eq(getPlay).find('li:last').css({top:(17+i)*20});
					}
				}
				console.log(all_player[getPlay].poker.length);
				console.log(all_player[0].poker.length);
				console.log(all_player[1].poker.length);
				console.log(all_player[2].poker.length);
				console.log(typeof getPlay);
				console.log(getPlay);
				
				/*地主牌分配到地主玩家后重新排序*/
				$('.play_1>li').animate({'top':0},500).parent().animate({'top':0},500).children().css({'background':'url("./images/14.png")','background-position':'-87px -225px'});	
				$('.play_2>li').animate({'left':0},500).parent().animate({'left':0},500).children().css({'background':'url("./images/14.png")','background-position':'-87px -225px'});	
				$('.play_3>li').animate({'top':0},500).parent().animate({'top':0},500).children().css({'background':'url("./images/14.png")','background-position':'-87px -225px'});
				
				setTimeout(function(){
					sortAll();
				},500);
				setTimeout(function(){
					$('.outpokerplace').css({'display':'block'});
				},520)
				/*游戏开始*/
				if(all_player[getPlay].role=='1')
				{
					$('.play_btn2').eq(getPlay).off('click','.pass');
				}
				/*生成对应头像*/
				for(let i=0;i<all_player.length;i++)
				{
					console.log(all_player[i].img);
					$('.jifen').eq(i).find('.top').css({'background':'url('+all_player[i].img+') no-repeat','background-size':'55px'});
					$('.jifen').eq(i).find('.center').html(all_player[i].name);
					$('.jifen').eq(i).find('.bottom_right').html(all_player[i].jifen);
				}
				startGame(getPlay,0);
				setTimeout(function(){
					clickqiang_status=false;
				},500);
			}
		});
		/*不抢地主*/
		$('.play_btn').eq(getPlay).on('click','.cancel',function(){
			if(!clickbuqiang_status)
			{
				//调用音频函数
				music('images/Man_NoRob.mp3');
				// 清除计时器
				clearInterval(timer);
				$('.countDown').eq(getPlay).css({'display':'none'});
				time=16;

				clickbuqiang_status=true;
				cancelNumber++;
				$('.play_btn').css('display','none');
				if(cancelNumber>2)
				{
					window.location.href=window.location.href;
				}		
				else
				{
					getPlay=++getPlay>2?0:getPlay;
					getDiZhu(getPlay,cancelNumber);

					//调用计时器函数
					clearInterval(timer);
					countDown(getPlay);
				}
			}
			setTimeout(function(){
				clickbuqiang_status=false;
			},500);
		});
	}
	/*开始游戏*/
	function startGame(index,cancelNum)
	{
		//调用计时器
		countDown2(index);

		//初始化页面元素与事件
		$('.play_btn2').css({'display':'none'});
		// 解绑选牌事件
		$('.play').off('click','li');
		// 解绑出牌事件
		$('.play_btn2').off('click', '.play_out');
		// 解绑过牌事件
		$('.play_btn2').off('click', '.pass');
		// 解绑提示事件
		$('.play_btn2').off('click','.tip');
		//让对应按钮显示
		$('.play_btn2').eq(index).css({'display':'block'});
		if(cancelNum==2)
		{
			gameSituation.tablePoker.poker_arr=[];
			gameSituation.tablePoker.type=0;
			gameSituation.tablePoker.value=0;
			gameSituation.selectPoker.poker_arr==[];
			gameSituation.selectPoker.type=0;
			gameSituation.selectPoker.value=0;
		}
		else
		{
			/*绑定点击事件，点击提示*/
			clickTip(gameSituation.selectPoker,gameSituation.tablePoker,index,cancelNum);
		}
		/*绑定点击事件，点击卡牌，卡牌向上，再点击卡牌向下*/
		clickSelect(index,cancelNum);
		/*绑定点击事件，点击出牌*/
		clickChuPai(index,cancelNum);
		/*绑定点击事件，点击不出牌*/
		clickPass(index,cancelNum);	
	}
	/*定义提示*/
	function clickTip(selectPoker,tablePoker,index,cancelNum)
	{
		$('.play_btn2').eq(index).on('click','.tip',function(){
			selectPoker.poker_arr=[];
			myAi(selectPoker,tablePoker,index,cancelNum);
		});
	}

	/*定义过牌*/
	function clickPass(index,cancelNum)
	{
		$('.play_btn2').eq(index).on('click','.pass',function(){		
			if(!clickcancel_status)
			{		
				if(all_player[index].role!='1')
				{
					clickcancel_status=true;
					for(let i=0;i<$('.play').eq(index).children().length;i++)
					{
						if($('.play').eq(index).children().eq(i).attr('class') == 'select' || $('.play').eq(index).children().eq(i).attr('class') == 'selectLeft' || $('.play').eq(index).children().eq(i).attr('class') == 'selectRight')
						{
							/*生成临时扑克牌，比较后把相同的扑克牌删除掉*/
							if(index==0)
							{
								$('.play').eq(index).children().eq(i).removeClass('selectLeft');
								delePoker(tempPoker);
							}
							else if(index==1)
							{
								$('.play').eq(index).children().eq(i).removeClass('select');
								delePoker(tempPoker);
							}
							else if(index==2)
							{
								$('.play').eq(index).children().eq(i).removeClass('selectRight');
								delePoker(tempPoker);
							}								
							console.log(gameSituation.selectPoker.poker_arr);
						}
					}
					if(cancelNum<2)
					{
						//调用音频函数
						let x = Math.random();
						if(x<0.25){
							music('images/Man_buyao4.mp3')
						}else if(x<0.5&&x>=0.25){
							music('images/Man_buyao3.mp3')
						}else if(x<0.75&&x>=0.5){
							music('images/Man_buyao2.mp3')
						}else{
							music('images/Man_buyao1.mp3')
						}
						cancelNum++;

						//清除计时器
						clearInterval(timer2);
						$('.countDown').eq(index).css({'display':'none'});
						
						index=++index>2?0:index;

						//清除计时器
						clearInterval(timer2);
						time2=31;

						startGame(index,cancelNum);
					}	
					// console.log('li:'+$('.play').eq(index).children().length);
					
					tempPoker=[];	
					// gameSituation.selectPoker.poker_arr=[];
					// console.log(cancelNum);			
					setTimeout(function(){
						clickcancel_status=false;
					},500);
					console.log(cancelNum);
				}
			}
		});
	}
	/*定义选牌*/
	function clickSelect(index,cancelNum)
	{
		$('.play').eq(index).on('click','li',function(){
			let $data_value=$(this).attr('data-value')*1;
			let $data_type=$(this).attr('data-type')*1;
			tempPoker=new poker($data_value,$data_type);
			// console.log(tempPoker);
			if($(this).attr('class') == 'select' || $(this).attr('class') == 'selectLeft' || $(this).attr('class') == 'selectRight')
			{
				/*生成临时扑克牌，比较后把相同的扑克牌删除掉*/
				if(index==0)
				{
					$(this).removeClass('selectLeft');
					delePoker(tempPoker);
				}
				else if(index==1)
				{
					$(this).removeClass('select');
					delePoker(tempPoker);
				}
				else if(index==2)
				{
					$(this).removeClass('selectRight');
					delePoker(tempPoker);
				}
			}
			else
			{
				if(index==0)
				{
					$(this).addClass('selectLeft');
					gameSituation.selectPoker.poker_arr.push(tempPoker);
				}
				else if(index==1)
				{
					$(this).addClass('select');
					gameSituation.selectPoker.poker_arr.push(tempPoker);
				}
				else if(index==2)
				{
					$(this).addClass('selectRight');
					gameSituation.selectPoker.poker_arr.push(tempPoker);
				}
				tempPoker=[];
				// console.log(gameSituation.selectPoker.poker_arr);
			}
		});
	}
	/*定义出牌*/
	function clickChuPai(index,cancelNum)
	{
		$('.play_btn2').eq(index).on('click','.play_out',function(){
			if(!clickplayout_status && gameSituation.selectPoker.poker_arr.length !=0)
			{
				clickplayout_status=true;
				// 调用检查牌型方法
				checkPoker(gameSituation.selectPoker);
				if(gameSituation.selectPoker.type == 0)
				{
					// gameSituation.selectPoker.poker_arr=[];
					console.dir('手上：'+gameSituation.selectPoker.poker_arr);
					console.log('手上：'+gameSituation.selectPoker.type);
					console.log('手上：'+gameSituation.selectPoker.value);
					console.dir('桌面:'+gameSituation.tablePoker.poker_arr);
					console.log('桌面:'+gameSituation.tablePoker.type);
					console.log('桌面:'+gameSituation.tablePoker.value);
					console.log(typeof all_player[index].role);
					console.log(index);
					console.log(cancelNum);
					for(let i=0;i<$('.play').eq(index).children().length;i++)
					{
						if($('.play').eq(index).children().eq(i).attr('class') == 'select' || $('.play').eq(index).children().eq(i).attr('class') == 'selectLeft' || $('.play').eq(index).children().eq(i).attr('class') == 'selectRight')
						{
							/*生成临时扑克牌，比较后把相同的扑克牌删除掉*/
							if(index==0)
							{
								$('.play').eq(index).children().eq(i).removeClass('selectLeft');
								delePoker(tempPoker);
							}
							else if(index==1)
							{
								$('.play').eq(index).children().eq(i).removeClass('select');
								delePoker(tempPoker);
							}
							else if(index==2)
							{
								$('.play').eq(index).children().eq(i).removeClass('selectRight');
								delePoker(tempPoker);
							}						
						}
					}
					// tempPoker=[];
					console.dir('手上：'+gameSituation.selectPoker.poker_arr);
					console.log('对不起，你出的牌不符合规则！');
					ShowDiv('MyDiv','fade');
					// startGame(index,cancelNum);
					setTimeout(function(){
						clickplayout_status=false;
					},500);
				}
				else{
					// 出牌特效
					if(gameSituation.selectPoker.type == 1){
						if(gameSituation.selectPoker.value == 1&&vsPoker()==true){
							music('images/Man_3.mp3')
						}
						if(gameSituation.selectPoker.value == 2&&vsPoker()==true){
							music('images/Man_4.mp3')
						}
						if(gameSituation.selectPoker.value == 3&&vsPoker()==true){
							music('images/Man_5.mp3')
						}
						if(gameSituation.selectPoker.value == 4&&vsPoker()==true){
							music('images/Man_6.mp3')
						}
						if(gameSituation.selectPoker.value == 5&&vsPoker()==true){
							music('images/Man_7.mp3')
						}
						if(gameSituation.selectPoker.value == 6&&vsPoker()==true){
							music('images/Man_8.mp3')
						}
						if(gameSituation.selectPoker.value == 7&&vsPoker()==true){
							music('images/Man_9.mp3')
						}
						if(gameSituation.selectPoker.value == 8&&vsPoker()==true){
							music('images/Man_10.mp3')
						}
						if(gameSituation.selectPoker.value == 9&&vsPoker()==true){
							music('images/Man_11.mp3')
						}
						if(gameSituation.selectPoker.value == 10&&vsPoker()==true){
							music('images/Man_12.mp3')
						}
						if(gameSituation.selectPoker.value == 11&&vsPoker()==true){
							music('images/Man_13.mp3')
						}
						if(gameSituation.selectPoker.value == 12&&vsPoker()==true){
							music('images/Man_1.mp3')
						}
						if(gameSituation.selectPoker.value == 13&&vsPoker()==true){
							music('images/Man_2.mp3')
						}
						if(gameSituation.selectPoker.value == 14&&vsPoker()==true){
							music('images/Man_14.mp3')
						}
						if(gameSituation.selectPoker.value == 15&&vsPoker()==true){
							music('images/Man_15.mp3')
						}
					}
					if(gameSituation.selectPoker.type == 2){
						if(gameSituation.selectPoker.value == 1&&vsPoker()==true){
							music('images/Man_dui3.mp3')
						}
						if(gameSituation.selectPoker.value == 2&&vsPoker()==true){
							music('images/Man_dui4.mp3')
						}
						if(gameSituation.selectPoker.value == 3&&vsPoker()==true){
							music('images/Man_dui5.mp3')
						}
						if(gameSituation.selectPoker.value == 4&&vsPoker()==true){
							music('images/Man_dui6.mp3')
						}
						if(gameSituation.selectPoker.value == 5&&vsPoker()==true){
							music('images/Man_dui7.mp3')
						}
						if(gameSituation.selectPoker.value == 6&&vsPoker()==true){
							music('images/Man_dui8.mp3')
						}
						if(gameSituation.selectPoker.value == 7&&vsPoker()==true){
							music('images/Man_dui9.mp3')
						}
						if(gameSituation.selectPoker.value == 8&&vsPoker()==true){
							music('images/Man_dui10.mp3')
						}
						if(gameSituation.selectPoker.value == 9&&vsPoker()==true){
							music('images/Man_dui11.mp3')
						}
						if(gameSituation.selectPoker.value == 10&&vsPoker()==true){
							music('images/Man_dui12.mp3')
						}
						if(gameSituation.selectPoker.value == 11&&vsPoker()==true){
							music('images/Man_dui13.mp3')
						}
						if(gameSituation.selectPoker.value == 12&&vsPoker()==true){
							music('images/Man_dui1.mp3')
						}
						if(gameSituation.selectPoker.value == 13&&vsPoker()==true){
							music('images/Man_dui2.mp3')
						}
					}
					if(gameSituation.selectPoker.type == 110&&vsPoker()==true){
						rocketAnimate();
						music('images/Man_wangzha.mp3')
					}
					if(gameSituation.selectPoker.type == 911&&vsPoker()==true){
						boomAnimate();
						music('images/Man_zhadan.mp3')
					}
					if(gameSituation.selectPoker.type == 4&&vsPoker()==true){
						music('images/Man_sandaiyi.mp3')
					}
					if(gameSituation.selectPoker.type == 5&&vsPoker()==true){
						music('images/Man_sandaiyidui.mp3')
					}
					if(gameSituation.selectPoker.type == 6&&vsPoker()==true){
						shunziAnimate();
						music('images/Man_shunzi.mp3')
					}
					if(gameSituation.selectPoker.type == 8&&vsPoker()==true){
						pairAnimate();
						music('images/Man_liandui.mp3')
					}
					if(gameSituation.selectPoker.type == 9&&vsPoker()==true){
						planeAnimate();
						music('images/Man_feiji.mp3')
					}

					cancelNum=0;
					all_player[index].count+=1;
					if(all_player[index].role == '1')
					{
						all_player[index].role='0';
					}
					if(vsPoker())
					{			
						delPlayerPoker(index);
						gameSituation.tablePoker.poker_arr=[];
						gameSituation.tablePoker.type=gameSituation.selectPoker.type;
						gameSituation.tablePoker.value=gameSituation.selectPoker.value;
						for(let i=0;i<gameSituation.selectPoker.poker_arr.length;i++)
						{
							gameSituation.tablePoker.poker_arr.push(gameSituation.selectPoker.poker_arr[i]);
						}			
						$('.play').eq(index).children().remove();
						//重新生成手牌
						if(index==1)
						{
							for(let j=0;j<all_player[index].poker.length;j++)
							{
								$('.play').eq(index).append(pokerHtml(all_player[index].poker[j]));
								$('.play').eq(index).css({'left':-15*j});
								$('.play').eq(index).children().last().css({'left':30*j});						
							}
						}
						else
						{
							for(let k=0;k<all_player[index].poker.length;k++)
							{
								$('.play').eq(index).append(pokerHtml(all_player[index].poker[k]));
								$('.play').eq(index).children().last().css({'top':20*k});
							}
						}	
						console.log("玩家1："+all_player[0].poker.length);
						console.log("玩家2："+all_player[1].poker.length);
						console.log("玩家3："+all_player[2].poker.length);
						//在桌面生成牌
						// console.log(gameSituation.tablePoker.poker_arr);
						//生成前把桌面清空
						$('.outpokerplace_mid').html(' ');
						let table_str='';
						for(let i=0;i<gameSituation.tablePoker.poker_arr.length;i++)
						{
							table_str=pokerHtml2(gameSituation.tablePoker.poker_arr[i]);
							$('.outpokerplace_mid').append(table_str).children().last().css({'left':i*30});
							$('.outpokerplace_mid').css({'margin':'-140px 0 0 -'+(i*15+60)+'px','width':130+i*30+'px'});					
						}
						/*判断是否为春天*/

						if(all_player[index].poker.length==0&&all_player[index].role2=='1')
						{
							for(let i=0;i<all_player.length;i++)
							{
								if(all_player[i].role2 == '0' && all_player[i].count == 0)
								{
									setTimeout(function(){
										chuntianAnimate();
									},1800);
									setTimeout(function(){
										chuntianAnimate_end();
									},3500);
									setTimeout(function(){
										//清除计时器
										clearInterval(timer2);
										$('.countDown').eq(index).css({'display':'none'});
										//结束动画函数
										win2();
										console.log('地主赢了！');
										console.log('出牌次数：'+all_player[0].count);
										console.log('出牌次数：'+all_player[1].count);
										console.log('出牌次数：'+all_player[2].count);
										music('images/MusicEx_Win.mp3');
										$('#bgm').remove();
										$('#man').remove();
										//重新开始按钮
										setTimeout(function(){
											$('#replay').css({'display':'block'});	
										},1000)
									},4000);		
								}
								else if(all_player[i].role2 == '0' && all_player[i].count != 0)
								{
									//清除计时器
									clearInterval(timer2);
									$('.countDown').eq(index).css({'display':'none'});
									//结束动画函数
									win2();
									console.log('地主赢了！');
									console.log('出牌次数：'+all_player[0].count);
									console.log('出牌次数：'+all_player[1].count);
									console.log('出牌次数：'+all_player[2].count);
									music('images/MusicEx_Win.mp3');
									$('#bgm').remove();
									$('#man').remove();
									//重新开始按钮
									setTimeout(function(){
										$('#replay').css({'display':'block'});	
									},1000)
								}
							}
							
						}
						else if(all_player[index].poker.length==0&&all_player[index].role2=='0'){
							for(let i=0;i<all_player.length;i++)
							{
								if(all_player[i].role2 == '1' && all_player[i].count == 1)
								{
									setTimeout(function(){
										chuntianAnimate();
									},1800);
									setTimeout(function(){
										chuntianAnimate_end();
									},3500);
									setTimeout(function(){
										//清除计时器
										clearInterval(timer2);
										$('.countDown').eq(index).css({'display':'none'});
										//结束动画函数
										fail2();
										console.log('地主输了');
										music('images/MusicEx_Lose.mp3');
										$('#bgm').remove();
										$('#man').remove();
										//重新开始按钮
										setTimeout(function(){
											$('#replay').css({'display':'block'});	
										},1000);
									},4000);		
								}
								else if(all_player[i].role2 == '1' && all_player[i].count != 1)
								{
									//清除计时器
									clearInterval(timer2);
									$('.countDown').eq(index).css({'display':'none'});
									//结束动画函数
									fail2();
									console.log('地主输了');
									music('images/MusicEx_Lose.mp3');
									$('#bgm').remove();
									$('#man').remove();
									//重新开始按钮
									setTimeout(function(){
										$('#replay').css({'display':'block'});	
									},1000);
								}
							}
							
						}
						else{
							//清除计时器
							clearInterval(timer2);
							$('.countDown').eq(index).css({'display':'none'});
							
							index=++index>2?0:index;

							//清除计时器
							clearInterval(timer2);
							time2=31;

							startGame(index,cancelNum);
						}
						gameSituation.selectPoker.poker_arr.length=0;
					}
					else{
						for(let i=0;i<$('.play').eq(index).children().length;i++)
						{
							if($('.play').eq(index).children().eq(i).attr('class') == 'select' || $('.play').eq(index).children().eq(i).attr('class') == 'selectLeft' || $('.play').eq(index).children().eq(i).attr('class') == 'selectRight')
							{
								/*生成临时扑克牌，比较后把相同的扑克牌删除掉*/
								if(index==0)
								{
									$('.play').eq(index).children().eq(i).removeClass('selectLeft');
									delePoker(tempPoker);
								}
								else if(index==1)
								{
									$('.play').eq(index).children().eq(i).removeClass('select');
									delePoker(tempPoker);
								}
								else if(index==2)
								{
									$('.play').eq(index).children().eq(i).removeClass('selectRight');
									delePoker(tempPoker);
								}
								tempPoker=[];					
								console.log(gameSituation.selectPoker.poker_arr);
							}
						}
						console.log('对不起，你出的牌不够大！');
						ShowDiv('MyDiv','fade');
						// startGame(index,cancelNum);
						console.log('桌面：'+gameSituation.selectPoker.poker_arr);
						console.log('手上：'+gameSituation.tablePoker.poker_arr);
					}
					setTimeout(function(){
						clickplayout_status=false;
					},500);
				}
			}		
		});
	}
	/*比较，在数组中把相同的扑克牌删掉*/
	function delePoker(tempPoker)
	{
		/*匹配上的卡牌的索引*/
		let index=null;
		for(let i=0;i<gameSituation.selectPoker.poker_arr.length;i++)
		{
			if(gameSituation.selectPoker.poker_arr[i].value == tempPoker.value && gameSituation.selectPoker.poker_arr[i].type == tempPoker.type)
			{	
				index=i;
				break;
			}	
		}
		gameSituation.selectPoker.poker_arr.splice(index,1);
	}
	/**
	 * 玩家出牌成功后，删除对应玩家手牌数据
	 */
	function delPlayerPoker(index){
		let select_poker = gameSituation.selectPoker.poker_arr;
		let player_poker = all_player[index].poker;
		for(let i=0; i<select_poker.length; i++){
			for(let j=0; j<player_poker.length; j++){
				if(select_poker[i].value == player_poker[j].value && select_poker[i].type == player_poker[j].type){
					player_poker.splice(j, 1);
				}
			}
		}
	}
	function player(name,jifen,poker,role,role2,img,count)
	{
		this.name=name;
		this.jifen=jifen;
		this.poker=poker;
		this.role=role;
		this.role2=role2;
		this.img=img;
		this.count=count;
	}
	function poker(value,type)
	{
		this.value=value;
		this.type=type;
	}
	function game(role,selectPoker,tablePoker)
	{
		this.role=role;
		this.selectPoker=selectPoker;
		this.tablePoker=tablePoker;
	}
	/*定义用来比较的牌*/
	function comparePoker(poker_arr,type,value)
	{
		this.poker_arr=poker_arr;
		this.type=type;
		this.value=value;
	}
	/**
	 * 检查牌型的方法
	 * @param  object poker_data 需要检查牌型的数据对象
	 * @return {[type]}            [description]
	 *
	 * 牌型代号：
	 * 0：无效
	 * 1：单张
	 * 2：对子
	 * 3：三张
	 * 4：三带一
	 * 5：三带二
	 * 7：四带二
	 * 6: 顺子
	 * 8：连对
	 * 9: 飞机
	 * 911：普通炸弹
	 * 110：王炸
	 */
	function checkPoker(poker_data)
	{
		let poker=poker_data.poker_arr;
		// 初始化牌型与判断值
		poker_data.type = 0;
		poker_data.value = 0;

		// 1、 为了方便牌型的判断，需要先把选中的牌进行排序
		sortPlayer(poker);

		// 2、通过牌的张数来行各牌的判断
		switch(poker.length){
			// 判断1张牌的情况
			case 1:
				poker_data.type= 1;		// 设置牌型为单张

				// 判断普通单张的判断值
				if(poker[0].value*1 < 14){
					poker_data.value= poker[0].value*1;
				}else{
					// 判断大小王
					if(poker[0].type*1 == 0){
						poker_data.value = 14;	// 小王的判断值
					}else{
						poker_data.value = 15;	// 大王的判断值
					}
				}
			break;
			// 判断两张牌的情况
			case 2:
				// 判断两张牌的点数是否一样
				if(poker[0].value == poker[1].value*1){
					// 是否是普通对子还是王炸
					if(poker[0].value < 14){
						poker_data.type = 2;		// 设置牌型为对子
						poker_data.value = poker[0].value*1;
					}else{
						poker_data.type = 110;		// 设置牌型为王炸
						poker_data.value = poker[0].value*1;
					}
				}
			break;
			// 判断三张牌的情况
			case 3:
				// 判断三张牌的点数是否相等
				if(poker[0].value == poker[2].value*1){
					poker_data.type = 3;		// 设置牌型为王炸
					poker_data.value = poker[0].value*1;	// 判断值
				}
			break;
			// 判断四张牌的情况
			case 4:
				// 判断四张牌的点数是否相等
				if(poker[0].value*1 == poker[3].value*1){
					poker_data.type = 911;		// 设置牌型为普通炸弹
					poker_data.value = poker[0].value*1;	// 判断值
				}else if(poker[0].value*1 == poker[2].value*1 || poker[1].value*1 == poker[3].value*1 ){
					poker_data.type = 4;		// 设置牌型为三带一
					poker_data.value = poker[1].value*1;	// 判断值
				}
			break;
			// 判断五张牌的情况
			case 5:
				// 判断三带二
				if(poker[0].value*1 == poker[2].value*1 && poker[3].value*1 == poker[4].value*1 || poker[0].value*1 == poker[1].value*1 && poker[2].value*1 == poker[4].value*1){
					poker_data.type = 5;		// 设置牌型为三带二
					poker_data.value = poker[2].value*1;	// 判断值
				}else if(checkStraight(poker)&&poker[poker.length-1].value*1<13){		// 判断顺子
					poker_data.type = 6;		// 设置牌型顺子
					poker_data.value = poker[poker.length-1].value*1;	// 判断值
				}
			break;
			// 判断六张牌的情况
			case 6:
				if(checkStraight(poker)&&poker[poker.length-1].value*1<13){		// 判断顺子
					poker_data.type = 6;		// 设置牌型顺子
					poker_data.value = poker[poker.length-1].value;	// 判断值
				}else if(checkStraightPairs(poker)){		// 判断连对
					poker_data.type = 8;		// 设置牌型连对
					poker_data.value = poker[poker.length-1].value;	// 判断值
				}else if(poker[0].value*1 == poker[3].value*1 || poker[1].value*1 == poker[4].value*1 || poker[2].value*1 == poker[5].value*1){		// 判断四带二
					poker_data.type = 7;		// 设置牌型连对
					poker_data.value = poker[4].value*1;	// 判断值
				}
				else if(checkPlane(poker)&&poker[5].value*1<13)     	//判断飞机
				{
					poker_data.type = 9;		// 设置牌型飞机
					poker_data.value = poker[5].value*1;	// 判断值
				}
			break;
			// 判断七张牌的情况
			case 7:
				if(checkStraight(poker)&&poker[poker.length-1].value*1<13){		// 判断顺子
					poker_data.type = 6;		// 设置牌型顺子
					poker_data.value = poker[poker.length-1].value*1;	// 判断值
				}
			break;

			// 判断八张牌的情况
			case 8:
				if(checkStraight(poker)&&poker[poker.length-1].value*1<13){		// 判断顺子
					poker_data.type = 6;		// 设置牌型顺子
					poker_data.value = poker[poker.length-1].value*1;	// 判断值
				}else if(checkStraightPairs(poker)){		// 判断连对
					poker_data.type = 8;		// 设置牌型连对
					poker_data.value = poker[poker.length-1].value*1;	// 判断值
				}
				else if(checkPlane(poker)&&poker[5].value*1<13)     	//判断飞机
				{
					poker_data.type = 9;		// 设置牌型飞机
					poker_data.value = poker[5].value*1;	// 判断值
				}
			break;
			// 判断九张牌的情况
			case 9:
				if(checkStraight(poker)&&poker[poker.length-1].value*1<13)		// 判断顺子
				{
					poker_data.type =6;			// 设置牌型顺子
					poker_data.value = poker[poker.length-1].value*1;	// 判断值
				}
			break;
			// 判断十张牌的情况
			case 10:
				if(checkStraight(poker)&&poker[poker.length-1].value*1<13)		// 判断顺子
				{
					poker_data.type =6;			// 设置牌型顺子
					poker_data.value = poker[poker.length-1].value*1;	// 判断值
				}
				else if(checkStraightPairs(poker))						// 判断连对
				{
					poker_data.type = 8;		// 设置牌型连对
					poker_data.value = poker[poker.length-1].value*1;	// 判断值
				}
				else if(checkPlane(poker))     	//判断飞机
				{
					poker_data.type = 9;		// 设置牌型飞机
					poker_data.value = poker[5].value*1;	// 判断值
				}
			break;
			// 判断十一张牌的情况
			case 11:
				if(checkStraight(poker)&&poker[poker.length-1].value*1<13)					// 判断顺子
				{
					poker_data.type =6;			// 设置牌型顺子
					poker_data.value = poker[poker.length-1].value*1;	// 判断值
				}
			break;
			// 判断十二张牌的情况
			case 12:
				if(checkStraight(poker)&&poker[poker.length-1].value*1<13)			// 判断顺子
				{
					poker_data.type =6;			// 设置牌型顺子
					poker_data.value = poker[poker.length-1].value*1;	// 判断值
				}
				else if(checkStraightPairs(poker))			// 判断连对
				{
					poker_data.type = 8;		// 设置牌型连对
					poker_data.value = poker[poker.length-1].value*1;	// 判断值
				}
				else if(checkPlane(poker))			// 判断飞机
				{
					if((poker[0].value*1 == poker[2].value*1) && (poker[3].value*1 == poker[5].value*1) && (poker[6].value*1 == poker[8].value*1) && (poker[9].value*1 != poker[10].value*1) && (poker[10].value*1 == poker[11].value*1))
					{
						poker_data.type = 9;		// 设置牌型飞机
						poker_data.value = poker[6].value*1;	// 判断值
					}
					else
					{
						poker_data.type = 9;		// 设置牌型飞机
						poker_data.value = poker[9].value*1;	// 判断值
					}
				}
			break;
			// 判断十四张牌的情况
			case 14:
				if(checkStraightPairs(poker))			// 判断连对
				{
					poker_data.type = 8;		// 设置牌型连对
					poker_data.value = poker[poker.length-1].value*1;	// 判断值
				}
			break;
			// 判断十五张牌的情况
			case 15:
				if(checkPlane(poker))			// 判断飞机
				{
					if((poker[0].value*1 == poker[2].value*1) && (poker[3].value*1 == poker[5].value*1) && (poker[6].value*1 == poker[8].value*1) && (poker[9].value*1 == poker[10].value*1) && (poker[11].value*1 == poker[12].value*1) && (poker[13].value*1 == poker[14].value*1))
					{	
						poker_data.type = 9;		// 设置牌型飞机
						poker_data.value = poker[6].value*1;	// 判断值
					}
					else
					{
						poker_data.type = 9;		// 设置牌型飞机
						poker_data.value = poker[9].value*1;	// 判断值
					}
				}
			break;
			// 判断十六张牌的情况
			case 16:
				if(checkStraightPairs(poker))			// 判断连对
				{
					poker_data.type = 8;		// 设置牌型连对
					poker_data.value = poker[poker.length-1].value*1;	// 判断值
				}
			break;
			// 判断十八张牌的情况
			case 18:
				if(checkStraightPairs(poker))			// 判断连对
				{
					poker_data.type = 8;		// 设置牌型连对
					poker_data.value = poker[poker.length-1].value*1;	// 判断值
				}
			break;
			// 判断二十张牌的情况
			case 20:
				if(checkStraightPairs(poker))			// 判断连对
				{
					poker_data.type = 8;		// 设置牌型连对
					poker_data.value = poker[poker.length-1].value*1;	// 判断值
				}
			break;
			// default: 							//其它情况
			// 	poker_data.type = 0;
			// 	poker_data.value=0;
			// break;
	}
	/**
	 * 判断牌型是否为顺子
	* break	用于跳出当前循环（语句）
	* continue 用于跳过当前循环（语句）
	* return 直接返回出当前函数的结果，也可以认为是结束函数。如果写在函数外部，可以认为结束程序
	 * 
	* @param Array poker 牌组的具体数据，用于判断是不是顺子
	* @return boolean 如果检查的数据是顺子，返回true,否则返回false
	*/
	function checkStraight(poker){
		for(let i=0; i<poker.length-1; i++){
			if((poker[i].value*1) + 1 != poker[i+1].value){
				return false;
			}
		}
		return true;
	}
	/**
	* 检查牌型是否为连对
	* @param  Array poker 牌组的具体数据
	* @return Boolean      如果检查的数据是连对，返回true,否则返回false
	*/
	function checkStraightPairs(poker){
		for(let i=0; i<poker.length-3; i+=2){
			if( poker[i].value*1 + 1 != poker[i+3].value*1 || poker[i+1].value*1 + 1 != poker[i+2].value*1){
					return false;
				}
				return true;
			}
		}
	}
	/*检查牌是否为飞机*/
	function checkPlane(poker)
	{
		switch(poker.length)
		{
			case 6:
				for(let i=0;i<poker.length-5;i++)
				{
					if(poker[i].value*1+1 !=poker[i+5].value*1 || poker[i+2].value*1+1 !=poker[i+3].value*1)
					{
						return false;
					}
					return true;
				}
			break;
			case 8:
				for(let i=0;i<poker.length-7;i++)
				{
					if((poker[i].value*1+1 !=poker[i+5].value*1 || poker[i+2].value*1+1 !=poker[i+3].value*1)&&
						(poker[i+1].value*1+1 !=poker[i+6].value*1 || poker[i+3].value*1+1 !=poker[i+4].value*1)&&
						(poker[i+2].value*1+1 !=poker[i+7].value*1 || poker[i+4].value*1+1 !=poker[i+5].value*1))
					{
						return false;
					}
					return true;
				}
			break;
		}
	}

	/**
	 * 用于对比选中的牌型与桌面牌型
	 * @return Boolean  如果选中牌型大于桌面牌型，返回true,否则返回false
	 */
	function vsPoker(){
	// 判断桌面没牌肯定可以打出去
	if(gameSituation.tablePoker.poker_arr.length == 0){
		return true;
	}

	// 判断打出去的是王炸
	if(gameSituation.selectPoker.type*1 == 110){
		return true;
	}

	// 判断桌面上的牌是王炸
	if(gameSituation.tablePoker.type*1== 110){
		return false;
	}

	// 判断如果桌面上的不是炸弹，选中是炸弹
	if(gameSituation.selectPoker.type*1 == 911 && gameSituation.tablePoker.type*1 != 911){
		return true;
	}
	// 判断桌面上的是炸弹，选中的不是炸弹
	if(gameSituation.selectPoker.type*1 != 911 && gameSituation.tablePoker.type*1 == 911)
	{
		return false;
	}
	if(gameSituation.tablePoker.poker_arr.length == gameSituation.selectPoker.poker_arr.length && gameSituation.selectPoker.value*1 == gameSituation.tablePoker.value*1)
	{
		return false;
	}
	// 判断普通牌型
	if(gameSituation.selectPoker.type*1 == gameSituation.tablePoker.type*1 && 
		gameSituation.tablePoker.poker_arr.length == gameSituation.selectPoker.poker_arr.length &&
		gameSituation.selectPoker.value*1 > gameSituation.tablePoker.value*1
		)
		{
			return true;
		}
		return false;
	}

/*自动提示*/
function myAi(selectPoker,tablePoker,index,cancelNum)
{
	//调用方法前先排序
	let playPoker=all_player[index].poker;//该名玩家所有手牌手牌
	console.log(all_player[index]);
	// console.log(playPoker[i].value);
		// console.log(playPoker[i].type);
		//判断桌面牌的长度
		if(tablePoker.poker_arr.length == 1)
		{
			//桌面的牌只能是单
			for(let i=0;i<playPoker.length;i++)
			{
				//如果手牌中存在比桌面大的牌，将这个牌放到出牌数组里面，否则就执行过牌
				// console.log(playPoker[i].value);
				if(tablePoker.value*1 != 14)
				{
					if(playPoker[i].value*1 > tablePoker.value*1)
					{
						// console.log(playPoker[i].value);
						selectPoker.poker_arr.push(playPoker[i]);
						if(index == 1)
						{
							$('.play').eq(index).children().eq(i).addClass('select');
						}
						else if(index == 0)
						{
							$('.play').eq(index).children().eq(i).addClass('selectLeft');
						}
						else if(index ==2)
						{
							$('.play').eq(index).children().eq(i).addClass('selectRight');
						}
						break;
					}
				}
				else if(tablePoker.value*1 == 14 )
				{

					if(playPoker[i].value*1 == 14 && playPoker[i].type*1 ==1)
					{
						selectPoker.poker_arr.push(playPoker[i]);
						if(index == 1)
						{
							$('.play').eq(index).children().eq(i).addClass('select');
						}
						else if(index == 0)
						{
							$('.play').eq(index).children().eq(i).addClass('selectLeft');
						}
						else if(index ==2)
						{
							$('.play').eq(index).children().eq(i).addClass('selectRight');
						}
						break;
					}
				}
			}
			if(selectPoker.poker_arr.length == 0)
			{
				$('.play_btn2>.pass').click();
			}
		}
		else if(tablePoker.poker_arr.length == 2)
		{
			//桌面的牌只能是对
			for(let i=0;i<playPoker.length-1;i++)
			{
				//判断手牌是否存在对	
				if(playPoker[i].value*1 == playPoker[i+1].value*1)
				{
					//1.如果存在，并且值大于桌面牌的值，将这个牌放到出牌数组里面，否则就执行过牌
					if((playPoker[i].value*1 == playPoker[i+1].value*1) && playPoker[i].value*1>tablePoker.value*1 )
					{
						selectPoker.poker_arr.push(playPoker[i]);
						selectPoker.poker_arr.push(playPoker[i+1]);
						if(index == 1)
						{
							$('.play').eq(index).children().eq(i).addClass('select');
							$('.play').eq(index).children().eq(i+1).addClass('select');
						}
						else if(index == 0)
						{
							$('.play').eq(index).children().eq(i).addClass('selectLeft');
							$('.play').eq(index).children().eq(i+1).addClass('selectLeft');
						}
						else if(index ==2)
						{
							$('.play').eq(index).children().eq(i).addClass('selectRight');
							$('.play').eq(index).children().eq(i+1).addClass('selectRight');
						}
						//让牌向上并终止循环
						break;
					}
				}
			}
			if(selectPoker.poker_arr.length == 0)
			{
				$('.play_btn2>.pass').click();
			}
		}
		else if(tablePoker.poker_arr.length == 3)
		{
			//桌面的牌只能是三
			for(let i=0;i<playPoker.length-2;i++)
			{
				//1.判断是否存在三，如果存在判断值是否大于桌面的值，将这个牌放到出牌数组里面，否则执行过牌
				if((playPoker[i].value*1 == playPoker[i+2].value*1) && playPoker[i].value*1>tablePoker.value*1)
				{
					selectPoker.poker_arr.push(playPoker[i]);
					selectPoker.poker_arr.push(playPoker[i+1]);
					selectPoker.poker_arr.push(playPoker[i+2]);
					if(index==1)
					{
						$('.play').eq(index).children().eq(i).addClass('select');
						$('.play').eq(index).children().eq(i+1).addClass('select');
						$('.play').eq(index).children().eq(i+2).addClass('select');
					}
					else if(index==0)
					{
						$('.play').eq(index).children().eq(i).addClass('selectLeft');
						$('.play').eq(index).children().eq(i+1).addClass('selectLeft');
						$('.play').eq(index).children().eq(i+2).addClass('selectLeft');
					}
					else if(index==2)
					{
						$('.play').eq(index).children().eq(i).addClass('selectRight');
						$('.play').eq(index).children().eq(i+1).addClass('selectRight');
						$('.play').eq(index).children().eq(i+2).addClass('selectRight');
					}
					//让牌向上并终止循环
					break;
				}
			}
			if(selectPoker.poker_arr.length == 0)
			{
				$('.play_btn2>.pass').click();
			}
		}
		else if(tablePoker.poker_arr.length == 4)
		{
			//桌面的牌有两种情况
			if(tablePoker.type*1 == 4)
			{
				for(let i=0;i<playPoker.length-2;i++)
				{
					//1.三带一 4
					if((playPoker[i].value*1 == playPoker[i+2].value*1) && playPoker[i].value*1>tablePoker.value*1)
					{
						selectPoker.poker_arr.push(playPoker[i]);
						selectPoker.poker_arr.push(playPoker[i+1]);
						selectPoker.poker_arr.push(playPoker[i+2]);
						if(index==1)
						{
							$('.play').eq(index).children().eq(i).addClass('select');
							$('.play').eq(index).children().eq(i+1).addClass('select');
							$('.play').eq(index).children().eq(i+2).addClass('select');
						}
						else if(index==0)
						{
							$('.play').eq(index).children().eq(i).addClass('selectLeft');
							$('.play').eq(index).children().eq(i+1).addClass('selectLeft');
							$('.play').eq(index).children().eq(i+2).addClass('selectLeft');
						}
						else if(index==2)
						{
							$('.play').eq(index).children().eq(i).addClass('selectRight');
							$('.play').eq(index).children().eq(i+1).addClass('selectRight');
							$('.play').eq(index).children().eq(i+2).addClass('selectRight');
						}
						break;
					}	
				}
				for(let k=0;k<playPoker.length;k++)
				{
					for(let j=0;j<selectPoker.poker_arr.length;j++)
					{
						if(selectPoker.poker_arr.length<4)
						{
							if(playPoker[k].value *1 != selectPoker.poker_arr[j].value*1 && playPoker[k].value *1 !=playPoker[k+1].value *1)
							{
								selectPoker.poker_arr.push(playPoker[k]);
								if(index==1)
								{
									$('.play').eq(index).children().eq(k).addClass('select');
								}
								else if(index==0)
								{
									$('.play').eq(index).children().eq(k).addClass('selectLeft');
								}
								else if(index==2)
								{
									$('.play').eq(index).children().eq(k).addClass('selectRight');
								}
							}	
						}
					}
				}
				if(selectPoker.poker_arr.length == 0)
				{
					$('.play_btn2>.pass').click();
				}
			}
			else if(tablePoker.type*1 == 911)
			{
				//2.普通炸弹 911
				for(let i=0;i<playPoker.length-4;i++)
				{
					if(playPoker[i].value*1 == playPoker[i+3].value*1 && playPoker[i].value*1 > tablePoker.value*1)
					{
						selectPoker.poker_arr.push(playPoker[i]);
						selectPoker.poker_arr.push(playPoker[i+1]);
						selectPoker.poker_arr.push(playPoker[i+2]);
						selectPoker.poker_arr.push(playPoker[i+3]);
						if(index==1)
						{
							$('.play').eq(index).children().eq(i).addClass('select');
							$('.play').eq(index).children().eq(i+1).addClass('select');
							$('.play').eq(index).children().eq(i+2).addClass('select');
							$('.play').eq(index).children().eq(i+3).addClass('select');
						}
						else if(index==0)
						{
							$('.play').eq(index).children().eq(i).addClass('selectLeft');
							$('.play').eq(index).children().eq(i+1).addClass('selectLeft');
							$('.play').eq(index).children().eq(i+2).addClass('selectLeft');
							$('.play').eq(index).children().eq(i+3).addClass('selectLeft');
						}
						else if(index==2)
						{
							$('.play').eq(index).children().eq(i).addClass('selectRight');
							$('.play').eq(index).children().eq(i+1).addClass('selectRight');
							$('.play').eq(index).children().eq(i+2).addClass('selectRight');
							$('.play').eq(index).children().eq(i+3).addClass('selectRight');
						}
						break;
					}
				}
				if(selectPoker.poker_arr.length == 0)
				{
					$('.play_btn2>.pass').click();
				}
			}
		}
		else if(tablePoker.poker_arr.length == 5)
		{
			//判断桌面的牌有两种情况
			if(tablePoker.type*1 == 5)
			{
				for(let i=0;i<playPoker.length-2;i++)
				{
					//1.三带二 5
					if((playPoker[i].value*1 == playPoker[i+2].value*1) && playPoker[i].value*1>tablePoker.value*1)
					{
						selectPoker.poker_arr.push(playPoker[i]);
						selectPoker.poker_arr.push(playPoker[i+1]);
						selectPoker.poker_arr.push(playPoker[i+2]);
						if(index==1)
							{
								$('.play').eq(index).children().eq(i).addClass('select');
								$('.play').eq(index).children().eq(i+1).addClass('select');
								$('.play').eq(index).children().eq(i+2).addClass('select');
							}
							else if(index==0)
							{
								$('.play').eq(index).children().eq(i).addClass('selectLeft');
								$('.play').eq(index).children().eq(i+1).addClass('selectLeft');
								$('.play').eq(index).children().eq(i+2).addClass('selectLeft');
							}
							else if(index==2)
							{
								$('.play').eq(index).children().eq(i).addClass('selectRight');
								$('.play').eq(index).children().eq(i+1).addClass('selectRight');
								$('.play').eq(index).children().eq(i+2).addClass('selectRight');
							}
							break;
						}
						
					}
					for(let k=0;k<playPoker.length;k++)
					{
						for(let j=0;j<selectPoker.poker_arr.length;j++)
						{
							if(selectPoker.poker_arr.length<5)
							{
								if(playPoker[k].value *1 != selectPoker.poker_arr[j].value*1 && playPoker[k].value *1 ==playPoker[k+1].value *1)
								{
									selectPoker.poker_arr.push(playPoker[k]);
									selectPoker.poker_arr.push(playPoker[k+1]);
									if(index==1)
									{
										$('.play').eq(index).children().eq(k).addClass('select');
										$('.play').eq(index).children().eq(k+1).addClass('select');
									}
									else if(index==0)
									{
										$('.play').eq(index).children().eq(k).addClass('selectLeft');
										$('.play').eq(index).children().eq(k+1).addClass('selectLeft');
									}
									else if(index==2)
									{
										$('.play').eq(index).children().eq(k).addClass('selectRight');
										$('.play').eq(index).children().eq(k+1).addClass('selectRight');
									}
								}	
							}
						}
					}
					if(selectPoker.poker_arr.length == 0)
					{
						$('.play_btn2>.pass').click();
					}
				}
			else if(tablePoker.type*1 == 6)
			{
				//2.顺子 6
				selectPoker=myAiShuZi(selectPoker,tablePoker,index);
				
			}
		}
		else if(tablePoker.poker_arr.length == 6)
		{
			//判断桌面的情况
			//1.连对 8
			if(tablePoker.type*1 == 8)
			{
				selectPoker=myAiLiandui(selectPoker,tablePoker,index);
			}
			//2.顺子 6
			else if(tablePoker.type*1 == 6)
			{
				selectPoker=myAiShuZi(selectPoker,tablePoker,index);
			}	
		}
		else if(tablePoker.poker_arr.length == 7)
		{
			//判断桌面的情况
			//1.顺子 6
			if(tablePoker.type*1 == 6)
			{
				selectPoker=myAiShuZi(selectPoker,tablePoker,index);
			}
		}
		return selectPoker;
	}
	/*提示顺子*/
	function myAiShuZi(selectPoker,tablePoker,index)
	{
		let playPoker=all_player[index].poker;
		let temp=[];	
		for(let i=0;i<playPoker.length;i++)
		{
			if(playPoker[i].value*1>tablePoker.poker_arr[0].value*1 && playPoker[i].value*1 !=13)
			{
				temp.push(playPoker[i]);
			}
		}
		//去重
	  	for(let i=0;i<temp.length;i++)
	  	{
	  		for(let j=0;j<temp.length;j++)
	  		{
	  			if(i!=j)
	  			{
	  				if(temp[i].value*1 == temp[j].value*1 && temp[i].type*1 != temp[j].type*1)
	  				{
	  					temp.splice(j, 1);
	  				}
	  			}
	  		}
	  	}
	 	r=[];
	 	for(let i=0;i<temp.length-(tablePoker.poker_arr.length-1);i++)
	 	{
	 		if(temp[i].value*1 +(tablePoker.poker_arr.length-1) == temp[i+(tablePoker.poker_arr.length-1)].value*1) 
	 		{
	 			for(let j=0;j<tablePoker.poker_arr.length;j++)
	 			{
	 				r.push(temp[i+j]);
	 			}
	 			break;
	 		}
	 	}
	 	console.log(r);
	 	//与原数组比较找出相应的下标
	 	for(let i=0;i<playPoker.length;i++)
	 	{
	 		for(let j=0;j<r.length;j++)
	 		{
	 			if(playPoker[i].value*1 == r[j].value *1 && playPoker[i].type*1 == r[j].type *1)
	 			{
	 				selectPoker.poker_arr.push(playPoker[i]);
					if(index==1)
					{
						$('.play').eq(index).children().eq(i).addClass('select');
					}
					else if(index==0)
					{
						$('.play').eq(index).children().eq(i).addClass('selectLeft');
					}
					else if(index==2)
					{
						$('.play').eq(index).children().eq(i).addClass('selectRight');
					}
	 			}
	 		}
	 	}
	 	if(r.length == 0)
		{
			$('.play_btn2>.pass').click();
		}
	 	return r;
	}
	
	/*提示飞机*/
	function myAiFeiji(selectPoker,tablePoker,index)
	{
		let playPoker=all_player[index].poker;
		let temp=[];	
		for(let i=0;i<playPoker.length;i++)
		{
			if(playPoker[i].value*1>tablePoker.poker_arr[0].value*1 && playPoker[i].value*1 !=13)
			{
				temp.push(playPoker[i]);
			}
		}

	}
/*提示连对*/
	function myAiLiandui(selectPoker,tablePoker,index)
	{
		let playPoker=all_player[index].poker;
		let temp=[];	
		for(let i=0;i<playPoker.length-1;i++)
		{
			if(playPoker[i].value*1>tablePoker.poker_arr[0].value*1 && playPoker[i].value*1 !=13 && playPoker[i].value*1 == playPoker[i+1].value*1)
			{
				temp.push(playPoker[i]);
				temp.push(playPoker[i+1]);
			}
		}
		//去重
		for(let k=0;k<2;k++)
		{
		  	for(let i=0;i<temp.length;i++)
			{
			  	for(let j=0;j<temp.length;j++)
			  	{
			  		if(i!=j)
			  		{
			  			if(temp[i].value*1 == temp[j].value*1 )
			  			{
			  				temp.splice(j, 1);
			  			}
			  		}
			  	}
			}
		}
		console.log(temp);
		let r=[];
		for(let i=0;i<temp.length-2;i++)
		{
		  	if(temp[i].value*1 +2 == temp[i+2].value*1 && r.length<(tablePoker.poker_arr.length/2))
		  	{
		  		r.push(temp[i].value);
		  		r.push(temp[i+1].value);
		  		r.push(temp[i+2].value);
		  	}
		  	else if(r.length==(tablePoker.poker_arr.length/2))
		  	{
		  		break;
		  	}
		}
		let count=0;
		for(let i=0;i<playPoker.length;i++)
		{
			for(let j=0;j<r.length;j++)
			{
				if(playPoker[i].value*1 == r[j] && count!=2)
				{
					console.log(1);
					count++;
					$('.play').eq(index).find('li').eq(i).click();
				}
				else if(playPoker[i].value*1 == r[j] && count ==2 || playPoker[i+1].value*1 == r[j])
				{
					count=0;
					continue;
				}	
			}
		}
		if(selectPoker.poker_arr.length == 0)
		{
			$('.play_btn2>.pass').click();
		}
	}
});