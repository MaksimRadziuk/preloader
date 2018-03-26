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

function description_wrap_show_fix() {
	document.getElementById('description_wrap').style.height = '240px';
}
setTimeout(description_wrap_show_fix, 2700)

function orange_show() {
	document.getElementById('orange').style.color = '#ff6600';
	document.getElementById('orange').style.animation = 'swipe .5s linear';
}
setTimeout(orange_show, 2700)

function orange_show_fix() {
	document.getElementById('orange').style.width = '100%';
}
setTimeout(orange_show_fix, 3200)

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
	var id_p = setInterval(frame, 150);

	function frame(){
		if (count == 99) {
			clearInterval(id_p);
		}
		else {
			count++;
			el_p.innerHTML = count + 1;
		}
	}
}
setTimeout(percent_count, 3000)



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
		document.getElementById('description_wrap').style.height = '200px';
	}
	setTimeout(description_wrap_show_fix, 2700)

	function tractor_move1() {
		var el = document.getElementById('tractor');
		var pos = '-320';
		var id = setInterval(frame, 100);

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
else{
	function tractor_move1() {
		var el = document.getElementById('tractor');
		var pos = '-490';
		var id = setInterval(frame, 30);

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





window.onload = function(){

	function percent_chng9() {
		document.getElementById('percent').innerHTML = '100';
	}
	setTimeout(percent_chng9, 12000)

	

	function img_wrap_hide() {
		document.getElementById('img_wrap').style.animation = 'fadeOut 0.1s linear';
	}
	setTimeout(img_wrap_hide, 12100)
	function line_hide() {
		document.getElementById('line').style.display = 'none';
		document.getElementById('progress').style.animation = 'fadeOut 0.1s linear';
		document.getElementById('percent').style.animation = 'fadeOut 0.1s linear';
		document.getElementById('perc_symbol').style.animation = 'fadeOut 0.1s linear';
	}
	setTimeout(line_hide, 12100)



	function img_wrap_hide_fix() {
		document.getElementById('img_wrap').style.display = 'none';
		document.getElementById('progress').style.display = 'none';
		document.getElementById('percent').style.display = 'none';
		document.getElementById('perc_symbol').style.display = 'none';
	}
	setTimeout(img_wrap_hide_fix, 12200)


	function description_wrap_hide() {
		document.getElementById('description_wrap').style.animation = 'slidesRev 0.2s linear';
	}
	setTimeout(description_wrap_hide, 12200)

	function description_wrap_hide_fix() {
		document.getElementById('description_wrap').style.visibility = 'hidden';
		document.getElementById('description_wrap').style.height = '0px';
	}
	setTimeout(description_wrap_hide_fix, 12400)

	function slogan_hide() {
		document.getElementById('slogan').style.animation = 'slideDownRev .1s linear';
	}
	setTimeout(slogan_hide, 12400)

	function slogan_hide_fix() {
		document.getElementById('slogan').style.visibility = 'hidden';
		document.getElementById('slogan').style.top = '-40px';
	}
	setTimeout(slogan_hide_fix, 12500)

	function name_hide() {
		document.getElementById('name').style.animation = 'scaleBlinkRev 0.1s linear';
	}
	setTimeout(name_hide, 12500)

	function name_hide_fix() {
		document.getElementById('name').style.visibility = 'hidden';
		document.getElementById('name').style.transform = 'scale(0)';
	}
	setTimeout(name_hide_fix, 12600)

	function logo_hide() {
		document.getElementById('logo').style.animation = 'scaleBlinkRev 0.1s linear';
	}
	setTimeout(logo_hide, 12500)

	function logo_hide_fix() {
		document.getElementById('logo').style.visibility = 'hidden';
		document.getElementById('logo').style.transform = 'scale(0)';
	}
	setTimeout(logo_hide_fix, 12600)

	function preload_hide() {
		document.getElementById('preloader_wrap').style.animation = 'fadeOut 0.2s linear';
	}
	setTimeout(preload_hide, 12600)
	function preload_hide_fix() {
		document.getElementById('preloader_wrap').style.display = 'none';
	}
	setTimeout(preload_hide_fix, 12800)

};
