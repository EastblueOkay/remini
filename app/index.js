import React from 'remini'
import ReactDOM from 'remini'

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red',
    }

    document.addEventListener('click', () => {
      const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
      console.log('update color: ', color)
      this.setState({
        color,
      })
    })
  }

  render() {
    const { color } = this.state
    return (
      <div
        style={{ border: '1px solid #ccc', padding: 8, borderRadius: 10, display: 'inline-block', background: '#eee' }}
      >
        {color}
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            boxShadow: '0 0 10px rgba(0, 0, 0, .1)',
            background: color,
          }}
        />
      </div>
    )
  }
}

ReactDOM.render(<Test />, document.querySelector('#root'))
