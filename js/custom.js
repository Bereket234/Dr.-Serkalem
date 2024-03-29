const content= document.querySelectorAll('.content');
const menu= document.querySelectorAll('.navbar-toggler-icon');

const maxNumOfChar= 125

window.addEventListener('scroll', ()=>{
    var header= document.querySelector('.home-nav-container');
    header.classList.toggle('sticky', window.scrollY>0);
})

content.forEach((item)=>{
    if(item.textContent.length < maxNumOfChar){
        item.nextElementSibling.style.display= "none";
    }else{
        let disText= item.textContent.slice(0, maxNumOfChar);
        let moreText=  item.textContent.slice(maxNumOfChar);
        item.innerHTML=`${disText}<span
         class= "dots">...</span><span class="more hide">${moreText}</span>`;
    }   
});
function readMore(btn){
    let action= btn.parentElement;

    action.querySelector(".dots").classList.toggle("hide");
    action.querySelector(".more").classList.toggle("hide");
    btn.textContent=="Read More" ? btn.textContent= "Read Less" : btn.textContent= "Read More";
}
const contactForm= document.querySelector('.contact')

let name= document.getElementById('name')
let phone= document.getElementById('phone')
let email= document.getElementById('email')
let message= document.getElementById('message')

contactForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        console.log("button clicked")
let data= {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
}
console.log(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('email sent');
            name.value= ''
            phone.value= ''
            email.value=''
            message.value= ''
        }else{
            alert('sorry message not sent!')
        }
    }
    xhr.send(JSON.stringify(data))
    console.log(data)
})


// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}





