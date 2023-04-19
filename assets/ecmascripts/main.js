'use strict';

class main {


    constructor(){
      let u = new utils();
      u.navigation();
      u.title('Main');
      u.sel('h1').innerText = 'Title h1';
      console.log(u.sel('h1'));


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

    sel(select){
      return document.querySelector(select);
    }

    selAll(select){
      return document.querySelectorAll(select);
    }

    // changeText(text){
    //   return this;
    // }

    // changeHTML(html){
    //   return this.innerHTML = html
    // }

}

new main()


