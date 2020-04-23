function animate_player(dir)
{
	render();
	play_audio(dir == "TELEPORT" ? "audio/player_teleport.wav" : "audio/player_move.wav");
	setTimeout(animate_enemies, 500);
}

function animate_enemies()
{
	move_enemies();
	var deaths = calculate_collisions();
	render();
	play_audio(deaths ? "audio/enemy_death.wav" : "audio/enemy_move.wav");
	var end = calculate_end();
	switch (end) {
		case "WIN":
			setTimeout(function() {
				play_audio("audio/player_win.wav");
			}, 1500);
			setTimeout(function() {
				var message = nl2br(get_win_message());
				animate_game_over(message);
			}, 3000);
			break;
		case "LOSE":
			setTimeout(function() {
				play_audio("audio/player_lose.wav");
			}, 1500);
			setTimeout(function() {
				var message = nl2br(get_lose_message());
				animate_game_over(message);
			}, 3000);
			break;
		case "CONTINUE":
			unlock();
			break;
	}
}

function animate_game_over(message)
{
	show_banner(message);
	document.addEventListener("keyup", function(event) {
		if (event.keyCode == 32) {
			play_audio("audio/spacebar.wav");
			setTimeout(function() {
				window.location.reload();
			}, 250);
		}
	});
}
