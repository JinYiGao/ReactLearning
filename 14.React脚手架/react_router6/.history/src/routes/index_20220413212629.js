/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:25:06
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:26:28
 */
const routes = useRoutes([
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
  ]);