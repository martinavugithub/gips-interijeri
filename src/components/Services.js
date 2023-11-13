import React from 'react';
import ServiceItem from './ServiceItem';
import '../styles/Services.css';

function Services() {
  return (
    <div id="services" className="services-container container">
      <h2 className="text-center">Usluge</h2>
      <div className="row">
        <div className="col-md-3">
          <ServiceItem
            imageSrc="/images/kamin.jpg"
            title="Oblaganje ugradbenih kamina"
            text="Osim što je praktičan, kamin je vizualni detalj koji se, zbog svoje prilagodljivosti može uklopiti u baš svaki stilski izričaj, od onog tradicionalnog do onog najmodernijeg…"
          />
        </div>
        <div className="col-md-3">
          <ServiceItem
            imageSrc="/images/potkrovlje.jpg"
            title="Uređenje potkrovlja"
            text="Sobe u potkrovlju imaju poseban šarm i toplinu. Prostori u potkrovlju maksimiziraju prostore stvarajući svjetle i funkcionalne sobe - urede, dj. igraonice, spavaće sobe i dr. Potkrovlja imaju kosi vrh koji se pod kutom oslanja na nosive zidove. Ovi arhitektonski dizajni nude velike mogućnosti za stvaranje živopisnih malih prostora."
          />
        </div>
        <div className="col-md-3">
          <ServiceItem
            imageSrc="/images/Modern-Ceiling.jpg"
            title="Spušteni stropovi i skrivena rasvjeta"
            text="Spušteni stropovi sve su popularniji u interijerima zbog niza prednosti u odnosu na ‘klasične’ ili primarne stropove. Prvi motiv za njihovo postavljanje svakako je postizanje dodatne estetike u prostoru. Rasvjetna tijela su naravno skrivena, a sve što možete vidjeti je svjetlost koja se emitira. Takva rasvjeta dodaje ukrasne elemente stropu i uljepšava sobu blistavom svjetlošću."
          />
        </div>
        <div className="col-md-3">
          <ServiceItem
            imageSrc="/images/pregradni-zid.jpg"
            title="Gradnja pregradnih zidova"
            text="Izgradnjom rigips montažnih zidova postiže se znatna ušteda troškova u usporedbi s konvencionalnim zidovima. Šupljina zida idealna je za racionalno provođenje instalacija svih vrsta."
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
