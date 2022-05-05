// let slider_img = document.querySelector(".slider-img");
// let image = ['download(1).jpg', 'C:\Users\User\Documents\next&& prev function\images\download.jpg', 'C:\Users\User\Documents\next&& prev function\images\porsche-panamera-turbo-s-2021-klassische-dreiviertelansicht-von-schrag-vorne.jpg',];
    


// let num = 0
 
// function prev() {
//     if (i <= 0) i = image.length;
//     i--;
//     return setImg(); 
// }
// function next() {
//     if(i >= image.length-1 ) i = 1;
// }
// function setImg() {
//     return slider_img.setAttribute('src', 'images/' +image[i]);
// }

   let  images = [
    "https://cdn.carbuzz.com/gallery-images/2022-porsche-panamera-turbo-carbuzz-788034.jpg",
    "https://files.porsche.com/filestore/image/multimedia/none/model-series-g2-2nd-panamera-intro-sra/normal/e4a5b7f1-e6ce-11ea-80cd-005056bbdc38/porsche-normal.jpg",
    "https://cdn.carbuzz.com/gallery-images/2022-porsche-panamera-turbo-carbuzz-788034.jpg"
    
   ] 

   let num = 0
   const slider = document.getElementById("slider")

   function next() {
    num++
    if(num >= images.length) {
        num = 0
    }
    slider.src = images[num]
}


/////////////////////////////////////////////////// previous button///////////////

function prev() {
    num--
    if(num < 0){
        num = images.length -1
    }
    slider.src = images[num]
}

setInterval(next, 1000)

