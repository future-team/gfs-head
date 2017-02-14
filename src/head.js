import React,{PropTypes,Component} from 'react';
import classnames from 'classnames';
import ReactDom from 'react/lib/ReactDOM';
export default class Head extends Component {
    static propTypes = {
        msg: []
    };
    static defaultProps = {
        msg: [{title: '主页', href: 'http://www.baidu.com'},
              {title:'文档',href:'http://www.baidu.com'}
             ]
    };
    render(){

    }

}
