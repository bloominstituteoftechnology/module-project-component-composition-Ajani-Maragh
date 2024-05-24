import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

function App() {
  const [nasaPic, setNasaPic] = useState();

  useEffect(() => {
    function getPhoto() {
      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          setNasaPic(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    //getPhoto()
    setNasaPic({
      copyright: "Christophe Vergnes",
      date: "2024-05-23",
      explanation:
        "Spiral galaxy NGC 3169 looks to be unraveling like a ball of cosmic yarn. It lies some 70 million light-years away, south of bright star Regulus toward the faint constellation Sextans. Wound up spiral arms are pulled out into sweeping tidal tails as NGC 3169 (left) and neighboring NGC 3166 interact gravitationally. Eventually the galaxies will merge into one, a common fate even for bright galaxies in the local universe. Drawn out stellar arcs and plumes are clear indications of the ongoing gravi...",
      hdurl: "https://apod.nasa.gov/apod/image/2405/N3169N3166Final.jpg",
      media_type: "image",
      service_version: "v1",
      title: "Unraveling NGC 3169",
      url: "https://apod.nasa.gov/apod/image/2405/N3169N3166Final1024.jpg",
    });
  }, []);

  if (!nasaPic) return "fetching photo of the day";
  return (
    <>
      <section>
        <Card
          title={nasaPic.title}
          text={nasaPic.explanation}
          imageURL={nasaPic.url}
          date={nasaPic.date}
        />
      </section>
    </>
  );
}

export default App;
