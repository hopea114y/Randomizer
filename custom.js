window.onload = function() {
	do {
	var maxNumber = +prompt('Enter a last participating positive integer', '999');
	} while (maxNumber < 0 || maxNumber == null || maxNumber == NaN);
	var res = document.querySelector('.container');

	for(var i = 0; i < 15; i++) {
		setTimeout(function(i) {
			res.innerHTML = randomNumber(1, maxNumber);
		}, 500 * i + 1, i);
	}

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	
}
