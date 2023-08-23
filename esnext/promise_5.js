function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if(Math.random() < chanceErro) {
                    reject('Ocorreu um erro!')
                } else {
                    resolve(valor)
                }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    // .then(v => console.log(v))
    // .then(console.log)   * simplificando a fórmula *
    .then(v => `Valor: ${v}`)
    .then (
        v => consol.log(v),
        // err => console.log(`Erro Esp.: ${err}`) *os tratamentos de erros segue em encalhamento, Atenção para não embaralhar *  
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))