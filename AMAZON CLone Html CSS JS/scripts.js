// Header silder Interactivity

const imgs = document.querySelectorAll('.header-slider ul img')
// this stores all the images to imgs which are in the class header slider

// Control prev & control after 
const prev_btn = document.querySelector('.control-previous')
const after_btn = document.querySelector('.control-after')

// Image counter
// we are on the first image
let n = 0;

const changeSlide = () => {
  
    // selcting all the images via for loop ad displaying none 
    for (let i = 0; i < imgs.length ; i++) {
        imgs[i].style.display = 'none'; 
        
    }
   
    imgs[n].style.display = 'block';
     //when n = 0 it must display the first image n=1 second image
     
};

changeSlide();
// Adding functionality to the buttons when clicked
prev_btn.addEventListener('click', (e) => {
    if(n>0){
        n-- ;
    }else {
        n = imgs.length -1;
    }
    changeSlide(); //to change the value og n in changeslide function
})
after_btn.addEventListener('click', (e) => {
    if(n < imgs.length - 1){
        n++ ;
    }else {
        n = 0;
    }
    changeSlide(); //to change the value og n in changeslide function
})


// Best seller slider JS for Horix=zontal Scrolling
const noScroll = document.querySelectorAll('.products');

for(const item of noScroll) {
    
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}