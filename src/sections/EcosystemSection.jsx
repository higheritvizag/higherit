import React from 'react'
import { Palette, Globe, TrendingUp, Users, Code2, Cpu, Bot } from 'lucide-react'

export default function EcosystemSection() {
  return (
    <section className="section ecosystem-section">
      <div className="container">
        <div className="ecosystem-container">
          <div>
            <div className="eyebrow eyebrow-blue">ONE CONNECTED TEAM</div>
            <h2 className="section-title">
              Your Business Doesn't Need More Vendors.<br />
              It Needs <span className="highlight-blue">ONE DIGITAL PARTNER.</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 24 }}>
              Your brand, website, marketing, technology and customer journey shouldn't operate as separate pieces. HigherIT brings them together under one roof.
            </p>
            <p className="section-subtitle">
              We help businesses build their digital foundation, reach the right audience, generate opportunities and automate repetitive work with high leverage.
            </p>
          </div>

          <div className="ecosystem-diagram">
            <div className="ecosystem-center">
              <div>YOUR</div>
              <div>BUSINESS</div>
            </div>

            <div className="eco-node node-1"><Palette style={{ width: 18, height: 18 }} /> Brand</div>
            <div className="eco-node node-2"><Globe style={{ width: 18, height: 18 }} /> Website</div>
            <div className="eco-node node-3"><TrendingUp style={{ width: 18, height: 18 }} /> Marketing</div>
            <div className="eco-node node-4"><Users style={{ width: 18, height: 18 }} /> Leads</div>
            <div className="eco-node node-5"><Code2 style={{ width: 18, height: 18 }} /> Technology</div>
            <div className="eco-node node-6"><Cpu style={{ width: 18, height: 18 }} /> AI</div>
            <div className="eco-node node-7"><Bot style={{ width: 18, height: 18 }} /> Automation</div>
          </div>
        </div>
      </div>
    </section>
  )
}
