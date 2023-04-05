import React from "react";
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          <h1 className="gradient__text ">Construisons quelque chose d'incroyable avec GPT-3</h1>
          <p>Plongez dans les univers fascinants de l'intelligence artificielle. Nous sommes là pour vous accompagner et vous aider à explorer les innombrables possibilités offertes par le modèle de langage GPT-3. Rejoignez-nous pour un voyage passionnant au cœur de l'IA !</p>
          <div className="gpt3__header-content__input">
            <input type="email" placeholder="Votre adresse e-mail"/>
            <button type="button">Commencer</button>
          </div>

          <div className="gpt3__header-content__people">
            <img src={people} alt="people" />
            <p>1 600 personnes ont demandé un accès dans les dernières 24 heures</p>
         </div>
        </div>
        <div className="gpt3__header-image">
            <img src={ai} alt="ai"/>
        </div>
    </div>
  )
}

export default Header;
