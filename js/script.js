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