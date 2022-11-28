var photo;
document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
    document.getElementById("deviceready").classList.add("ready");
    
  document.getElementById("btLoad").addEventListener("click", loadPhoto, false);

  document.getElementById("getPosition").addEventListener("click", position);
}


function loadPhoto() {
  const options = {
    quality: 25,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
  };

  navigator.camera.getPicture(afficherPhoto, echecPhoto, options);
}


function afficherPhoto(imageData) {
    const image = document.getElementById("monImage");
    photo = imageData
    image.src = "data:image/jpegbase64" + imageData;
}


function echecPhoto(message) {
  document.getElementById("message").innerHTML = message;
}



function connexion() {
    const nom = document.getElementById("name")
    const prenom =  document.getElementById("firstname")
    const pseudo =  document.getElementById("pseudo")
    const email = document.getElementById("mail");
    const mdp = document.getElementById("mdp");
    const pays = document.getElementById("pays");
    const imageuser = photo;

  var xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "erickstattner.com/service/user.php"+"&nom="+nom+"&prenom="+prenom+"&pseudo="+pseudo +"&email=" + email + "&mdp=" + mdp +"&pays="+pays+"&photo"+imageuser+,
    true
  );
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200 || xhr.status == 0) {
        var reponse = JSON.parse(xhr.responseText);
        console.log(reponse);
      }
    }
  };
}