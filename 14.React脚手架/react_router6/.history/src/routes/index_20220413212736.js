/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:25:06
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:27:36
 */
export default{[
    {
      path: '/about',
      element:<About></About>
    },
    {
      path: '/home',
      element:<Home></Home>
    },
    {
      path: '/',
      element:<Navigate to='/about'/>
    }
  ]};