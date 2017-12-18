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
      lastProductNumber: null,
      selectedFilter: ''
    }
  }
  
  componentWillMount() {
    //filter products already purchased
    const redeemHistory = []
    this.props.redeemHistory.forEach((pr)=> {
      redeemHistory.push(pr.name)
    })
    const filteredProducts = this.props.products
    .filter((pr)=>{
      return !redeemHistory.includes(pr.name)
    })
    this.setState({
      totalProducts: filteredProducts,
      currentProducts: filteredProducts.slice(0, 16),
      lastProductNumber: filteredProducts.length >= 16 ? 16 : filteredProducts.length
    })
  }

  //pagination functions
  handleBackPagination = () => {
    this.setState({page: this.state.page - 1}, () => this.pagination())
  }

  handleForwardPagination = () => {
    this.setState({page: this.state.page + 1}, () => this.pagination())
  }

  pagination = () => {
    const indexOfLastProduct = this.state.page * this.state.productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - this.state.productsPerPage
    this.setState({
      currentProducts: this.state.totalProducts.slice(indexOfFirstProduct, indexOfLastProduct),
      lastProductNumber:  (this.state.totalProducts.length >= indexOfLastProduct ? indexOfLastProduct : this.state.totalProducts.length)
    })
  }

  //filter functions
  sortByDate = () => {
    this.setState({
      totalProducts: this.state.totalProducts.sort((a,b)=> {return (b.id) - (a.id)}),
      currentProducts: this.state.currentProducts.sort((a,b)=> {return (b.id) - (a.id)}),
      selectedFilter: 'recent'
    })
  }

  sortByLowPrice = () => {
    this.setState({
      totalProducts: this.state.totalProducts.sort((a,b)=> {return (a.cost) - (b.cost)}),
      currentlProducts: this.state.currentProducts.sort((a,b)=> {return (a.cost) - (b.cost)}),
      selectedFilter: 'low'
    })
  }

  sortByHighPrice = () => {
    this.setState({
      totalProducts: this.state.totalProducts.sort((a,b)=> {return (b.cost) - (a.cost)}),
      currentProducts: this.state.currentProducts.sort((a,b)=> {return (b.cost) - (a.cost)}),
      selectedFilter: 'high'
    })
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
          sortByLowPrice={this.sortByLowPrice} 
          selectedFilter={this.state.selectedFilter} />
        <div className='product-cards-containers'>
          {this.state.currentProducts.map((p,i)=> (
            <ProductCard key={i} name={p.name} category={p.category} cost={p.cost} img={p.img.url} id={p._id} userPoints={this.props.userPoints} />
          ))}
        </div>
        <Menu productsQuantity={this.state.totalProducts.length} 
              filter={false} 
              handleBackPagination={this.handleBackPagination} 
              handleForwardPagination={this.handleForwardPagination} 
              page={this.state.page} 
              productNumber={this.state.lastProductNumber} />
        <style jsx>{`
          .products-grid {
            height: 100%;
            max-width: 1440px;
            padding: 65px 132px 74px;
            width: 100%;
          }
          .product-cards-containers {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 42px 0 36px;
            width: 100%;
          }
          @media screen and (max-width: 850px) {
            .product-cards-containers {
              align-items: center;
              flex-direction: column;
            }
          }
          @media screen and (max-width: 600px) {
            .products-grid {
              padding-left: 65px;
              padding-right: 65px;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default ProductsGrid