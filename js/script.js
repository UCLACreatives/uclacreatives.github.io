var projectsPage = document.getElementById('projectsPage');
var projectsPageOn = 0;

function toggleProjectsPage(){
	if (!projectsPageOn){
		projectsPage.style.left = 0;
		projectsPage.style.opacity = 1;
		projectsPageOn = 1;
	}
	else{
		projectsPage.style.left = -100 + "%";
		projectsPage.style.opacity = 0;
		projectsPageOn = 0;
	}
}

document.getElementById('projectsLink').addEventListener('mousedown', toggleProjectsPage);

