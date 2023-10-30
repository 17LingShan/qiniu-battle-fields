// function handleConfig() {
//   const config = (JSON.parse(localStorage.getItem("config")!) as Storage.StorageConfig) || {}

//   const proxyConfig = new Proxy(config, {
//     set(target, prop, value) {
//       if (Array.isArray(target[prop])) {
//         target[prop] = new Proxy(value, {
//           set(arrTarget, arrProp, arrValue) {
//             arrTarget[arrProp] = arrValue
//             localStorage.setItem("config", JSON.stringify(proxyConfig))
//             return true
//           },
//           deleteProperty(arrTarget, arrProp) {
//             arrTarget.splice(arrProp, 1)
//             localStorage.setItem("config", JSON.stringify(proxyConfig))
//             return true
//           }
//         })
//       } else {
//         target[prop] = value
//         console.log("proxy value", value)
//       }
//       localStorage.setItem("config", JSON.stringify(proxyConfig))
//       return true
//     }
//   })

//   return proxyConfig
// }

// const proxyConfig = handleConfig()
// export default proxyConfig
