const BUTTONHAM = document.querySelector('.hm-button');
/*const FORM = document.querySelector('.menu');*/

BUTTONHAM.addEventListener('click',()=>{
    const ISOPENED = BUTTONHAM.getAttribute('aria-expended');


    if (ISOPENED === 'false') {
        BUTTONHAM.setAttribute('aria-expended', 'true');
        FORM.style.marginLeft = "0%";
    }
    else{
        BUTTONHAM.setAttribute('aria-expended', 'false');
        FORM.style.marginLeft = "-200%";
    }  
})