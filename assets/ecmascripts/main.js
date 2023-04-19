'use strict';

class main {


    constructor(){
      let u = new utils();
      u.navigation();
      u.title('Main');
      u.selElTag('h1').changeText('Title h1');
      
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
  
    title(t = 'Default'){
      let title = document.querySelector('title');
      title.innerText = t;
    }

    selElTag(select){
      return document.querySelector(select);
    }

    selElTagAll(select){
      return document.querySelectorAll(select);
    }

    changeText(text){
      this.selElTag.innerText = text;
    }


}

new main()


