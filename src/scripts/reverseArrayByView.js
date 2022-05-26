const reverseArrayByView = (property) => {
	return function (a, b) {
		const val1 = a[property];
		const val2 = b[property];
		return val2 - val1;
	};
};
export default reverseArrayByView;
