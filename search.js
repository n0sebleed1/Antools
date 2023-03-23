input = document.querySelector('.search-input')
button = document.querySelector('.search-button')


button.addEventListener('click', function(){
	if (input.value == "slack"){
		window.open("programs/slack.html")
	}

	if (input.value == "figma"){
		window.open("programs/figma.html")
	}

	if (input.value == "sketch"){
		window.open("programs/sketch.html")
	}

	if (input.value == "notion"){
		window.open("programs/notion.html")
	}

	if (input.value == "invision"){
		window.open("programs/invision.html")
	}

	if (input.value == "python"){
		window.open("programs/python.html")
	}

	if (input.value == "atom"){
		window.open("programs/atom.html")
	}

	if (input.value == "zeplin"){
		window.open("programs/zeplin.html")
	}

	if (input.value == ""){
		alert("Nothing found for your search :(")
	}
})