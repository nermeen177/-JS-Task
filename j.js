/*sec1*/
$(document).ready(function()
{
 $(".img1").click(function(){
 	$(".image1").css("opacity","0.7");
 	$(".image2").css("opacity","1");
 	$(".image3").css("opacity","1");
 	$(".image4").css("opacity","1");
    $(".im4").hide();
    $(".im3").hide();
    $(".im2").hide();
    $(".img1").show();
    
 });
 $(".img2").click(function(){
 	$(".image2").css("opacity","0.7");
 	$(".image1").css("opacity","1");
 	$(".image3").css("opacity","1");
 	$(".image4").css("opacity","1");
    $(".im4").hide();
    $(".im3").hide();
    $(".im1").hide();
    $(".img2").show();
 });
 $(".img3").click(function(){
 	$(".image3").css("opacity","0.7");
 	$(".image1").css("opacity","1");
 	$(".image2").css("opacity","1");
 	$(".image4").css("opacity","1");
    $(".im4").hide();
    $(".im2").hide();
    $(".im1").hide();
    $(".im3").show();
 });
 $(".img4").click(function(){
 	$(".image4").css("opacity","0.7");
 	$(".image1").css("opacity","1");
 	$(".image2").css("opacity","1");
 	$(".image3").css("opacity","1");
    $(".im1").hide();
    $(".im2").hide();
    $(".im3").hide();
    $(".img4").show();
 });
});

/*sec2*/
var player1=document.querySelector(".p1");
var player2=document.querySelector(".p2");
var reset=document.querySelector(".reset");
var x=0;
var y=0;
document.getElementById('score').textContent = x + ' ' + 'To' + ' ' + y;

player1.onclick= function()
{
	x++;
	document.getElementById('score').textContent = x + ' ' + 'To' + ' ' + y;
	if(x==5)
	{	 
	  document.getElementById('result').textContent = "player1 is winner";
	   x=0;
	   y=0;
	   
    }

}
player2.onclick= function()
{
	y++;
	document.getElementById('score').textContent = x + ' ' + 'To' + ' ' + y;
	if(y==5)
	{
	  document.getElementById('result').textContent = "player2 is winner";
	  y=0;
	  x=0;
    }

}
reset.onclick= function()
{
    x=0;
    y=0;
 document.getElementById('score').textContent = x + ' ' + 'To' + ' ' + y;
 document.getElementById('result').textContent = " ";
 
}


/*sec3*/

var slides= document.querySelector('.slider-items').children;
var nextSlide= document.querySelector(".right-slide");
var prevSlide= document.querySelector(".left-slide");
var totalSlides= slides.length;
var index=0;

nextSlide.onclick= function()
{
	next("next");
}

prevSlide.onclick= function()
{
	next("prev");
}

function next(direction)
{
	if(direction=="next")
	{
		index++;
		if(index==totalSlides)
		{
			index=0;
		}

	}
	else
	{
		if(index==0)
		{
			index=totalSlides-1;
		}
		else
		{
			index--;
		}
	}
	for(i=0;i<slides.length;i++)
	{
		slides[i].classList.remove("active");
	}
	slides[index].classList.add("active");

}



/*sec4*/
function showTime()
{
	'use strict';
	var now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds();

    if(hours < 10)
    {
    	hours = '0' + hours;
    }

    if(minutes < 10)
    {
    	minutes = '0' + minutes;
    }

    if(seconds < 10)
    {
    	seconds = '0' + seconds;
    }
document.getElementById('clock').textContent = hours + ' ' + ':'+ ' '  +  minutes + ' ' + ':' + ' ' + seconds;
}

window.onload = function()
{
   'use strict';

   setInterval(showTime, 500);
}
