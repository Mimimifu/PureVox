'use strict';

class utils {

    
    constructor(){
      //const og = this.objectGlobal();
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
  
    sel(selector){
      return document.querySelector(selector);
    }

    selAll(selector){
      return document.querySelectorAll(selector);
    }

    selByID(id){
      return document.getElementById(id);
    }

    selByName(name){
      return document.getElementsByName(name);
    }

    selByTag(tag){
      return document.getElementsByTagName(tag);
    }
    
    title(text = 'Default'){
      this.sel('title').innerText = text;
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

    addAttibute(selector,nameAttribute,value){
      this.sel(selector).setAttribute(nameAttribute, value);
    }

    delAttribute(selector,nameAttribute){
      this.sel(selector).removeAttribute(nameAttribute);
    }

    addEvent(selector,typeEvent,fn){
      this.sel(selector).addEventListener(typeEvent,fn);
    }

    // delEvent(selector,typeEvent,fn){
    //   this.sel(selector).removeEventListener(typeEvent,fn,false);
    // }

    objectGlobal(){
      // reference https://developer.mozilla.org/en-US/docs/Glossary/Global_object
      if(globalThis === globalThis.globalThis){
        console.log("globalThis - true (everywhere)");
        return globalThis
      } else
      if(window === window.window){
        console.log("window - true (in a browser)");
        return window
      } else
      if(self === self.self){
        console.log("self - true (in a browser or a Web Worker)");
        return self
      } else
      if(frames === frames.frames){
        console.log("frames - true (in a browser)");
        return frames
      } else
      if(global === global.global){
        console.log("global - true (in Node.js)");
        return global
      } else {
        throw new Error('| Onde é que tô ? | Where am I? | Wo bin ich? | Où suis-je? | ここはどこですか。| koko wa doko desu ka . | Где я? | gde ya? | Де я? | day yo? | 제가 있는 곳은 어디입니까? | jega issneun goseun eodiipnikka? |我在哪裡？| wǒ zàinǎli? |');
      }
    }

}

export default utils

