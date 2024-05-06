function quest3 () {
    const carro = {
        Marca: 'Fiat',
        Modelo: 'Palio',
        Cor: 'Prata',
        Flex: 'Sim',
        Ano: 2005
    }

    const carroObj = Object.keys(carro)
    carroObj.forEach((item) => console.log(item + ": " + carro[item])
)

};  

quest3();