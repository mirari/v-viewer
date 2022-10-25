export const inBrowser = typeof window !== 'undefined' && window !== null

export const hasIntersectionObserver = checkIntersectionObserver()
const isEnumerable = Object.prototype.propertyIsEnumerable
const getSymbols = Object.getOwnPropertySymbols

/**
 * is object
 *
 * @param {*} val
 * @returns {boolean}
 */
export function isObject(val: any): boolean {
  return typeof val === 'function' || toString.call(val) === '[object Object]'
}

/**
 * is primitive
 *
 * @param {*} val
 * @returns {boolean}
 */
export function isPrimitive(val: any): boolean {
  return typeof val === 'object' ? val === null : typeof val !== 'function'
}

/**
 * check private key
 *
 * @export
 * @param {*} key
 * @returns {boolean}
 */
export function isValidKey(key: any): boolean {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype'
}

/**
 * Check if IntersectionObserver can be used
 *
 * @returns {boolean}
 */
export function checkIntersectionObserver(): boolean {
  if (inBrowser
    && 'IntersectionObserver' in window
    && 'IntersectionObserverEntry' in window
    && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    // Minimal polyfill for Edge 15's lack of `isIntersecting`
    // See: https://github.com/w3c/IntersectionObserver/issues/211
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype,
        'isIntersecting', {
          get() {
            return this.intersectionRatio > 0
          },
        })
    }
    return true
  }
  return false
}

/**
 * Assign the enumerable es6 Symbol properties from one
 * or more objects to the first object passed on the arguments.
 * Can be used as a supplement to other extend, assign or
 * merge methods as a polyfill for the Symbols part of
 * the es6 Object.assign method.
 * https://github.com/jonschlinkert/assign-symbols
 *
 * @param {*} target
 * @param {...any[]} args
 * @returns
 */
function assignSymbols(target: any, ...args: any[]) {
  if (!isObject(target)) {
    throw new TypeError('expected the first argument to be an object')
  }

  if (args.length === 0 || typeof Symbol !== 'function' || typeof getSymbols !== 'function') {
    return target
  }

  for (const arg of args) {
    const names = getSymbols(arg)

    for (const key of names) {
      if (isEnumerable.call(arg, key)) {
        target[key] = arg[key]
      }
    }
  }
  return target
}

/**
 * Deeply assign the values of all enumerable-own-properties and symbols
 * from one or more source objects to a target object. Returns the target object.
 * https://github.com/jonschlinkert/assign-deep
 *
 * @param {*} target
 * @param {...any[]} args
 * @returns
 */
export function assign(target: any, ...args: any[]): any {
  let i = 0
  if (isPrimitive(target))
    target = args[i++]
  if (!target)
    target = {}
  for (; i < args.length; i++) {
    if (isObject(args[i])) {
      for (const key of Object.keys(args[i])) {
        if (isValidKey(key)) {
          if (isObject(target[key]) && isObject(args[i][key])) {
            assign(target[key], args[i][key])
          }
          else {
            target[key] = args[i][key]
          }
        }
      }
      assignSymbols(target, args[i])
    }
  }
  return target
}
