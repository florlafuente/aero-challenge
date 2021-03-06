import fetch from 'isomorphic-unfetch'

export function redeemProduct(id) {
  return fetch('https://aerolab-challenge.now.sh/redeem', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjZjI3ZWU0OTYwMDAwNjBkMDBhYzQiLCJpYXQiOjE1MTA3OTc5NTB9.E1yF6dRIx3QNPbexT7ujlWFG2pE1tj7pQCNXmPE8NyQ'
    },
    body: JSON.stringify({'productId': id})
  }).then((res)=>res.json())
    .then((res)=> console.log(res.body.message))
    .catch(error => { console.log('request failed', error) })
}