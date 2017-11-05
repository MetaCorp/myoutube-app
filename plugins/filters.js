import Vue from 'vue'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

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

var regex = /P((([0-9]*\.?[0-9]*)Y)?(([0-9]*\.?[0-9]*)M)?(([0-9]*\.?[0-9]*)W)?(([0-9]*\.?[0-9]*)D)?)?(T(([0-9]*\.?[0-9]*)H)?(([0-9]*\.?[0-9]*)M)?(([0-9]*\.?[0-9]*)S)?)?/

Vue.filter('duration', val => {
  var matches = val.match(regex)
  const h = parseFloat(matches[12]) || 0
  const m = parseFloat(matches[14]) || 0
  const s = parseFloat(matches[16]) || 0
  return (h ? h + ':' : '') + m + ':' + s
})

Vue.filter('fromNow', val => {
  return distanceInWordsToNow(val) + ' ago'
  // return moment(val).fromNow()
})
