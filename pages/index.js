import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Navbar from '../containers/Navbar'
import Header from '../containers/Header'
import ProductsGrid from '../containers/ProductsGrid'

const Index = ( { user, products }) => (
  <div>
    <Head>
      <title>Aerolab Coding Challenge</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="/static/global.css" />
    </Head>
    <Navbar user={user}/>
    <Header />
    <ProductsGrid products={products} redeemHistory={user.redeemHistory} userPoints={user.points}  />
  </div>
)

Index.getInitialProps = async function() {
  const gettingUser = await fetch('https://aerolab-challenge.now.sh/user/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjZjI3ZWU0OTYwMDAwNjBkMDBhYzQiLCJpYXQiOjE1MTA3OTc5NTB9.E1yF6dRIx3QNPbexT7ujlWFG2pE1tj7pQCNXmPE8NyQ'
    }
  })
  const userInfo = await gettingUser.json()
  const allProductsFetch = await fetch('https://aerolab-challenge.now.sh/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjZjI3ZWU0OTYwMDAwNjBkMDBhYzQiLCJpYXQiOjE1MTA3OTc5NTB9.E1yF6dRIx3QNPbexT7ujlWFG2pE1tj7pQCNXmPE8NyQ'
    }
  })
  const allProducts = await allProductsFetch.json()
  return {
    user: userInfo,
    products: allProducts
  }
}

export default Index