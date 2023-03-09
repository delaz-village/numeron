const remainTurn = document.getElementById("remainTurn");

let answer;
let challenge;
let eat = 0;
let bite = 0;
let credit = 10;
initialize();

function initialize() {
	document.getElementById("answerNum").value = "";
	answer = [];
	let i = 0;
	while (i < 3) {
		let r = Math.floor(Math.random() * 10);
		if (!answer.includes(r)) {
			answer[i] = r;
			i++;
		}
	}
	remainTurn.textContent = `あと残り${credit}回です`;
}

const numCheck = document.getElementById("numCheck");
numCheck.addEventListener("click", btn);
function btn() {
	challenge = document.getElementById("answerNum").value;
	if (challenge.length !== 3) {
		alert("3桁の数を入れて下さい"); return;
	}
	if (Array.from(new Set(challenge)).length < 3) {
		alert("同じ数を使ってはいけません"); return;
	}
	challenge = Array.from(challenge, Number);
	check();
	credit--;
	if (credit === 0) {
		remainTurn.textContent = `終了です。答えは${answer.join("")}でした`;
		numCheck.disabled = true;
	} else {
		remainTurn.textContent = `あと残り${credit}回です`;
	}
}

function check() {
	for (let i = 0; i < 3; i++) {
		if (answer[i] === challenge[i]) {
			eat++;
		} else if (answer.includes(challenge[i])) {
			bite++;
		}
	}
	alert(`${eat} EAT, ${bite} BITE`);
	if (eat === 3) {
		alert("正解です！");
		initialize();
		credit = 11;
	}
	eat = 0;
	bite = 0;
}

