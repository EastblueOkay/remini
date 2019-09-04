import VNode from './VNode'

export default function createElement(type, config, ...children) {
  const props = {}
  let ref = null
  let key = null
  if (config !== null) {
    config.key !== undefined && (key = `${config.key}`)
    config.ref !== undefined && (ref = config.ref)
    Object.keys(config).forEach(name => {
      if (name === 'key' || name === 'ref') return
      props[name] = config[name]
    })
  }

  props.children = children.length === 1 ? children[0] : children
  return new VNode(type, props, key, ref)
}
