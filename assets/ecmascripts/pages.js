'use strict';

import utils from "./utils.js";

class pages {
    constructor(page){

    }

    header(){
        let u = new utils();
        u.addHTML('application-root',
        `
        <nav>
            <a href="/html/">HTML</a>
            <a href="/css/">CSS</a>
            <a href="/js/">ECMAScript</a>
            <a href="/php/">PHP</a>
            <a href="/sql/">SQL</a>
            <a href="/Java/">JAVA</a>  
        </nav>

        `);
    }

    footer(){
        let u = new utils();
        u.addHTML('application-root',
        `
        <footer>
            ${Date()} Copyright. All Rights Reserved.
        </footer>

        `);
    }


    index(){
        let u = new utils();
        u.title('Principal');
        this.header();
        u.addHTML('application-root', `
            <h1 class="custom" id='test'>
                ${u.getStorageLocal('test',true)}
            </h1>
        `);
        u.addClass('h1',['test']);
        u.autoSaveStorage('test','content',true);
        this.footer();
        return ' '
    }
}

export default pages;