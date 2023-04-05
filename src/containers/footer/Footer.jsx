import React from "react";
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

function Footer() {
  return (
    <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
          <h1 className="gradient__text">Voulez-vous entrer dans le futur avant les autres ?</h1>
        </div>
        <div className="gpt3__footer-btn">
          <p>Demander un accès anticipé</p>
        </div>

        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt="logo" />
          </div>
          <div className="gpt3__footer-links_div">
              <h4>Liens</h4>
              <p>À propos de nous</p>
              <p>Réseaux sociaux</p>
              <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
              <h4>Entreprise</h4>
              <p>Conditions d'utilisation</p>
              <p>Politique de confidentialité</p>
          </div>
          <div className="gpt3__footer-links_div">
              <h4>2200 Powell St., Suite 780, Emeryville</h4>
              <p>info@gpt3explorer.net</p>
          </div>
        </div>

        <div className="gpt3__footer-copyright">
          <p>© 2023 Nicolas ARQUERO. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer;
