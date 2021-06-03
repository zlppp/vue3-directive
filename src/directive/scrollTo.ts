import { App } from 'vue'

function ScrollTo (app:App, options:any) {
  app.directive('scroll-to', {
    mounted (el, binding) {
      el.addEventListener('click', () => {
        if (typeof binding.value === 'number' ) {
          document.documentElement.scrollTop = binding.value
        }
        if (typeof binding.value === 'string') {
          let top = document.getElementById(binding.value)?.offsetTop
          top && (document.documentElement.scrollTop = top)
        }
      })
    }
  })
}

export default ScrollTo