function boot_menu()
{
	new_wrapper();
	var message = nl2br(get_menu_message());
	get_wrapper().innerHTML = "<section>" + message + "</section>";
	document.addEventListener("keyup", function(event) {
		if (event.keyCode == 32) {
			var at_menu = get_wrapper().innerHTML.substr(0, 8) == "<section";
			if (at_menu) {
				play_audio("audio/spacebar.wav");
				setTimeout(function() {
					get_wrapper().innerHTML = "<table id=\"canvas\"></table>";
					boot();
				}, 250);
			}
		}
	});
}
