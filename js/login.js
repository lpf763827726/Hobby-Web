function checkEmpty(obj){
	if(!obj.value){
		obj.nextSibling.style.display = 'inline-block';
	}else{
		obj.nextSibling.style.display = 'none';
	}
}