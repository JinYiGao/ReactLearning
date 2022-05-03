/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 15:53:13
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 17:58:05
 */
import {createRoot} from 'react-dom/client';
import App from './App';
import store from './redux/store';

const root = createRoot(document.getElementById('root'));
root.render(<App></App>);

// store状态改变 调用回调
store.subscribe(()=>{
  root.render(<App></App>);
})
