function compile(source, cells = 100) {
	let compiled = "";

	for(let i = 0; i < source.length; i++) {
		switch(source[i]) {
			case "+":
				compiled += "b[i]++;";
				break;
			case "-":
				compiled += "b[i]--;";
				break;
			case ">":
				compiled += "i++;";
				break;
			case "<":
				compiled += "i--;";
				break;
			case "[":
				compiled += "while(b[i] > 0) {";
				break;
			case "]":
				compiled += "}";
				break;
			case ".":
				compiled += "r.push(b[i]);";
				break;
		}
	}

	return eval(`a => {
		a = a || [];

		if(typeof a == "string") {
			a = a.split("").map(s => s.charCodeAt(0));
		}

		const b = Array(${cells}).fill(0);
		const r = [];
		let i = 0;

		${compiled}

		return String.fromCharCode.apply(null, r);
	}`);
};

module.exports = compile;
