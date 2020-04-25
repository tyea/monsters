function get_menu_message()
{
	var message = "\n";
	message += "Upon entering a dimly lit dungeon, the door you just passed through slams shut of its own accord. ";
	message += "The entrance won't open despite your best efforts. ";
	message += "As you turn and move towards the centre of the room your eyes adjust to the darkness... ";
	message += "There are dozens of blood thirsty monsters surrounding you!\n\n";
	message += "Your most powerful spells bounce off their leathery hides, leaving you powerless. ";
	message += "Your only chance of survival lies by moving in such a way that the monsters collide with each other... ";
	message += "the ancient cobbled floor doesn't look strong enough to hold the weight of multiple monsters!\n\n";
	message += "You might be able to use a teleportation spell if you're cornered. ";
	message += "It's tricky to cast correctly... there's no guarantee you won't appear next to a monster!\n\n";
	message += "Use Q, W, E, A, D, Z, X, and C to move. Use S to teleport. Use SPACEBAR to start the game.";
	return message;
}

function get_win_message()
{
	var message = "As the last monster falls through a hole you breathe a sigh of relief. ";
	message += "Pausing to gather your thoughts you notice something shiny and metallic on the floor... it's a key!\n\n";
	message += "You move back to the entrance, carefully avoiding the treacherous floor. ";
	message += "The key slides perfectly into the lock and turns with a satisfying clunk.\n\n";
	message += "The door opens and cool air hits you... you're free!\n\n";
	message += "Use spacebar to return to the menu."
	return message;
}

function get_lose_message()
{
	var message = "A monster closes in on you and tears you limb from limb. ";
	message += "The last thing you remember is an overpowering stench and an agonising burst of pain.\n\n";
	message += "Your bones will serve as a warning to those who may stumble across this dungeon in the future... you died.\n\n";
	message += "Use spacebar to return to the menu."
	return message;
}
