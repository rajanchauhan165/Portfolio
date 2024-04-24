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
    window.open("https://www.linkedin.com/in/rajan165/","_blank")
}
function hire(){
    window.open("mailto:rajanchauhan165@gmail.com?subject=I found your profile online and I'd like to...&body=Hi Rajan,")
}

function sendEmail() {
    var name = document.getElementById("cformname").value;
    var email = document.getElementById("cformemail").value;
    var message = document.getElementById("cformmessage").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    var emailBody = "Name: " + name + "\n";
    emailBody += "Email: " + email + "\n";
    emailBody += "Message: " + message;

     window.open("mailto:rajanchauhan165@gmail.com.com?subject=Portfoli DM&body="+emailBody);

    document.getElementById("cformname").value = "";
    document.getElementById("cformemail").value = "";
    document.getElementById("cformmessage").value = "";
}