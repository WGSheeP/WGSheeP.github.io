/**
 * 公共类
 */


var pease,
pesestart=null;



 function easeAct(){
	clearTimeout(pease);
	clearTimeout(pesestart);
	
	var easelay=$('.swiper-slide-active .easelay');
	
	easelay.hide();
	
	easelay.each(function(index){
		var item=easelay.eq(index);

		//划入动画
		var dataeasein=item.attr('data-easein'); //划入动画classname
		var datastart=item.attr('data-start'); //划入动画起始时间，单位秒S
		var datastartspeed=item.attr('data-easeinspeed'); //划入动画时间，单位秒S

		//划入后，动画		 
		var dataeasing=item.attr('data-easing'); //划入后，动画classname
		var dataeasingspeed=item.attr('data-easeingspeed'); //划入后，动画时间，单位秒S
		var dataeasingcount=item.attr('data-easeingcount'); //划入后，动画次数
		
		if(dataeasein!=null){
			item.css({'-webkit-animation-duration':datastartspeed+'s'})
			if(datastart!=0){
				pesestart=setTimeout(function(){
					item.show();
					item.css({'-webkit-animationName':dataeasein})
				},datastart*1000)	
			}else{
				item.show();
				item.css('webkit-animationName',dataeasein)
			}
			if(dataeasing!=null){
				pease=setTimeout(function(){					
						item.css({'-webkit-animationName':dataeasing,'-webkit-animation-iteration-count': dataeasingcount,'-webkit-animation-duration':dataeasingspeed+'s'})
					},(datastart+datastartspeed)*1000)
						
						
			}
		}else{
			item.show();
		}
	})
}

document.addEventListener('touchmove', function(e){e.preventDefault()}, false);


//隐藏弹出层
$('.pop').click(function(){
	$('.pop').hide();
	$('.musicPic').show();
})

$('.pop .close').click(function(){
	$('.pop').hide();
	$('.musicPic').show();
})
//显示弹出层
$('.submitbm-btn').click(function(){
	$('.bmsuccess').show();
	$('.musicPic').hide();
})

//分享好友
$('.sharefriend-btn').click(function(){
	$('.sharelay').show();
	$('.musicPic').hide();
})


//活动规则
$('.hdgz').click(function(){
	$('.hdgztxt').show();
})


//开始转动
var fz1,fz2,fz3=null;
var n1,n2,n3=null;
var fktimeArr=new Array('7:07','11:11','23:32');
var fkddArr=new Array('天桥','广场中央','咖啡馆');
var fksjArr=new Array('读一本最讨厌的书','跟卖艺人聊整天','亲吻陌生人');

$('.startzd').click(function(){
	$('.fkscroll').show();
	$('.fkresult').hide();
	$('.bar .point').css({'bottom':'-20%'})

	n1=parseInt(3*Math.random());
	n2=parseInt(3*Math.random());
	n3=parseInt(3*Math.random());

	console.log(n1+':'+n2+':'+n3)
	
	$('.lay6 .taskcont li').eq(0).html(fktimeArr[n1]);
	$('.lay6 .taskcont li').eq(1).html(fkddArr[n2]);
	$('.lay6 .taskcont li').eq(2).html(fksjArr[n3]);

	$('.startzd').attr('title','1')

	$('.fkresult').removeClass('fk0');
	$('.fkresult').removeClass('fk1');
	$('.fkresult').removeClass('fk2');

	fz1=setTimeout(function(){
		$('.gunlun1 .fkscroll').hide();
		$('.gunlun1 .fkresult').show();
		$('.gunlun1 .fkresult').addClass('fk'+n1);
		$('.bar .point').css({'bottom':'20%'})	
	}, 1000);

	fz2=setTimeout(function(){
		$('.gunlun2 .fkscroll').hide();
		$('.gunlun2 .fkresult').show();
		$('.gunlun2 .fkresult').addClass('fk'+n2);
		$('.bar .point').css({'bottom':'50%'})	
	}, 2000);

	fz3=setTimeout(function(){
		$('.gunlun3 .fkscroll').hide();
		$('.gunlun3 .fkresult').show();
		$('.gunlun3 .fkresult').addClass('fk'+n3);
		$('.bar .point').css({'bottom':'80%'})	
		$('.maketask').show();	
	}, 3000);
})
////填写报名时的键盘遮挡
	focus();
	function focus() {
		var input = document.querySelectorAll('.taskcont input');
		var height = document.documentElement.clientHeight;
		var startY = window.scrollY;
		for(var i = 0; i < input.length; i++) {
			input[i].onfocus = function() {
				var _this = this;
				startY = window.scrollY;
				setTimeout(function() {
//					console.log('获取焦点，调整页面')
					var bottom = _this.getBoundingClientRect().top + _this.getBoundingClientRect().height;
					//_this.value = top + "|" + height;
					if(bottom >= height / 2) {
						var dis = bottom - height / 2;
						window.scrollY = startY + dis;
					}
				}, 300);
			};
			input[i].onblur = function() {
//				console.log('失去焦点')
				window.scrollY = startY;
			};
		}
	};

//音乐
function music () {
	var audio =document.querySelector(".audio");
	$('.musicPic').on('click',function  () {
//		console.log(2)
		if (audio.paused) {
			audio.play();
    		$(this).removeClass('stopRotate');
    		$(this).addClass('rotate');          			
		}else{
			audio.pause();
    		$(this).addClass('stopRotate');
    		$(this).removeClass('rotate');        			
		}
	})
	
}

