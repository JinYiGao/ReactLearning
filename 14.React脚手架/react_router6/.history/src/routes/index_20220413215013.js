/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:25:06
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:50:13
 */
import About from "../pages/About";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

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
            element: <Message></Message>,
            children: [
                {
                    path: '/detail',
                    element: <Detail></Detail>
                }
            ]
          }
      ]
    },
    {
      path: '/',
      element:<Navigate to='/about'/>
    }
  ];