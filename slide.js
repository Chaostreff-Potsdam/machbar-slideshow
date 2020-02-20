
var UMSHLATZEIT_MS = 8000;

const images = [
  { name: "33c3_FeinstaubsensorenWorkshop_OTS17_WissLap.jpg",
    text: "Feinstaubsensoren bauen für das Bürgernetz luftdaten.info"
  }, {
    name: "Laser_jukonf.jpg",
    text: "Lasercutten bei der EU-CodeWeek"
  }, {
    name: "aquaponik.jpg",
    text: "Elektronik basteln für die Aquaponik-Anlage auf dem freiLand-Gelände"
  }, {
    name: "repaircafe5.jpg",
    text: "Beim Repair-Cafe eigenes Reparieren - hier ein Stand beim Flohmarkt"
  }, {
    name: "aussen.jpg",
    text: "Das Gebäude der machBar im freiLand"
  }, {
    name: "trinkwasserkarte_Potsdam.png",
    text: "Die Trinkwasserkarte - offene Daten nutzen beim OKLab in der machBar"
  }, {
    name: "kooperation-slb.jpg",
    text: "Auswärts unterwegs: die machBar in der Stadt- und Landesbibliothek"
  }, {
    name: "kooperation-slb.jpg",
    text: "Auswärts unterwegs: die machBar in der Stadt- und Landesbibliothek"
  }, {
    name: "vergissmeinnicht.jpg",
    text: "Offener Abend zum Upcycling durch Nähen - Vergissmeinnicht"
  }, {
    name: "kombucha1.jpg",
    text: "Herstellung von Produkten aus Kombucha-Leder"
  },
];
var BILDER_ORDNER = "bilder/"; // mit / am Ende


var imageIndex = -1;


function showImage(image) {
  if (image.name) {
    document.body.style.backgroundImage = "url(" + BILDER_ORDNER + image.name + ")";
    var description = document.getElementById("description");
    description.innerText = image.text;
  }
}

function nextImage() {
  imageIndex = (imageIndex + 1) % images.length;
  showImage(images[imageIndex]);
}

function previousImage() {
  imageIndex = (imageIndex - 1 + images.length) % images.length;
  showImage(images[imageIndex]);
}

function loadSlideShow()  {
  nextImage();
  setInterval(nextImage, UMSHLATZEIT_MS);
  images.forEach(function(image) {
    var img = document.createElement("img");
    img.src = BILDER_ORDNER + image.name;
    img.className = "hidden";
    document.body.appendChild(img);
  });
}

window.addEventListener("load", loadSlideShow);

document.addEventListener("keydown", function(event) {
  // for key codes, see https://stackoverflow.com/a/9310900
  event = event || window.event;
  if (event.keyCode == '37') {
    // left arrow
    previousImage();
  }
  else if (event.keyCode == '39') {
    // right arrow
    nextImage();
  }
});

