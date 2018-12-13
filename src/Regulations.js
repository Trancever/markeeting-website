import React from 'react';

import SimpleHeader from './SimpleHeader';
import StaticBanner from './StaticBanner';
import Regulation from './Regulation';
import AnimatedSection from './AnimatedSection';
import { sections } from './constants';

export default class Regulations extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SimpleHeader route="Regulamin" />
        <StaticBanner url="http://trollandia.pl/sites/default/files/styles/1025x530/public/urodziny-w_trollandii-4.jpg?itok=HhbB387C" />
        <Regulation />
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
