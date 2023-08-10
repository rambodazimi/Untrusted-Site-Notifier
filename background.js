chrome.webNavigation.onCompleted.addListener(function(details) {
  if (details.frameId === 0) {
    const url = new URL(details.url);

    // Technique 1: SSL/TLS Analysis
    if (url.protocol === 'http:') {
      showNotification('Untrusted Site', 'This website is using an untrusted connection.');
    }

    // Technique 2: Real-time API Lookups
    checkPhishingAPI(url.href)
      .then(isPhishing => {
        if (isPhishing) {
          showNotification('Phishing Alert', 'This website is identified as a phishing site.');
        }
      });


  }
});

function checkPhishingAPI(url) {
  return fetch('https://api.phishingdetector.com/', {
    method: 'POST',
    body: JSON.stringify({ url: url })
  })
  .then(response => response.json())
  .then(data => data.isPhishing);
}


function showNotification(title, message) {
  chrome.notifications.create('', {
    type: 'basic',
    iconUrl: 'warning.png',
    title: title,
    message: message
  });
}

