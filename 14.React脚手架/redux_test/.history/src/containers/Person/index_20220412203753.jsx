/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 20:02:26
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 20:37:53
 */
import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
  render() {
    return (
      <div>
          <h2>上方组件求和为: {this.props.count}</h2>
          <input ref={(c)=>{this.nameNode = c}} type="text" placeholder='输入名字'></input>
          <input ref={(c)=>{this.ageNode = c}} type="text" placeholder='输入年龄'></input>
          <button onClick={this.addPerson}>添加</button>
          <ul>
              {
                  this.props.persons.map((person)=>{
                      return (
                        <li key={person.id}>{person.name} -- {person.age}</li>
                      )
                  })
              }
          </ul>
      </div>
    )
  }

  addPerson = ()=>{
      const name = this.nameNode.value;
      const age = this.ageNode.value;
      const personObj = {id: nanoid(), name, age};
      this.props.addPerson(personObj);
      console.log(this);
  }
}


function mapStateToProps(state){
    return {
        persons: state.persons,
        count: state.count
    };
}

function mapDispatchToProps(dispatch){
    return {
        addPerson: (personObj)=>{
            dispatch(createAddPersonAction(personObj));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);