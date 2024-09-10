
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
export function checkLoged(root, that1, that2, that3){
    if(jQ(that1).val()==""||jQ(that1).val()==null){
        that2.style.display="block";
        jQ(that3).on('click',errbutton)
        function errbutton(){
            window.location.href= root + `index`;
        }
    }else{
    	return true;
    }
}
export function loadWell(that1){
    setTimeout(function(){
        that1.fadeOut(300);
    },4000)
}