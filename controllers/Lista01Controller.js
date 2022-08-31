const ex01 = (req, res) => {
    const n1 = 8
    const n2 = 4
    const n3 = 10
    const n4 = 8

    const soma = n1 + n2 + n3 + n4

    media = soma/4

    const resultado = {
        soma: soma,
        media: media
    }

    if (media < 5) {
        resultado.final = 'Reprovado. Estude mais'
    }else if (media < 7) {
        resultado.final = 'em Recuperaçao. Ainda Há tempo'
    }else if (media <=10) {
        resultado.final = 'Aprovado'
    } else {
        resultado.final = 404,'Erro, Nao e possível uma media maior que 10'
    }

res.json(resultado)
    
}



const ex02 = (req, res) => {
    const {eleitorestotal, brancostotal, nulostotal, validostotal} = req.body

    const percentualbrancos = brancostotal * 100 / eleitorestotal
    const percentualnulus = nulostotal * 100 / eleitorestotal
    const percentualvalidos = validostotal * 100 / eleitorestotal

    const votostotal = brancostotal * 1 + nulostotal * 1 + validostotal * 1
    
    
if(votostotal > eleitorestotal) {
    res.status(400).json({mensagem:'ERRO'})
}


    res.json({percentualbrancos, percentualnulus, percentualvalidos})

    
}


const ex03 = (req, res) => {
    const salario = req.body.salario * 1
    let reajuste = req.body.reajuste * 1

    if (salario <= 0){
     resposta = { type: 'Error', mensagem: 'Falha no Preencimento das informações'}
     res.status(400).json(resposta)  
    } else {

     if (reajuste > 1){
        reajuste = reajuste/100
     }

    const calculo = (salario * reajuste) + salario 

    const resultado = {
        salario: salario,
        reajuste: reajuste,
        calculoReajustado: calculo
    }
    
    res.json(resultado)

    }
}


const ex04 = (req, res) => {
    const custo = req.body.custo*1
    const dis = 0.45
    const imp = 0.28

    if (custo <= 0 ){
        resposta = { type: 'Error', mensagem: 'Falha no Preencimento  das informações'}
        res.status(400).json(resposta)  
       } else {
    
    const calculo = (custo * dis) + (custo * imp)

    const resultado = {
        custo: custo,
        distribuicao: dis,
        imposto: imp,
        custoFinal: calculo + custo
    }

    res.json(resultado)

    }
}


const ex05 = (req, res) => {
    const custo = req.body.custo*1
    let dis = req.body.dis*1
    let imp = req.body.imp*1
    
    
    if (imp <= 0 || dis <= 0 || custo <= 0){
     resposta = { type: 'Error', mensagem: 'Falha no Preencimento das informações'}
     res.status(400).json(resposta)  
    } else {
     
    
     if (dis > 1){
         dis = dis/100
     }
    
     if (imp > 1){
         imp = imp/100
     }

     const calculo = (custo * dis) + (custo * imp)
     
     const resultado = {
         custo: custo,
         distribuicao: dis,
         imposto: imp,
         custoFinal: calculo + custo
     }

     res.json(resultado)

    }
}


const ex06 = (req, res) => {

    const {CarrosVendido, SalarioFixo, ValorVendas, ValorPorCarro} = req.body


    const ComissaoFixa = CarrosVendido * ValorPorCarro
    const comissaoVenda = ValorVendas * 0.05

    const SalarioTotal = SalarioFixo * 1 + ComissaoFixa + comissaoVenda

    res.json({SalarioTotal, ComissaoFixa, comissaoVenda})


}


const ex07 = (req, res) => {
    const A1 = req.body.A1*1
    const A2 = req.body.A2*1

    if (A1 > 10 || A2 > 10 || A1 < 0 || A2 < 0){
     resposta = { type: 'Error', mensagem: 'Falha no Preencimento das informações'}
     res.status(400).json(resposta)  
    } else {

     mediaT = (A1*4 + A2*6) / (4 + 6)

     const resultado = {
         mediaTotal: mediaT
     }
    
     res.json(resultado)
    }
}


const ex08 = (req, res) => {
    const pi = 3.14
    const raio = req.body.raio*1
    const altura = req.body.altura*1
    
    if (altura < 0 || raio < 0){
     resposta = { type: 'Error', mensagem: 'Falha no Preencimento das informações'}
     res.status(400).json(resposta)  
    } else {
        
        volume = pi * (raio*raio) * altura
    

    const resultado = {
        volume: ` ${volume}`
    }

    res.json(resultado)
    
   }
}


const ex09 = (req, res) => {
    const n1 = req.body.n1*1
    const n2 = req.body.n2*1

    const calculo = (n1 + n2) * n1

    resultado = {
        calculo: calculo
    }
    
    res.json(resultado)
}

module.exports = {
    ex01,
    ex02,
    ex03,
    ex04,
    ex05,
    ex06,
    ex07,
    ex08,
    ex09
}