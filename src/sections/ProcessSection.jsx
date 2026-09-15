import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { GrowthTrajectory } from '../components/GrowthTrajectory'
import { StaggerContainer, StaggerItem } from '../components/Reveal'
import { Search, Target, Compass, Palette, Rocket, Sliders, TrendingUp } from 'lucide-react'

const processSteps = [
  { num: '01', title: 'Discover', desc: 'Business model & unit economics analysis', icon: Search, color: 'var(--brand-orange)' },
  { num: '02', title: 'Define', desc: 'Target persona & conversion offer clarity', icon: Target, color: 'var(--brand-blue)' },
  { num: '03', title: 'Strategize', desc: 'Custom tech & digital growth roadmap', icon: Compass, color: 'var(--brand-orange)' },
  { num: '04', title: 'Create', desc: 'High-conversion design & application build', icon: Palette, color: 'var(--brand-blue)' },
  { num: '05', title: 'Launch', desc: 'Seamless deployment & campaign kickoff', icon: Rocket, color: 'var(--brand-orange)' },
  { num: '06', title: 'Optimize', desc: 'Conversion rate & campaign fine-tuning', icon: Sliders, color: 'var(--brand-blue)' },
  { num: '07', title: 'Scale', desc: 'Automated AI workflows & revenue expansion', icon: TrendingUp, color: 'var(--brand-orange)' }
]

export default function ProcessSection() {
  return (
    <section className="section process-section section-theme-dark" id="process">
      <div className="container">
        <SectionHeading
          eyebrow="THE HIGHERIT WAY"
          title={<>STRATEGY FIRST.<br />TECHNOLOGY SECOND.<br /><span className="highlight-orange">GROWTH ALWAYS.</span></>}
          subtitle="Our 7-stage growth trajectory turns business potential into scalable, automated enterprise revenue."
        />

        {/* Animated Trajectory Line Header */}
        <GrowthTrajectory variant="process-line" animated={true} style={{ marginBottom: 40 }} />

        {/* 7-Step Trajectory Grid */}
        <StaggerContainer staggerDelay={0.08} className="process-7grid">
          {processSteps.map((step, idx) => {
            const Icon = step.icon
            return (
              <StaggerItem key={idx} className="p-step-card-editorial">
                <div className="p-step-top">
                  <span className="p-step-num-editorial" style={{ color: step.color }}>{step.num}</span>
                  <div className="p-step-icon-wrap">
                    <Icon style={{ width: 18, height: 18, color: step.color }} />
                  </div>
                </div>
                <h3 className="p-step-title">{step.title}</h3>
                <p className="p-step-desc">{step.desc}</p>
                <div className="p-step-indicator-bar" style={{ background: step.color }} />
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
