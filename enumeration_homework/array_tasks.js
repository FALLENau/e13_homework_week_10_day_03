var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2)
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd)
		return arr
	},

	square: function (arr) {
		return arr.map(function(x){ return x * x});
	},

	sum: function (arr) {
		return arr.reduce(function(total, number) {
			return number + total
		})
	},


	findDuplicates: function (arr) {
		return arr.filter(function(item, i) {
			var restOfArrayInculdersItem = arr.slice(i + 1).includes(item)
			var isFirstInstanceOfitem = arr.indexOf(item) === i
			return restOfArrayIncludesItem && isFirstInstanceOfitem
		})
	},

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
