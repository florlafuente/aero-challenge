import React, {Component} from 'react'
import Menu from '../components/Menu'
import ProductCard from '../components/ProductCard'

class ProductsGrid extends Component { 
  constructor (props) {
    super(props)
    this.state = {
      totalProducts : null,
      currentProducts: null,
      page : 1,
      productsPerPage : 16,
      lastProductNumber: null
    }
  }
  
  componentWillMount() {
    const redeemHistory = []
    this.props.redeemHistory.forEach((pr)=> {
      redeemHistory.push(pr.name)
    })
    const filteredProducts = this.props.products.filter((pr)=>{
      return !redeemHistory.includes(pr.name)
    })
    this.setState({
      totalProducts: filteredProducts,
      currentProducts: filteredProducts.slice(0, 16),
      lastProductNumber: 16
    })
  }

  handleBackPagination = () => {
    this.setState({page: this.state.page - 1}, () => this.pagination())
  }

  handleForwardPagination () {
    this.setState({page: this.state.page + 1}, () => this.pagination())
  }

  pagination () {
    const indexOfLastProduct = this.state.page * this.state.productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - this.state.productsPerPage
    this.setState({
      currentProducts: this.state.totalProducts.slice(indexOfFirstProduct, indexOfLastProduct),
      lastProductNumber:  (this.state.totalProducts.length >= indexOfLastProduct ? indexOfLastProduct : this.state.totalProducts.length)
    })
  }

  sortByDate = () => {
    console.log(this.state.totalProducts)
  }

  sortByLowPrice = () => {
    this.setState({
      currentProducts: this.state.currentProducts.sort((a,b)=> {return (a.cost) - (b.cost)})
    }, console.log(this.state.currentProducts))
  }

  sortByHighPrice = () => {
    console.log(this.state.totalProducts)
  }

  render () {
    return (
      <section className='products-grid'>
        <Menu productsQuantity={this.state.totalProducts.length} 
          filter={true} 
          handleBackPagination={this.handleBackPagination.bind(this)} 
          handleForwardPagination={this.handleForwardPagination.bind(this)} 
          page={this.state.page} 
          productNumber={this.state.lastProductNumber} 
          sortByDate={this.sortByDate} 
          sortByHighPrice={this.sortByHighPrice} 
          sortByLowPrice={this.sortByLowPrice} />
        <div className='product-cards-containers'>
          {this.state.currentProducts.map((p,i)=> (
            <ProductCard key={i} name={p.name} category={p.category} cost={p.cost} img={p.img.url} id={p._id} userPoints={this.props.userPoints} />
          ))}
        </div>
        <Menu productsQuantity={this.state.totalProducts.length} 
              filter={false} 
              handleBackPagination={this.handleBackPagination.bind(this)} 
              handleForwardPagination={this.handleForwardPagination.bind(this)} 
              page={this.state.page} 
              productNumber={this.state.lastProductNumber} />
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