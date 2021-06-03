import { App } from 'vue'

let LazyLoad:any = {}

LazyLoad.install = (app:App, options:any) => {
  app.directive('lazy-load', {
    created (el, binding) {
      console.log(el, 'lazy')
    }
  })
  
}

export default LazyLoad