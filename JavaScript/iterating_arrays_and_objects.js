
// THE EXAMPLE ARRAYS
// ------------------------------------------

let
	assocObj = { one: "beer", two: "beers", three: "party", },

	plainArray = ["one", "two", "three", "four"],

	twoLevelArray = [
		{"child": ["-one", "-two", "-three", "-four"]},
		{"child": ["=five", "=six", "=seven", "=eight"]}
	],

	count;


// Javascript: for
// ------------------------------------------


// the basic 'for'

for (let i = 0; i < plainArray.length; i++) {
	// console.log(plainArray[i]);
}


// use different variables for inner loops

for (let i = 0; i < twoLevelArray.length; i++) {
	let childArray = twoLevelArray[i].child;
	for (let j = 0; j < childArray.length; j++) {
		// console.log(childArray[j]);
	}
}


// breaking out of a loop

for (let i = 0; i < plainArray.length; i++) {
	if (plainArray[i] === "three") {
		break;
	}
	// console.log(plainArray[i]);
}


// iterating a object/associative array

for (let key in assocObj) {
	if (assocObj.hasOwnProperty(key)) {
		// console.log(key + ": " + assocObj[key]);
	}
}


// iterating a object/associative array V2

for (const [key, value] of Object.entries(assocObj)) {
	// console.log(key + ": " + value);
}


// Javascript: forEach
// ------------------------------------------
// warning - no 'break' functionality
// warning - slow

count = 0; // declare counter outside the loop
plainArray.forEach(function (element, i) {
	// console.log(i + ': ' + element);
	count++;
});


// library: lodash - forEach, forEachRight
// ------------------------------------------

_.forEach(plainArray, function (element, i) {
	// console.log(i + ' ' + element);
});

// loop in reverse order (NOT INCLUDED in lodash core)
_.forEachRight(plainArray, function (element, i) {
	// console.log(i + ' ' + element);
});


// library: jQuery - each
// ------------------------------------------

$.each(plainArray, function (index, value) {
	// console.log(index + ": " + value);
});

$.each(assocObj, function (key, value) {
	// console.log(key + ": " + value);
});


