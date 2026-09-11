import React from 'react';
import { Palette, Globe, TrendingUp, Users, Code2, Cpu, Bot } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

export const EcosystemSection = () => {
  return (
    <section className="section ecosystem-section">
      <div className="container">
        <div className="ecosystem-container">
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="ONE CONNECTED TEAM"
              eyebrowColor="blue"
              title={<>Your Business Doesn't Need More Vendors.<br />It Needs <span className="highlight-blue">ONE DIGITAL PARTNER.</span></>}
              subtitle="Your brand, website, marketing, technology and customer journey shouldn't operate as separate pieces. HigherIT brings them together under one roof."
              align="left"
            />
            <p className="section-subtitle" style={{ marginTop: '16px' }}>
              We help businesses build their digital foundation, reach the right audience, generate opportunities and automate repetitive work with high leverage.
            </p>
          </Reveal>

          <Reveal className="ecosystem-diagram" delay={0.3}>
            <div className="ecosystem-center">
              <div>YOUR</div>
              <div>BUSINESS</div>
            </div>

            <div className="eco-node node-1"><Palette size={20} /> Brand</div>
            <div className="eco-node node-2"><Globe size={20} /> Website</div>
            <div className="eco-node node-3"><TrendingUp size={20} /> Marketing</div>
            <div className="eco-node node-4"><Users size={20} /> Leads</div>
            <div className="eco-node node-5"><Code2 size={20} /> Technology</div>
            <div className="eco-node node-6"><Cpu size={20} /> AI</div>
            <div className="eco-node node-7"><Bot size={20} /> Automation</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
