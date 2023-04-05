import React from "react";
import { Feature } from "../../components";
import './features.css'

const featuresData = [
  {
    title:"Explorez les possibilités infinies",
    text:" Découvrez comment GPT-3 peut transformer votre entreprise avec des modèles de langage naturel sophistiqués et personnalisables."
    
  },
  {
    title:"Restez à la pointe de la technologie",
    text:"Accédez à la technologie de pointe dès maintenant et explorez les fonctionnalités émergentes de GPT-3 pour trouver de nouvelles façons d'améliorer votre travail."
  },
  {
    title:"Augmentez votre créativité grâce à GPT-3",
    text:"Créez des œuvres d'art numériques avec GPT-3 en utilisant des modèles pré-entraînés pour générer du texte, des images et de la musique."
  },
  {
    title:"Simplifiez votre vie grâce à GPT-3",
    text:"Automatisez les tâches répétitives avec GPT-3 en utilisant l'IA pour effectuer des tâches fastidieuses et répétitives de manière plus efficace."
  }
]


function Features() {
  return (
    <div className="gpt3__features section__padding" id="features">
        <div className="gpt3__features-heading">
          <h1 className="gradient__text">Ne laissez pas le futur vous échapper. Avec GPT-3, vous pouvez déjà explorer les possibilités infinies qui s'offrent à vous.</h1>
          <p>Demander un accès anticipé</p>
        </div>
        <div className="gpt3__features-container">
        {featuresData.map((item, index) => {
          return <Feature title={item.title} text={item.text} key={item.title + index} />;
        })}
        </div>
    </div>
  )
}

export default Features;
