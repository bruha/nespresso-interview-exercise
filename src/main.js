const response = await fetch('http://localhost:3000/api/orders')
const orders = await response.json()
import Calc from './calc.js'

orders.forEach(order => {
  const calc = new Calc(order)
  const res = calc.summarizeOrder().addTaxes().addReductions().round().getTotalResult()
  console.log({ order, res })
})
