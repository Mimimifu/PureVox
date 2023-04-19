'use strict';

import utils from './utils.js'

class main {

    constructor(){
      let u = new utils();
      u.navigation();
      u.title('Main');
      u.changeText('h1','<h2>text</h2>')
      console.log(u.sel('h1'));
      u.changeHTML('application-root','<h2>text</h2>');
      console.log(u.sel('application-root'));
    }


}


new main()


