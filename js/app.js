const MAP_WIDTH = 19;
const MAP_HEIGHT = 15;
const MAP_FILL_RATE = 29;
const PLAYER_STARTING_X = 9;
const PLAYER_STARTING_Y = 7;

var locked = null;
var canvas = null;
var player = null;
var map = null;

function boot()
{
	lock();
	preload("images/background.png");
	preload("images/blank.png");
	preload("images/death.png");
	preload("images/enemy.png");
	preload("images/obst.png");
	preload("images/player.png");
	new_canvas();
	new_player();
	new_map();
	render();
	listen();
	unlock();
}
