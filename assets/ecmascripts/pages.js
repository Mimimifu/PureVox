'use strict';

import utils from "./utils.js";

class pages  {
    constructor(page){

    }

    index(){
        let u = new utils();
        u.title('Principal');
        u.addHTML('application-root', `
            <h1 class="custom">
                content
            </h1>
        `);
        u.addClass('h1',['test']);

    }
}

export default pages;