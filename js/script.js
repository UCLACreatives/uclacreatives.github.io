var projectsPage = document.getElementById('projectsPage');
var projectsPageOn = 0;
var ui = document.getElementsByClassName('ui');
var about = document.getElementById('about');
var projectsLink = document.getElementById('projectsLink');

function toggleProjectsPage(){
	var bars = projectsLink.getElementsByClassName('plus')[0].getElementsByTagName('div');
	if (!projectsPageOn){
		projectsPage.style.left = 0;
		projectsPage.style.opacity = 1;
		projectsPageOn = 1;
		projectsLink.style.color = '#F8FBFC';
		bars[0].style.backgroundColor = '#F8FBFC';
		bars[1].style.backgroundColor = '#F8FBFC';
	}
	else{
		projectsLink.style.color = '#222428';
		bars[0].style.backgroundColor = '#222428';
		bars[1].style.backgroundColor = '#222428';
		projectsPage.style.left = -100 + "%";
		projectsPage.style.opacity = 0;
		projectsPageOn = 0;
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