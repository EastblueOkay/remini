import { styleTo } from '../../utils/style'

export default function mapProps(dom, props) {
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
