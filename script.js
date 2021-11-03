/*QUESTÃO 1*/
//Mostra na tela os inputs e labels seguintes através do innerHTML na div identificada
// O evento onblur tira o focus, quando estamos fora do campo
// E o evento onfocus atribui focus, quando estamos no campo
let div1 = document.getElementById('div1');
    div1.innerHTML = 
    "<input type='text' id='mudarCor1' onblur='fundoVermelho1()' onfocus='fundoVerde1()' placeholder='Clique Aqui!'>"
   + "<input type='text' id='mudarCor2' onblur='fundoVermelho2()' onfocus='fundoVerde2()' placeholder='Clique Aqui!'>"
   + "<input type='text' id='mudarCor3' onblur='fundoVermelho3()' onfocus='fundoVerde3()' placeholder='Clique Aqui!'>"
 // As funções declaradas irão alterar o fundo do input através da identificação.
// Quando clicamos dentro do input ele fica verde e muda o valor do input para "No campo"

function fundoVerde1() {
    document.getElementById('mudarCor1').style.backgroundColor = 'green';
    document.getElementById('mudarCor1').value = 'No campo';  
  }

  function fundoVerde2(){
    document.getElementById('mudarCor2').style.backgroundColor = 'green';    
    document.getElementById('mudarCor2').value = 'No campo';
    
  }
  
  function fundoVerde3(){
    document.getElementById('mudarCor3').style.backgroundColor = 'green';
    document.getElementById('mudarCor3').value = 'No campo';
    
  }

  // Ao clicar fora do input o fundo fica vermelho e muda o valor do input para "Fora do campo."

    function fundoVermelho1() {
        document.getElementById('mudarCor1').style.backgroundColor = 'red';  
        document.getElementById('mudarCor1').value = 'Fora do  campo';    
      }

      function fundoVermelho2(){
        document.getElementById('mudarCor2').style.backgroundColor = 'red';
        document.getElementById('mudarCor2').value = 'Fora do  campo';     
      }

      function fundoVermelho3(){
        document.getElementById('mudarCor3').style.backgroundColor = 'red';
        document.getElementById('mudarCor3').value = 'Fora do  campo';
      }

      //Ou podemos fazer assim:
      //Retornando o primeiro elemento com o querySelector e executando a função em cada elemento com o forEach

      let div1a = document.getElementById('div1a');
        div1a.innerHTML = 
        "<input type='text'  placeholder='Clique Aqui!'>"
        + "<input type='text'  placeholder='Clique Aqui!'>"
        + "<input type='text'  placeholder='Clique Aqui!'>"


      let textoInput = document.querySelectorAll('input');

        textoInput.forEach(function (e) {
        e.addEventListener('focus', function () {
            e.style.backgroundColor = 'green';
        });
    });

        textoInput.forEach(function (e) {
        e.addEventListener('blur', function () {
            e.style.backgroundColor = 'red';
        });
     });

/*************************************************************************************/

/*QUESTÃO 2*/
let div2 = document.getElementById('div2');
    div2.innerHTML = 
      "<input type='text'  id='entrada' placeholder='Digite letras e números: '> <br>"
    + "<input id='strings' type='text' placeholder='Letras' disabled />"
    +  "<input id='numbers' type='text' placeholder='Números' disabled />"
    +  "<input id='btn' type='button' value='ENVIAR' />"
    let entrada = document.getElementById('entrada');
    let btn = document.getElementById('btn');
    
    btn.onclick = function () {
      let strings = entrada.value.match(/[A-Za-z]+/);
      let numbers = entrada.value.match(/[0-9]+/);
      document.getElementById('strings').value = strings;
      document.getElementById('numbers').value = numbers;
    };

/*************************************************************************************/

/*QUESTÃO 3*/
//Mostra na tela os inputs e labels seguintes através do innerHTML na div identificada
//Executar a função somenteNumero(e), através do onKeyPress assim que o input for pressionado
let div3 = document.getElementById('div3');
	div3.innerHTML = 
      "<label>Valor Mínimo</label>"
	+ "<input id='minimo' type='text'onKeyPress='return somenteNumero(event)'>"
    + "<label>Valor Máximo</label>"
	+ "<input id='maximo' type='text'onKeyPress='return somenteNumero(event)'>"
	+ "<input type='button' value='Calcular' onClick='exibirNumeros()'>";

//Função para aceitar apenas números nos inputs
//Declaração da variável tecla para ser usado nas condições de input pressionado, validação através de código-chaves 
//Se tecla pressionada maior que 47 e menor que 58 (correspondente as teclas numéricas), tecla 8 (correspondente a Backspace) e tecla 0 (correspondente a NumPad), permita se não retorne falso ('Digite apenas números!')
function somenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)) 
        return true;
    else{
    	if (tecla==8 || tecla==0) 
            return true;
	else  
	alert ( "Digite apenas números!");
	    return false;
    }
}

//Função que conta e imprime quantos números existem entre o valor mínimo e valor máximo múltiplos de 2 e 3 simultaneamente.
//Declaração das variáveis e associação por ID dos inputs
//Condição se número mínimo digitado menor que o máximo permitido, se número for divisível por 2 && 3 imprima a quantidade de números que atendem ao requisito, se não mostre ("O número mínimo é maior que o máximo.").

function exibirNumeros(){   
    let minimo = document.getElementById('minimo');
    let maximo = document.getElementById('maximo');
    let numValidos = [];
    if(Number(minimo.value) < Number(maximo.value)){       
        let numResult = 0;
        for(var count = minimo.value; count < Number(maximo.value); count ++){
            if ((count % 2 == 0)&&(count % 3 == 0)){
                numResult++;
                numValidos.push(count);	
            }
        }
        alert("A quantidade de números que atende a regra é: " + numResult + ". São eles: " + numValidos);
    }else{
        alert("O número mínimo é maior que o máximo.");
    }
   
}

/*************************************************************************************/

/*QUESTÃO 4*/
//Mostra na tela os inputs e labels seguintes através do innerHTML na div identificada
let div4 = document.getElementById('div4');
    div4.innerHTML = 
      "<label>Digite o número para calcular o fatorial</label>"
    + "<input id='fatorial' type='text' >"
    + "<input type='button' value='Calcular' onClick='fatorial()'>"; 

//Função que calcula o fatorial de um número digitado no input e captado através do ID.
//Number só permite entrada de números
//Date().getTime retorna os milisegundos para a execução
    function fatorial(){
        let inicio = new Date().getTime();       
        let fat = document.getElementById('fatorial');
        let number = Number(fat.value);
        let result=1;
        for(i = 1; i <= number; i++){
            result = result * i;
        }       
        let fim = new Date().getTime();
        alert(`${number}! =  ${result} - durou ${fim - inicio} milisegundos`);
}

/*************************************************************************************/

/*QUESTÃO 5*/
//Mostra na tela os inputs e labels seguintes através do innerHTML na div identificada
let div5 = document.getElementById('div5');
	div5.innerHTML = "<input type='button' value='Criar Relatório' onClick='relatorio()'>";
//Criação do objeto através do método constructor e da classe aluno
// Retorno do elemento especificado (nota) do objeto criado, através do método get
    function relatorio(){
        class aluno {
            constructor(num, _nota){
                this.num = num;
                this._nota = _nota;
            }    
            get nota(){
                return this._nota;
            }
        }
    //Criação de notas aleatórias através do random com laço pecorrendo do inicial 1, gerando 20 notas com valor menor que 100 e incrementando um a um
        let alunos = [];
        for(let i = 1; i <= 20; i++){
            let al = new aluno(i,Math.floor(Math.random()*100));
            alunos.push(al);
        }    
    //Função para avaliar os aprovados e reprovados, onde nota maior que 60 aprovado.
        function situacao(nota) {
            return nota >= 60 ?'APROVADO' : 'REPROVADO'
        } 
        alert('Notas dos alunos: ')
        let aprovados = 0;
    //laço que pecorre a lista gerada (al)
        for(let i = 0; i< alunos.length; i++) {
        //Alerta com a relação dos 20 alunos, com suas respectivas notas e situação aprovado ou reprovado          
            if(situacao(alunos[i].nota) =='APROVADO'){
                aprovados++;
            }
            alert(`Aluno número ${alunos[i].num} - Nota ${alunos[i].nota} ${situacao(alunos[i].nota)}`);
        }
       
    //Alerta com a porcentagem de aprovados e reprovados  
        alert(`APROVADOS => ${aprovados} = ${Math.floor((aprovados/alunos.length)*100)}% ||| REPROVADOS => ${alunos.length-aprovados} = ${Math.floor(((alunos.length-aprovados)/alunos.length)*100)}%`);
    }

/*************************************************************************************/

/*QUESTÃO 6*/
//Mostra na tela os inputs e labels seguintes através do innerHTML na div identificada
let div6 = document.getElementById('div6');
	div6.innerHTML = 
        "<label>Quantidade de números entre o mínimo e o máximo</label>"
       + "<input type='text' id='qtd'/><br>"
       + "<label>Mínimo</label>"
       + "<input type='text' id='min'/>"
       + "<label>Máximo</label>"
       + "<input type='text' id='max'/>"
       + "<button id='btn6'>Verificar</button>"
      
       
    //Função para criar um Array validando os inputs identificados e só aceitando números através do Number
    //Pushando os inputs para o arrayNovo
    let btn6 = document.getElementById('btn6');

    function verificaNumeros() {
      let qtd = Number(document.getElementById('qtd').value);
      let minimo = Number(document.getElementById('min').value);
      let maximo = Number(document.getElementById('max').value);
     
      arrayNovo = [];
      if (qtd >= maximo - minimo) {
       alert("O valor mínimo digitado " + qtd + " , é maior ou igual ao número máximo digitado. Gentileza, verificar e escolher um número mínimo até " + (maximo -1) + "!");
      } else {
        let i = 1;
        //Faça isso: quando números gerados (aleatorios) diferentes, push para o arrayNovo
        do {
          aleatorio = random(maximo, minimo);
          if (arrayNovo.includes(aleatorio) == false) {
            i++;
            arrayNovo.push(aleatorio);
          }
        } while (i <= qtd);
 
        //Ordenando os números
        arrayNovo.sort((n, nn) => n - nn);
        alert("Os Valores são" + arrayNovo);
      }
    
      //Gerando os números
      function random (minimo, maximo) {
        return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
      }
    }
    
    btn6.onclick = function () {
      verificaNumeros();
    };
    
/*************************************************************************************/

/*QUESTÃO 7*/
//Mostra na tela os inputs e labels seguintes através do innerHTML na div identificada
let div7 = document.getElementById('div7');
    div7.innerHTML = "<label>Digite o valor dos lados do triângulo:</label>"
    + "<label>Lado 1:</label>"
    + "<input id='lado1' type='text' onKeyPress='return SomenteNumero(event)'>"
    + "<label>Lado 2:</label>"
    + "<input id='lado2' type='text' onKeyPress='return SomenteNumero(event)'>"
    + "<label>Lado 3:</label>"
    + "<input id='lado3' type='text' onKeyPress='return SomenteNumero(event)'>"
    + "<input type='button' value='Calcular' onClick='verificaTriangulo()'>";
    //Função que verifica os lados dos triângulos
    //Condições: 3 lados iguais = equilátero
    //3 lados diferentes = escaleno
    //2 lados iguais e um diferente isósceles
    function verificaTriangulo() {
        lado1 = Number(document.getElementById('lado1').value);
        lado2 = Number(document.getElementById('lado2').value);
        lado3 = Number(document.getElementById('lado3').value);
        let resposta = ' '
        if(lado1 == lado2 && lado2 == lado3){
            resposta = 'equilátero'
        } else {
        if(lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
            resposta = 'escaleno'
        } else {
            resposta = 'isósceles'
        }
    }
        alert("Esse triângulo é: " + resposta);

    }