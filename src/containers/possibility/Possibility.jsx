import React from "react";
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
        <div className="gpt3__possibility-image">
            <img src={possibilityImage} alt="possibility"/>
        </div>
        <div className="gpt3__possibility-content">
          <h4> Laissez-nous vous guider dans votre voyage vers le futur.</h4>
          <h1 className="gradient__text">Entrez dans le futur dès maintenant avec GPT-3</h1>
          <p>Que vous soyez un développeur expérimenté ou que vous cherchiez simplement à vous aventurer dans le monde de l'IA, nous sommes là pour vous aider. </p>
          <h4>Rejoignez-nous aujourd'hui.</h4>
        </div>
    </div>
  )
}

export default Possibility;
