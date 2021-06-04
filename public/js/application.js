const width = window.innerWidth;
const height = window.innerHeight;
const container = document.querySelector("#container");
const select = document.querySelector("#selectColor");
const imgContainer = document.querySelector(".wrapper-images");
const mainImg = document.querySelector("#mainImg");
const downloadImgForm = document.forms.downloadImg;
const addTextButton = document.querySelector("#addText");
const containerAddConva = document.querySelector("#containerAddConva");
const inputText = document.querySelector("#addTxt");

const stage = new Konva.Stage({
  container: "container",
  width: width,
  height: height,
});

const layer = new Konva.Layer();
stage.add(layer);

select.addEventListener("change", async (event) => {
  const color = event.target.value;
  // const collection = "BagColor";
  const modelName = mainImg.firstChild.className;
  // console.log(modelName);
  const response = await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ color, modelName }),
  });

  const newItem = await response.json();
  // console.log(newItem);
  const img = document.createElement("img");
  img.src = newItem.image;
  img.classList.add(modelName);
  // console.log(img);

  mainImg.innerText = "";
  mainImg.appendChild(img);
  mainImg.insertAdjacentHTML(
    "beforeend",
    `<div class="forUploading">
      <div id="container"></div>
    </div>`
  );
});

imgContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    // console.log(e.target);
    mainImg.innerText = "";
    const html = document.createElement("img");
    html.src = e.target.src;
    html.classList.add(e.target.className);
    // console.log(e.target.className);
    mainImg.appendChild(html);
    mainImg.insertAdjacentHTML(
      "beforeend",
      `<div class="forUploading">
        <div id="container"></div>
      </div>`
    );
  }
});

downloadImgForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("file", e.target.image.files[0]);
  console.log(e.target.image.files[0]);
  const response = await fetch("/", {
    method: "POST",
    body: formData,
  });
  e.target.image.value = "";
  // downloadImgForm.reset();
  const newItem = await response.json();
  // console.log(newItem.image);
  if (newItem) {
    function drawImage(imageObj) {
      var darthVaderImg = new Konva.Image({
        image: imageObj,
        x: stage.width() / 2 - 640,
        y: stage.height() / 2 - 370,
        // x: stage.width() / 2 - 200 / 2,
        // y: stage.height() / 2 - 137 / 2,
        width: 120,
        height: 87,
        draggable: true,
      });

      // add cursor styling
      darthVaderImg.on("mouseover", function () {
        document.body.style.cursor = "pointer";
      });
      darthVaderImg.on("mouseout", function () {
        document.body.style.cursor = "default";
      });

      layer.add(darthVaderImg);
      stage.add(layer);

      const tr2 = new Konva.Transformer({
        nodes: [darthVaderImg],
        keepRatio: true,
        enabledAnchors: [
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
        ],
      });
      layer.add(tr2);
    }
    const imageObj = new Image();
    imageObj.onload = function () {
      drawImage(this);
    };
    imageObj.src = `/downloadImg/${newItem.image}`;
  }
});

containerAddConva.addEventListener("click", async (e) => {
  if (e.target.className === "addText") {
    const text1 = new Konva.Text({
      x: 10,
      y: 70,
      fontSize: 30,
      text: `${inputText.value}`,
      draggable: true,
    });
    layer.add(text1);

    const tr1 = new Konva.Transformer({
      nodes: [text1],
      keepRatio: true,
      enabledAnchors: ["top-left", "top-right", "bottom-left", "bottom-right"],
    });
    layer.add(tr1);
  }
  inputText.value = "";
});
// container.addEventListener("click", (e) => {
//   console.log(e.target);
// });
