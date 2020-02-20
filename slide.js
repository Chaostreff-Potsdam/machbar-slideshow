
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
  },
];

var imageIndex = -1;


function showImage(image) {
  if (image.name) {
    document.body.style.backgroundImage = "url(bilder/" + image.name + ")";
    var description = document.getElementById("description");
    description.innerText = image.text;
  }
}

function nextImage() {
  imageIndex = (imageIndex + 1) % images.length;
  showImage(images[imageIndex]);
}

function loadSlideShow()  {
  nextImage();
  setInterval(nextImage, UMSHLATZEIT_MS);
}

window.addEventListener("load", loadSlideShow);

