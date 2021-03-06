/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Copa do Mundo';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['team1', 'team2', 'team3', 'team4', 'team5'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(num){
  if(num > 5 || num < 1) return 'Não temos informação do time que está nessa posição';
  return 'O time que está em '+num+'º lugar é o time '+teams[num-1];
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); //"O time que está em 1º lugar é o time team1"
showTeamPosition(5); //"O time que está em 5º lugar é o time team5"
showTeamPosition(3); //"O time que está em 3º lugar é o time team3"
showTeamPosition(9); //"Não temos informação do time que está nessa posição"
showTeamPosition(2); //"O time que está em 2º lugar é o time team2"

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var x = 20;
while(x<=30){
  console.log(x++);
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor){
  var hex;
  switch(cor){
    case 'red': hex = '#f00';
      break;
    case 'green': hex = '#0f0';
      break;
    case 'blue': hex = '#00f';
      break;
    case 'white': hex = '#fff';
      break;
    case 'black': hex = '#000';
      break;
    default: return 'Não temos o equivalente hexadecimal para '+cor+'.';
  }
  return 'O hexadecimal para a cor '+cor+' é '+hex+'.';
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('pink')); //"Não temos o equivalente hexadecimal para pink."
console.log(convertToHex('blue')); //"O hexadecimal para a cor blue é #00f."
console.log(convertToHex('purple')); //"Não temos o equivalente hexadecimal para purple."
console.log(convertToHex('green')); //"O hexadecimal para a cor green é #0f0."
console.log(convertToHex('red')); //"O hexadecimal para a cor red é #f00."
console.log(convertToHex('brown')); //"Não temos o equivalente hexadecimal para brown."
console.log(convertToHex('white')); //"O hexadecimal para a cor white é #fff."
console.log(convertToHex('black')); //"O hexadecimal para a cor black é #000."