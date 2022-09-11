//código a ser reescrito

const nome = prompt("Qual é seu nome?")
const idade = Number(prompt("Qual é a sua idade?"))

// if (nome === "José") {
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, " + nome);
// }


nome.toUpperCase() === "JOSÉ" ? console.log("Oi, Zé!")
	: console.log(`Olá, ${nome}`);


// if (idade >= 18) {
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

idade >= 18 ? console.log("Pode tirar a carteira de motorista")
	: console.log("Ainda não pode tirar a carteira de motorista")

