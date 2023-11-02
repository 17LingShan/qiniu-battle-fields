export function formateSeconds(seconds: number | undefined): string {
  if (seconds === undefined || seconds === null) return "00:00"

  return `${Math.round(seconds / 60)
    .toString()
    .padStart(2, "0")}:${Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0")}`
}

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

export function debounce(callback: Function, delay: number) {
  let t: number = 0
  return function () {
    if (t !== null) clearTimeout(t)
    t = setTimeout(() => {
      callback.call(this, ...arguments)
    }, delay)
  }
}
