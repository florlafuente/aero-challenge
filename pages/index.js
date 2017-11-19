import Head from 'next/head'
import Navbar from '../containers/Navbar'
import Header from '../containers/Header'
import ProductsGrid from '../containers/ProductsGrid'
import { getUserInfo } from '../api/getUserInfo.js'
import { getProducts } from '../api/getProducts.js'
import { redeemProduct } from '../api/redeemProduct.js'

const Index = ( { user, products, redeemProduct }) => (
  <div>
    <Head>
      <title>Aerolab Coding Challenge</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="/static/global.css" />
    </Head>
    <Navbar user={user}/>
    <Header />
    <ProductsGrid products={products} redeemHistory={user.redeemHistory} userPoints={user.points} redeemProduct={redeemProduct} />
  </div>
)

Index.getInitialProps = async function() {
  const gettingUser = await getUserInfo()
  const userInfo = await gettingUser.json()
  const gettingProducts = await  getProducts()
  const allProducts = await gettingProducts.json()
  const redeemingProduct = redeemProduct
  return {
    user: userInfo,
    products: allProducts,
    redeemProduct: redeemingProduct
  }
}

export default Index