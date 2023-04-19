'use strict';

class main {


    constructor(){
      let u = new utils();
      u.navigation();
      u.title('Main');
      u.changeText('h1','<h2>text</h2>')
      console.log(u.sel('h1'));
      u.sel('application-root');
      
      console.log(u.sel('application-root'));

    }


}

class utils {


    // constructor(){
      
    // }

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
  
    title(text = 'Default'){
      this.sel('title').innerText = text;
    }

    sel(selector){
      return document.querySelector(selector);
    }

    selAll(selector){
      return document.querySelectorAll(selector);
    }

    changeText(selector, text){
      this.sel(selector).innerText = text;
    }

    changeHTML(selector, html){
      this.sel(selector).innerHTML = html;
    }

    changeValue(selector, value){
      this.sel(selector).value = value;
    }

}

new main()


