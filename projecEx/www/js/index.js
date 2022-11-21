/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");

  document
    .getElementById("btTake")
    .addEventListener("click", prendrePhoto, false);

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

function prendrePhoto() {
  const options = {
    quality: 25,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSouceType.CAMERA,
  };
  navigator.camera.getPicture(afficherPhoto, echecPhoto, options);
}

function afficherPhoto(imageData) {
  const image = document.getElementById("monImage");
  image.src = "data:image/jpegbase64" + imageData;
}

function echecPhoto(message) {
  document.getElementById("message").innerHTML = message;
}
________________________________________;

function position() {
  var options = {
    enableHighAccuracy: true,
    maximumAge: 3000,
    timeout: 500,
  };

  // onSuccess Callback
  // This method accepts a Position object, which contains the
  // current GPS coordinates
  //
  var onSuccess = function (position) {
    alert(
      "Latitude: " +
        position.coords.latitude +
        "\n" +
        "Longitude: " +
        position.coords.longitude +
        "\n" +
        "Altitude: " +
        position.coords.altitude +
        "\n" +
        "Accuracy: " +
        position.coords.accuracy +
        "\n" +
        "Altitude Accuracy: " +
        position.coords.altitudeAccuracy +
        "\n" +
        "Heading: " +
        position.coords.heading +
        "\n" +
        "Speed: " +
        position.coords.speed +
        "\n" +
        "Timestamp: " +
        position.timestamp +
        "\n"
    );
  };

  // onError Callback receives a PositionError object
  //
  function onError(error) {
    alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
  }

  navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
}
