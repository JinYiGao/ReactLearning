/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 21:41:28
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 22:06:10
 */
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'

const root = createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App></App></BrowserRouter>);

