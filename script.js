document.getElementById("assignmentForm").addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("message").innerHTML="Assignment information recorded successfully.<br><br>Note: GitHub Pages cannot upload files. Connect this form to Google Forms, Formspree, Netlify Forms, or a backend to receive assignments.";

this.reset();

});
