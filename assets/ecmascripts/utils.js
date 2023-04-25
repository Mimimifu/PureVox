'use strict';


class utils {


    constructor(){
      //let og = this.objectGlobal();
    }

    createEl(tag){
      return document.createElement(tag);
    }

    saveEl(el){
      this.objectGlobal().document.body.append(el);
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

    addClass(seletor,name){
      this.sel(seletor).classList.add(...name);
    }

    changeClass(seletor,name){
      this.sel(seletor).classList.replace(...name);
    }
    
    delClass(seletor,name){
      this.sel(seletor).classList.remove(...name);
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


    getECMAScript() {
      // reference https://stackoverflow.com/questions/47374678/how-to-detect-ecmascript-version Infigon
      let array = []
      if (!Array.isArray) {
        return 3
      } else if (!window.Promise) {
        return 5
      } else if (!array.includes) {
        return 6
      } else if (!"".padStart) {
        return 7
      } else if (!Promise.prototype.finally) {
        return 8
      } else if (!window.BigInt) {
        return 9
      } else if (!Promise.allSettled) {
        return 10
      } else if (!"".replaceAll) {
        return 11
      } else if (!array.at) {
        return 12
      } else {
        return 13
      }
    }

    getECMAScriptToYear(){
      // reference https://stackoverflow.com/questions/47374678/how-to-detect-ecmascript-version Infigon
      let ecmascript = this.getECMAScript();
      let year = 1999;
      if(ecmascript !== 3){
        year = ecmascript + 2009;
      }
      return `Version ECMAScript 6+ (${ecmascript} Current), Year ${year}`;
    }

    navigation(){
      //openai script 0.0.1
      if (/Edg\/\d./i.test(navigator.userAgent)) {
          //console.log("Microsoft Edge - versão do ECMAScript 6+");
          console.log(`Microsoft Edge - ${this.getECMAScriptToYear()}`);
          //this.getECMAScriptToYear();
        } else if (/Chrome\/\d./i.test(navigator.userAgent)) {
          //console.log("Google Chrome - versão do ECMAScript 6+");
          console.log(`Google Chrome - ${this.getECMAScriptToYear()}`);
        } else if (/Firefox\/\d./i.test(navigator.userAgent)) {
          //console.log("Mozilla Firefox - versão do ECMAScript 6+");
          console.log(`Mozilla Firefox - ${this.getECMAScriptToYear()}`);
        } else if (/Safari\/\d./i.test(navigator.userAgent)) {
          //console.log("Apple Safari - versão do ECMAScript 6+");
          console.log(`Apple Safari - ${this.getECMAScriptToYear()}`);
        } else if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
          //console.log("Microsoft Internet Explorer - versão anterior ao ECMAScript 6");
          console.log(`Microsoft Internet Explorer - ${this.getECMAScriptToYear()}`);
        } else {
          //console.log("Outros navegadores - versão desconhecida");
          console.log(`Another Browser - ${this.getECMAScriptToYear()}`);
        }
    }



}

export default utils

