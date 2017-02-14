import {Head,Footer} from '../../src/index.js'
import React, { Component ,PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
ReactDom.render(
    <Head></Head>,
    document.getElementById('head')
);
 ReactDom.render(
 <Footer></Footer>,
 document.getElementById('footer')
 );
