/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:25:06
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:36:12
 */
import About from "../pages/About";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom";
import News from "../pages/News";
import Message from "../pages/Message";

export default[
    {
      path: '/about',
      element:<About></About>
    },
    {
      path: '/home',
      element:<Home></Home>,
      children: [
          {
              path:'news',
              element: <News></News>
          },
          {
            path:'message',
            element: <Message></Message>
        }
      ]
    },
    {
      path: '/',
      element:<Navigate to='/about'/>
    }
  ];