import React, { Component } from 'react';

import Header from './Header';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Attractions from './Atractions';
import AnimatedSection from './AnimatedSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <AboutUs />
        <Attractions />
        <AnimatedSection
          color="#F3EED8"
          direction="left"
          data={{
            url:
              'http://trollandia.pl/sites/default/files/styles/1025x530/public/trollandia-oferty-dla-grup_1.jpg?itok=zlAYo-Gn',
            title: 'PROGRAMY DLA GRUP SEZON 2017',
            description:
              'Oferujemy rożnego rodzaju atrakcje dla różnych grup wiekowych. Możesz w Trollandii wyjazd integracyjny albo wycieczkę klasową. Zapraszamy do zapoznania się z ofertą.',
            button: 'DOWIEDZ SIĘ WIĘCEJ',
          }}
        />
        <AnimatedSection
          color="#f7cd00"
          direction="right"
          data={{
            url:
              'http://trollandia.pl/sites/default/files/styles/1025x530/public/urodziny-w_trollandii-4.jpg?itok=HhbB387C',
            title: 'PROGRAMY DLA GRUP SEZON 2017',
            description:
              'Aktywne urodziny w Parku Linowym Trollandia. Oferujemy 4 różne pakiety urodzinowe, świetne miejsce i doskonałą zabawę. Spędzisz u nas wraz z przyjaciółmi świetny czas.',
            button: 'DOWIEDZ SIĘ WIĘCEJ',
          }}
        />
        <AnimatedSection
          color="#63C226"
          direction="left"
          data={{
            url:
              'http://trollandia.pl/sites/default/files/styles/1025x530/public/bezpieczenstwo22.jpg?itok=Uq_vlS-o',
            title: 'BEZPIECZEŃSTWO',
            description:
              'W budowanych przez nas parkach linowych bezpieczeństwo jest zawsze priorytetowym czynnikiem. Dlatego właśnie stosujemy rozwiązania i technologie zapewniające jego najwyższy, światowy poziom. Wszystkie nasze konstrukcje posiadają dokumentacje statyczną wykonywaną w specjalistycznym, niemieckim programie Dlubal do obliczeń konstrukcji przestrzennych.',
            button: 'DOWIEDZ SIĘ WIĘCEJ',
          }}
        />
      </div>
    );
  }
}

export default App;
