const num = Number(prompt("Insira seu número"))
const divisivel2 = num % 2 === 0
const divisivel3 = num % 3 === 0


if (divisivel2)
    console.log("É divisível por dois ")

if (divisivel3)
    console.log("É divisível por três")
else
    console.log("Não é divisivel nem por dois e nem por três")



if (divisivel2 && divisivel3)
    console.log("É divisivel por dois e por três")
if (divisivel2 || divisivel3)
    console.log("É divisível por dois ou por três")
else
    console.log("Não é divisivel por dois ou por três")