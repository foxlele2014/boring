/**
 * 路由的原理：
 * 1.修改页面的url
 * 2.渲染传来的component
 * 构造一个组件，接收path和component（就是页面内容）
 * 可以使用history修改当前页面的URL，
 * 使用ReactDOM.render(<component />,el)将当前点击的url对应的component传过来渲染
 * 所以得监听这个组件的点击事件
 * 那假如不用react来写这个路由呢，用什么方法可以渲染对应的component到页面里呢？
 */

/**
 * 页面的导航，路由配置，怎么联系在一块，例如：点击了页面的导航，修改了页面的url，怎么触发路由的配置。
 * 如：监测页面的url的变化。（hash/history api），
 * router作为父亲，里边有route，父亲注册了与页面url的监测的机制，当发生变化时，是要循环route吗？，循环到匹配了url的子路由之后，如何渲染页面。？
 *
 * 
 * 
 * @param  {[type]} path      [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
function router(path,component) {
    reutrn (
        <div>{component}</div>
    )
}