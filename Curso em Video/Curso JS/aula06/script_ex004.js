var nome = window.prompt('Qual é seu nome?')
var sobrenome = window.prompt('Qual seu sobrenome?')
var salário = Number(window.prompt('Quanto quer ganhar: '))
document.write(`Olá <strong>${nome} ${sobrenome}</strong>, seu nome tem ${nome.length+sobrenome.length} letras.<br>`)//conta quantas letras tem
document.write(`Seu nome em maiúsculo fica assim: ${nome.toUpperCase()} ${sobrenome.toUpperCase()}.<br>`)//converte todas as letras em maiúsculo
document.write(`Seu nome em minúsculo fica assim: ${nome.toLowerCase()} ${sobrenome.toLowerCase()}.<br>`)//converte todas as letras em minúsculo
document.write(`Você pretende ganhar ${salário.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}<br>`) //converte para moeda local do país   
document.write(`Seu Nome fica assim com a primeira letra maiúscula: ${nome = nome[0].toUpperCase() + nome.substr(1)} ${sobrenome = sobrenome[0].toUpperCase() + sobrenome.substr(1)}`)//converte primeira letra em maiúscula

