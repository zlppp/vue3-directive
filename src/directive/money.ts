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
      console.log(binding, el)
      let value = binding.value
      let val = ''
      let value2 = value.replace(/[^0-9]/g, '')
      // console.log(value2, 'value2')
      // el.addEventListener('keyup', function () {
      //   val = value.replace(/[^0-9]*/g, '')
      //   console.log(val)
      // })
      let a = value2.split('').reverse()
      for (var i = 0; i< a.length; i++) {
        if ((i+1) % 4 == 0) {
          a.splice(i, 0, ',')
        }
      }
      a.reverse()
      // el.html('eee')
      el.innerHTML = a.reverse().join('')
      // console.log(binding.value, 'money',)
    }
  })
}

export default Money