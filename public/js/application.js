const width = window.innerWidth;
const height = window.innerHeight;
// const constructor = document.querySelector("#constructor");
const container = document.querySelector("#container");
const select = document.querySelector("#selectColor");
const imgContainer = document.querySelector(".wrapper-images");
const mainImg = document.querySelector("#mainImg");

const stage = new Konva.Stage({
  container: "container",
  width: width,
  height: height,
});

const layer = new Konva.Layer();
stage.add(layer);

// constructor.addEventListener("click", (e) => {
//   if (e.target.className === "delete") {
//   }
//   if (e.target.className === "addtext") {
//     const text1 = new Konva.Text({
//       x: 10,
//       y: 70,
//       fontSize: 30,
//       text: "Best app in the World",
//       draggable: true,
//     });
//     layer.add(text1);

//     const tr1 = new Konva.Transformer({
//       nodes: [text1],
//       keepRatio: true,
//       enabledAnchors: ["top-left", "top-right", "bottom-left", "bottom-right"],
//     });
//     layer.add(tr1);
//   }
//   if (e.target.className === "addimg") {
//     function drawImage(imageObj) {
//       var darthVaderImg = new Konva.Image({
//         image: imageObj,
//         x: stage.width() / 2 - 600,
//         y: stage.height() / 2 - 330,
//         // x: stage.width() / 2 - 200 / 2,
//         // y: stage.height() / 2 - 137 / 2,
//         width: 200,
//         height: 137,
//         draggable: true,
//       });

//       // add cursor styling
//       darthVaderImg.on("mouseover", function () {
//         document.body.style.cursor = "pointer";
//       });
//       darthVaderImg.on("mouseout", function () {
//         document.body.style.cursor = "default";
//       });

//       layer.add(darthVaderImg);
//       stage.add(layer);

//       const tr2 = new Konva.Transformer({
//         nodes: [darthVaderImg],
//         keepRatio: true,
//         enabledAnchors: [
//           "top-left",
//           "top-right",
//           "bottom-left",
//           "bottom-right",
//         ],
//       });
//       layer.add(tr2);
//     }
//     const imageObj = new Image();
//     imageObj.onload = function () {
//       drawImage(this);
//     };
//     imageObj.src = "/";
//   }
// });

select.addEventListener("change", async (event) => {
  const color = event.target.value;
  const collection = "BagColor";
  const modelName = "model 1";

  const response = await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ color, collection, modelName }),
  });

  const newItem = await response.json();
});

imgContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    mainImg.innerText = "";
    const html = document.createElement("img");
    html.src = e.target.src;
    mainImg.appendChild(html);
  }
});

// container.addEventListener("click", (e) => {
//   console.log(e.target);
// });
