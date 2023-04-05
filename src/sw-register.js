if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {
        scope: '/'
    })
    .then(registration => {
        console.log('service worker registered', registration);
    })
    .catch(err => console.log(err));
}