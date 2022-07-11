Nova.booting((Vue, router, store) => {
  Vue.component('index-nova-persian-number', require('./components/IndexField'))
  Vue.component('detail-nova-persian-number', require('./components/DetailField'))
  Vue.component('form-nova-persian-number', require('./components/FormField'))
})
