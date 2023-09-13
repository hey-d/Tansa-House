const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
})


const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) =>{
        btn.classList.remove("active");
    });

    slides.forEach((slide) =>{
        slide.classList.remove("active");
    });

    contents.forEach((content) =>{
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}
btns.forEach((btn, i)=>{
    btn.addEventListener("click", ()=>{
        sliderNav(i);
    });
});



`js for about section`

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  var swiper1 = new Swiper(".mySwiper1", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // complaint section
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyYmQwYQdydP2ZaaKh4588e72Xe7Hyb_R41Z7onejRk8ctrxjaUZhsUImctYSLsOcwa/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg =document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Issue Reported <br> Your issue will be resolved soon!"
          setTimeout(function(){
              msg.innerHTML=""
          },5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

// Notification section js 
const bgAnimation3 =document.getElementById('bgAnimation3');
  const numberOfColorBoxes3 =400;
  for(let i = 0; i<numberOfColorBoxes3; i++){
    const colorBox3= document.createElement('div');
    colorBox3.classList.add('colorBox3');
    bgAnimation3.append(colorBox3)
  }

  // house-keeping Section 
  
// previous council JS
const bgAnimation1 =document.getElementById('bgAnimation1');
const numberOfColorBoxes1 =400;
for(let i = 0; i<numberOfColorBoxes1; i++){
  const colorBox1= document.createElement('div');
  colorBox1.classList.add('colorBox1');
  bgAnimation1.append(colorBox1)
}
// devloper js 
const bgAnimation2 =document.getElementById('bgAnimation2');
  const numberOfColorBoxes2 =400;
  for(let i = 0; i<numberOfColorBoxes2; i++){
    const colorBox2= document.createElement('div');
    colorBox2.classList.add('colorBox2');
    bgAnimation2.append(colorBox2)
  }


  const bgAnimation4 =document.getElementById('bgAnimation4');
  const numberOfColorBoxes4 =400;
  for(let i = 0; i<numberOfColorBoxes4; i++){
    const colorBox4= document.createElement('div');
    colorBox4.classList.add('colorBox4');
    bgAnimation4.append(colorBox4)
  }

  const bgAnimation5 =document.getElementById('bgAnimation5');
  const numberOfColorBoxes5 =400;
  for(let i = 0; i<numberOfColorBoxes5; i++){
    const colorBox5= document.createElement('div');
    colorBox5.classList.add('colorBox5');
    bgAnimation5.append(colorBox5)
  }