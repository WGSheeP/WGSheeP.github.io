	//面向对象的写法：
	//1、构造函数
	(function  (id) {
		function clock (pro) {
			this.canvas=pro.canvas;
			this.cxt=this.canvas.getContext('2d');
			this.W=this.canvas.width;
			this.H=this.canvas.height;
			this.R=this.W/2;
			return this;
		}
		//2、初始化
		//首先在初始化中，要获取当前的时间，同时每一秒要更新一次画布，即清除一次，绘制一次
		clock.prototype.init=function  () {
			var _this=this;
			setInterval(function  () {
				var time=new Date();
				var s=time.getSeconds();
				var m=time.getMinutes()+s/60;			
				var h=time.getHours()+m/60;
	/*清除画布*/	_this.cxt.clearRect(0,0,_this.W,_this.H);
	/*更新画布*/	_this.update(h,m,s);
				
			},1000)
		}
		clock.prototype.update=function  (h,m,s) {
			this.DrawOuter();
			this.DrawNum();
			this.drawTicks();
			this.DrawHour(h);
			this.DrawMins(m);
			this.DrawSec(s);
			this.drawCircle();
			
		}
		clock.prototype.DrawOuter=function  () {
			this.cxt.save();
			this.cxt.translate(this.W/2,this.H/2);
			this.cxt.lineWidth=6;
			this.cxt.beginPath();
			this.cxt.arc(0,0,this.R-4,0,Math.PI*2);
			this.cxt.stroke();
			this.cxt.restore();
			return this;		
		}
		clock.prototype.DrawNum=function  () {
			var arr = [3,4,5,6,7,8,9,10,11,12,1,2];
			var _this=this;
			this.cxt.save();
			this.cxt.translate(this.W/2,this.H/2);
			this.cxt.font=" 14px";
			this.cxt.fillStyle = "#008600";
			this.cxt.textAlign = "center";
			this.cxt.textBaseline = 'middle';//这个需要加，不然文字会有偏移		
			this.cxt.beginPath();
			arr.forEach(function  (item,i) {
				var rad = Math.PI/6*i;
				var x=(_this.R-20)*Math.cos(rad);
				var y=(_this.R-20)*Math.sin(rad);
				_this.cxt.fillText(item,x,y);
				_this.cxt.strokeText(item,x,y);
			})
			this.cxt.restore();
			return this;		
		}
		clock.prototype.drawTicks = function() {
			var r;
			this.cxt.save();
			this.cxt.translate(this.W/2,this.H/2);
			for(var i=0; i<60; i++){
				var rad = Math.PI*2 / 60 * i;
				var x = Math.cos(rad) * (this.R - 10);
				var y = Math.sin(rad) * (this.R - 10);
				this.cxt.beginPath();
				if(i%5 == 0){
					this.cxt.fillStyle = '#000';
					r = 2;
				}else{
					r = 1;
					this.cxt.fillStyle = '#666666';
				}
				this.cxt.arc(x, y, r, 0, Math.PI*2);
				this.cxt.fill();
			}
			this.cxt.restore();
			return this;
			};	
		clock.prototype.DrawHour=function  (h) {
			var rad = Math.PI / 6 * h;
			this.cxt.save();
			this.cxt.translate(this.W/2,this.H/2);
			this.cxt.rotate(rad);
			this.cxt.lineWidth = 8;
			this.cxt.lineCap = 'round';
			this.cxt.beginPath();
			this.cxt.lineTo(0,10);
			this.cxt.lineTo(0,-(this.R*60/100));
			this.cxt.stroke();
			this.cxt.restore();
			return this;			
		}
		clock.prototype.DrawMins=function  (m) {
			var rad = Math.PI*2 / 60 * m;
			this.cxt.save();
			this.cxt.translate(this.W/2,this.H/2);
			this.cxt.rotate(rad);
			this.cxt.lineWidth = 5;
			this.cxt.lineCap = 'round';
			this.cxt.beginPath();
			this.cxt.lineTo(0,10);
			this.cxt.lineTo(0,-(this.R*80/100));
			this.cxt.stroke();
			this.cxt.restore();
			return this;			
		}
		clock.prototype.DrawSec=function  (s) {
			var rad = Math.PI*2 / 60 * s;
			this.cxt.save();
			this.cxt.translate(this.W/2,this.H/2);
			this.cxt.rotate(rad);
			this.cxt.lineWidth = 8;
			this.cxt.lineCap = 'round';
			this.cxt.beginPath();
			this.cxt.lineTo(-3,10);
			this.cxt.lineTo(3,10);
			this.cxt.lineTo(1,-(this.R*90/100));
			this.cxt.lineTo(-1,-(this.R*90/100));
			this.cxt.closePath();
			this.cxt.fillStyle = '#FF0000';
			this.cxt.fill();
			this.cxt.restore();
			return this;			
		}
		clock.prototype.drawCircle = function() {
			this.cxt.save();
			this.cxt.translate(this.W/2,this.H/2);
			this.cxt.beginPath();
			this.cxt.arc(0,0,8,0,2*Math.PI);
			this.cxt.fillStyle = '#F7FF20';
			this.cxt.fill();
			this.cxt.restore();
			return this;
			};
		var cc= new clock({
			canvas:document.getElementById(id)
		});
		cc.init();			
		
	})('canvas');
