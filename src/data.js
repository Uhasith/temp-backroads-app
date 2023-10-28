import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";


export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];


export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];


export const services = [
  {
    id: 1,
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    icon: "fas fa-wallet fa-fw",
  },
  {
    id: 2,
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    icon: "fas fa-tree fa-fw",
  },
  {
    id: 3,
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    icon: "fas fa-socks fa-fw",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "september 12th, 2020",
    title: "explore hong kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: 12,
    price: 6000,
  },
  {
    id: 3,
    image: tour3,
    date: "december 10th, 2020",
    title: "explore sri lanka",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "sri lanka",
    duration: 8,
    price: 3000,
  },
  {
    id: 4,
    image: tour4,
    date: "january 15th, 2021",
    title: "Takuma Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "japan",
    duration: 10,
    price: 4500,
  },
  {
    id: 5,
    image: tour5,
    date: "february 15th, 2021",
    title: "Bankok Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "bankok",
    duration: 4,
    price: 8900,
  },
  {
    id: 6,
    image: tour6,
    date: "march 15th, 2021",
    title: "Bali Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "bali",
    duration: 15,
    price: 7400,
  },
];
