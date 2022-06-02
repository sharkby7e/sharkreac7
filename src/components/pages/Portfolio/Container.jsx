import React from "react";
import PortItem from "./PortItem";
import aqImg from "../../../images/AdventureQuest.png";
import itImg from "../../../images/InventoryTracker.png";
import jsImg from "../../../images/JSeopardy.png";
import ntImg from "../../../images/NoteTaker.png";
import ttImg from "../../../images/TechToday.png";
import wdImg from "../../../images/WeatherDashboard.png";

const projects = [
  {
    title: "AdventureQuest",
    description: "A solo fantasy adventure game",
    deployed: "https://adventurequest.herokuapp.com/",
    repo: "https://github.com/sharkby7e/adventureQuest",
    img: aqImg,
  },
  {
    title: "TechToday",
    description: "A blog for e-minded cybefolk",
    deployed: "https://tech-today.herokuapp.com/",
    repo: "https://github.com/sharkby7e/techToday",
    img: ttImg,
  },
  {
    title: "NoteTaker",
    description: "Do you need to jot a note?",
    deployed: "https://fathomless-fjord-18353.herokuapp.com/",
    repo: "https://github.com/sharkby7e/noteTaker",
    img: ntImg,
  },
  {
    title: "WeatherDashboard",
    description: "Your Weather at Your fingertips",
    deployed: "https://sharkby7e.github.io/weatherDashboard/",
    repo: "https://github.com/sharkby7e/weatherDashboard",
    img: wdImg,
  },
  {
    title: "JSpeordy",
    description: "A coder's homage to Jeopardy",
    deployed: "https://sharkby7e.github.io/jSeopardy/",
    repo: "https://github.com/sharkby7e/jSeopardy",
    img: jsImg,
  },
  {
    title: "InventoryTracker",
    description: "A backend inventory tracker for a logistics company",
    deployed: "https://replit.com/@sgquin/inventoryTracker#.replit",
    repo: "https://github.com/sharkby7e/inventoryTracker",
    img: itImg,
  },
];
const Container = () => {
  return (
    <div class="justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((item, i) => (
        <PortItem project={item} key={i} />
      ))}
    </div>
  );
};
export default Container;
