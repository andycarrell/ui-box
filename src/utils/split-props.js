/**
 * Utility to split props based on an array of keys
 */
export default function splitProps(props, keys) {
  const matchedProps = {}
  const restProps = {}
  const propKeys = Object.keys(props)

  for (let i = 0; i < propKeys.length; i++) {
    const propKey = propKeys[i]
    const propValue = props[propKey]

    if (keys.includes(propKey)) {
      matchedProps[propKey] = propValue
    } else {
      restProps[propKey] = propValue
    }
  }

  return { matchedProps, restProps }
}
