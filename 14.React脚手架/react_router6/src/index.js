/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 20:05:38
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 20:48:30
 */
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

const root = createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App></App></BrowserRouter>);
