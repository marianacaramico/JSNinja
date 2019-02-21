
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somar(n1,n2) { return n1+n2 }
undefined

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5`
//ao resultado retornado da função.
var soma = somar(1,2) + 5;

// Qual o valor atualizado dessa variável?
soma;
8

// Declare uma nova variável, sem valor.
var nova;
undefined

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionar(){ nova = 3; return 'O valor da variável agora é '+nova; }
undefined

// Invoque a função criada acima.
adicionar();
"O valor da variável agora é 3"

// Qual o retorno da função? (Use comentários de bloco).
"O valor da variável agora é 3"

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function argumentos(n1,n2,n3){
    if(n1===undefined || n2===undefined || n3===undefined) return 'Preencha todos os valores corretamente!';
	return n1*n2*n3 + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
argumentos(2,4);
"Preencha todos os valores corretamente!"

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
"Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
argumentos(1,2,3);
8

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function tres(a,b,c){
	if(a!==undefined && b===undefined && c===undefined) return a;
	else if(a!==undefined && b!==undefined && c===undefined) return a+b;
	else if(a!==undefined && b!==undefined && c!==undefined) return (a+b)/c;
	else if(a===undefined && b===undefined && c===undefined) return false;
	else return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.)
tres();
false

tres(7);
7

tres(7,3);
10

tres(7,3,2);
5