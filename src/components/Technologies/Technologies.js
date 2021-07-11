import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I Have Worked with range of Technologies in the web development</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js <br />
              JavaScript <br />
              Angular <br />
            </ListParagraph>
          </ListContainer>
        
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              NodeJs and Databases
            </ListParagraph>
          </ListContainer>        
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
