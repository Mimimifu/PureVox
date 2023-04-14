'use strict';

class main {
    constructor(){

    }
}

class navCheck {


    constructor(){

    }

    navigation(){
        //openai script 0.0.1
        if (/Edge\/\d./i.test(navigator.userAgent)) {
            console.log("Microsoft Edge - versão do ECMAScript 6+");
          } else if (/Chrome\/\d./i.test(navigator.userAgent)) {
            console.log("Google Chrome - versão do ECMAScript 6+");
          } else if (/Firefox\/\d./i.test(navigator.userAgent)) {
            console.log("Mozilla Firefox - versão do ECMAScript 6+");
          } else if (/Safari\/\d./i.test(navigator.userAgent)) {
            console.log("Apple Safari - versão do ECMAScript 6+");
          } else if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
            console.log("Microsoft Internet Explorer - versão anterior ao ECMAScript 6");
          } else {
            console.log("Outros navegadores - versão desconhecida");
          }
    }
}

class protoTypes {
    
}