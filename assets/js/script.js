$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

function git(){
    window.open("https://github.com/rajanchauhan165","_blank")
}
function res(){
    window.open("https://drive.google.com/file/d/16j4oGCTEkN8KWyn_E8pqLqmzuic6D9HY/view?usp=sharing","_blank")
}
function hire(){
    window.open("mailto:rajanchauhan165@gmail.com?subject=I found your profile online and I'd like to...&body=Hi Rajan,")
}

function sendEmail(){
    window.open("mailto:rajanchauhan165@gmail.com?subject=PORTFOLIO&body=Name: "+document.getElementById("cformname").value
    +"<br> Email: "+document.getElementById("cformemail").value +"<br> Message: "+document.getElementById("cformmessage").value)
}