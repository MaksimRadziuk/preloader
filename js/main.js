var max = '13';
var min = '5';
var result = Math.round(Math.random() * (max - min) + min);
document.getElementById('percent').innerHTML = result;

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
	document.getElementById('description_wrap').style.animation = 'slides 1s linear';
}
setTimeout(description_wrap_show, 1700)

function orange_show() {
	document.getElementById('orange').style.animation = 'swipe 1s linear';
}
setTimeout(orange_show, 2900)

function orange_show_fix() {
	document.getElementById('orange').style.color = '#ff6600';
}
setTimeout(orange_show_fix, 3300)

function load_wrap_show() {
	document.getElementById('load_wrap').style.display = 'block';
	document.getElementById('load_wrap').style.animation = 'fadeIn .2s linear';
}
setTimeout(load_wrap_show, 2700)
function load_wrap_show_fix() {
	document.getElementById('load_wrap').style.opacity = '1';
}
setTimeout(load_wrap_show_fix, 2900)


function percent_count() {
	var el_p = document.getElementById('percent');
	var count = Number(el_p.innerHTML);
	var id_p = setInterval(frame, 50);

	function frame(){
		if (count == 39) {
			clearInterval(id_p);
		}
		else {
			count++;
			el_p.innerHTML = count + 1;
		}
	}
}
setTimeout(percent_count, 3000)


function percent_count1() {
	var el_p1 = document.getElementById('percent');
	var count1 = Number(el_p1.innerHTML);
	var id_p1 = setInterval(frame1, 150);

	function frame1(){
		if (count1 == 63) {
			clearInterval(id_p1);
		}
		else {
			count1++;
			el_p1.innerHTML = count1 + 1;
		}
	}
}
setTimeout(percent_count1, 4600)


function percent_count2() {
	var el_p2 = document.getElementById('percent');
	var count2 = Number(el_p2.innerHTML);
	var id_p2 = setInterval(frame2, 250);

	function frame2(){
		if (count2 == 81) {
			clearInterval(id_p2);
		}
		else {
			count2++;
			el_p2.innerHTML = count2 + 1;
		}
	}
}
setTimeout(percent_count2, 9600)

function percent_count3() {
	var el_p3 = document.getElementById('percent');
	var count3 = Number(el_p3.innerHTML);
	var id_p3 = setInterval(frame3, 400);

	function frame3(){
		if (count3 == 98) {
			clearInterval(id_p3);
		}
		else {
			count3++;
			el_p3.innerHTML = count3 + 1;
		}
	}
}
setTimeout(percent_count3, 16600)


function tractor_show() {
	document.getElementById('tractor').style.animation = 'fadeIn .2s linear';
}
setTimeout(tractor_show, 3500)
function tractor_show_fix() {
	document.getElementById('tractor').style.opacity = '1';
}
setTimeout(tractor_show_fix, 3500)



function tractor_wheels() {
	
}





if (window.innerWidth <= 650) {

	function description_wrap_show_fix() {
		document.getElementById('description_wrap').style.height = '160px';
	}
	setTimeout(description_wrap_show_fix, 2600)

	function tractor_move1() {
		var el = document.getElementById('tractor');
		var pos = '-200';
		var id = setInterval(frame, 80);

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
	setTimeout(tractor_move1, 3500)
}
if (window.innerWidth > 650){


	function description_wrap_show_fix() {
		document.getElementById('description_wrap').style.height = '240px';
	}
	setTimeout(description_wrap_show_fix, 2600)


	function tractor_move1() {
		var el = document.getElementById('tractor');
		var pos = '-490';
		var id = setInterval(frame, 40);

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
	setTimeout(tractor_move1, 3500)

}
if (window.screen.width <= 825 && window.screen.height <= 420) {


	function description_wrap_show_fix() {
		document.getElementById('description_wrap').style.height = '120px';
	}
	setTimeout(description_wrap_show_fix, 2600)
}

else{}




window.onload = function(){

	function percent_chng9() {
		document.getElementById('percent').innerHTML = '100';
	}
	setTimeout(percent_chng9, 25000)

	

	function img_wrap_hide() {
		document.getElementById('img_wrap').style.animation = 'fadeOut 0.1s linear';
	}
	setTimeout(img_wrap_hide, 25100)
	function line_hide() {
		document.getElementById('line').style.display = 'none';
		document.getElementById('progress').style.animation = 'fadeOut 0.1s linear';
		document.getElementById('percent').style.animation = 'fadeOut 0.1s linear';
		document.getElementById('perc_symbol').style.animation = 'fadeOut 0.1s linear';
	}
	setTimeout(line_hide, 25100)



	function img_wrap_hide_fix() {
		document.getElementById('img_wrap').style.display = 'none';
		document.getElementById('progress').style.display = 'none';
		document.getElementById('percent').style.display = 'none';
		document.getElementById('perc_symbol').style.display = 'none';
	}
	setTimeout(img_wrap_hide_fix, 25200)


	function description_wrap_hide() {
		document.getElementById('description_wrap').style.animation = 'slidesRev 0.2s linear';
	}
	setTimeout(description_wrap_hide, 25200)

	function description_wrap_hide_fix() {
		document.getElementById('description_wrap').style.visibility = 'hidden';
		document.getElementById('description_wrap').style.height = '0px';
	}
	setTimeout(description_wrap_hide_fix, 25400)

	function slogan_hide() {
		document.getElementById('slogan').style.animation = 'slideDownRev .1s linear';
	}
	setTimeout(slogan_hide, 25400)

	function slogan_hide_fix() {
		document.getElementById('slogan').style.visibility = 'hidden';
		document.getElementById('slogan').style.top = '-40px';
	}
	setTimeout(slogan_hide_fix, 25500)

	function name_hide() {
		document.getElementById('name').style.animation = 'scaleBlinkRev 0.1s linear';
	}
	setTimeout(name_hide, 25500)

	function name_hide_fix() {
		document.getElementById('name').style.visibility = 'hidden';
		document.getElementById('name').style.transform = 'scale(0)';
	}
	setTimeout(name_hide_fix, 25600)

	function logo_hide() {
		document.getElementById('logo').style.animation = 'scaleBlinkRev 0.1s linear';
	}
	setTimeout(logo_hide, 25500)

	function logo_hide_fix() {
		document.getElementById('logo').style.visibility = 'hidden';
		document.getElementById('logo').style.transform = 'scale(0)';
	}
	setTimeout(logo_hide_fix, 25600)

	function preload_hide() {
		document.getElementById('preloader_wrap').style.animation = 'fadeOut 0.2s linear';
	}
	setTimeout(preload_hide, 25600)
	function preload_hide_fix() {
		document.getElementById('preloader_wrap').style.display = 'none';
	}
	setTimeout(preload_hide_fix, 25800)

};
