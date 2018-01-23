/**
 * 每个页面的路由自己配置，不在统一的文件里边修改增加。
 * 如在pages/index/index.js
 * 增加index.js 用来配置路由，
 * 这个可以连同路由，modal,reducer，action,component一起配置
 * 使用node的fs来读取文件，所以可以使用babel的预处理（在编译过程期间完成）
 */

//TODO 预处理 、读取

/**
  * key:value
    [{route:component}]
  */
export const routes = [
    {
        '/': Home
    },
    {
        '/about': About
    },
    {
        '/topic': Topic
    }
];

/**
 * store
 */

export const model = {
    home: {
        test: '111'
    },
    about: {
        test: '222'
    },
    topic: {
        test: '333'
    }
};

/**
 *
 */

export const reducers = (state = model, action) => {
    switch (action.type) {
        case 'test':
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });
        case 'ddd':
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            });
        default:
            return state;
    }
};

const Home = () => {
    return <div className="test">Home</div>;
};

const About = () => {
    return <div className="about">About</div>;
};

const Topic = () => {
    return <div className="topic">topic</div>;
};
