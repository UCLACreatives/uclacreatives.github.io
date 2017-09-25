var projectsPage = document.getElementById('projectsPage');
var projectsPageOn = 0;
var ui = document.getElementsByClassName('ui');
var container = document.getElementById('container');
var about = document.getElementById('about');
var who = document.getElementById('who');
var projectsLink = document.getElementById('projectsLink');
var years = document.getElementsByClassName('year');

function toggleProjectsPage(){
	var bars = projectsLink.getElementsByClassName('plus')[0].getElementsByTagName('div');
	if (!projectsPageOn){
		projectsPage.style.left = 0;
		projectsPage.style.opacity = 1;
		projectsPageOn = 1;
		projectsLink.style.color = '#F8FBFC';
		bars[0].style.backgroundColor = '#F8FBFC';
		bars[1].style.backgroundColor = '#F8FBFC';
		//hide the about and who page
		about.style.display = 'none';
		who.style.display = 'none';
	}
	else{
		projectsLink.style.color = '#222428';
		bars[0].style.backgroundColor = '#222428';
		bars[1].style.backgroundColor = '#222428';
		projectsPage.style.left = -100 + "%";
		projectsPage.style.opacity = 0;
		projectsPageOn = 0;
		//hide the about and who page
		about.style.display = 'flex';
		who.style.display = 'flex';
	}
}

document.getElementById('projectsLink').addEventListener('mousedown', toggleProjectsPage);

function onScroll(){
	var about = document.getElementById('about');
	var who = document.getElementById('who');
	var main = document.getElementById('container');

	var mainBottom = main.getBoundingClientRect().bottom;
	var aboutTop = about.getBoundingClientRect().top;
	var whoTop = who.getBoundingClientRect().top;

	var leftNav = document.getElementsByClassName('leftNav')[0];
	var aboutButton = ui[4];
	var whoButton = ui[5];

	for (var i=0; i<ui.length; i++){
		var element = ui[i];
		var bottom = element.getBoundingClientRect().bottom;
		var color;
		if (bottom <=mainBottom){
			color = '#222428';
			leftNav.classList.remove('whoActive');
			leftNav.classList.remove('aboutActive');
		}
		else if (bottom >= whoTop){
			color = '#F8FBFC';

			if (ui[i] == whoButton){
				leftNav.classList.remove('aboutActive');
				leftNav.classList.add('whoActive');
			}
		}
		else if (bottom >= aboutTop){
			color = '#222428';

			if (ui[i] == aboutButton){
				leftNav.classList.remove('whoActive');
				leftNav.classList.add('aboutActive');
			}
		}
		element.style.color = color;

		if (element.classList.contains('bgColor'))
			element.style.backgroundColor = color;
	}
}

window.addEventListener('scroll', onScroll);

$(document).ready(function(){  
	//SMOOTH SCROLL
	$('a[href^="#"]').on('click',function (e) {
	  e.preventDefault();
	 
	  var target = this.hash;
	  var $target = $(target);

	  $('#projects').stop().animate({
	      'scrollTop': $target.offset().top
	  }, 800, 'swing', function () {
	      window.location.hash = target;
	  });
	});
	$('.projectsYear').click(function(){
		$(this).find(".projectsListContainer ul li a").removeClass('gray').addClass('white');
     	$('.projectsYear').not(this).each(function(){
         	$(this).find('.projectsListContainer ul li a').removeClass('white').addClass('gray');
         	if($(this).index() == 0) {
         		$('.2016').slideUp();
         		console.log('yo');
         	}else{
         		$('.2017').slideUp();
         	}
    	});
	})
})
