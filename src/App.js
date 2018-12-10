import React, { Component } from 'react';

import Header from './Header';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Attractions from './Atractions';
import AnimatedSection from './AnimatedSection';
import ContactSection from './ContactSection';
import { sections } from './constants';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.ourParksSection = React.createRef();
    this.attractionsSection = React.createRef();
    this.topSection = React.createRef();
    this.offerSection = React.createRef();
    this.securitySection = React.createRef();
    this.contactSection = React.createRef();
  }

  onLinkCLick = link => {
    let ref;
    switch (link) {
      case 'our-parks':
        ref = this.ourParksSection;
        break;
      case 'attractions':
        ref = this.attractionsSection;
        break;
      case 'top':
        ref = this.topSection;
        break;
      case 'offer':
        ref = this.offerSection;
        break;
      case 'security':
        ref = this.securitySection;
        break;
      case 'contact':
        ref = this.contactSection;
        break;
      default:
        break;
    }
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <div ref={this.topSection} className="App">
        <Header onLinkCLick={this.onLinkCLick} />
        <Banner />
        <AboutUs myRef={this.ourParksSection} />
        <Attractions myRef={this.attractionsSection} />
        <div ref={this.offerSection}>
          {sections.slice(0, 2).map((section, index) => (
            <AnimatedSection
              key={index}
              data={section}
              color={section.color}
              direction={index % 2 ? 'right' : 'left'}
            />
          ))}
        </div>
        <div ref={this.securitySection}>
          <AnimatedSection
            data={sections[2]}
            color={sections[2].color}
            direction="left"
          />
        </div>
        <div ref={this.contactSection}>
          <ContactSection />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
