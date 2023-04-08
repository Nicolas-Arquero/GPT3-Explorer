import React from "react";
import { Feature } from "../../components";
import './whatGPT3.css'


function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 marginCust" id="wgpt3">
      <div className="gpt3__whatgpt3-feature" >
        <Feature
          title="Qu'est-ce que GPT 3 ?"
          text="GPT-3 est un modèle de langage révolutionnaire de l'intelligence artificielle développé par OpenAI. Ce modèle est capable de générer du texte à partir de données d'entrée, en utilisant des algorithmes avancés de traitement du langage naturel."
        />
      </div>
      <div className="gpt3__whatgpt3-heading" >
        <h1 className="gradient__text" >Les possibilités dépassent votre imagination</h1>
        <p>Explorer</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature 
          title="Chatbots"
          text="Découvrez comment GPT-3 peut être utilisé pour créer des chatbots intelligents capables de communiquer avec les utilisateurs de manière naturelle et fluide. "
        />
        <Feature
          title="Connaissances"
          text="Découvrez comment GPT-3 peut être utilisé pour créer une base de connaissances intelligente et dynamique."
        />
        <Feature 
          title="Education"
          text="Découvrez comment GPT-3 peut être utilisé pour soutenir l'éducation en ligne, en aidant les enseignants à créer des ressources éducatives interactives et en fournissant des outils d'apprentissage personnalisés aux étudiants. "
        />
      </div>
    </div>
  )
}

export default WhatGPT3;
