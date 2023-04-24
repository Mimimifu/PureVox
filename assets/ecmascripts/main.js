'use strict';

import utils from './utils.js'

class main {

    constructor(){
      let u = new utils();
      let g = u.objectGlobal();
      
      console.log(g);
      let el = u.createEl('input');
      g.document.body.append(el);
      console.log(g.document.documentElement.children.item('body'));
      u.addEvent('input','click',() =>{(confirm('ok')? console.log('ok'): console.log('cancel'))})
      u.navigation();
      u.title('Main');
      u.changeText('h1','<h2>text</h2>');
      console.log(u.sel('h1'));
      u.changeHTML('application-root','<h2>text</h2>');
      console.log(u.sel('application-root'));
      u.changeText('input[type=text]','test');
      console.log(u.sel('input[type=text]'));
      console.log(g.btoa('test'));
      console.log(Event.target);


    }


}


new main()


