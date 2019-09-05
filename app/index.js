import React from 'remini'
import ReactDOM from 'remini'

class Test extends React.Component {
  render() {
    return (
      <h2 className="r" style={{ width: 100, height: 100, background: 'red' }}>
        <span>Hello</span>
      </h2>
    )
  }
}

ReactDOM.render(<Test />, document.querySelector('#root'))
