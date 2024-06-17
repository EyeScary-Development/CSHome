function searchTheWeb(){
		event.preventDefault()
		var searchTerm=document.getElementById("searchText").value;
	  if (searchTerm === ""){
        window.location.href="https://ecosia.org/chat"
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
	link1url=prompt("Where do you want this link to go?")
	link1content=prompt("What do you want this link to say?")
	setCookie("link1url", link1url, 365)
	setCookie("link1content", link1content, 365)
	initialise()
}

function initialise(){
	if (getCookie("link1url")!=null && getCookie("link1content")!=null){
		document.getElementById("link1").href = getCookie("link1url")
		document.getElementById("link1").innerHTML = getCookie("link1content")

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