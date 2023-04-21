export function saveUserToLocalStorage (user) {
  window.localStorage.setItem('user', JSON.stringify(user))
}

export function getUserFromLocalStorage (user) {
  try {
    return JSON.parse(window.localStorage.getItem('user'))
  } catch (error) {
    return null
  }
}

export function removeUserFromLocalStorage (user) {
  window.localStorage.removeItem('user')
}
export function safeInput (string) {
  return string
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}
export function quantityUsers (num) {
  return num % 10 === 1 ? num + ' пользователю' : num + ' пользователям'
}