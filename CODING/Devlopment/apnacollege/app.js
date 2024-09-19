let smallImages =document.getElementsByClassName("oldImg");
console.log(smallImages);
console.dir(smallImages);
for(let i=0;i<smallImages.length;i++){
    smallImages[i].src = " apnaimage/garbage/spiderman_img (1).png";
    console.dir(smallImages[i].src);
    console.log(smallImages[i].src);
}