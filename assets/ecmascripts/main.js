'use strict';

class main {


    constructor(){
      let u = new utils();
      u.navigation();
    }
}

class utils {


    constructor(){
      // let v;
      // let k;
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


    getKey(k){
      let local = new Storage();
      return local.getItem(k);
    }


    setKeyValue(k,v){

      if(k && v){
        this.k = k;
        this.v = v;
      }else{
        throw new Error('Need key and value');
      } 

    }

    save(){
       let local = new Storage()
       local.setItem(this.k,this.v);
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
               switch (mutation.attributeName) {
                case "status":
                  userStatusChanged(mutation.target.username, mutation.target.status);
                  break;
                case "username":
                  usernameChanged(mutation.oldValue, mutation.target.username);
                  break;
              }
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

// new main();
// console.log('ue');
// let b = new protoTypes(function(name = 'name'){return name},'opa');
// console.log(b);
// let c = new protoTypes(function(name = 'outro2'){ name},'outro2');
// console.log(c);


// // identify an element to observe
// const elementToObserve = document.querySelector("body");

// // create a new instance of `MutationObserver` named `observer`,
// // passing it a callback function
// const observer = new MutationObserver(() => {
//   console.log("callback that runs when observer is triggered");
// });

// // call `observe()` on that MutationObserver instance,
// // passing it the element to observe, and the options object
// observer.observe(elementToObserve, { subtree: true, childList: true });


let a = new utils()
a.setKeyValue('teste','teste');
a.save();

console.log(a.getKey('teste'));
