let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


const header = document.querySelector('.header');

// Variabel untuk menyimpan posisi scroll sebelumnya
let prevScrollPos = window.pageYOffset;

// Fungsi untuk menentukan apakah scroll ke atas atau ke bawah
function scrollDirection() {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    // Scroll ke bawah
    header.classList.add('hidden');
  } else {
    // Scroll ke atas
    header.classList.remove('hidden');
  }

  prevScrollPos = currentScrollPos;
}

// Event listener saat melakukan scroll
window.addEventListener('scroll', scrollDirection);

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
        
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    var subject = "New Message from Contact Form";
    var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
  
    var mailtoLink = "mailto:valent2502@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.open(mailtoLink);
  
    // Reset form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });