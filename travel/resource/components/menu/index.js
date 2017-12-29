/*
* @Author: limin
* @Date:   2017-12-28 16:03:04
* @Last Modified by:   limin
* @Last Modified time: 2017-12-28 16:13:36
*/

import React from 'react';

/**
 * 多级菜单
 */

const defaultProps = {
    menuList:{
        xxx:{
            aaa:{
                name:'menu1'
                url:'www.baidu.com'
            }
        },
        ddd:{
            bbb:{
                ccc:{
                    name:'menu2',
                    url:'www.so.com'
                }
            }
        }
    }
}

const renderList = (list) =>{
        //需要递归
        //格式还需要再想一下= =。现在这样的不好弄
        list.map((opt,i) => {
            if(typeOf(opt) === 'object') {

            }
        })
    }


export default class Menu extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {};
    }


    render() {
        return (
            <div className="">
               {
                    return renderList(defaultProps);
               }
            </div>
        )
    }
}