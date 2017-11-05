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

const get2Digits = val => val.length === 1 ? '0' + val : val

Vue.filter('duration', val => {
  const matches = val.match(regex)
  let h = matches[12] || 0
  let m = matches[14] || 0
  let s = matches[16] || 0
  m = h ? get2Digits(m) : m
  s = get2Digits(s)
  return (h ? h + ':' : '') + m + ':' + s
})

Vue.filter('fromNow', val => {
  return distanceInWordsToNow(val) + ' ago'
  // return moment(val).fromNow()
})
