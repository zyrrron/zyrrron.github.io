// hide and display when we want them to do that
var flag_after_clean=0;
var isHide = [false,false, true, true, true, true];
var s = "step";
var step = 1;
var mode_num = 0, flag_points_clean = 1;


function hide(){
	var content1 = document.getElementById(s+step);
	var content2 = document.getElementById("fig"+step);
	console.log(s+step);
	if (isHide[step]) {
		content1.style.display='';
		content2.style.display='';
	}else{
		content1.style.display='none';
		content2.style.display='none';
	}
	isHide[step]=!isHide[step];
}

function show(i){
	step = i;
	hide();
	var content=document.getElementById("fig"+step);
	content.id = "fig"+i;
	content.src = "image/"+i+".jpg";
	
}


