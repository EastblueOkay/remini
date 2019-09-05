import { styleTo } from './utils/style'

function mapProps(dom, props) {
  for (const name of Object.keys(props)) {
    if (name === 'children') continue
    if (name === 'style') {
      for (const [styleName, styleValue] of Object.entries(props.style)) {
        dom.style[styleName] = styleTo(styleValue)
      }
      continue
    }
    if (name === 'className') {
      dom.className = props.className
      continue
    }
    dom.setAttribute(name, props[name])
  }
}

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

export default function render(vnode, container) {
  const { type, props } = vnode
  if (!type) return
  const { children } = props
  const dom = document.createElement(vnode.type)
  mapProps(dom, props)
  mountChildren(children, dom)
  container.appendChild(dom)
}
