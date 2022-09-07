import Calc from './calc.js'

it('should calculate total', () => {
  const calc = new Calc({ prices: [10, 20], quantities: [1, 2] })
  expect(calc.summarizeOrder().getTotalResult()).toEqual({ total: 50 })
})

it('should calculate total with taxes', () => {
  const calc = new Calc({ prices: [10, 20], quantities: [1, 2], country: 'FR' })
  expect(calc.summarizeOrder().addTaxes().getTotalResult()).toEqual({ total: 60 })
})

it('should calculate total with no reduction', () => {
  const calc = new Calc({ prices: [10, 20], quantities: [1, 2], reduction: 'STANDARD' })
  expect(calc.summarizeOrder().addReductions().getTotalResult()).toEqual({ total: 50 })
})

it('should calculate total with reduction', () => {
  const calc = new Calc({ prices: [1000, 2000], quantities: [1, 2], reduction: 'STANDARD' })
  expect(calc.summarizeOrder().addReductions().getTotalResult()).toEqual({ total: 4750 })
})

it('should round total', () => {
  const calc = new Calc({ prices: [10.123, 20.456], quantities: [1, 2] })
  expect(calc.summarizeOrder().round().getTotalResult()).toEqual({ total: 51.03 })
})
