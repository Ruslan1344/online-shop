import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
    orders:[] ,
    currentItems: [],
    items:[   {
      id: 1,
      title: 'Стул',
      img: 'chair.jpeg',
      desc: 'Lorem dfhsdh dsfhs dshsdh',
      category:'chairs',
      price:'49.99'

    },
    {
      id: 2,
      title: 'Стол',
      img: 'table.png',
      desc: 'Lorem dfhsdh dsfhs dshsdh',
      category:'table',
      price:'69.99'

    },
    {
      id: 3,
      title: 'Шкаф',
      img: 'shkaf.png',
      desc: 'Lorem dfhsdh dsfhs dshsdh',
      category:'shkaf',
      price:'59.99'

    },

    {
      id: 4,
      title: 'Диван',
      img: 'sofa.jpeg',
      desc: 'Lorem dfhsdh dsfhs dshsdh',
      category:'sofa',
      price:'59.99'

    },

    {
      id: 5,
      title: 'Кресло',
      img: 'armchair.jpeg',
      desc: 'Lorem dfhsdh dsfhs dshsdh',
      category:'armchair',
      price:'59.99'

    },

    {
      id: 6,
      title: 'Зеркало',
      img: 'mirror.jpeg',
      desc: 'Lorem dfhsdh dsfhs dshsdh',
      category:'mirror',
      price:'59.99'

    },
  ],
  showFullItem: false,
  fullItem : {}
}
  this.state.currentItems = this.state.items
  this.addToOrder = this.addToOrder.bind(this)
  this.deleteOrder = this.deleteOrder.bind(this)
  this.choseCategory = this.choseCategory.bind(this)
  this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories choseCategory={this.choseCategory} />
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      <Footer />
    </div>
  )
}

onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

choseCategory (category) {
  if(category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }
 this.setState({
  currentItems: this.state.items.filter(el => el.category === category)
 })
}

deleteOrder (id) {
  this.setState({orders: this.state.orders.filter(el => el.id!== id)})

}

addToOrder(item) {
  let isInArray = false
  this.state.orders.forEach (el => {
    if(el.id === item.id)
    isInArray = true

  })

  if(!isInArray)

  this.setState({ orders: [...this.state.orders, item] })
  
}
}

export default App;
