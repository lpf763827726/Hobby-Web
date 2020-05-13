var timer;
window.onload = function(){
	index1=0;
	timer=window.setInterval(autoChange,3000); 
}
function showMe(index){
	clearInterval(timer);
	var picArr=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"];
	var pinkArr=["one","two","three","four"];
	document.getElementById("pic").src=picArr[index];
	document.getElementById(pinkArr[index]).style.backgroundColor="rgba(255,200,200,0.7)";
	document.getElementById(pinkArr[index]).style.color="#909090";
}
function out(i){
	timer=window.setInterval(autoChange,3000); 
	var pinkArr=["one","two","three","four"];
	document.getElementById(pinkArr[i]).style.backgroundColor="rgba(255,255,255,0.7)";
}
function autoChange(){
	index1++;
	var picArr=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"];
	var pinkArr=["one","two","three","four"];
	if(index1==4){
		index1=0;
	}
	// for(var i=0;i<picArr.length;i++){
		document.getElementById("pic").src=picArr[index1];
	// }
	for(var i=0;i<pinkArr.length;i++){
		// if(i != pinkArr.length){
		// document.getElementById(pinkArr[index1]).style.backgroundColor="rgba(255,200,200,0.7)";
		// }else{
		// document.getElementById(pinkArr[index1]).style.backgroundColor="rgba(255,255,255,0.7)";
		// }
		document.getElementById(pinkArr[i]).style.backgroundColor="rgba(255,255,255,0.7)";
		document.getElementById(pinkArr[i]).style.color="#909090";
	}
	document.getElementById(pinkArr[index1]).style.backgroundColor="rgba(255,200,200,0.7)";
	document.getElementById(pinkArr[index1]).style.color="#ff0000";
}