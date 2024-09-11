let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let algot= algo();

//Estoy usando EmailJS//

// const btn = document.getElementById('btn');

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_i19frkd';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const btn = document.querySelector('input[type="submit"]');
    if (!btn) {
      console.error('Submit button not found.');
      return;
    }
  
    btn.value = 'Sending...';
  
    const serviceID = 'default_service'; // Reemplaza con el ID de tu servicio de EmailJS
    const templateID = 'template_i19frkd'; // Reemplaza con el ID de tu plantilla de EmailJS
  
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Message';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Message';
        alert('Failed to send. Please try again.');
      });
  });
  



////

function algo(){
    console.log("algo")
};

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }

    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    console.log("aaaaa")
}