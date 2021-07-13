const { disconnect, connect } = require("./db/connect");
const BagModel = require("./models/bagModel");
const BagColor = require("./models/bagColor");
const BagSize = require("./models/bagSize");
const Check = require("./models/check");
const Image = require("./models/image");
const Material = require("./models/material");
const Text = require("./models/text");

const bagModels = [
  {
    name: "Model1",
    image: "/image-bags/Model1_Beige.JPG",
    changableHandles: true,
    changableBottom: true,
  },
  {
    name: "Model2",
    image: "/image-bags/Model2-Beige.JPG",
    changableHandles: true,
    changableBottom: true,
  },
  {
    name: "Model3",
    image: "/image-bags/Model3-Beige.JPG",
    changableHandles: true,
    changableBottom: true,
  },
];

const bagColors = [
  {
    title: "Model1",
    color: "White",
    image: "/image-bags/Model1-White.JPG",
    price: 2,
  },
  {
    title: "Model2",
    color: "White",
    image: "/image-bags/Model2-White.JPG",
    price: 2,
  },
  {
    title: "Model3",
    color: "White",
    image: "/image-bags/Model3-White.JPG",
    price: 2,
  },
  {
    title: "Model1",
    color: "Black",
    image: "/image-bags/Model1-Black.JPG",
    price: 4,
  },
  {
    title: "Model2",
    color: "Black",
    image: "/image-bags/Model2-Black.JPG",
    price: 4,
  },
  {
    title: "Model3",
    color: "Black",
    image: "/image-bags/Model3-Black.JPG",
    price: 4,
  },
  {
    title: "Model1",
    color: "Red",
    image: "/image-bags/Model1-Red.JPG",
    price: 3,
  },
  {
    title: "Model2",
    color: "Red",
    image: "/image-bags/Model2-Red.JPG",
    price: 3,
  },
  {
    title: "Model3",
    color: "Red",
    image: "/image-bags/Model3-Red.JPG",
    price: 3,
  },
];

const bagSizes = [
  {
    bagModel: "Model1",
    sizeName: "small",
    price: 11,
    height: 11,
    width: 11,
    depth: 11,
    handleSize: 11,
  },
  {
    bagModel: "Model1",
    sizeName: "medium",
    price: 12,
    height: 12,
    width: 12,
    depth: 12,
    handleSize: 12,
  },
  {
    bagModel: "Model1",
    sizeName: "big",
    price: 13,
    height: 13,
    width: 13,
    depth: 13,
    handleSize: 13,
  },
  {
    bagModel: "Model2",
    sizeName: "small",
    price: 21,
    height: 21,
    width: 21,
    depth: 21,
    handleSize: 21,
  },
  {
    bagModel: "Model2",
    sizeName: "medium",
    price: 22,
    height: 22,
    width: 22,
    depth: 22,
    handleSize: 22,
  },
  {
    bagModel: "Model2",
    sizeName: "big",
    price: 23,
    height: 23,
    width: 23,
    depth: 23,
    handleSize: 23,
  },
  {
    bagModel: "Model3",
    sizeName: "small",
    price: 31,
    height: 31,
    width: 31,
    depth: 31,
    handleSize: 31,
  },
  {
    bagModel: "Model3",
    sizeName: "medium",
    price: 32,
    height: 32,
    width: 32,
    depth: 32,
    handleSize: 32,
  },
  {
    bagModel: "Model3",
    sizeName: "big",
    price: 33,
    height: 33,
    width: 33,
    depth: 33,
    handleSize: 33,
  },
];

const materials = [
  {
    name: "Кожа",
    description: "нетканый материал",
    price: 4,
    image: "/image-material/Кожа.JPG",
  },
  {
    name: "Латекс",
    description: "блестящий материал",
    price: 5,
    image: "/image-material/Латекс.JPG",
  },
  {
    name: "Хлопок",
    description: "натуральный материал",
    price: 6,
    image: "/image-material/Хлопок.JPG",
  },
  {
    name: "Бархат",
    description: "мягкий материал",
    price: 7,
    image: "/image-material/Бархат.JPG",
  },
];
async function seed() {
  connect();
  await Promise.all(bagModels.map((bagEl) => BagModel.create(bagEl)));
  await Promise.all(bagColors.map((color) => BagColor.create(color)));
  await Promise.all(bagSizes.map((size) => BagSize.create(size)));
  await Promise.all(materials.map((el) => Material.create(el)));
  disconnect();
}

seed();
