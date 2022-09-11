let nacionalidade = prompt("digite aqui a nacionalidade");



switch (nacionalidade.toUpperCase()) {
    case "BRASILEIRA":
        console.log("A pessoa é do Brasil!")
        break
    case "ARGENTINA":
        console.log("A pessoa é da Argentina!")
        break
    case "URUGUAIA":
        console.log("A pessoa é da Uruguaia")
        break
    case "CHILENA":
        console.log("A pessoa é do Chile")
        break
    case "COLOMBIANA":
        console.log("A pessoa é da Colômbia")
        break
    default:
        console.log("Nacionalidade não encontrada")
}