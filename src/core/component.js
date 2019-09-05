import update from './render/update'

export default class Component {
  constructor(props) {
    this.props = props
    this.state = {}
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState }
    const oldVNode = this._VNode
    const newVNode = this.render()
    this._VNode = newVNode
    update(this, oldVNode, newVNode)
  }

  render() {}
}
