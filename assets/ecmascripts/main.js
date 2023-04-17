'use strict';

class main {


    constructor(){
      this._nav = new navCheck();
    }
}

class navCheck {


    constructor(){
      this.navigation();
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

  

  constructor(fn,propertkey){
    let a = fn;
    this.test(a,propertkey);
    this.z(a)
  }


  z(a){
    return a
  }

  test(obj,propertkey){
    Object.defineProperty(obj.prototype, propertkey, {
      get: function(){
        return z[propertkey];
      },
      set: function(value){
        z[propertkey] = value;
      },
    });
  }
    
}

new main();
console.log('ue');
let b = new protoTypes(function(name = 'name'){return name},'opa');
console.log(b);
let c = new protoTypes(function(name = 'outro2'){ name},'outro');
console.log(c);
