
var dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var timeData = new Date(),	
	day = timeData.getDate(),
	dayNameValue = timeData.getDay(),
	month = timeData.getMonth(),
	year = timeData.getFullYear(),
	seconds = timeData.getSeconds(),
	minutes = timeData.getMinutes(),
	hours = timeData.getHours();
var secondsDegree = seconds*6,
	minutesDegree = minutes*6,
	hoursDegree = hours*30 + minutesDegree/12;

function timeChange(){
	
	if(Number.isInteger(secondsDegree/360)){
		secondsDegree += 6;
		minutesDegree += 6;
	}else{
		secondsDegree += 6;
	}
	
	
	if(Number.isInteger(minutesDegree/360)){
		minutesDegree += 6;
		hoursDegree += 6 ;
	}else{
		hoursDegree = hours*30 +(minutesDegree/12);
	}
	
	
	$('.dayName').html(dayNames[dayNameValue]);
	$('.dayNumMonth').html(day +' '+ monthNames[month]);
	$('.year').html(year)
		
	$('.timeStatus').html(hours+':'+minutes+'<span class="seconds">'+seconds+'</span>');
	$('.secondArrow').css({
		transform: "rotate("+secondsDegree+"deg)"
	}, 400);
	$('.minuteArrow').css({
		transform : "rotate("+minutesDegree+"deg)"
	},800);
	$('.hourArrow').css({
		transform : "rotate("+hoursDegree+"deg)"
	},160);
}

setInterval(function(){
	timeChange();
}, 1000)




$(window).mousemove((e)=>{
	var x = e.pageX,
		y = e.pageY;
	
	var xPercent = (x/screen.width)*100,
		yPercent = (y/screen.height)*100;
	
	var xTransCoef = xPercent - 50,
		yTransCoef = yPercent - 50;
	
	var startValue = -50;
		
	$('.clockBox').css({
		transform : 'translate('+ (startValue + xTransCoef/45) + '%, '+ (startValue + yTransCoef/45) + '%)'
	})
	
	$('.dateData').css({
		transform : 'translate('+ (startValue + xTransCoef)/45 +'%, '+ (startValue + yTransCoef)/45 +'%)'
	})
	
	
	$('.background1').css({
		transform : 'translate('+ (startValue + xTransCoef)/30 +'%, '+ (startValue + yTransCoef)/30 +'%)'
	})
	
	$('.mainWrapper').css({
		transform : 'translate('+ (startValue + xTransCoef/15) + '%, '+ (startValue + yTransCoef/15) + '%) scale('+ 1.2 +')'
	})
})

window.onload = function() {
	Particles.init({
		selector: '.background1',
		maxParticles: 500,
		sizeVariations: 5,
		color: 'rgba(255, 192, 203, .5)',
  });
};




