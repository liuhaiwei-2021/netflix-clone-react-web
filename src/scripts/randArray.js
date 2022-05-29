function randArray(array) {
	var rand = (Math.random() * array.length) | 0;
	var rValue = array[rand];
	return rValue;
}
export default randArray;
