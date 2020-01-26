function play_audio(file)
{
	var element = new Audio();
	element.addEventListener("canplaythrough", function(event) {
		event.target.play();
	});
	element.src = file;
}
