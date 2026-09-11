export const servicesData = [
  {
    id: 'grow',
    number: '01 / GROW',
    title: 'Digital Marketing & Customer Acquisition',
    description: 'Performance ads, search optimization, and automated lead funnels engineered to scale client revenue consistently.',
    tags: ['Social Media Marketing', 'Performance Marketing', 'Meta Ads', 'Google Ads', 'SEO & Analytics', 'Lead Generation'],
    ctaText: 'Explore Digital Marketing',
    ctaLink: '/services#grow',
    widget: {
      type: 'metrics',
      title: 'Live Performance Dashboard',
      items: [
        { label: 'Return On Ad Spend (ROAS)', value: '+340%', icon: 'trending-up' },
        { label: 'Qualified Enquiries / Month', value: '12,450+', icon: 'users' }
      ]
    }
  },
  {
    id: 'create',
    number: '02 / CREATE',
    title: 'Brand & Creative Studio',
    description: 'Positioning clarity, high-trust design systems, UI/UX aesthetics, and CGI creative campaigns that make brands unforgettable.',
    tags: ['Brand Strategy', 'Visual Identity', 'Logo Design', 'UI/UX Design', 'Video & CGI', 'AI Creative'],
    ctaText: 'Explore Creative',
    ctaLink: '/services#create',
    widget: {
      type: 'brand',
      title: 'Visual Identity & Brand System',
      description: 'Crafting distinct visual language, typography systems, and CGI design assets that position companies as category leaders.'
    }
  },
  {
    id: 'build',
    number: '03 / BUILD',
    title: 'Web & Application Engineering',
    description: 'High-performance business websites, web applications, e-commerce systems, and custom SaaS software platforms built to scale.',
    tags: ['Business Websites', 'Web Applications', 'E-commerce', 'SaaS Platforms', 'Custom Dashboards', 'CRM Systems'],
    ctaText: 'Explore Development',
    ctaLink: '/services#build',
    widget: {
      type: 'code',
      codeSnippet: `// HigherIT Tech Stack Architecture\nconst stack = {\n  frontend: ['Vite', 'React 18', 'Vanilla CSS'],\n  backend: ['Node.js', 'REST & GraphQL API'],\n  performance: 'Lighthouse Score 98+'\n};`
    }
  },
  {
    id: 'intelligence',
    number: '04 / INTELLIGENCE',
    title: 'AI & Business Automation',
    description: 'Deploy intelligent AI chatbots, AI virtual employees, automated lead routing, and WhatsApp workflows to eliminate operational friction.',
    tags: ['AI Chatbots', 'AI Employees', 'Workflow Automation', 'Lead Automation', 'AI Content Systems', 'Custom AI Solutions'],
    ctaText: 'Explore AI Solutions',
    ctaLink: '/services#intelligence',
    widget: {
      type: 'ai',
      title: 'AI Lead Assistant Active',
      message: '"Hello! I answered 48 client enquiries and scheduled 12 strategy calls today while your team focused on execution."'
    }
  }
];
