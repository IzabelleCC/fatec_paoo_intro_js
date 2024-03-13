// //declaração de constantes
// const nome = "Jose"
// console.log(nome)
// //nome = "Pedro"
// const endereco = 'Rua B, 21'
// console.log(endereco)
// const sobrenome = `Bossini`
// console.log(sobrenome)
// console.log(`Me chamo ${nome}. Meu sobrenome e ${sobrenome}.`)

// let nome = "Rodrigo"
// console.log(nome)
// nome = "Pedro"
// console.log(nome)

// let a = 2
// console.log(typeof(a))
// a = "abc"
// console.log(typeof(a))
// a = true
// console.log(typeof(a))

// var linguagem = "Javascript"
// console.log(`Aprendendo ${linguagem}`)
// var linguagem = `Java`
// console.log(`Aprendendo ${linguagem}`)

// var idade = 18
// console.log(`Oi, ${nome}`)
// if(idade >= 18){
//     var nome = 'Joao'
//     console.log(`Parabens, ${nome}. Voce pode dirigir`)
// }
// console.log(`Ate mais, ${nome}`)

// const n1 = 2
// const n2 = '3'
// //coerção implicita
// const n3 = n1 + n2
// console.log(n3)
// //coerção explicita
// const n4 = n1 + Number(n2)
// console.log(n4)

// operador de comparação
// console.log(1 == 1)
// console.log(1 == '1')
// console.log(1 === 1)
// console.log(1 === '1')
// console.log(1 == true)
// console.log(1 == [1])
// console.log(null == null)
// console.log(null == undefined)
// console.log([] == [])

// v1 = []
// v1[0] = 3.4
// console.log(v1.length)
// v1[10] = 2
// console.log(v1.length)
// v1[2] = 'abc'
// console.log(v1.length)
// console.log(v1)

// for(let i=0; i<v1.length;i++){
//     console.log(v1[i])
// }

// function hello(){
//     console.log('Oi')
// }
// hello()
// function hello(nome){
//     console.log('oi, ' + nome)
// }
// hello('Rodrigo')

// function soma(a,b){
//     return a+b
// }
// const resultado = soma(2,3)
// console.log(resultado)

// const dobro = function (n){
//     return 2*n
// }
// const result = dobro(6)
// console.log(result)

// const triplo = function(n=5){
//     return 3*n
// }
// console.log(triplo())
// console.log(triplo(10))

// const f = ()=> {}
// const umArgumento = n => { // quando existe apenas um argumento os () pode ser omitido
//     console.log(n)
// }

// const umaInstrucao = () => console.log("oi") // quando existe apenas uma instrução os {} pode ser omitido

// const hello = () => console.log("Hello")
// hello()

// const dobro = valor => valor*2

// let triplo = (valor) => {
//     return valor * 3
// }

// const ehPar = n => {n % 2 === 0}
// console.log(ehPar(10))

// function executa (f){
//     f()
// }
// executa(function(a,b) {return a+b})

// function produzUmaFuncao (a, b, operador){
//     if(operador === '+'){
//         return function(a,b){
//             a+b
//         }
//     }
//     if(operador === '-'){
//         return (a,b) => a-b
//     }
// }

// let umaFuncao = function(){
//     console.log("Fui armazenada em uma variavel")
// }
// umaFuncao()

// function f(funcao){
//     return funcao()
// }

// f(function(){
//     console.log("Estou sendo passada para f...")
// })

// function g(){
//     function outraFuncao(){
//         console.log("Fui definida por g")
//         return () => 2
//     }
//     return outraFuncao()
// }

// // const resultadoDaG = g()
// // resultadoDaG()
// // g()()

// console.log(f(g)())
// console.log(f(g)()  + f(g)())

// function f(){
//     let nome = 'Joao'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f()

// function ola(){
//     let nome = 'Joao'
//     return function(){
//         console.log(`Ola, ${nome}`)
//     }
// }
// let olaResult = ola()
// olaResult()

// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }

// let olaJoao = saudacoesFactory('Ola', 'Joao')
// let tchauJoao = saudacoesFactory('Tchau', 'Joao')
// olaJoao()
// tchauJoao()

// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//         cont ++
//     }
//     cont ++
//     function f2(){
//         console.log(cont)
//     }
//     return {f1,f2}
// }
// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()

//uma pessoa chamda Joao que tem 17 anos de idade

// let pessoa = {
//     nome: 'Joao',
//     idade: 17
// }
// // . e [] para acessar membros
// console.log(pessoa.nome)
// console.log(pessoa['idade'])
// Maria, tem 21 anos e mora na rua B,14
// let pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: 'rua B,14'
// }
// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa.endereco)

// let pessoa = {
//     nome:'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'rua B',
//         numero: 14
//     }
// }
// console.log('Nome: ' + pessoa.nome)
// console.log('Idade: ' + pessoa.idade)
// console.log('Endereco: ' + pessoa.endereco.logradouro + ', ' + pessoa.endereco.numero)


// uma concessionaria tem cnpj e endereco ela possui alguns carros em estoque
// cada um deles tem marca, modelo e ano de fabricação

// let concessionaria = {
//     cnpj: 12345,
//     endereco: {
//         logradouro: 'rua B',
//         numero: 14
//     },
//     veiculos: [
//         {   marca: 'abc',
//             modelo: 'bvfd',
//             ano: 2020
//         },
//         {   marca: 'adef',
//             modelo: 'bghi',
//             ano: 2021
//         }
//     ]
// }
// console.log('CNPJ: ' + concessionaria.cnpj)
// console.log('Endereco: ' + concessionaria.endereco.logradouro + ', ' + concessionaria.endereco.numero)
// for(let i=0; i<2; i++){
//     console.log(concessionaria.veiculos[i])
// }
// console.log(concessionaria.veiculos[1].marca)
// for (let veiculo of concessionaria.veiculos) {
//     console.log(`Marca: ${veiculo.marca}. Modelo: ${veiculo.modelo}. Ano: ${veiculo.ano}`)
// }

// calculadora faz soma e subtracao cada operacao envolve dois operandos
// soma deve utilizar arrow function, sem return
// subtracao deve ser funcao regular
// let calculadora = {
//     soma: (a,b) => a + b,
//     subtracao: function substrai (a,b){
//         return a - b
//     }
// }
// console.log(calculadora.soma(2,3))
// console.log(calculadora.subtracao(2,3))

// const a = 2+7
// const b = 5
// console.log(a+b)

// function demorada (){
//     //pegar horario do sistema e descolocar 2s para o futuro
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while(new Date().getTime() <= atualMais2Segundos); //NO-OP: No operation
//     const d = 8+4
//     return d
// }
// const a = 2+7
// const b = 5+9
// const d = demorada()

// const e = 2+a+b
// console.log(e)

// function demorada (){
//     //pegar horario do sistema e descolocar 2s para o futuro
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while(new Date().getTime() <= atualMais2Segundos); //NO-OP: No operation
//     const d = 8+4
//     return d
// }

// const a = 2+5
// const b = 5+9

// setTimeout(function(){
//     const d = demorada()
//     console.log('d: ' + d)
// },500)

// const e = 2+a+b

// console.log('e: ' + e)


// const fs = require('fs')
// const abrirArquivo = (nomeArquivo) => {
//     const exibirConteudo = (erro, conteudo) => {
//         if(erro){
//             console.log(`Erro: ${erro}`)
//         }
//         else{
//             console.log(conteudo.toString())
//             const resultado = +conteudo.toString() * 10
//             const finalizar = (erro) =>{
//                 if(!erro){
//                     console.log('Conteudo escrito com sucesso')
//                 }
//                 else{
//                     console.log('Escrita falhou')
//                 }
//             }
//             fs.writeFile('resultado.txt',resultado.toString(),finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo('arquivo.txt')

//1+2+3+....+n-2+n-1+n
// const calculoDemorado = (n) =>{
//     let p = new Promise((resolve,reject) => {
//         let res = 0
//         for(let i=1; i<=n; i++){
//             res += i
//         }
//         resolve(res)
//     })
//     return p
// }

//  const aux = calculoDemorado(3)   
//  aux.then((resultado) => {
//     console.log(resultado)
//  })

// const soma = (a,b) =>{
//     // let p = new Promise((resolve,reject) => {
//     //    // let res = a +b
//     //     resolve(a+b)
//     // })
//     return new Promise((resolve,reject)=>{
//         resolve(a+b)
//     })
// }
// const aux = soma(2,3)   
// aux.then((resultado) => {
//     console.log(resultado)
// })

// soma(2,3).then(res => console.log(`Resultado: ${res}`))

// const soma = (a,b) =>{
//     return new Promise((resolve,reject)=>{
//         //se a e b forem positivos
//         //chamar resolve passando a + b como parametro
//         //caso contrario chamar reject passando texto "não use negativos como parametros"
//         if(a < 0 || b < 0){
//             reject("nao use negativos")
//         }
//         else{  
//             resolve (a+b)
//         }
//     })
// }

// soma(-1,3)
// .then(res => console.log(`Resultado: ${res}`))
// .catch((erro)=>console.log(`Erro: ${erro}`))

// soma(2,3)
// .then(res => console.log(`Resultado: ${res}`))
// .catch((erro)=>console.log(`Erro: ${erro}`))

// function calculoDemorado(n){
//     let res = 0
//     for(let i = 1; i <= n; i++) res += 1
//     return res
// }
// const resultado = calculoDemorado(100)
// console.log(resultado)
// console.log('outra coisa qualquer')

// function calculoDemorado(n){
//     let p = new Promise((resolve,reject)=>{
//         let res = 0
//         for(let i = 1; i <= n; i++) res += i
//         resolve(res)
//     })
//     return p
// }

// let minhaPromise = calculoDemorado(100)
// minhaPromise.then((resultado) => console.log(resultado))


// function calculoRapidinho(n){
//     return Promise.resolve((n/2)*(n+1))
// }
// calculoRapidinho(100).then(resultado => console.log(resultado))

// function calculoDemorado(n){
//     return new Promise((resolve,reject)=>{
//         if(n < 0){
//             reject("Somente POsitivos")
//         }
//         else{  
//             resolve((n/2)*(n+1))
//         }
//     })
// }

// calculoDemorado(100)
// .then(res => console.log(`Resultado: ${res}`))
// .catch((erro)=>console.log(`Erro: ${erro}`))

function calculo(n){
    if(n > 0){
        return Promise.resolve((n/2)*(n+1))  
    }
    else{  
        return Promise.reject("Somente Positivos")
    }
}

calculo(-100)
.then(res => console.log(`Resultado: ${res}`))
.catch((erro)=>console.log(`Erro: ${erro}`))




