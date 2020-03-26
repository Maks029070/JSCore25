$(function() {
	let array = _.range(-50, 30, 4);
	let ShuffledArray = _.shuffle(array);
	let maxIndex = _.indexOf(ShuffledArray, _.max(ShuffledArray));
	let minIndex = _.indexOf(ShuffledArray, _.min(ShuffledArray));

	console.log("Shuffled Array: ");
	console.log(ShuffledArray);

	console.log("Maximum value index: ");
	console.log(maxIndex);

	console.log("Minimum value index: ");
	console.log(minIndex);
});