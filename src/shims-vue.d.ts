/* eslint-disable */
declare module 'vue3-directive-npm'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
