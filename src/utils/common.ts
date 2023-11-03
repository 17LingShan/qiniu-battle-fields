export function formateSeconds(seconds: number): string {
  if (seconds === undefined || seconds === null) return "00:00"
  return `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0")}:
    ${Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0")}`
}

// 节流
export function throttle(callback: Function, delay: number) {
  let t = true

  return function () {
    if (t) {
      setTimeout(() => {
        callback.call(this, ...arguments)
        t = true
      }, delay)
    }
    t = false
  }
}

// 防抖
export function debounce(callback: Function, delay: number) {
  let t: number = 0

  return function () {
    if (t !== null) clearTimeout(t)
    t = setTimeout(() => {
      callback.call(this, ...arguments)
    }, delay)
  }
}

export function canCancelTimeout(callback: Function, delay: number) {
  let timeoutInstance: number

  function cancelTimeout() {
    clearTimeout(timeoutInstance)
  }

  return function () {
    this.cancelTimeout = cancelTimeout
    callback.call(this, ...arguments)
  }
}
