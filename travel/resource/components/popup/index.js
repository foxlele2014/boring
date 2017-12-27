/*
 * @Author: limin
 * @Date:   2017-12-27 15:30:58
 * @Last Modified by:   limin
 * @Last Modified time: 2017-12-27 16:53:35
 */
import './index.less';

import React from 'react';

/**
 * [全局class],是否可自定义
 * [mask]:蒙版，1、是否有蒙版，2、点击是否可关闭弹窗，
 * [header]: 头部 ，1、title定制，2、是否有关闭按钮
 * [content]:定制
 * [footer] :底部，1，是否有底部，2，底部按钮文字定制，3、底部自定义，4、按钮事件
 */
const defaultProps = {
    className:'',
    mask: {
        isShow: true,
        close: true
    },
    header: {
        title: 'test',
        close: true
    },
    content: 'test',
    footer: {
        isShow:true,
        confirmText: 'confirm',
        cancelText: 'cancel',
        content:'',
        onOk:()=>{console.log('isok')},
        onCancel:()=>{console.log('cancel')}
    }
}
export default class Popup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.mergeProps = Object.assign(defaultProps,props);

    }

    render() {
        const { className,mask,header,content,footer} = this.mergeProps
        return (
            <div className="popup-wrapper">
                {
                    mask.isShow ?
                    (
                        <div 
                            className="popup-mask" 
                            onClick={
                                mask.close ? 
                                footer.onCancel 
                                : null
                            }>
                        </div>
                    )
                    :null
                }
               
                <div className="popup-header">

                    <h1>{header.title}</h1>
                    {
                        header.close ?
                        <span onClick={footer.onCancel}><i>关闭</i></span>
                        : null
                    }
                    
                </div>
                <div className="popup-content">
                    {content}
                </div>
                {
                    footer.content ?
                    footer.content
                    :
                    footer.isShow ?
                        (
                             <div className="popup-footer">
                                <button onClick={footer.onOk}>{footer.confirmText}</button>
                                <button onClick={footer.onCancel}>{footer.cancelText}</button>
                            </div>
                        )
                    : null
                }
               
            </div>
        )
    }

}

