/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:49:29
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 22:04:01
 */
import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Detail() {
//   const params = useParams();
  const [searchParams, setSearch] = useSearchParams();
  console.log(searchParams.get("id"));
  return (
    <div>
        <ul>
            {/* params参数 */}
            {/* <li>{params.id}</li>
            <li>{params.title}</li>
            <li>{params.content}</li> */}

            {/* search参数 */}
            <li>{searchParams.get('id')}</li>
            <li>{searchParams.get('title')}</li>
            <li>{searchParams.get('content')}</li>
        </ul>
    </div>
  )
}
