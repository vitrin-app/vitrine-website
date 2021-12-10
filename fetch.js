function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }

  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }

  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }

  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }

  return Math.floor(seconds) + " seconds";
}


(async function() {
  const res = await fetch('https://list.vitrin.cloud/')
  const data = await res.json()

  const video = document.getElementById('video')

  const index = Math.random() > .5 ? 0 : 1

  document.getElementById('source').setAttribute('src', data[index].video.url)
  video.load()
  video.play()

  document.getElementById('title').textContent = data[index].title
  document.getElementById('price').textContent = '€' + data[index].price
  document.getElementById('time').textContent = timeSince(new Date(data[index].submit_time)) + ' ago'
  document.getElementById('location').textContent = data[index].location.address
})()
