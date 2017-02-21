//window.onload = function() {
	
/*	var container=document.querySelector('.index-container');
	container.style.width=window.innerWidth;
	container.style.height=window.innerHeight;*/

	$('.app').each(function(index) {
		$(this).mouseover(function() {
			$(this).attr('style', 'background: #ECF2F7; opacity: 0.8; border: 1px solid transparent; border-radius: 5px;')
		});
		$(this).mouseout(function() {
			$(this).removeAttr('style', 'background: transparent; opacity: 1; border: 1px solid transparent; border-radius: 5px;')
		});

		$(this).click(function(e) {
			e.stopPropagation()
			$('.pop-up-box').attr('style','display: none;')
			if(index == 0) {

				$('.order-box').attr('style', 'display: block;');
				popBox($('.order-box'));	
				winOperate ($('.order-box'));
				drag(document.querySelector('.order-header-nav'), document.querySelector('.order-box'));				
			}else if(index==3){
				$
			}


		})

	})

	//弹框函数
	function popBox(obj) {
		obj.animate({
			top: '30px',
			left: '50px',
			opacity: 1,
			bottom: '10px',
			width: window.innerWidth * 0.9,
			height: window.innerHeight * 0.9

		}, 300)
	}

	//拖拽弹出框

	

	function drag(elem, obj) {
		elem.onmousedown=function(e) {

			e.stopPropagation()
			var L = e.clientX;
			var T = e.clientY;
			var dL = obj.offsetLeft;
			var dT = obj.offsetTop;
			document.onmousemove=function  (e) {
				obj.style.left=dL+(e.clientX-L)+'px';
				obj.style.top=dT+(e.clientY-T)+'px';
			}
			document.onmouseup=function  () {
				document.onmousemove=null;
				document.onmouseup=null;
				return false;
			}

		
		
		}
	}
	//最大化，最小化，退出
	function winOperate (obj) {
		$('.quit').click(function  () { 
			obj.attr('style','left: 0;height: 0;bottom: 0;width: 0;opacity: 0;')
		})
		$('.min').click(function  () {
			obj.animate({
			    left: 0,
			    bottom: 0,
			    width: 0,
			    height: 0,
			    opacity: 0

			}, 300)
		})
		$('.max').click(function  () {
			obj.animate({
				top: 0,
				left: 0,
				opacity: 1,
				width: window.innerWidth,
				height: window.innerHeight,

			}, 16)
		})
	}
	//右键菜单
	rightMenu();
	function rightMenu () {
		var newIndex=0;
		document.oncontextmenu=function  (e) {		

			$('#rightMenu').attr('style','display:block;left:'+e.clientX+'px;top:'+e.clientY+'px;');

			$('#rightMenu').children().each(function  (index,elem) {
				
				if (index==0) {
					$(elem).mouseover(function  () {
						$('#rightMenu ul').attr('style','display:none');
						$('.watch').attr('style','display:block');

					})
				}else if(index==1){
					$(elem).mouseover(function  () {
						$('#rightMenu ul').attr('style','display:none');						
						$('.arrange').attr('style','display:block');
			});
				}
				else{
					$(elem).mouseover(function  () {
						$('#rightMenu ul').attr('style','display:none');						
			});					
				}
			})

		

			
			return false;
		}
		document.onclick=function  () {
			$('#rightMenu').attr('style','display:none;');			
		}
		
	}
//时钟
