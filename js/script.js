var projectsPage = document.getElementById('projectsPage');
var projectsPageOn = 0;

function toggleProjectsPage(){
	if (!projectsPageOn){
		projectsPage.style.left = 0;
		projectsPageOn = 1;
	}
	else{
		projectsPage.style.left = -100 + "%";
		projectsPageOn = 0;
	}
}

document.getElementById('projectsLink').addEventListener('mousedown', toggleProjectsPage);
