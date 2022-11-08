/*las variables const me estan llamando alos botones que 
no cambiaran y al referirme al document estamos haciendo referencia a que estamos llamando
al archivo html que tenga la eticata name de cada elemento */ 
const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');/*esta variable var nos esta llamando al id 
del html con el nombre result*/
var operActual = '';// variable que sera igual ala operacion actual que hagamos en la calculadora
var operAnterior = ''; // esta variable sera poara guardar la operacion anterior
var operacion = undefined ;// esta por defeco tiene el undefined  y estas res variables nos van ayudar con la logica de la calculadora 
/**/
/*desde aca empesamos a ponerle eventos a los botones y el eveno que le ponemos es el de click dentro de forEach 
llamamos a una funcion y ala funcion le mandamos como parametro el boton que estoy obteniendo */
botonNumeros.forEach(function(boton){//forEach es una funcion que nos sirve para recorrer arreglos 
    boton.addEventListener('click', function(){//al hacer el evento click me bva a llamar una funcion
        agregarNumero(boton.innerText);/*y esa funcion va a llamar a otra funcion que agregara el numero
        tambien debemos ponerle ala funcion el innertext que es el numero ese valor va a necesitar ese valor va
        a necesiar ese metodo para poder escribirlo en la panalla*/ 
    })
});
// y el mismo metodo anterior lo vamos a aplicar al resto de los botones 
botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){/*aca ya le agrgamos directamene el eventto click por que 
ese es el boton direcamene del igual */
    calcular();//aca llamamos a otra funcion  que diga calcular 
    actualizarDisplay();// y dentro de calcular tambien va a llamar a acualizar display 
})

botonDelete.addEventListener('click', function(){// aca se hace lo mismo que en el proceso anerior 
    clear();//dentro de esa funcion vamos a llamar a un metodo que se llama clear  que va a limpiar la pantalla o el display
    actualizarDisplay(); //y tambien llamara actualizar display
})
// se define el metodo de selectoperacion 
function selectOperacion(op){// op es la operacion 
    if(operActual === '') return;//si operacual el igual a vacio no hace nada
    if(operAnterior !== ''){// si operaneterio es diferente de vacio se crea el metodo calcular
        calcular()
    }
    operacion = op.toString();//ogperacion es igual a optostrin
    operAnterior = operActual;//operanterior es igual a operactual
    operActual = '';//operactual regresa a su estado original
}
//se crea el meodo calcular
//este es uno de los metodos que llamamos en el boton de igual 
function calcular(){  
    var calculo;// variable calculo que es el que nos guarda la operacion
    //con eso buscamos poner los valores string converidos a numeros
    const anterior = parseFloat(operAnterior);//constante anterior parsefload los valores de operanterior
    const actual = parseFloat(operActual);// constante acttual parsefloat de operactual
    // con lo siguiene pregunamos si son numericos esos valores
    if(isNaN(anterior) || isNaN(actual)) return;// si no cumplen con esta condicion hace uhn return
    switch(operacion){// en este paso podemos seleccionar la operacion  y dependiendo la operacion selecciona el proceso 
        case '+':// en casoo de suma 
            calculo = anterior + actual;
            break;
        case '-':// en caso de restta 
            calculo = anterior - actual;
            break;
        case '*':// en caso de multiplicacion 
            calculo = anterior * actual;
            break;
        case '/':// en caso de divicion 
            calculo = anterior / actual;
            break;
        default:// si no tenemos ningun operador  hacemos un return
            return;
    }
    operActual = calculo;// operacual es igual a calculo 
    operacion = undefined;// operacion es igual a undefined
    operAnterior = '';// operacion anterior es igual a su estado original 
}
// aca implemenamos el metodo de agregar numero 
function agregarNumero(num){// al llamar ese metodo estamos esperando el texto del boton por lo tanto recibe el numero 
    operActual = operActual.toString() + num.toString();/*operacion actual va a ser igual que la operacion actual 
    toString que es una funcion que se aplica a las cadenas de texto en javascrip para poder capturar el valor pero 
    en formatto texto yh lko manejamos haci por que el display es un input text y cocatenamos el num tostring */
    // resumido lo que hace la concatenacion es que nos permite escribir un numero grande sin sumar cada vez que ponemos oro numero 
    actualizarDisplay();// y llamamo al metodo acualizar display 
}
//definiendo metodo clear 
function clear(){// esta es la funcion que llamamos en el boton delete
    operActual = '';//operactual es igual a vacio 
    operAnterior = '';//operanterion tambien es igual a vacio 
    operacion = undefined;// operacion es igual a undefined es desir que esttariamos inicializando nuesras variables iniciales 
}
// definimos el metodo actualizar display
//este es uno de los metodos que llamamos en el boton de igual 
function actualizarDisplay(){ 
    result.value = operActual;//lo que va hacer es mostrar el resultado value igual ala operacion acual  
}

clear();//cada vez que la pagina se actualeze va a llamar al metodo clear 