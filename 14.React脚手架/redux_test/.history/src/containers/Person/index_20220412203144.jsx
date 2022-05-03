/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 20:02:26
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 20:31:44
 */
import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
  render() {
    return (
      <div>
          <input ref={(c)=>{this.nameNode = c}} type="text" placeholder='输入名字'></input>
          <input ref={(c)=>{this.ageNode = c}} type="text" placeholder='输入年龄'></input>
          <button onClick={this.addPerson}>添加</button>
          <ul>
              <li>名字1 -- 年龄1</li>
              <li>名字1 -- 年龄1</li>
          </ul>
      </div>
    )
  }

  addPerson = ()=>{
      const name = this.nameNode.value;
      const age = this.ageNode.value;
      const personObj = {id: nanoid(), name, age};
      console.log(personObj);
  }
}


function mapStateToProps(state){
    return {persons: state.persons};
}

function mapDispatchToProps(dispatch){
    return {
        addPerson: (personObj)=>{
            dispatch(createAddPersonAction(personObj));
        }
    }
}

export default connect()(Person);