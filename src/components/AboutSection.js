import React from 'react';
import {useEffect, useRef} from "react";
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
import {init} from 'ityped';
//Images
import homeImg1 from '../img/man1.png';
import { titleAnim, fade, photoAnim } from '../animation';
import { motion } from 'framer-motion';
import Wave from './Wave';
const AboutSection = () => {
  const textRef= useRef()

    useEffect(()=> {
        init(textRef.current, {
            showCursor: true,
            backDelay:1500,
            backSpeed:60,
            strings:["Generative AI","Graph Mining ","NLP "]
        })

    },[])
  return (
    <About>
      <Image>
     <motion.img variants={photoAnim} src={homeImg1} alt="camera guy" />
     </Image>
      <Description>
        <Title>
          <Hide>
            <motion.h2 variants={titleAnim}>Hello নমস্কার,</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>I'm Agnik Saha (আগ্নিক সাহা)</motion.h2>
          </Hide>
          
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span ref={textRef}>AI</span> 
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Researcher</motion.h2>
          </Hide>
          </Title>
       
      </Description>


      <Wave />
    </About>
  );
};

const Hide = styled.div`
  overflow: hidden;
  span{
    color: #ce99ff
;
  }
`;

const Title = styled.div`
  flex: 0.5;
  position: relative;
`

export default AboutSection;
