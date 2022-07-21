const response = await fetch('http://localhost:3000/api/orders')
const json = await response.json()
console.log(json)
