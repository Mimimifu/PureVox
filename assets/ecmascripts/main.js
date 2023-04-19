'use strict';

import utils from './utils.js'

class main {

    constructor(){
      let u = new utils();
      let g = u.objectGlobal();
      console.log(g);
      u.navigation();
      u.title('Main');
      u.changeText('h1','<h2>text</h2>');
      console.log(u.sel('h1'));
      u.changeHTML('application-root','<h2>text</h2>');
      console.log(u.sel('application-root'));
      u.changeText('input[type=text]','test');
      console.log(u.sel('input[type=text]'));
      console.log(g.btoa('test'));

    }


}


new main()


