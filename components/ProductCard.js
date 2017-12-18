import React, {Component} from 'react'

class ProductCard extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = () =>  {
    fetch('https://aerolab-challenge.now.sh/redeem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjZjI3ZWU0OTYwMDAwNjBkMDBhYzQiLCJpYXQiOjE1MTA3OTc5NTB9.E1yF6dRIx3QNPbexT7ujlWFG2pE1tj7pQCNXmPE8NyQ'
    },
    body: JSON.stringify({'productId': this.props.id})
    })
    .then((res)=>res.json())
    .then((res)=> { console.log(res) })
    .catch(error => { console.log('request failed', error) })
  }

  render () {
    return (
      <div className={`product-card ${this.props.cost > this.props.userPoints ? 'disabled' : ''}`}>
        <img className='product-card-img' src={this.props.img} />
        <div className='product-card-body'>
          <h3 className='product-category'>{this.props.category}</h3>
          <h2 className='product-name'>{this.props.name}</h2>
        </div>
        {this.props.cost <= this.props.userPoints &&
          <img className='buy-blue' src='../static/assets/icons/buy-blue.svg' alt='Blue shop bag icon' />
        }
        {this.props.cost > this.props.userPoints &&
          <div className='cant-redeem-container'>
            <p className='need-text'>You need {this.props.cost -  this.props.userPoints}</p>
            <img src='../static/assets/icons/coin.svg' alt='Gold coin icon' className='coin-icon'/>
          </div>
        }
        {this.props.cost <= this.props.userPoints &&
          <div className='product-card-overlay'>
            <div className='product-card-overlay-container'>
              <span className='coin-text'>{this.props.cost}</span>
              <img src='../static/assets/icons/coin.svg' alt='Golden coin' className='points-coin'/>
            </div>
            <button className='btn' onClick={this.handleSubmit}>
              <span>
                Redeem now
              </span>
            </button>
            <img className='buy-white' src='../static/assets/icons/buy-white.svg' alt='White shop bag icon' />
          </div>
        }
        <style jsx>{`
          .product-card{
            background-color: var(--white);
            box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);
            height: 276px;
            margin-bottom: 24px;
            padding: 12px 12px 18px;
            position: relative;
            width: 276px;
          }
          .product-card.disabled {
            cursor: not-allowed;
          }
          .product-card-img {
            border-bottom: 1px solid #d9d9d9;
            height: 182px;
            width: 252px;
          }
          .product-card-body {
            padding: 20px 12px 0;
          }
          .product-category {
            color: var(--light-gray);
            font-size: 1.6rem;
            letter-spacing: -0.04rem;
          }
          .product-name {
            color: var(--dark-gray);
            font-size: 1.8rem;
            letter-spacing: -0.04rem;
          }
          .buy-blue {
            height: 42px;
            position: absolute;
            right: 12px;
            top: 12px;
            width: 42px;
          }
          .cant-redeem-container {
            align-items: center;
            background-color: var(--dark-gray);
            border-radius: 10rem;
            display: flex;
            flex-wrap: wrap;
            height: 42px;
            justify-content: center;
            opacity: 0.8;
            position: absolute;
            right: 12px;
            top: 12px;
            width: 142px;
          }
          .need-text {
            color: var(--white);
            font-size: 1.4rem;
            letter-spacing: -0.03rem;
            margin-right: 9px;
          }
          .cant-redeem-container .coin-icon {
            height: 20px;
            width: 20px;
          }
          .product-card-overlay {
            background-color:rgba(10,212,250,0.7);
            bottom: 0;
            box-shadow:0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.3);
            cursor: pointer;
            display: none;
            height: 100%;
            left: 0;
            padding: 100px 24px 77px;
            position: absolute;
            right: 0;
            top: 0;
            width: 100%;
            z-index: 2; 
          }
          .product-card:hover .product-card-overlay {
            display: block;
          }
          .product-card:hover .cant-redeem-container {
            display: none;
          }
          .product-card-overlay-container {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
          }
          .product-card:hover .buy-blue {
            display: none;
          }
          .coin-text {
            font-size:3.6rem;
            color: var(--white);
            letter-spacing:-0.008rem;
            opacity: 1;
          }
          .points-coin {
            height: 26px;
            margin-left: 10px;
            width: 26px;
          }
          .btn {
            background-color: var(--white);
            border-style: none;
            border-radius: 10rem;
            height: 42px;
            margin-top: 11px;
            width: 228px;
          }
          .btn span {
            color: var(--dark-gray);
            font-size:1.8rem;
            letter-spacing:-0.004rem;
          }
          .buy-white {
            height: 42px;
            position: absolute;
            right: 12px;
            top: 12px;
            width: 42px;
          }
        `}</style>
      </div>
    )
  }
}

export default ProductCard