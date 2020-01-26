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
			setTimeout(animate_win, 3000);
			break;
		case "LOSE":
			setTimeout(function() {
				play_audio("audio/player_lose.wav");
			}, 1500);
			setTimeout(animate_lose, 3000);
			break;
		case "CONTINUE":
			unlock();
			break;
	}
}

function animate_win()
{
	var message = "As the last monster falls through a hole you breathe a sigh of relief.";
	message += " Pausing to gather your thoughts you notice something shiny and metallic on the floor... it's a key!<br>&nbsp;<br>";
	message += "You move back to the entrance, carefully avoiding the treacherous floor.";
	message += " The key slides perfectly into the lock and turns with a satisfying clunk.<br>&nbsp;<br>";
	message += "The door opens and cool air hits you... you're free!<br>&nbsp;<br>";
	message += "Use spacebar to return to the menu."
	show_banner(message);
	document.addEventListener("keyup", function(event) {
		if (event.keyCode == 32) {
			play_audio("audio/spacebar.wav");
			setTimeout(function() {
				window.location = "index.html";
			}, 250);
		}
	});
}

function animate_lose()
{
	var message = "A monster closes in on you and tears you limb from limb.";
	message += " The last thing you remember is an overpowering stench and an agonising burst of pain.<br>&nbsp;<br>";
	message += "Your bones will serve as a warning to those who may stumble across this dungeon in the future... you died.<br>&nbsp;<br>";
	message += "Use spacebar to return to the menu."
	show_banner(message);
	document.addEventListener("keyup", function(event) {
		if (event.keyCode == 32) {
			play_audio("audio/spacebar.wav");
			setTimeout(function() {
				window.location = "index.html";
			}, 250);
		}
	});
}
