import React from 'react';
import { Reveal } from '../components/Reveal';

export const StatsSection = () => {
  return (
    <section className="stats-band" id="numbers">
      <div className="container">
        <Reveal className="stats-grid" delay={0.1}>
          <div>
            <div className="stat-giant">300<span>+</span></div>
            <div className="stat-lbl">Businesses Served</div>
          </div>
          <div>
            <div className="stat-giant">150<span>+</span></div>
            <div className="stat-lbl">Projects Delivered</div>
          </div>
          <div>
            <div className="stat-giant">50<span>+</span></div>
            <div className="stat-lbl">Active Clients</div>
          </div>
          <div>
            <div className="stat-giant">4<span>+</span></div>
            <div className="stat-lbl">Years Experience</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
