// HEADER
let bars = document.getElementsByClassName('bars')[0];
let nav  = document.getElementsByTagName('nav')[0];
let x = document.getElementsByClassName('x')[0];
let shopping_icon = document.querySelector('.shopping-icon');
bars.addEventListener('click',function(){
    if(x.style.opacity !="1"){
        x.style.opacity = "1";
        bars.style.opacity ="0";
        nav.style.opacity="1";
        nav.style.right="150px";
        shopping_icon.style.opacity="0";

    }else{
        x.style.opacity ="0";
        bars.style.opacity = "1";
        nav.style.opacity="0";
        nav.style.right="100px";
        shopping_icon.style.opacity="1";
    }
});

// ALL PRODUCTS SLIDE
let menButton = document.querySelector('.men-button')
let womenButton= document.querySelector('.women-button')
let best_sellersButton = document.querySelector('.best-sellers-button')
let product_zone = document.querySelector('.products-zone')
let buttonTab = [[menButton,0],[womenButton,-100],[best_sellersButton,-200]];
for(let i=0;i<3;i++)
{
    buttonTab[i][0].addEventListener('click',function(e){
        e.preventDefault();
        buttonTab[0][0].classList.remove('active')
        buttonTab[1][0].classList.remove('active')
        buttonTab[2][0].classList.remove('active')

        buttonTab[i][0].classList.add('active')
        product_zone.style.left= buttonTab[i][1]+"%";
    })
}