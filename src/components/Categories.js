import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state ={
        categories : [
            {
                key: 'all',
                name: 'Всё'
            },

            {
                key: 'chairs',
                name: 'Стулья'
            },

            {
                key: 'sofa',
                name: 'Диваны'
            },

            {
                key: 'mirror',
                name: 'Зеркала'
            },

            {
                key: 'armchair',
                name: 'Кресла'
            },

            {
                key: 'table',
                name: 'Столы'
            },

            {
                key: 'shkaf',
                name: 'Шкафы'
            },

            
        ]
    }
  }  
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.choseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories