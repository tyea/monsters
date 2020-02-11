function rand(lower, upper)
{
	upper += 1;
	var difference = upper - lower;
	var seed = Math.random() * difference;
	return Math.floor(seed) + lower;
}

function show_banner(message)
{
	get_canvas().parentNode.innerHTML += "<section>&nbsp;<br>" + message + "</section>";
}

function preload(url)
{
	var image = new Image();
	image.src = url;
}
