/* global CONS */
function main(world, state) {
    function mod (a, b) {
        return a - (a / b) * b;
    }

    function step (w, i) {
    	var c = mod(i, 4);
    	return CONS(i + 1, c);
    }

    return CONS(42, step);
}
