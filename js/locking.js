function lock()
{
	window.locked = true;
}

function unlock()
{
	window.locked = false;
}

function is_locked()
{
	return window.locked;
}
