function searchTheWeb(){
		event.preventDefault()
		var searchTerm=document.getElementById("searchText").value;
		var searchEngine = getCookie("searchEngine")
	  if (searchTerm === ""){
        window.location.href="https://ecosia.org/chat"
    } else if (searchTerm.startsWith("https://")){
      window.location.href=searchTerm
    } else if (searchTerm.endsWith(".dev") || searchTerm.endsWith(".uk") || searchTerm.endsWith(".com") || searchTerm.endsWith(".org") || searchTerm.endsWith(".net") || searchTerm.endsWith(".it")){
    	window.location.href="https://"+searchTerm
    } else{
			if (searchEngine == ""){
		  	window.location.href = "https://www.ecosia.org/search?q=" + encodeURIComponent(searchTerm)
			} else {
				window.location.href = "https://" + searchEngine + "/search?q=" + encodeURIComponent(searchTerm)
			}
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

function tik(){
const now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();

hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;

const currentTime = hours + ":" + minutes;

document.getElementById("tikklok").innerHTML=currentTime;
}
setInterval(tik, 5000);

function link1Change(){
	link1url=prompt("Where do you want this link to go? (start with https://) (clear to remove link)")
	if ((link1url!=null) && link1url != "clear"){
		link1content=prompt("What do you want this link to say?")
		setCookie("link1url", link1url, 365)
		setCookie("link1content", link1content, 365)
	} else if (link1url == "clear"){
		setCookie("link1url", "", 365)
	}
	initialise()
}

function initialise(){
	if (getCookie("link1url")!="" && getCookie("link1content")!=""){
		document.getElementById("link1").href = getCookie("link1url");
		document.getElementById("link1").innerHTML = getCookie("link1content");
	} else {
		document.getElementById("favouriteHeading").style.display="none";
	}
	if (getCookie("link2url")!="" && getCookie("link2content")!=""){
		document.getElementById("link2").href = getCookie("link2url");
		document.getElementById("link2").innerHTML = getCookie("link2content");
	}
	if (getCookie("showSuggested") == "1"){
		document.getElementById("suggested").style.display="block"
	}
	if (getCookie("showClock") == "1"){
		document.getElementById("tikklok").style.display="block"
		tik()
	}
	if (getCookie("greeting") != "" && getCookie("greeting") != "clear"){
		document.getElementById("greeting").innerHTML=getCookie("greeting")
	}
	if (getCookie("theme") != ""){
		document.getElementById("styleLink").href=getCookie("theme")+".css"
	}
	if (getCookie("colour") != "") {
		document.body.style.backgroundColor=getCookie("colour");
	} 
}
function showHideClock(){
	if (getCookie("showClock") == "1"){
		setCookie("showClock", "0", 365)
	} else {
		setCookie("showClock", "1", 365)
	}
	initialise()
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
	link2url=prompt("Where do you want this link to go? (start with https://) (clear to remove link)")
	if ((link2url!=null) && link2url != "clear"){
		link2content=prompt("What do you want this link to say?")
		setCookie("link2url", link2url, 365)
		setCookie("link2content", link2content, 365)
	} else if (link2url == "clear"){
		setCookie("link2url", "", 365)
	}
	initialise()
}

function themeChange(string) {
  console.log("setting theme cookie...");
  setCookie("theme", string, 365);
  console.log("success!");
  if (confirm("change theme?")) {
    initialise();
  } else {
    alert("next time you reload CSHome, the changes will apply");
  }
}

function customGreeting(){
	setCookie("greeting", prompt("What would you like the greeting to say? (clear to show no custom greeting)"), 365)
}

function customColour(){
	var colore= prompt("Input a HEX colour code starting with # (input clear to remove custom colour)")
	if (colore != "clear" && colore != null){
		setCookie("colour", colore, 365)
	} else if (colore == "clear") {
		setCookie("colour", "", 365)
	}
	initialise();
}

function customSearchEngine(){
	var engine=prompt("choose a search engine (no need to put https:// at start) (clear to remove)\n\n current is: " + getCookie("searchEngine"))
	if (engine=="clear"){
		setCookie("searchEngine", "", 365)
	} else if (engine != null) {
	setCookie("searchEngine", engine, 365)
	}
}

initialise()