var xhr = getXHR();

xhr.onreadystatechange=function()
{
	if (xhr.readyState==4)
		{
    		//document.getElementById("myDiv").innerHTML=xhr.responseText;
    		alert(xhr.responseText);
    	}
}

$(document).ready(function(){
	xhr.open("GET","hola",true);
	xhr.send();
});