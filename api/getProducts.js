import fetch from 'isomorphic-unfetch'

export function getProducts() {
  return fetch('https://aerolab-challenge.now.sh/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjZjI3ZWU0OTYwMDAwNjBkMDBhYzQiLCJpYXQiOjE1MTA3OTc5NTB9.E1yF6dRIx3QNPbexT7ujlWFG2pE1tj7pQCNXmPE8NyQ'
    }
  })
}