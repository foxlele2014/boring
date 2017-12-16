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
function router(path,component) {
    reutrn (
        <div>{component}</div>
    )
}