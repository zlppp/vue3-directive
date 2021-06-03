import { App } from 'vue'

let Money:any = {}

Money.install = (app:App, options:any) => {
  app.directive('money', {
    // mounted(el, binding) {
      
    //   console.log(el, 'money')
    //   el.addEventListener('keyup', function () {
    //     // el.value = ',' + binding.value
    //     console.log(binding.value)
    //   })
    // },
    updated(el, binding) {
      if (!/^[0-9]|\.*$/.test(binding.value)) return
      let value = binding.value.replace(/,/g, '')
      let a = value.split('').reverse()
      for (var i = 0; i< a.length; i++) {
        if ((i+1) % 4 == 0) {
          a.splice(i,0,',');
        }
      }
      a.reverse()
      el.value = a.reverse().join('')
      // console.log(binding.value, 'money',)
    }
  })
}

export default Money