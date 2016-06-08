import '../less/impress.less'
// copy from impress.js
// add css prefix
var pfx = (function() {
  var style = document.createElement('dummy').style,
    prefixes = 'Webkit Moz O ms Khtml'.split(' '),
    memory = {};

  return function(prop) {
    if (typeof memory[prop] === 'undefined') {

      var ucProp  = prop.charAt(0).toUpperCase() + prop.substr(1),
        props = (prop + ' ' + prefixes.join(ucProp + ' ') + ucProp).split(' ')

      memory[prop] = null;
      for (var i in props) {
        if (style[props[i]] !== undefined) {
          memory[prop] = props[i]
          break
        }
      }
    }
    return memory[prop]
  }
})()

// copy from impress.js
// set css to el
var css = function(el, props) {
  var key, pkey
  for (key in props) {
    if (props.hasOwnProperty(key)) {
      pkey = pfx(key)
      if (pkey !== null) {
        el.style[pkey] = props[key]
      }
    }
  }
  return el
}

window.onload = function() {
  let root = document.getElementById('impress')
  let canvas = document.createElement('div')
  canvas.classList.add('canvas')

  // root.style.transform = 'perspective(1000px) scale(0.5)'
  //
  let perspective = scale => {
    return `perspective(${1000 / scale}px)`
  }
  // let rotate = r => {
  //   if (r) {
  //     return `rotate(${r}deg)`
  //   }
  //   return ''
  // }

  root.appendChild(canvas)
  let steps = root.querySelectorAll('.step')
  for (let i = 0; i < steps.length; i++) {
    let step = steps[i]
    css(step, {
      transform: `translate(-50%, -50%) translate3d(${step.dataset.x}px, ${step.dataset.y}px, ${step.dataset.z}px) scale(${step.dataset.scale}) rotateZ(${step.dataset.rotate}deg)`
    })
    setTimeout(() => {
      css(canvas, {
        transform: `rotateZ(${-step.dataset.rotate}deg) translate3d(${-step.dataset.x}px, ${-step.dataset.y}px, ${-step.dataset.z}px)`
      })
      css(root, {
        transform: `${perspective(step.dataset.scale)} scale(${1 / step.dataset.scale})`
      })
      // css(root, {
      //   perspective: (1000 / step.dataset.scale) + 'px',
      //   transform: `scale(${1 / step.dataset.scale})`
      // })
    }, 3000 * i)
    canvas.appendChild(step)
  }
}
