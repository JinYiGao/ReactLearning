/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 16:51:01
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 22:15:48
 */
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App></App></BrowserRouter>);