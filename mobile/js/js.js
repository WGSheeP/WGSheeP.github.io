function easeAct(){clearTimeout(pease),clearTimeout(pesestart);var t=$(".swiper-slide-active .easelay");t.hide(),t.each(function(e){var n=t.eq(e),s=n.attr("data-easein"),o=n.attr("data-start"),a=n.attr("data-easeinspeed"),i=n.attr("data-easing"),l=n.attr("data-easeingspeed"),r=n.attr("data-easeingcount");null!=s?(n.css({"-webkit-animation-duration":a+"s"}),0!=o?pesestart=setTimeout(function(){n.show(),n.css({"-webkit-animationName":s})},1e3*o):(n.show(),n.css("webkit-animationName",s)),null!=i&&(pease=setTimeout(function(){n.css({"-webkit-animationName":i,"-webkit-animation-iteration-count":r,"-webkit-animation-duration":l+"s"})},1e3*(o+a)))):n.show()})}function focus(){for(var t=document.querySelectorAll(".taskcont input"),e=document.documentElement.clientHeight,n=window.scrollY,s=0;s<t.length;s++)t[s].onfocus=function(){var t=this;n=window.scrollY,setTimeout(function(){var s=t.getBoundingClientRect().top+t.getBoundingClientRect().height;if(s>=e/2){var o=s-e/2;window.scrollY=n+o}},300)},t[s].onblur=function(){window.scrollY=n}}function music(){var t=document.querySelector(".audio");t.play(),$(".musicPic").on("click",function(){t.paused?(t.play(),$(this).removeClass("stopRotate"),$(this).addClass("rotate")):(t.pause(),$(this).addClass("stopRotate"),$(this).removeClass("rotate"))})}var pease,pesestart=null;document.addEventListener("touchmove",function(t){t.preventDefault()},!1),$(".pop").click(function(){$(".pop").hide(),$(".musicPic").show()}),$(".pop .close").click(function(){$(".pop").hide(),$(".musicPic").show()}),$(".submitbm-btn").click(function(){$(".bmsuccess").show(),$(".musicPic").hide()}),$(".sharefriend-btn").click(function(){$(".sharelay").show(),$(".musicPic").hide()}),$(".hdgz").click(function(){$(".hdgztxt").show()});var fz1,fz2,fz3=null,n1,n2,n3=null,fktimeArr=new Array("7:07","11:11","23:32"),fkddArr=new Array("天桥","广场中央","咖啡馆"),fksjArr=new Array("读一本最讨厌的书","跟卖艺人聊整天","亲吻陌生人");$(".startzd").click(function(){$(".fkscroll").show(),$(".fkresult").hide(),$(".bar .point").css({bottom:"-20%"}),n1=parseInt(3*Math.random()),n2=parseInt(3*Math.random()),n3=parseInt(3*Math.random()),console.log(n1+":"+n2+":"+n3),$(".lay6 .taskcont li").eq(0).html(fktimeArr[n1]),$(".lay6 .taskcont li").eq(1).html(fkddArr[n2]),$(".lay6 .taskcont li").eq(2).html(fksjArr[n3]),$(".startzd").attr("title","1"),$(".fkresult").removeClass("fk0"),$(".fkresult").removeClass("fk1"),$(".fkresult").removeClass("fk2"),fz1=setTimeout(function(){$(".gunlun1 .fkscroll").hide(),$(".gunlun1 .fkresult").show(),$(".gunlun1 .fkresult").addClass("fk"+n1),$(".bar .point").css({bottom:"20%"})},1e3),fz2=setTimeout(function(){$(".gunlun2 .fkscroll").hide(),$(".gunlun2 .fkresult").show(),$(".gunlun2 .fkresult").addClass("fk"+n2),$(".bar .point").css({bottom:"50%"})},2e3),fz3=setTimeout(function(){$(".gunlun3 .fkscroll").hide(),$(".gunlun3 .fkresult").show(),$(".gunlun3 .fkresult").addClass("fk"+n3),$(".bar .point").css({bottom:"80%"}),$(".maketask").show()},3e3)}),focus();