/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-05 17:35:24
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-05 17:35:25
 */

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello React</title>
</head>
<body>
    <div id="test"></div>

    <script type="text/javascript" src="../js/react.development.js"></script>
    <script type="text/javascript" src="../js/react-dom.development.js"></script>
    <script type="text/javascript" src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <script type="text/babel">
        // 1. 创建虚拟DOM
        const VDOM = <h1>Hello React</h1> /* 不写引号 */
        // 2. 渲染虚拟DOM到页面
        ReactDOM.render(VDOM, document.getElementById('test'));
    </script>
</body>
</html>