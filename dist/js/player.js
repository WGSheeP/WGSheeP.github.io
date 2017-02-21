window.onload=function()
{
	var musicPlayer=document.getElementsByClassName("musicPlayer")[0];
	var playBox=document.getElementById("music-player");
	var closed=playBox.getElementsByClassName("closed")[0];
	var info=playBox.getElementsByClassName("info")[0];
//	var oClos=playBox.getElementsByClassName("jp-playlist")[0];
//	var jp-playlist=playBox.getElementsByClassName("jp-current-time")[0];
//	var oClos=playBox.getElementsByClassName("jp-previous")[0];
//	var oClos=playBox.getElementsByClassName("jp-play")[0];
//	var oClos=playBox.getElementsByClassName("jp-pause")[0];
//	var oClos=playBox.getElementsByClassName("jp-next")[0];
//	var oClos=playBox.getElementsByClassName("jp-volume-bar")[0];
//	var oClos=playBox.getElementsByClassName("jp-volume-bar-value")[0];
//	var oClos=playBox.getElementsByClassName("jp-volume-max")[0];
//	var oClos=playBox.getElementsByClassName("jp-mute")[0];
	musicPlayer.addEventListener("click",showIn,false);
	closed.addEventListener("click",showOut,false);
	function showIn()
	{
		playBox.style.top="50%";
		playBox.style.opacity="1";
		playBox.style.transform="scale(1)";
		closed.style.right="-27px";
		closed.style.top="-27px";
		closed.style.opacity="1";
		

	}
	function showOut()
	{
		playBox.style.top="-1000px";
		playBox.style.opacity="0";
		playBox.style.transform="scale(0)";
		
	}
//	function getLeft(obj)
//	{
//		var iLeft=0;
//		while(obj)
//		{
//			iLeft+=obj.offsetLeft;
//			obj=obj.offsetParent;
//		}
//		return iLeft
//	}
//	function fnClick(ev)
//	{
//		var iX=ev.clientX-getLeft(this);
//		var iDeg=iX>this.offsetWidth/2?-180:180;
//		var iMax=0;
//		var iNow=0;
//		oContact.style.display="block";
//		for(var i=0;i<aLi.length;i++)
//		{
//			if(iMax<Math.abs(i-this.index))
//			{
//				iMax=Math.abs(i-this.index);
//				iNow=i;
//			}
//			aLi[i].off=false;
//			aLi[i].style.transition="0.5s "+Math.abs(i-this.index)*100+"ms cubic-bezier(0.115, -0.195, 0.255, -0.280)";
//			aLi[i].style.WebkitTransform="rotateY("+iDeg+"deg)";
//			aLi[i].style.opacity=0.1;
//		}
//		aLi[iNow].addEventListener("webkitTransitionEnd",end,false);
//		function end()
//		{
//			this.removeEventListener("webkitTransitionEnd",end,false);
//			oContact.style.opacity=1;
//		}
//	}
//	oBack.onclick=function()
//	{
//		oContact.style.opacity=0;
//		oContact.addEventListener("webkitTransitionEnd",end,false);
//		function end()
//		{
//			this.removeEventListener("webkitTransitionEnd",end,false);
//			for(var i=0;i<aLi.length;i++)
//			{
//				aLi[i].off=true;
//				aLi[i].style.transition="0.5s "+(aLi.length-i-1)*100+"ms";
//				aLi[i].style.WebkitTransform="rotateY(0deg)";
//				aLi[i].style.opacity=1;
//			}	
//		}
//	};
//	oClos.onclick=function()
//	{
//		oBox.style.transition=".8s height,.6s top,0.4s opacity .2s";
//		oBox.style.height="40px";
//		oBox.style.top="320px";
//		oBox.style.opacity=0;
//	};
};