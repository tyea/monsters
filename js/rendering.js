function render()
{
	var player = get_player();
	var html = "";
	for (var y = 0; y < MAP_HEIGHT; y += 1) {
		html += "<tr>";
		for (var x = 0; x < MAP_WIDTH; x += 1) {
			var cell = get_cell(x, y);
			if (x == player.x && y == player.y) {
				if (cell.enemies > 0) {
					var image = "death.png";
				} else {
					var image = "player.png";
				}
			} else if (cell.is_obst) {
				var image = "obst.png";
			} else if (cell.enemies == 1) {
				var image = "enemy.png";
			} else {
				var image = "blank.png";
			}
			html += "<td><img src=\"images/" + image + "\"></td>";
		}
		html += "</tr>";
	}
	var canvas = get_canvas();
	canvas.innerHTML = html;
}
