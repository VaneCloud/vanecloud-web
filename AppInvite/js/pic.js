$(function(){
	var oPicList=document.getElementById("carousel-inner");
	var aBtns=document.getElementById("picBtns").children;
	var jobPic=document.getElementById("jobPic");

	var iScroll=0;
	var iStartX=0;
	var iStartPageX=0;
	var iNow=0;
	var oTimer=0;

	oPicList.innerHTML+=oPicList.innerHTML;
	oPicList.style.width=oPicList.clientWidth*2+"px";

	function autoPlay()
	{
		oTimer=setInterval(function(){
			iNow++;	
			next();
		},4000);
	}

	autoPlay();

	oPicList.addEventListener("touchstart",fnStart,false);

	function fnStart(ev)
	{
		clearInterval(oTimer);
		clearInterval(oPicList.timer);
		if(iNow<=0)
		{
			iNow+=aBtns.length;
			iScroll=-iNow*jobPic.offsetWidth;
			css(oPicList, "translateX", iScroll);
		}
		iStartPageX=ev.changedTouches[0].pageX;
		iStartX=iScroll;
	};

	oPicList.addEventListener("touchmove",fnMove,false);
	function fnMove(ev)
	{
		var iDis=ev.changedTouches[0].pageX-iStartPageX;
		iScroll=iStartX+iDis;
		css(oPicList, "translateX", iScroll);
	};

	oPicList.addEventListener("touchend",fnEnd,false);

	function fnEnd(ev)
	{
		var iDis=ev.changedTouches[0].pageX-iStartPageX;
		var iNub=Math.round(iDis/jobPic.offsetWidth);
		iNow-=iNub;
		next();
		autoPlay();
	};

	function next()
	{
		iScroll=-iNow*jobPic.offsetWidth;
		for(var i=0;i<aBtns.length;i++)
		{
			aBtns[i].className="";
		}
		aBtns[iNow%aBtns.length].className="active";
		if(iNow>=aBtns.length)
		{
			tweenMove(oPicList,{translateX:iScroll},500,"easeOut",function(){
				iNow=iNow%aBtns.length;
				iScroll=-iNow*jobPic.offsetWidth;
				css(oPicList, "translateX", iScroll);
			});
		}
		else
		{
			tweenMove(oPicList,{translateX:iScroll},500,"easeOut");
		}
	}
	
})