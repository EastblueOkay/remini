import render from './render'

export default function update(instace, oldVNode, newVNode) {
  const container = oldVNode._hostDOM.parentElement
  container.removeChild(oldVNode._hostDOM)
  const dom = render(newVNode, container)
  newVNode._hostDOM = dom
}
