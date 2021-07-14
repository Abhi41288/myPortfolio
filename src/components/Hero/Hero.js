import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import {ProfilePic} from '../../constants/constants';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>    
      <SectionTitle main center>
      <img src={ProfilePic} style={{width: '30rem',height: '20rem'}}/>
        Welcome to 
        My Profile
      </SectionTitle>
      <SectionText>
      Let's create a web experiences for the future!
      </SectionText>
      <Button onClick={() =>window.location='https://github.com'}>learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;