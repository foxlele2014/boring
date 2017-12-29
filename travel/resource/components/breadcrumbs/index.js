/*
* @Author: limin
* @Date:   2017-12-28 15:41:57
* @Last Modified by:   limin
* @Last Modified time: 2017-12-28 16:02:07
*/

import React from 'react';

/**
 * 
 */

const defaultProps = {
    parent:[
        {
            name:'first',
            url:'www.baidu.com',
            content:''
        },
        {
            name:'second',
            url:'www.so.com',
            content:''//自定义内容支持dom
        }
    ],
    current:{
        name:'aaa',
        content:''
    }
}

export default class BreadCrumbs extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {};

      this.breadList = Object.assign(defaultProps.parent,props.parent);
      this.current = props.current;
    }

    render() {
        console.log(this.current ?
                        this.current.content ?
                        <li>{this.current.content}</li>
                        : <li>{this.current.name}</li>
                        :null);
        return (

            <div className="">
                <ul>
                    {
                        this.breadList.map((opt,i) =>{
                            let text = opt.content ? <li>{opt.content}<i>/</i></li> :<li key={i}><a href={opt.url}>{opt.name}</a><i>/</i></li>;
                            
                            return text;
                        })
                    }
                    {
                        this.current ?
                        (this.current.content ?
                        <li>{this.current.content}</li>
                        : <li>{this.current.name}</li>)
                        :null

                    }
                </ul>
            </div>
        )
    }
}