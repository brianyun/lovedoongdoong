const calculator = (arr) => {
	var result = 0;
	var type = "";

	var index;
	for (index = 0; index < arr.length; ++index) {
		result += arr[index] * Math.pow(10, index);
	}
	result = result + 99 * Math.pow(10, arr.length);

	const rand = Math.floor(Math.random() * 3);
	switch (rand) {
		case 0:
			type = "ENTP";
		case 1:
			type = "unicorn";
		case 2:
			type = "dinosaur";
		default:
			type = "unicorn";
	}

	const types = [
		"alpaca",
		"chihuahua",
		"cow",
		"crab",
		"deoksun",
		"dinosaur",
		"fish",
		"giraffe",
		"gorilla",
		"hamster",
		"hedgehog",
		"husky",
		"koala",
		"llama",
		"malteeze",
		"meerkat",
		"panda",
		"parrot",
		"persian",
		"polar",
		"pomenarian",
		"poodle",
		"quokka",
		"rabbit",
		"retriever",
		"shorthair",
		"sloth",
		"squirrel",
		"turtle",
		"unicorn",
		"welsh",
		"woodpecker",
	];
	const randomType = types[1 + Math.floor(Math.random() * 32)];

	return randomType;
};

export default calculator;
