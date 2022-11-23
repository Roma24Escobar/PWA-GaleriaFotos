if(navigator.serviceWorker){
    navigator.serviceWorker.register('./sw.js')
}
const btnCamera= document.getElementById('btnCamera');
const btnTakePhoto= document.getElementById('btnTakePhoto');

const video= document.getElementById('video');
const photo= document.getElementById('photo');

const camera= new Camera(video);
const carrusel = document.getElementById("carruselInnerPhoto");

btnCamera.addEventListener('click',()=>{
    console.log("Abriendo cámara");
    camera.power();

})
btnTakePhoto.addEventListener('click',()=>{
    console.log("foto");
    let picture= camera.takePhoto();
    camera.off(); 
    carrusel.innerHTML+=`
    <div class="carousel-item active">
        <img src="${picture}" class="d-block w-100">
    </div>`

})
