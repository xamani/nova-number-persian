import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-nova-persian-number', IndexField)
  app.component('detail-nova-persian-number', DetailField)
  app.component('form-nova-persian-number', FormField)
})
