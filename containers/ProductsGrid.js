import React, {Component} from 'react'
import Menu from '../components/Menu'
import ProductCard from '../components/ProductCard'

class ProductsGrid extends Component { 
  constructor (props) {
    super(props)
    this.state = {
      products : [],
      page : 1,
      productsPerPage : 8
    }
  }

  render () {
    return (
      <section className='products-grid'>
        <Menu productsQuantity={this.props.products.length} filter={true}/>
        <div className='product-cards-containers'>
          {this.props.products.map((p,i)=> (
            <ProductCard key={i} name={p.name} category={p.category} cost={p.cost} img={p.img.url} id={p._id} userPoints={this.props.userPoints} />
          ))}
        </div>
        <Menu productsQuantity={this.props.products.length} filter={false} />
        <style jsx>{`
          .products-grid {
            height: 100%;
            padding: 65px 132px 74px;
            width: 100%;
          }
          .product-cards-containers {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 42px 0 36px;
            width: 100%;
          }
        `}</style>
      </section>
    )
  }
}

export default ProductsGrid