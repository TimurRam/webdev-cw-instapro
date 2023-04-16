export function saveUserToLocalStorage(user) {
  window.localStorage.setItem("user", JSON.stringify(user));
}

export function getUserFromLocalStorage(user) {
  try {
    return JSON.parse(window.localStorage.getItem("user"));
  } catch (error) {
    return null;
  }
}

export function removeUserFromLocalStorage(user) {
  window.localStorage.removeItem("user");
}

export function saveUserIdLocaleStorage(userId){
  window.localStorage.setItem('userId', JSON.stringify(userId));
}

export function getUserIdFromLocalStorage(userId) {
  try {
    return JSON.parse(window.localStorage.getItem("userId"));
  } catch (error) {
    return null;
  }
}
export function removeUserIdFromLocalStorage(user) {
  window.localStorage.removeItem("userId");
}