import React, { Component } from 'react';

import Header from './Header';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Attractions from './Atractions';
import AnimatedSection from './AnimatedSection';
import { sections } from './constants';

class App extends Component {
  constructor(props) {
    super(props);

    this.aboutUsSection = React.createRef();
    this.attractionsSection = React.createRef();
    this.topSection = React.createRef();
  }

  onLinkCLick = link => {
    console.log('!@#', link);
    let ref;
    switch (link) {
      case 'about-us':
        ref = this.aboutUsSection;
        break;
      case 'attractions':
        ref = this.attractionsSection;
        break;
      case 'top':
        ref = this.topSection;
        break;
      default:
        break;
    }
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <div ref={this.topSection} className="App">
        <Header onLinkCLick={this.onLinkCLick} />
        <Banner />
        <AboutUs myRef={this.aboutUsSection} />
        <Attractions myRef={this.attractionsSection} />
        {sections.map((section, index) => (
          <AnimatedSection
            key={index}
            data={section}
            color={section.color}
            direction={index % 2 ? 'right' : 'left'}
          />
        ))}
      </div>
    );
  }
}

export default App;
