import React from 'react';
import '../styles/AboutUs.css';

function AboutUs() {
    return (
      <div id="about-us" className="about-us">
        <h2 className="text-left">O nama</h2>
        <div className="media">
          <img src="/images/logo-2.jpg" alt="Gips Interijeri" className="mr-3 custom-image" />
          <div className="media-body">
            <p>
              Gips interijeri je mlada firma osnovana krajem 2021. godine nakon višegodišnjeg iskustva završnih radova u graditeljstvu.
            </p>
            <p>
              U skladu sa željama klijenata predlažemo najbolja rješenja za uređenje i pridajemo pozornost izboru optimalnih materijala za svaki projekt.
            </p>
            <p>
              Izvodimo sve vrste gips kartonskih radova – gradnju pregradnih zidova, spuštenih stropova, postavljanje zidnih obloga, uređenje potkrovlja. 
              Primjena gips kartonskih ploča je neizostavna u modernoj gradnji i koristi se za različite namjene u svim područjima građevinarstva.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutUs;