import React from 'react';
import { Reveal } from '../components/Reveal';

export const WhySection = () => {
  const principles = [
    { idx: '01', title: 'Business First', desc: 'We start by understanding your unit economics, offer, and business goals before writing code or running ads.' },
    { idx: '02', title: 'One Connected Team', desc: 'Strategy, design, development, marketing and AI specialists work seamlessly together without agency friction.' },
    { idx: '03', title: 'Built to Scale', desc: 'We engineer scalable digital infrastructure, design systems, and robust web applications built to evolve with your business.' },
    { idx: '04', title: 'AI-First Thinking', desc: 'We identify repetitive friction points where AI and automation deliver massive operational leverage for your team.' },
    { idx: '05', title: 'Transparent Collaboration', desc: 'No black boxes. You always have full visibility into our roadmaps, campaign performance, and project sprints.' }
  ];

  return (
    <section className="section why-section" id="about">
      <div className="container">
        <Reveal delay={0.1}>
          <h2 className="why-statement">
            One Team. One Strategy.<br />
            <span className="highlight-blue">One Digital Ecosystem.</span>
          </h2>
        </Reveal>

        <div className="why-list-rows">
          {principles.map((item, index) => (
            <Reveal key={item.idx} delay={0.1 * index} className="why-row-item">
              <div className="why-row-idx">{item.idx}</div>
              <div className="why-row-title">{item.title}</div>
              <div className="why-row-desc">{item.desc}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
