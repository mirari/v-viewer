import 'core-js/features/array/from'
import 'core-js/features/object/assign'
import 'core-js/features/object/entries'
import 'core-js/features/object/from-entries'
import 'core-js/features/weak-map'
// Viewer.js supports IE 11; Element.remove is used for temporary gallery cleanup.
if (typeof Element !== 'undefined' && !Element.prototype.remove) {
  Element.prototype.remove = function () {
    this.parentNode?.removeChild(this)
  }
}
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector
}
if (typeof Element !== 'undefined' && !Element.prototype.closest) {
  Element.prototype.closest = function (selector) {
    let element = this
    while (element) {
      if (element.matches(selector)) return element
      element = element.parentElement
    }
    return null
  }
}
