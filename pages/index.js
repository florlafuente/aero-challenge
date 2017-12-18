import Head from 'next/head'
import Navbar from '../containers/Navbar'
import Header from '../containers/Header'
import ProductsGrid from '../containers/ProductsGrid'
import { getUserInfo } from '../api/getUserInfo.js'
import { getProducts } from '../api/getProducts.js'
import { redeemHistory } from '../api/redeemHistory.js'

const Index = ( { user, products, redeemProduct, redeemHistory }) => (
  <div>
    <Head>
      <title>Aerolab Coding Challenge</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="/static/global.css" />
    </Head>
    <Navbar user={user}/>
    <Header />
    <ProductsGrid products={products} redeemHistory={redeemHistory} userPoints={user.points} />
    <style jsx>{`
      div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `}</style>
  </div>
)

Index.getInitialProps = async function() {
  const gettingUser = await getUserInfo()
  const userInfo = await gettingUser.json()
  const gettingProducts = await getProducts()
  const allProducts = await gettingProducts.json()
  const gettingHistory = await redeemHistory()
  const redeemHistorial = await gettingHistory.json()

  return {
    user: userInfo,
    products: allProducts,
    redeemHistory: redeemHistorial
  }
}

export default Index