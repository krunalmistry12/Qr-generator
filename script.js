document.addEventListener('DOMContentLoaded', () => {
const qrtext=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const genbtn=document.getElementById('generate-btn');
const dowbtn=document.getElementById('download-btn');
const qrbody=document.querySelector('.qr-body');

let size =sizes.value;
genbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmpty();
});
dowbtn.addEventListener('click',()=>{
    let img=document.querySelector('.qr img');

    if(img !=null){
        let imgatrr=img.getAttribute('src');
        dowbtn.setAttribute("href",imgatrr);
    }
    else{
        dowbtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
});
sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmpty();
})
function isEmpty(){
    if(qrtext.value.length > 0){
        generateQRCode();
    }
    else{
        alert("Enter the text or URl");
    }
    // qrtext.value.length >0 ? genbtn():alert("Enter the text or URl"); 
}
function generateQRCode(){
    // console.log('Generating QR Code with text:', qrtext.value, 'and size:', size);
    qrbody.innerHTML="";
    new QRCode(qrbody, {
        text: qrtext.value,
        width: parseInt(size),
        height: parseInt(size),
        colorLight: "#fff",
        colorDark: "#000"
    });
}
});