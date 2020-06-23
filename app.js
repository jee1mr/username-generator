const generate = () => {
	const input_name = document.getElementById("name").value;
	const generated = username(input_name);
	document.getElementById("username").value = generated;
	hide();
};

const resetForm = () => {
	unHide();
};

const hide = () => {
	document.getElementById("name").style.display = "none";
	document.getElementById("generate-btn").style.display = "none";
	document.getElementById("username").style.display = "inline-block";
	document.getElementById("reset-btn").style.display = "inline-block";
};

const unHide = () => {
	document.getElementById("name").style.display = "inline-block";
	document.getElementById("generate-btn").style.display = "inline-block";
	document.getElementById("username").style.display = "none";
	document.getElementById("reset-btn").style.display = "none";
};

const username = (name) => {
	const alphabets = "abcdefghijklmnopqrstuvwxyz";
	let result = "";
	let input_name = name.toLowerCase().replace(/ /g, "");
	for (let i = 0; i < input_name.length; i++) {
		result += input_name[i];
		if (i != input_name.length - 1) {
			result += alphabets[i];
		}
	}
	return result;
};
