let movies = [
  {
    name: "Thor",
    desc:
      "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4595/674595-h"
  },
  {
    name: "Doctor Strange in the Multiverse of Madness",
    desc:
      "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9939/1279939-h-3be10a34342b"
  },
  {
    name: "Iron Man 2",
    desc:
      "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4570/674570-h"
  },
  {
    name: "falcon and the winter soldier",
    desc:
      "Following the events of 'Avengers: Endgame,' Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities -- and their patience.",
    image: "images/slider 2.PNG"
  },
  {
    name: "loki",
    desc:
      "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of 'Avengers:Endgame'.",
    image: "images/slider 1.PNG"
  },
  {
    name: "wanda vision",
    desc:
      "Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems.",
    image: "images/slider 3.PNG"
  },
  {
    name: "raya and the last dragon",
    desc:
      "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
    image: "images/slider 4.PNG"
  },
  {
    name: "luca",
    desc:
      "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.",
    image: "images/slider 5.PNG"
  }
];

const carousel = document.querySelector(".caraousel");
let sliders = [];

let slideIndex = 0; //track current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //Create DOM Elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all the elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].desc));
  content.appendChild(h1);
  content.appendChild(p);
  slide.append(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting the elements class names here
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-desc";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
