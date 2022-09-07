import taxes from './taxes.json'
import reductions from './reductions.json'

export default class Calc {
  #total = 0

  constructor(order) {
    this.order = order
  }

  summarizeOrder() {
    this.#total = this.order.prices.reduce((sum, price, i) => sum += price * this.order.quantities[i], 0)
    return this
  }

  #getTax(country) {
    return taxes.find(tax => tax.code === country).tax ?? 0
  }

  addTaxes() {
    const tax = this.#getTax(this.order.country) / 100
    this.#total = this.#total * (1 + tax)
    return this
  }

  #getReduction(reductionType, total) {
    const reductionValues = reductions.find(reduction => reduction.type === reductionType)?.value ?? []
    return reductionValues.find(reduction => reduction.total <= total)?.reduction ?? 0
  }

  addReductions() {
    const reduction = this.#getReduction(this.order.reduction, this.#total) / 100
    this.#total = this.#total * (1 - reduction)
    return this
  }

  round() {
    this.#total = Number(this.#total.toFixed(2))
    return this
  }

  getTotalResult() {
    return { total: this.#total }
  }
}
