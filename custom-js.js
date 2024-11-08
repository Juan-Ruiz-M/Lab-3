
 document.addEventListener('DOMContentLoaded', (loaded) =>{
    console.log('this is my document');

    document.getElementById("ex1").innerHTML = "<h4>spiderman</h4>" + "<p>this is spiderman</p>";
    document.getElementById("ex1").style.color = "#f8f8f8";
    document.getElementById("ex1").style.padding = "0% 10%";

    document.getElementById("lesson-global-header").innerHTML =
        "<div id='logo-container'>" +
          "<a href='index.html'>" +
             "<img id='logo' src='./img/image.jpg' alt='header logo'>" +
          "</a>" +
        "</div>" +
        "<nav><menu>" +
          "<li><a href='#'>Item 1</a></li>" +
          "<li><a href='#'>Item 2</a></li>" +
          "<li><a href='#'>Item 3</a></li>" +
        "</menu></nav>";
 });