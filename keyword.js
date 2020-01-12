function Results() {
        	
	var val = document.getElementById('val').value;

  	if (val == "PublicDrive") {
      	window.open("https://cloudmails-my.sharepoint.com/:f:/g/personal/yusuf_cloudmails_apu_edu_my/EsEN2dXYj-lAh4GcY03qNMgBJkflRDmzA0H8HQhAGxTcEA");
	}
	if (val == "PrivAte") {
      	window.open("https://cloudmails-my.sharepoint.com/:f:/g/personal/yusuf_cloudmails_apu_edu_my/Ei7vBFsqhAJPhgEBgeCP0JgBCPgmOaEHGtsMVB9Xls0V2Q");
	}
	if (val == "Files"){
	    window.open("https://files.000webhost.com");
	}
	if (val == "House33"){
	    window.open("https://cloudmails-my.sharepoint.com/:f:/g/personal/yusuf_cloudmails_apu_edu_my/EkMnhkc6Ol9LoqFJfxoWxQkBbHnrJemxgysIA4aPS0AFFg");
	}
	if (val == "potatochip"){
	    window.open("https://cloudmails-my.sharepoint.com/:f:/g/personal/yusuf_cloudmails_apu_edu_my/EsTtRQn1dslKhOaDkiHSiUEB1TagYHcDAfPKhGLrMHvcgA?e=L5xv5l");
	}
	if (val == "Example"){
	    window.open("https://www.google.com");
	}
	if (val === "") {
		window.alert("Welcome to Myusuf05. Input keyword and try again");
	}
	else {
    //    window.alert("Wrong keyword. Try again or contact Referer");
    }  
}
