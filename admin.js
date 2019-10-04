// Кто-нибудь обфусцируйте это пжлст
$(document).on('click','#login', function(){
    var password = $('#password').val();
    if (password == "1amkfmkaf2qkfqkf3mwkgmkwg4ngwgq") {
    	alert("УРАААА МОЛОДЦЫ ААа")
    	document.getElementById('successful').innerHTML += '<img id="snoop" src="src/snoop.gif" size="250"/>';
    	document.getElementById('successful').innerHTML += '<img id="anime" src="src/anime.gif" size="250"/>';
    	document.getElementById('form').innerHTML = '<img id="beer" src="src/beer.gif" size="250"/>';
    }
    else {
    	alert("LOH")
    }
});