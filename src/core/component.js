export default class Component {
  constructor(props) {
    this.props = props
    this.state = {}
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState }
  }

  render() {}
}
