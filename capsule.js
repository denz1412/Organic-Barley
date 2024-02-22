// access HTML elements

const carouselRow = document.querySelector('.slide-row');
const carouselSlides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// declare variables

let index = 1;


width = carouselSlides[0].clientWidth;
carouselRow.style.transform = 'translateX('+(- width * index) + 'px)';


// go to the nxt slide

nextBtn.addEventListener('click',nextSlide);
function nextSlide(){
    if(index >=carouselSlides.length - 1){return};
    carouselRow.style.transition = 'transform 0.4s ease-out';
    index++;
    carouselRow.style.transform = 'translateX('+ (- width * index) + 'px)';
    dotsLabel();
}

// go to previos slide

prevBtn.addEventListener('click',prevSlide);
function prevSlide(){
    if(index  <= 0 ){return};
    carouselRow.style.transition = 'transform 0.4s ease-out';
    index--;
    carouselRow.style.transform = 'translateX('+(- width * index) + 'px)';
    dotsLabel();
}

// return to the nxt slide when reaches last slide

carouselRow.addEventListener('transitionend', function(){
    if(carouselSlides[index].id==='firstImageDuplicate'){
        carouselRow.style.transition = 'none';
        index = carouselSlides.length - index;
        carouselRow.style.transform = 'translateX('+(- width * index) + 'px)'; 
        dotsLabel();  
    }
    if(carouselSlides[index].id==='lastImageDuplicate'){
        carouselRow.style.transition = 'none';
        index = carouselSlides.length - index - 2;
        carouselRow.style.transform = 'translateX('+(- width * index) + 'px)';
        dotsLabel();
    }
});

// auto silding
function autoslide(){
    deleteInterval = setInterval(timer, 3000);
    function timer(){
        nextSlide();
    }
}
autoslide();

// stop auto sliding when mouse is over

const mainContainer = document.querySelector('.container');
mainContainer.addEventListener('mouseover' ,function(){
    clearInterval(deleteInterval);
});

// resume sliding when mouse is out

mainContainer.addEventListener('mouseout', autoslide);

function dotsLabel(){
    for(i = 0; i < dots.length; i++){
        dots[i].ClassName = dots[i].ClassName.replace(' active', '');
    }
    dots[index -1].ClassName += ' active';
}

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/65caec508d261e1b5f5f7174/1hmgam7ao';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        


