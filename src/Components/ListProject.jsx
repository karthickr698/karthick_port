import React from "react";
import { Card } from "antd";
import emailjs from 'emailjs-com';
const { Meta } = Card;

let html = "https://cdn.svgporn.com/logos/html-5.svg";
let css = "https://cdn.svgporn.com/logos/css-3.svg";
let bootstrap = "https://cdn.svgporn.com/logos/bootstrap.svg";
let react = "https://cdn.svgporn.com/logos/react.svg";
let redux = "https://cdn.svgporn.com/logos/redux.svg";
let mysql = "https://cdn.svgporn.com/logos/mysql.svg";
let js = "https://cdn.svgporn.com/logos/javascript.svg";
let flask = "https://cdn.svgporn.com/logos/flask.svg";
let jquery = "https://cdn.svgporn.com/logos/jquery.svg";
let node = "https://cdn.svgporn.com/logos/nodejs.svg";
let aws = "https://cdn.svgporn.com/logos/aws.svg"
let antd =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

const cardData = [
  {
    img: "images/agoda.png",
    name: "Agoda Clone",
    description:
      "Agoda Clone is the clone of website Vrbo offering rental bookings for housing properties. Uses Redis and cookies for Session management. Integrated GoogleMap, Razorpay",
    teckstack: [html, css, react, redux, flask, mysql, aws, bootstrap, antd],
    source:
      "https://github.com/karthickr698/agoda_clone",
    live: "https://agoda-clone.netlify.app/",
  },
  {
    img: "https://portfolio.devganesh.tech/twitterclone.png",
    name: "Twitter Clone",
    description:
      "Twitter Clone is the custom clone version of website Twitter where users can view tweets who they are following and follow / unfollow other users and like their tweets. Uses Redis and cookies for Session management.",
    teckstack: [html, css, react, redux, flask, mysql, aws, antd],
    source:
      "https://github.com/karthickr698/twitter_clone",
    live: "https://twitterclone.devganesh.tech/",
  },
  {
    img: "images/blog.png",
    name: "Blog App",
    description:
      "Blog app is the web app where user can add or delete blogs and the user can comment for the post. The user can upload profile picture for their account",
    teckstack: [html, css, react, redux, node, mysql, aws, bootstrap, antd],
    source:
      "https://github.com/karthickr698/blog_application",
    live: "https://blogs-app.netlify.app/",
  },
  {
    img: "images/food.png",
    name: "Food Delivery",
    description:
      "An app where user can order food from hotels ",
    teckstack: [html, css, react, bootstrap, antd, redux, flask, mysql],
    source:
      "https://github.com/karthickr698/Food_Delivery",
    live: "https://karthick-food-app.netlify.app/",
  },
  {
    img: "images/vehicles.png",
    name: "VEHICLE RENTING",
    description:
      "An app where user can book vehicles for an rent and see all vehicle details ",
    teckstack: [html, css, react, bootstrap, antd, redux],
    source:
      "https://github.com/karthickr698/Rent_Vehicle",
    live: "https://vehicle-renting-app.netlify.app/#/",
  },
  {
    img: "images/corona.png",
    name: "COVID-19 Datas",
    description:
      "An app where user can get all informations about covid-19. ",
    teckstack: [html, css, react, bootstrap],
    source:
      "https://github.com/karthickr698/corona-api",
    live: "https://corona-datas.netlify.app/#/",
  },
  {
    img: "images/movie.png",
    name: "Movie Finder",
    description:
      "An app where user can for all the movies and series.",
    teckstack: [html, css, js, bootstrap, jquery],
    source: "https://github.com/karthickr698/movies_Databases",
    live: "https://movie-databases.netlify.app/",
  },
  {
    img: "images/toe.jpg",
    name: "Tic Tac Toe",
    description:
      "An app where user can play a simple tic tac toe game",
    teckstack: [html, css, js],
    source: "https://github.com/karthickr698/XO-game",
    live: "https://tic-tac-toe-gameproject.netlify.app/",
  },
  {
    img: "images/bill.png",
    name: "Bill Generator",
    description:
      "An app where user can add an food items and get the bill.",
    teckstack: [html, css, js],
    source: "https://github.com/karthickr698/Bill-generator",
    live: "https://bill-generators.netlify.app/",
  },
];

function ListProject() {
  return (
    <div className="d-flex flex-wrap justify-content-center col-md-10 col-md-12">
      {cardData.map((ele) => {
        return (
          <Card
            className="my-3 mx-3 border border-dark shadow-lg raise"
            style={{ width: 350, marginBottom: 10 }}
            cover={<img alt="example" src={ele.img} className="p-1" height="200px" />}
            actions={[
              <button className=" btn btn-outline-warning btn-lg" onClick={() => {
                let templateParams = {
                  from_name: 'rkarthick410@gmail.com',
                  to_name: 'karthick184r@gmail.com',
                  subject: "send",
                  message_html: ele.name + " git",
                }
                emailjs.send(
                  'gmail',
                  'template_xxKzOdyD',
                  templateParams,
                  'user_dRRjC8Dekxlz2UBL2EKrF'
                )
                window.open(ele.source)
              }}>Github</button>,
              <button className=" btn btn-outline-primary btn-lg" onClick={() => {
                let templateParams = {
                  from_name: 'rkarthick410@gmail.com',
                  to_name: 'karthick184r@gmail.com',
                  subject: "send",
                  message_html: ele.name + " demo",
                }
                emailjs.send(
                  'gmail',
                  'template_xxKzOdyD',
                  templateParams,
                  'user_dRRjC8Dekxlz2UBL2EKrF'
                )
                window.open(ele.live)
              }}>Demo</button>
            ]}
          >
            <Meta
              title={ele.name}
              className="text-dark "
              description={ele.description}
            />
            <Meta className="my-3" title="Teck stack used :" description="" />
            {
              ele.teckstack.map((img) => (
                <img src={img} className="project-icon" alt=".." />
              ))
            }


          </Card>
        );
      })}
    </div >
  );
}

export default ListProject;
