/* global CONS */
function main(world, state) {
	state = state + 1;

    function mod (a, b) {
        return a - (a / b) * b;
    }

    function step (world, state) {
    	var c = mod(state, 4);
    	return CONS(state + 1, c);
    }

    return CONS(42, step);
}
