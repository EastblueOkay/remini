const lifeMap = {
  didMount: 'componentDidMount',
  didUpdate: 'componentDidUpdate',
}

export default function lifecycle(instance, step) {
  const methodQueue = lifeMap[step]
  if (!methodQueue) return
  methodQueue.split(',').forEach(name => typeof instance[name] === 'function' && instance[name]())
}
