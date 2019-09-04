import React from 'remini'

const r = () => {
  console.log(<div>hello</div>)
  return 'helloasldfj'
}
document.querySelector('#root').innerHTML = r()
