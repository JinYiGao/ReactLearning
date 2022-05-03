/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:49:29
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 22:01:32
 */
import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Detail() {
//   const params = useParams();
  const [searchParams, setSearch] = useSearchParams();
  console.log(searchParams);
  return (
    <div>
        <ul>
            {/* <li>{params.id}</li>
            <li>{params.title}</li>
            <li>{params.content}</li> */}
        </ul>
    </div>
  )
}
