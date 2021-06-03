import { App } from 'vue'

function ClickOutside (app:App, options:any) {
  app.directive('clickOutside', {
    mounted (el, binding) {
      document.addEventListener('click', () => {
        el.style.display = 'none'
      })
      el.addEventListener('click', (event:any) => {
        event = event || window.event
        event.stopPropagation()
      })
    }
  })
}

export default ClickOutside