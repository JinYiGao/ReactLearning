/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:49:29
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 22:21:33
 */
import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

export default function Detail() {
    // params传参
    // const params = useParams();
    
    // search传参
    // const [searchParams, setSearch] = useSearchParams();

    // state传参
    // const {id, title, content} = useLocation().state;
    console.log(useLocation());

  return (
    <div>
        <ul>
            {/* params参数 */}
            {/* <li>{params.id}</li>
            <li>{params.title}</li>
            <li>{params.content}</li> */}

            {/* search参数 */}
            {/* <li>{searchParams.get('id')}</li>
            <li>{searchParams.get('title')}</li>
            <li>{searchParams.get('content')}</li> */}

            {/* state参数 */}
            {/* <li>{id}</li>
            <li>{title}</li>
            <li>{content}</li> */}
        </ul>
    </div>
  )
}
