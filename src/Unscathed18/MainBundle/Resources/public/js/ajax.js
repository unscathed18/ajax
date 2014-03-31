function getXHR(){
	var xhr = false;
	
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		if(ActiveXObject){
			var vectorVersiones = ["Microsoft.XMLHTTP"];
			for(version in vectorVersiones){
				try{
					xhr = ActiveXObject(vectorVersiones[version]);
				}catch(e){
					alert(e.message);
				}
			}
		}
	}
	console.log("done!");
	return xhr;
}

/**/

function XHR(){
	this._xhr;
	this._method;

	this.init = function(){
		var xhr = false;
		
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			if(ActiveXObject){
				var vectorVersiones = ["Microsoft.XMLHTTP"];
				for(version in vectorVersiones){
					try{
						xhr = ActiveXObject(vectorVersiones[version]);
					}catch(e){
						alert(e.message);
					}
				}
			}
		}
		console.log("done!");
		this._xhr = xhr;
	}
	this.getResource(file){
		
	}

	/* BEG constructor */
	this.init();
	/* END constructor */
}