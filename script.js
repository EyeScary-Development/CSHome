function searchTheWeb(){
		event.preventDefault()
		var searchTerm=document.getElementById("searchText").value;
	  if (searchTerm === ""){
        window.location.href="https://ecosia.org/chat"
      } else if (searchTerm.startsWith("https://")){
      	window.location.href=searchTerm
      } else if (searchTerm.endsWith(".dev") || searchTerm.endsWith(".uk") || searchTerm.endsWith(".com") || searchTerm.endsWith(".org") || searchTerm.endsWith(".net")){
      	window.location.href="https://"+searchTerm
      } else{
    	console.log("https://www.ecosia.org/search?q=" + encodeURIComponent(searchTerm))
		window.location.href = "https://www.ecosia.org/search?q=" + encodeURIComponent(searchTerm)
	  }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function link1Change(){
	link1url=prompt("Where do you want this link to go? (clear to remove link)")
	if (link1url!=null || link1url!="null"){
		link1content=prompt("What do you want this link to say?")
		setCookie("link1url", link1url, 365)
		setCookie("link1content", link1content, 365)
		initialise()
	} else if (link1url == "clear"){
		setCookie("link1url", "null", 365)
	}
}

function initialise(){
	if (getCookie("link1url")!=null && getCookie("link1content")!=null){
		document.getElementById("link1").href = getCookie("link1url")
		document.getElementById("link1").innerHTML = getCookie("link1content")

	}
	if ((getCookie("link2url")!=null && getCookie("link2content")!=null) && (getCookie("link2url")!="null" && getCookie("link2content")!="null")){
		document.getElementById("link2").href = getCookie("link2url")
		document.getElementById("link2").innerHTML = getCookie("link2content")

	}
	if (getCookie("showSuggested") == "1"){
		document.getElementById("suggested").style.display="block"
	}
}

function openSettings(){
	document.getElementById("settings").style.display="block"
	document.getElementById("main").style.display="none"
}

function closeSettings(){
	document.getElementById("settings").style.display="none"
	document.getElementById("main").style.display="block"
}

function showHideSuggested(){
	if (getCookie("showSuggested") == "1"){
		setCookie("showSuggested", "0", 365)
	} else {
		setCookie("showSuggested", "1", 365)
	}
	initialise()
}

function link2Change(){
	link2url=prompt("Where do you want this link to go? (clear to remove link)")
	if (link2url!=null || link2url!="null"){
		link2content=prompt("What do you want this link to say?")
		setCookie("link2url", link2url, 365)
		setCookie("link2content", link2content, 365)
		initialise()
	} else if (link2url == "clear"){
		setCookie("link2url", "null", 365)
	}
}

initialise()