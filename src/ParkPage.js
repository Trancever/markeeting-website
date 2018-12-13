import React from 'react';
import styled from 'styled-components';

import SimpleHeader from './SimpleHeader';
import StaticBanner from './StaticBanner';
import AnimatedSection from './AnimatedSection';
import { sections } from './constants';
import ParkDescription from './ParkDescription';
import Attractions from './Atractions';

export default class ParkPage extends React.Component {
  render() {
    let park = 'Piotrków Tryb';
    if (this.props.name === 'pabianice') {
      park = 'Pabianice';
    } else if (this.props.name === 'aleksandrow') {
      park = 'Aleksandrów';
    }

    return (
      <React.Fragment>
        <SimpleHeader route={`Park ${park}`} />
        <StaticBanner url="http://trollandia.pl/sites/default/files/styles/1025x530/public/urodziny-w_trollandii-4.jpg?itok=HhbB387C" />
        <ParkDescription name={park} />
        <Attractions name={park.toUpperCase()} size={3} />
        {sections.slice(0, 2).map((section, index) => (
          <AnimatedSection
            id="regulation-animated-section"
            key={index}
            data={section}
            color={section.color}
            direction={index % 2 ? 'right' : 'left'}
            route={section.route}
          />
        ))}
      </React.Fragment>
    );
  }
}
