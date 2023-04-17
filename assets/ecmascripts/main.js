'use strict';

class main {


    constructor(){
      let u = new utils();
      u.navigation();
    }
}

class utils {


    constructor(){

    }

    navigation(){
        //openai script 0.0.1
        if (/Edg\/\d./i.test(navigator.userAgent)) {
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

    stateNow(){

      
    }
    
    callback(mutationList, observer) {
      mutationList.forEach((mutation) => {
        switch (mutation.type) {
          case "childList":
            /* One or more children have been added to and/or removed
               from the tree.
               (See mutation.addedNodes and mutation.removedNodes.) */
            break;
          case "attributes":
            /* An attribute value changed on the element in
               mutation.target.
               The attribute name is in mutation.attributeName, and
               its previous value is in mutation.oldValue. */
            break;
        }
      });
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
let c = new protoTypes(function(name = 'outro2'){ name},'outro2');
console.log(c);
