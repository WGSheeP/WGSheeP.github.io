			var tabBoxU = document.querySelector('.tab-box-ul');
			var o = document.querySelectorAll('.tab-dot a');
			var formControl = document.querySelector('.form-control');
			var tabList = document.querySelector('.tab-list');

			var startX = 0;
			var tabBoxL = 0;
			var len = 0;
			var n = 0;

			tabBoxU.innerHTML+=tabBoxU.innerHTML;
			var w = tabBoxU.offsetWidth;
			len = tabBoxU.children.length;
			tabBoxU.style.width = w * len + 'px';
			tabBoxU.addEventListener('touchstart', start);
			tabBoxU.addEventListener('touchmove', move);
			tabBoxU.addEventListener('touchend', end);

			function start(ev) {
				var e = ev.changedTouches[0];
				console.log(e)
				this.style.transition = 'none';
				var num = Math.round(this.offsetLeft / w);
				if (num==0) {
					num=o.length;
					this.style.left =-num * w + 'px';					
				}
				if (-num==len-1) {
					num=o.length-1;
					this.style.left = -num * w + 'px';					
				}
				if (MTouch(tabBoxU).swipeLeft||MTouch(tabBoxU).swipeRight) {
				startX = e.pageX;
				tabBoxL = this.offsetLeft;					
				}


			}

			function move(ev) {
				var e = ev.changedTouches[0];
				
				this.style.left = tabBoxL + (e.pageX - startX) + 'px';

			}

			function end(ev) {
				var num = Math.round(this.offsetLeft / w);
				this.style.transition = '0.3s';
//				console.log(num)
				this.style.left = num * w + 'px';
				o[n].className = '';
				o[-num % o.length].className = 'active';
				n = -num % o.length;

			}
			formControl.addEventListener('touchstart', function(e) {
				e.stopPropagation();
			});

			
			
			
			
			
			