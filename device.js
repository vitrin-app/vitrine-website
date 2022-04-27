function isiPhone() {
  return /iPhone/.test(navigator.userAgent) && !window.MSStream
}

function isAndroid() {
  return /android/i.test(navigator.userAgent)
}

(function() {
  if (isiPhone()) {
    document.body.classList.add('iphone')
  }

  if (isAndroid()) {
    document.body.classList.add('android')
  }
})()
