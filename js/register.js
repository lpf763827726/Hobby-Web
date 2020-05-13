function change(myid,mode){
	document.getElementById(myid).style.display=mode;
	if(mode == 'block'){
		document.getElementById(myid).style.borderTop="none";
		document.getElementById(myid).parentNode.style.backgroundColor="#dcdcdc";
		document.getElementById(myid).parentNode.style.border="1px solid #eee";
		document.getElementById(myid).parentNode.style.borderBottom="none";
	}
	else{
		document.getElementById(myid).parentNode.style.backgroundColor="";
		document.getElementById(myid).parentNode.style.border="";
	}
}

// function isOtherChar(str){
// 	var arr = ["!","#","$","%","^","&","*',"(",")","<",">""];
// 	for(var i=0;i<str.length;i++){
// 		for(var j=0;j<arr.length;j++){
// 			if(str.charAt(i)==arr[j]){
// 				return true;
// 			}
// 		}
// 	}
// 	return false;
// }
// function checkChar(obj){
// 	var str;
// 	if(isOtherChar(str)){
// 		str.nextSibling.style.display = 'inline-block';
// 	}else{
// 		str.nextSibling.style.display = 'none';
// 	}
// }

function checkEmpty(obj){
	if(!obj.value){
		obj.nextSibling.style.display = 'inline-block';
	}else{
		obj.nextSibling.style.display = 'none';
	}
}
function checkPwd(obj){
	var pwd = document.getElementById('pwd').value;
	var pwdAgain = obj.value;
	if(pwd != pwdAgain){
		obj.nextSibling.style.display = 'inline-block';
	}else{
		obj.nextSibling.style.display = 'none';
	}
}