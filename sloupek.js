var id = String(Date.now()) + Math.round(Math.random() * 1000);

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

pickr.on("init", function (instance) {
  document.getElementsByClassName("pcr-app")[0].style.width = "100%";
});

pickr.on("save", function (inpColor) {
  var color = inpColor.toRGBA().toString(0);
  var age = document.getElementById("picker-age").value || "N/A";
  var gender = document.querySelector("input[name='picker-gender']:checked") ? document.querySelector("input[name='picker-gender']:checked").value : "N/A";
  console.log(age, gender)
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://qk4458r8ag.execute-api.eu-central-1.amazonaws.com/default/sloupek-colorpicker");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ "id": id, "color": color, "age": age, "gender": gender }));
})
