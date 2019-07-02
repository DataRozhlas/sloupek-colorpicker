var pickr = Pickr.create({
  el: "#picker",
  theme: "classic",
  inline: true,
  useAsButton: true,
  lockOpacity: true,
  comparison: false,
  swatches: [
    "#56FF00",
    "#0010FF",
    "#6A7E25",
    "#FF00EF",
    "#806E28"
  ],
  default: "#56FF00",
  components: {
    // Main components
    preview: true,
    opacity: false,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: false,
      hsla: false,
      hsva: false,
      cmyk: false,
      input: true,
      clear: false,
      save: true
    }
  },

  strings: {
    save: "Uložit"
  }
});

pickr.on("init", function(instance) {
  document.getElementsByClassName("pcr-app")[0].style.width = "100%";
});
