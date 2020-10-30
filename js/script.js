var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

function Slide(title, subtitle, background, link ) {
   this.title = title;
   this.subtitle = subtitle;
   this.background = background;
   this.link = link;
   this.id = "slide" + slideIndex;
   slideIndex++;
   slideArray.push(this);
}

// ви можете зробити скільки завгодно слайдів

var slide1 = new Slide(
   "Dribbble",
   "Dribbble is the go-to resource for discovering and connecting with designers and creative talent around the globe. Dribbble helps some of the world's best design-forward companies to get exposure for their design teams and to help them hire expert creatives",
   "//C:/Design3/images/dribbble.jpg",
   "http://dribbble.com"
);


var slide2 = new Slide(
   "Pinterest",
   "Pinterest is an American image sharing and social media service designed to enable saving and discovery of information on the World Wide Web using images and, on a smaller scale, animated GIFs and videos, in the form of pinboards.",
   "//C:/Design3/images/Pinterest.png",
   "http://pinterest.com"
);

var slide3 = new Slide(
   "Wikipedia",
   "Wikipedia is an online free-content encyclopedia project helping to create a world in which everyone can freely share in the sum of all knowledge. It is supported by the Wikimedia Foundation and based on a model of openly editable content.",
   "//C:/Design3/images/wiki.jpg",
   "http://wikipedia.com"
);

var slide4 = new Slide(
   "Behance",
   "Behance is the social network for creatives of just about every field and discipline. It's a place to connect, inspire, and get hired—a portfolio site that's so much more. You can network with your creative peers, get artistic feedback, message other creatives, and even find your next job.",
   "//C:/Design3/images/behance.jpg",
   "http://behance.com"
);


var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}


function buildSlider(){
   var myHTML;
   for(var i = 0; i < slideArray.length; i++) {
       myHTML += "<div id='" + slideArray[i].id +
           "' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
           "<div class='slideOverlay'>" +
           "<h1>" + slideArray[i].title + "</h1>" +
           "<h4>" + slideArray[i].subtitle + "</h4>" +
           "<a class='slider' href='" + slideArray[i].link + "' target='_blank'>Open Link</a>" +
           "</div>" +
           "</div>";
   }

   document.getElementById("mySlider").innerHTML = myHTML;
   document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

buildSlider();

function prevSlide(){
   var nextSlideIndex;
   if (currentSlideIndex === 0 ) {
       nextSlideIndex = slideArray.length - 1;
   } else {
       nextSlideIndex = currentSlideIndex - 1;
   }

   document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
   document.getElementById("slide" + currentSlideIndex).style.left = 0;

   document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
   document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");

   currentSlideIndex = nextSlideIndex;
}

function nextSlide(){
   var nextSlideIndex;
   if (currentSlideIndex === (slideArray.length - 1) ) {
       nextSlideIndex = 0;
   } else {
       nextSlideIndex = currentSlideIndex + 1;
   }

   document.getElementById("slide" + nextSlideIndex).style.left = "100%";
   document.getElementById("slide" + currentSlideIndex).style.left = 0;

   document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
   document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");

   currentSlideIndex = nextSlideIndex;
}

