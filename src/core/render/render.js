import mapProps from './mapProps'

function mountChildren(children, parent) {
  const arrChildren = Array.isArray(children) ? children : [children]
  arrChildren.forEach(childVnode => {
    if (typeof childVnode === 'string') {
      parent.appendChild(document.createTextNode(childVnode))
    } else {
      // eslint-disable-next-line no-use-before-define
      render(childVnode, parent)
    }
  })
}

function renderComponent(vnode, container) {
  const { type: Component, props } = vnode
  const instance = new Component(props)
  const renderedVnode = instance.render()
  instance._VNode = renderedVnode
  if (!renderedVnode) return null
  // eslint-disable-next-line no-use-before-define
  const dom = render(renderedVnode, container)
  renderedVnode._hostDOM = dom
  return dom
}

export default function render(vnode, container) {
  const { type, props } = vnode
  if (!type) return null
  const { children } = props
  let dom = null
  if (typeof type === 'string') {
    dom = document.createElement(vnode.type)
  } else if (typeof type === 'function') {
    dom = renderComponent(vnode, container)
  }
  mapProps(dom, props)
  mountChildren(children, dom)
  dom && container.appendChild(dom)
  return dom
}
