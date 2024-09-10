
export function jsonData(callback, url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        callback(data);
    })
    .catch(error => {
        console.log('Error loading JSON:', error);
    });
}
