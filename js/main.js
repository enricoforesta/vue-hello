"use strict"
// Usiamo la destrutturazione per createAPP
const { createApp } = Vue;
// Variabile che contiene i data che ci servono.
  createApp({
    data() {
      return {
        title: "Ciao Classe",
        photo: "https://loremflickr.com/640/360",
        alt: "Random Photo",
      }
    }
  }).mount('#content');