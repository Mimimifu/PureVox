'use strict';

import utils from './utils.js';
import pages from './pages.js';

class main {

    constructor(){
      let timereload = 60;
      let u = new utils();
      let g = u.objectGlobal();
      let p = new pages();
      
      // console.log(g);
      // let el = u.createEl('input');
      // el.setAttribute('name','hello world');
      // u.saveEl(el);
      // //console.log(g.document.documentElement.children.item('body'));
      // u.addEvent('input','click',() =>{(confirm('ok')? console.log('ok'): console.log('cancel'))})
      // u.navigation();
      // u.title('Main');
      // u.changeText('h1','<h2>text</h2>');
      // console.log(u.sel('h1'));
      // u.changeHTML('application-root','<h2>text</h2>');
      // console.log(u.sel('application-root'));
      // u.changeText('input[type=text]','test');
      // console.log(u.sel('input[type=text]'));
      // //console.log(g.btoa('test'));
      // console.log(Event.target);
      // u.title('Principal')
      // let header = '<pre>header</pre>';
      // let aside = '<pre>aside</pre>';
      // let footer = '<pre>footer</pre>';

      // u.addHTML('application-root',`${header}`);
      // u.addHTML('application-root',`${aside}`);
      u.addHTML('application-root',`${p.index()}`);
      // u.addHTML('application-root',`${footer}`);

      document.addEventListener("DOMContentLoaded", () => {
         let count;
         (u.getStorageLocal('autoreload') !== undefined ?  count = u.getStorageLocal('autoreload'): count = 0);
         u.autoSaveStorage('autoreload',`${count + 1}` ,true);
         (u.getStorageLocal('autoreload') == 0 ? g.location.reload() : setTimeout(() => { g.location.reload()}, 60000) );
         return false;
        });
      
      


    }


}


new main()


