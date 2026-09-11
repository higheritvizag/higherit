import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal, StaggerContainer, StaggerItem } from '../components/Reveal'
import { Bot, UserCheck, MessageSquare, Send, ArrowRight, Zap, CheckCircle2, Cpu, ShieldCheck, RefreshCw } from 'lucide-react'

const aiScenarios = {
  healthcare: {
    label: 'Healthcare Inquiry',
    inbound: '"Hi, I want to book a Cardiology appointment at Akshaya Hospital tomorrow 11 AM."',
    aiProcessing: 'Parsing intent: Medical Specialty (Cardiology) • Preferred Time: Tomorrow 11:00 AM • Checking Doctor Availability...',
    aiAction: 'Slot confirmed with Dr. K. Sharma. Booking SMS sent & calendar invite generated.',
    status: 'QUALIFIED & BOOKED (0.8s)'
  },
  realestate: {
    label: 'Real Estate Plot Lead',
    inbound: '"Looking for a 200 sq yd plot in Green Valley Layout under 15 Lakhs budget."',
    aiProcessing: 'Matching inventory: 3 Plots Available (Plot #42, #56, #88) • Calculating registration fee...',
    aiAction: 'Shared layout PDF map on WhatsApp. Lead assigned to Sr. Executive Suresh.',
    status: 'ROUTED TO SALES (0.6s)'
  },
  retail: {
    label: 'Jewellery Order Status',
    inbound: '"Where is my order #JW-8821 gold bangles delivery?"',
    aiProcessing: 'Fetching Logistics API • Tracking ID: BLR-88192 • Status: Out for Delivery...',
    aiAction: 'Responded via WhatsApp: "Your package is with BlueDart, delivery expected by 4:00 PM today."',
    status: 'RESOLVED (0.4s)'
  }
}

const aiModules = [
  { title: 'AI Customer Support', desc: '24/7 instant enquiry resolution across web, Instagram, and WhatsApp without human delay.', icon: MessageSquare, tag: '24/7 Support' },
  { title: 'AI Lead Assistant', desc: 'Qualify, rank, and assign incoming high-intent leads automatically in real time.', icon: UserCheck, tag: 'Lead Scoring' },
  { title: 'AI Content Engine', desc: 'Generate localized ad copy, social creative assets, and email sequences 10x faster.', icon: Zap, tag: 'Creative AI' },
  { title: 'AI Virtual Employees', desc: 'Bespoke AI team members trained on your company knowledge base and pricing sheets.', icon: Bot, tag: 'Custom Trained' },
  { title: 'Workflow Automation', desc: 'Connect CRM, Google Sheets, payment gateways, and WhatsApp to eliminate repetitive tasks.', icon: RefreshCw, tag: 'Zero Friction' },
  { title: 'Custom AI Models', desc: 'Private, secure machine learning models fine-tuned exclusively for your enterprise datasets.', icon: Cpu, tag: 'Enterprise Data' }
]

export default function AISection() {
  const [activeScenario, setActiveScenario] = useState('healthcare')
  const currentScenario = aiScenarios[activeScenario]

  return (
    <section className="section ai-section section-theme-dark" id="ai">
      <div className="container">
        <SectionHeading
          eyebrow="THE FUTURE IS INTELLIGENT"
          title={<>What If Your Business <span className="highlight-orange">Had an AI Team?</span></>}
          subtitle="AI isn't just about text generation. Deployed correctly, custom AI workflows handle repetitive operations, qualify leads 24/7, and multiply team leverage."
        />

        {/* Central AI Operations Hub Simulated Workflow */}
        <Reveal delay={0.15}>
          <div className="ai-hub-container">
            <div className="ai-hub-header">
              <div className="ai-hub-title-flex">
                <div className="ai-hub-icon-box"><Bot style={{ width: 22, height: 22, color: 'var(--brand-orange)' }} /></div>
                <div>
                  <h3 className="ai-hub-heading">HigherIT AI Operations Hub</h3>
                  <p className="ai-hub-subtext">Live Automated Lead Processing Workflow Pipeline</p>
                </div>
              </div>
              <div className="ai-live-badge"><span className="live-dot" /> SYSTEM ACTIVE</div>
            </div>

            {/* Interactive Scenario Selector Tabs */}
            <div className="ai-scenario-tabs">
              {Object.keys(aiScenarios).map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`ai-scenario-btn ${activeScenario === key ? 'active' : ''}`}
                  onClick={() => setActiveScenario(key)}
                >
                  {aiScenarios[key].label}
                </button>
              ))}
            </div>

            {/* Simulated Live Workflow Execution Terminal */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="ai-workflow-terminal"
              >
                <div className="wf-step-row">
                  <div className="wf-step-num">01 / INBOUND</div>
                  <div className="wf-step-content">
                    <div className="wf-step-lbl">Lead Message Received</div>
                    <div className="wf-step-val inbound">{currentScenario.inbound}</div>
                  </div>
                </div>

                <div className="wf-arrow-down"><ArrowRight style={{ width: 16, height: 16, transform: 'rotate(90deg)', color: 'var(--brand-orange)' }} /></div>

                <div className="wf-step-row">
                  <div className="wf-step-num">02 / AI REASONING</div>
                  <div className="wf-step-content">
                    <div className="wf-step-lbl">Intent & Inventory Processing</div>
                    <div className="wf-step-val processing">{currentScenario.aiProcessing}</div>
                  </div>
                </div>

                <div className="wf-arrow-down"><ArrowRight style={{ width: 16, height: 16, transform: 'rotate(90deg)', color: 'var(--brand-blue-light)' }} /></div>

                <div className="wf-step-row">
                  <div className="wf-step-num">03 / AUTOMATED ACTION</div>
                  <div className="wf-step-content">
                    <div className="wf-step-lbl">Instant CRM & WhatsApp Execution</div>
                    <div className="wf-step-val action">{currentScenario.aiAction}</div>
                  </div>
                  <div className="wf-status-chip">{currentScenario.status}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* 6 AI Module Cards Grid */}
        <StaggerContainer staggerDelay={0.08} className="ai-modules-grid">
          {aiModules.map((mod, idx) => {
            const Icon = mod.icon
            return (
              <StaggerItem key={idx} className="ai-module-card">
                <div className="ai-module-header">
                  <div className="ai-module-icon">
                    <Icon style={{ width: 20, height: 20 }} />
                  </div>
                  <span className="ai-module-tag">{mod.tag}</span>
                </div>
                <h4 className="ai-module-title">{mod.title}</h4>
                <p className="ai-module-desc">{mod.desc}</p>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
