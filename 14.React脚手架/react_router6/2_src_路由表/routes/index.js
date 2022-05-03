/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:25:06
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:27:36
 */
import About from "../pages/About";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom";

export default[
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
  ];