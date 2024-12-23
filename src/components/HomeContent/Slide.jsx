import React from 'react';
import './styles/slide.css'
import FadeIn from '../Animation/FadeIn';

const TAGS = ['Music', 'Model', 'Artwork', 'Learn', 'Project', 'React', 'Next.js', 'game', 'UI/UX', 'SVG', 'animation', 'webdev'];
const DURATION = 25000;
const ROWS = 5;
const TAGS_PER_ROW = 10;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
   
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
         <FadeIn>
      <div className='inner'>
        {children}
        {children}
      </div>
      </FadeIn>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className='tag'><span>#</span> {text}</div>
);

const Slide = () => (
  <div id='slide'>
    <header>
      <h1>TRANCE TAG</h1>
      <p>Trance have everything.</p>
    </header>
    <div className='tag-list'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag}/>
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className='fade'/>
    </div>
  </div>
);

export default Slide 