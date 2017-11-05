import Vue from 'vue'
import moment from 'moment'

const vuesArray = [{
  val: 1000000000,
  key: 'Md'
}, {
  val: 1000000,
  key: 'M'
}, {
  val: 1000,
  key: 'k'
}, {
  val: 0,
  key: ''
}]

Vue.filter('vues', val => {
  if (!val) return '0 vue'
  let w = null
  for (let el of vuesArray) {
    if (val >= el.val) {
      w = el
      break
    }
  }
  const retVal = val / w.val
  const nbFloat = retVal < 10 ? 1e1 : 1e0
  return Math.round(retVal * nbFloat) / nbFloat + ' ' + w.key + ' vues'
})

Vue.filter('moment', (val, fromFormat, toFormat) => {
  return moment(val, fromFormat).format(toFormat)
})

Vue.filter('fromNow', val => {
  return moment(val).fromNow()
})
