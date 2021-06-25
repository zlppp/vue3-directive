import { App } from 'vue'

function ScrollLock (app:App, options:any) {
  app.directive('scroll-lock', {
    mounted(el, binding) {
      console.log(el, 'el')
    },
    updated(el, binding) {
      // if ()
      // document.body.style.overflow = 'hidden'
      console.log(el, 'scroll', el.style.dispaly, document.body.style.overflow)
    }
  })
}

export default ScrollLock