console.log('Alteração de Arrays')
console.log()

//at1
console.log('Atividade 1');
let a = ["Caderno", "Lápis", "Borracha"];
a.push("Caneta", "Régua");
console.log(a);
console.log();

//at2
console.log('Atividade 2');
let a2 = ["Ana", "Carlos", "João", "Maria"]
a2.shift(1)
console.log(a2)
console.log()

//at3
console.log('Atividade 3')
let a3 = ["Arroz", "Feijão", "Macarrão", "Leite", "Açúcar", "Café"];
console.log(a3);
let r = a3.slice(2,5);
console.log(r);
console.log();

//at4
console.log('Atividade 4')
let a4 = ["Mouse", "Teclado", "Monitor", "Impressora"]
a4.splice(2, 1, "Notebook")
console.log(a4)

//at5
console.log('Atividade 5')
let frutas = ["Maçã", " Banana, "];
let verduras = ["Alface", " Cenoura"];
let a5 = frutas+verduras
console.log(a5)