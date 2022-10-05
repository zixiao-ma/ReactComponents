import React from "react";

const Layout = React.lazy(() => import(/* webpackChunkName: "layout" */ "./views/layout/layout"));
const Button = React.lazy(() => import(/* webpackChunkName: "layout" */ "./views/button/button"));
export default function App() {

    return (
        <div>
            {/* layout布局示例*/}
            {/*    <Layout/>*/}
            {/* button按钮示例 */}
            <Button/>
        </div>
    )
}
