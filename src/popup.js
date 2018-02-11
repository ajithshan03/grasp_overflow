
function compute() {

	var input = document.getElementById("input").value;
	if(localStorage["open_in"] == "sametab"){
		chrome.tabs.getSelected( undefined, function(tab) {
			chrome.tabs.update(tab.id, {url: "http://www.wolframalpha.com/input/?i="+encodeURIComponent(input) + "&t=crmtb01"}, undefined);
			window.close();	
		}); 
	} else {
		chrome.tabs.create({url: "http://www.wolframalpha.com/input/?i="+encodeURIComponent(input) + "&t=crmtb01"});	
	}
}

function submitHandler(submitEvent) {
	compute();
}


$(document).ready(function () {

	$('#inputform').bind('submit', submitHandler);

});

