var max = '13';
var min = '5';
var result = Math.round(Math.random() * (max - min) + min);
document.getElementById('percent').innerHTML = result + '%';

function logo_show() {
	document.getElementById('logo').style.visibility = 'visible';
	document.getElementById('logo').style.animation = 'scaleBlink 0.5s linear';
}
setTimeout(logo_show, 500)

function name_show() {
	document.getElementById('name').style.visibility = 'visible';
	document.getElementById('name').style.animation = 'scaleBlink 0.5s linear';
}
setTimeout(name_show, 1000)

function slogan_show() {
	document.getElementById('slogan').style.visibility = 'visible';
	document.getElementById('slogan').style.animation = 'slideDown .2s linear';
}
setTimeout(slogan_show, 1500)

function description_wrap_show() {
	document.getElementById('description_wrap').style.visibility = 'visible';
	document.getElementById('description_wrap').style.animation = 'slides 2s linear';
}
setTimeout(description_wrap_show, 1700)

function description_wrap_show_fix() {
	document.getElementById('description_wrap').style.height = '240px';
}
setTimeout(description_wrap_show_fix, 3700)

function orange_show() {
	document.getElementById('orange').style.animation = 'swipe .5s linear';
}
setTimeout(orange_show, 3700)

function orange_show_fix() {
	document.getElementById('orange').style.width = '100%';
}
setTimeout(orange_show_fix, 4200)

function load_wrap_show() {
	document.getElementById('load_wrap').style.display = 'block';
	document.getElementById('load_wrap').style.animation = 'fadeIn .2s linear';
}
setTimeout(load_wrap_show, 4300)
function load_wrap_show_fix() {
	document.getElementById('load_wrap').style.opacity = '1';
}
setTimeout(load_wrap_show_fix, 4500)

function percent_chng() {
	document.getElementById('percent').innerHTML = '15%';
}
setTimeout(percent_chng, 4650)
function percent_chng1() {
	document.getElementById('percent').innerHTML = '20%';
}
setTimeout(percent_chng1, 4900)
function percent_chng2() {
	document.getElementById('percent').innerHTML = '31%';
}
setTimeout(percent_chng2, 5100)
function percent_chng3() {
	document.getElementById('percent').innerHTML = '40%';
}
setTimeout(percent_chng3, 5500)
function percent_chng4() {
	document.getElementById('percent').innerHTML = '55%';
}
setTimeout(percent_chng4, 6700)
function percent_chng5() {
	document.getElementById('percent').innerHTML = '63%';
}
setTimeout(percent_chng5, 7900)
function percent_chng6() {
	document.getElementById('percent').innerHTML = '79%';
}
setTimeout(percent_chng6, 8500)
function percent_chng7() {
	document.getElementById('percent').innerHTML = '88%';
}
setTimeout(percent_chng7, 10500)
function percent_chng8() {
	document.getElementById('percent').innerHTML = '96%';
}
setTimeout(percent_chng8, 11500)


function tractor_show() {
	document.getElementById('tractor').style.animation = 'fadeIn .2s linear';
}
setTimeout(tractor_show, 5500)
function tractor_show_fix() {
	document.getElementById('tractor').style.opacity = '1';
}
setTimeout(tractor_show_fix, 5700)



if (window.innerWidth <= 650) {

	function description_wrap_show_fix() {
		document.getElementById('description_wrap').style.height = '200px';
	}
	setTimeout(description_wrap_show_fix, 3700)

	function tractor_move1() {
		var el = document.getElementById('tractor');
		var pos = '-320';
		var id = setInterval(frame, 10);

		function frame(){
			if (pos == '-300') {
				clearInterval(id);
			}
			else {
				pos++;
				el.style.left = pos + "px";
			}
		}
	}
	setTimeout(tractor_move1, 6500)
	function tractor_move2() {
		var el = document.getElementById('tractor');
		var pos = '-300';
		var id = setInterval(frame, 10);

		function frame(){
			if (pos == '-270') {
				clearInterval(id);
			}
			else {
				pos++;
				el.style.left = pos + "px";
			}
		}
	}
	setTimeout(tractor_move2, 7800)
	function tractor_move3() {
		var el = document.getElementById('tractor');
		var pos = '-270';
		var id = setInterval(frame, 10);

		function frame(){
			if (pos == '-170') {
				clearInterval(id);
			}
			else {
				pos++;
				el.style.left = pos + "px";
			}
		}
	}
	setTimeout(tractor_move3, 8500)
	function tractor_move4() {
		var el = document.getElementById('tractor');
		var pos = '-170';
		var id = setInterval(frame, 10);

		function frame(){
			if (pos == '-98') {
				clearInterval(id);
			}
			else {
				pos++;
				el.style.left = pos + "px";
			}
		}
	}
	setTimeout(tractor_move4, 10500)
	function tractor_move5() {
		var el = document.getElementById('tractor');
		var pos = '-98';
		var id = setInterval(frame, 10);

		function frame(){
			if (pos == '-30') {
				clearInterval(id);
			}
			else {
				pos++;
				el.style.left = pos + "px";
			}
		}
	}
	setTimeout(tractor_move5, 11500)
}


else {
function tractor_move1() {
	var el = document.getElementById('tractor');
	var pos = '-490';
	var id = setInterval(frame, 10);

	function frame(){
		if (pos == '-368') {
			clearInterval(id);
		}
		else {
			pos++;
			el.style.left = pos + "px";
		}
	}
}
setTimeout(tractor_move1, 6500)
function tractor_move2() {
	var el = document.getElementById('tractor');
	var pos = '-368';
	var id = setInterval(frame, 10);

	function frame(){
		if (pos == '-303') {
			clearInterval(id);
		}
		else {
			pos++;
			el.style.left = pos + "px";
		}
	}
}
setTimeout(tractor_move2, 7800)
function tractor_move3() {
	var el = document.getElementById('tractor');
	var pos = '-303';
	var id = setInterval(frame, 10);

	function frame(){
		if (pos == '-172') {
			clearInterval(id);
		}
		else {
			pos++;
			el.style.left = pos + "px";
		}
	}
}
setTimeout(tractor_move3, 8500)
function tractor_move4() {
	var el = document.getElementById('tractor');
	var pos = '-172';
	var id = setInterval(frame, 10);

	function frame(){
		if (pos == '-98') {
			clearInterval(id);
		}
		else {
			pos++;
			el.style.left = pos + "px";
		}
	}
}
setTimeout(tractor_move4, 10500)
function tractor_move5() {
	var el = document.getElementById('tractor');
	var pos = '-98';
	var id = setInterval(frame, 10);

	function frame(){
		if (pos == '-30') {
			clearInterval(id);
		}
		else {
			pos++;
			el.style.left = pos + "px";
		}
	}
}
setTimeout(tractor_move5, 11500)
}


window.onload = function(){

	function percent_chng9() {
		document.getElementById('percent').innerHTML = '100%';
	}
	setTimeout(percent_chng9, 12000)

	
	function tractor_move() {
		var el = document.getElementById('tractor');
		var pos = '-30';
		var id = setInterval(frame, 10);

		function frame(){
			if (pos == '0') {
				clearInterval(id);
			}
			else {
				pos++;
				el.style.left = pos + "px";
			}
		}
	}
	setTimeout(tractor_move, 12000)

	function img_wrap_hide() {
		document.getElementById('img_wrap').style.animation = 'fadeOut 0.2s linear';
	}
	setTimeout(img_wrap_hide, 12200)
	function line_hide() {
		document.getElementById('line').style.display = 'none';
	}
	setTimeout(line_hide, 12200)
	function progress_hide() {
		document.getElementById('progress').style.animation = 'fadeOut 0.2s linear';
	}
	setTimeout(progress_hide, 12200)
	function percent_hide() {
		document.getElementById('percent').style.animation = 'fadeOut 0.2s linear';
	}
	setTimeout(percent_hide, 12200)



	function img_wrap_hide_fix() {
		document.getElementById('img_wrap').style.display = 'none';
	}
	setTimeout(img_wrap_hide_fix, 12400)
	function progress_hide_fix() {
		document.getElementById('progress').style.display = 'none';
	}
	setTimeout(progress_hide_fix, 12400)
	function percent_hide_fix() {
		document.getElementById('percent').style.display = 'none';
	}
	setTimeout(percent_hide_fix, 12400)



	function description_wrap_hide() {
		document.getElementById('description_wrap').style.animation = 'slidesRev 0.5s linear';
	}
	setTimeout(description_wrap_hide, 12400)

	function description_wrap_hide_fix() {
		document.getElementById('description_wrap').style.visibility = 'hidden';
		document.getElementById('description_wrap').style.height = '0px';
	}
	setTimeout(description_wrap_hide_fix, 12900)

	function slogan_hide() {
		document.getElementById('slogan').style.animation = 'slideDownRev .2s linear';
	}
	setTimeout(slogan_hide, 12900)

	function slogan_hide_fix() {
		document.getElementById('slogan').style.visibility = 'hidden';
		document.getElementById('slogan').style.top = '-40px';
	}
	setTimeout(slogan_hide_fix, 13100)

	function name_hide() {
		document.getElementById('name').style.animation = 'scaleBlinkRev 0.2s linear';
	}
	setTimeout(name_hide, 13100)

	function name_hide_fix() {
		document.getElementById('name').style.visibility = 'hidden';
		document.getElementById('name').style.transform = 'scale(0)';
	}
	setTimeout(name_hide_fix, 13500)

	function logo_hide() {
		document.getElementById('logo').style.animation = 'scaleBlinkRev 0.2s linear';
	}
	setTimeout(logo_hide, 13500)

	function logo_hide_fix() {
		document.getElementById('logo').style.visibility = 'hidden';
		document.getElementById('logo').style.transform = 'scale(0)';
	}
	setTimeout(logo_hide_fix, 13900)

	function preload_hide() {
		document.getElementById('preloader_wrap').style.animation = 'fadeOut 0.2s linear';
	}
	setTimeout(preload_hide, 13900)
	function preload_hide_fix() {
		document.getElementById('preloader_wrap').style.display = 'none';
	}
	setTimeout(preload_hide_fix, 14100)

};
