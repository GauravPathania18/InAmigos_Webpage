import { Project, ImpactMetric, Testimonial, ImpactStory } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'edu-101',
    title: 'Project Gyan: Digital Classrooms for Rural Schools',
    category: 'Education',
    shortDescription: 'Equipping under-resourced rural schools with solar-powered digital tablets, internet connectivity, and trained educators.',
    fullDescription: 'Project Gyan aims to bridge the rural-urban digital divide by setting up self-sustaining smart classrooms in remote villages. We provide ruggedized solar-powered laptops, interactive content in local dialects, and comprehensive teacher empowerment workshops. Over the last 3 years, student retention has risen by 42% across participating villages.',
    iconName: 'BookOpen',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    impactMetric: '3,500+ Students Educated',
    goal: 50000,
    raised: 38400,
    beneficiaries: '3,500 children & 120 teachers',
    location: 'Odisha & Jharkhand, India',
    milestones: [
      'Installed 45 solar digital hubs',
      'Trained 120 local educators in interactive digital pedagogy',
      'Achieved 100% digital literacy among enrolled youth'
    ]
  },
  {
    id: 'health-201',
    title: 'Swasthya Wheels: Mobile Medical Clinics',
    category: 'Healthcare',
    shortDescription: 'Bringing free primary healthcare, maternal check-ups, and essential medicines directly to tribal and remote communities.',
    fullDescription: 'Many tribal communities live more than 30 km away from the nearest medical center. Swasthya Wheels operates a fleet of fully equipped mobile healthcare vans staffed with doctors, nurses, and lab technicians. We provide free diagnosis, vaccinations, maternal care, and chronic illness management.',
    iconName: 'HeartPulse',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    impactMetric: '18,000+ Free Checkups',
    goal: 75000,
    raised: 61200,
    beneficiaries: '18,000+ villagers across 60 hamlets',
    location: 'Central Tribal Belt, India',
    milestones: [
      'Deployed 6 custom mobile medical units',
      'Administered over 12,000 prenatal checkups and nutritional supplements',
      'Reduced local infant morbidity rates by 28%'
    ]
  },
  {
    id: 'water-301',
    title: 'Jal Dharohar: Clean & Safe Drinking Water',
    category: 'Clean Water',
    shortDescription: 'Constructing community-managed solar filtration units and rainwater harvesting systems in drought-prone regions.',
    fullDescription: 'Water scarcity and waterborne diseases heavily impact rural productivity and children\'s health. Jal Dharohar builds high-capacity community water purification plants powered by solar energy. Each unit is co-managed by an elected women\'s committee from the village, ensuring long-term sustainability and economic empowerment.',
    iconName: 'Droplets',
    imageUrl: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=800&q=80',
    impactMetric: '25,000+ Daily Liter Capacity',
    goal: 40000,
    raised: 34000,
    beneficiaries: '8,200 residents across 14 drought-prone villages',
    location: 'Rajasthan & Bundelkhand, India',
    milestones: [
      'Installed 14 community water purification units',
      'Formed 14 women-led water stewardship committees',
      'Reduced waterborne illnesses in target villages by 85%'
    ]
  },
  {
    id: 'comm-401',
    title: 'Sakhi Shakti: Women Artisan Micro-Enterprises',
    category: 'Community',
    shortDescription: 'Empowering women through skill development in eco-friendly crafts, organic farming, and direct-to-consumer microfinance.',
    fullDescription: 'Sakhi Shakti provides vocational training and zero-interest micro-grants to women in rural communities. We train artisans in producing biodegradable packaging, natural textiles, and organic agro-products, connecting them directly with fair-trade urban markets without middlemen.',
    iconName: 'Users',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    impactMetric: '650+ Women Entrepreneurs',
    goal: 30000,
    raised: 28500,
    beneficiaries: '650 families earning sustainable livelihoods',
    location: 'West Bengal & Bihar, India',
    milestones: [
      'Established 12 cooperative production centers',
      'Generated $180,000+ in collective artisan revenue in 2025',
      'Provided financial literacy certification to over 900 women'
    ]
  },
  {
    id: 'env-501',
    title: 'Harita Bhumi: Agroforestry & Afforestation',
    category: 'Environment',
    shortDescription: 'Planting indigenous fruit-bearing and medicinal trees on degraded communal lands to combat climate change and boost farm incomes.',
    fullDescription: 'Harita Bhumi combines environmental restoration with rural livelihoods. By distributing high-yield fruit saplings and native forest trees to marginal farmers, we create carbon sinks while generating perennial nutritional and monetary yields for farming communities.',
    iconName: 'Trees',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    impactMetric: '150,000+ Trees Planted',
    goal: 35000,
    raised: 29800,
    beneficiaries: '1,200 farming households & local wildlife',
    location: 'Western Ghats & Deccan Plateau',
    milestones: [
      'Planted 150,000 native saplings with 88% survival rate',
      'Restored 400 hectares of degraded communal grazing land',
      'Created green corridors for biodiversity protection'
    ]
  },
  {
    id: 'edu-601',
    title: 'Udaan: Youth Leadership & Tech Mentorship',
    category: 'Education',
    shortDescription: 'Mentoring underprivileged high school youth in coding, communication, and college scholarship readiness.',
    fullDescription: 'Udaan connects passionate industry volunteers with bright students from low-income backgrounds. Through weekend coding bootcamps, career counseling, and spoken English training, we empower first-generation learners to access top university scholarships and professional careers.',
    iconName: 'GraduationCap',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    impactMetric: '450+ Scholarship Recipients',
    goal: 25000,
    raised: 22100,
    beneficiaries: '1,500 ambitious youth mentored',
    location: 'Pan-India Urban & Semi-Urban',
    milestones: [
      '450 students secured full or partial university scholarships',
      'Hosted 30 hackathons and innovation fairs',
      'Built an active alumni network of 800+ mentors'
    ]
  }
];

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'stat-1',
    value: '10K+',
    numericValue: 10500,
    suffix: '+',
    label: 'People Impacted',
    iconName: 'Users',
    description: 'Direct beneficiaries across health, education, and livelihood initiatives since our inception in 2018.'
  },
  {
    id: 'stat-2',
    value: '50+',
    numericValue: 54,
    suffix: '+',
    label: 'Projects Completed',
    iconName: 'CheckCircle2',
    description: 'Sustainable community programs planned, executed, and handed over to local self-governing groups.'
  },
  {
    id: 'stat-3',
    value: '15',
    numericValue: 15,
    suffix: '',
    label: 'Countries Reached',
    iconName: 'Globe',
    description: 'Global collaborative network of volunteer chapters, funding partners, and grassroots NGOs.'
  },
  {
    id: 'stat-4',
    value: '500+',
    numericValue: 520,
    suffix: '+',
    label: 'Active Volunteers',
    iconName: 'HeartHandshake',
    description: 'Dedicated change-makers contributing their weekends, professional skills, and passion.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Meena Devi',
    role: 'Village Sarpanch & Water Committee Head',
    location: 'Barmer, Rajasthan',
    quote: 'Before Project Jal Dharohar arrived, our daughters spent four hours every morning fetching brackish water from 5 kilometers away. Today, pure solar-filtered water is available right in our village square. Our girls are back in school, and illness is a rare memory.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    projectImpacted: 'Jal Dharohar Water Unit'
  },
  {
    id: 'test-2',
    name: 'Dr. Rajeshwar Pradhan',
    role: 'Lead Medical Officer',
    location: 'Swasthya Wheels Mobile Unit #4',
    quote: 'InAmigos gave us the mobility and medical equipment needed to reach communities that had never seen a qualified doctor. The gratitude in a mother’s eyes when her child receives timely pneumonia treatment is what fuels our mission every day.',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    projectImpacted: 'Swasthya Wheels'
  },
  {
    id: 'test-3',
    name: 'Ananya Sharma',
    role: 'Udaan Scholar & Computer Science Undergraduate',
    location: 'Bangalore',
    quote: 'My father works as a daily wage carpenter. I dreamed of writing software, but didn’t even own a computer. My InAmigos mentors provided a refurbished laptop, taught me Python, and guided me through my scholarship essays. Today I am studying at a premier engineering college!',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    projectImpacted: 'Project Udaan'
  }
];

export const IMPACT_STORIES_DATA: ImpactStory[] = [
  {
    id: 'story-1',
    title: 'How 14 Women-Led Water Committees Transformed a Drough-Prone District',
    date: 'June 18, 2026',
    author: 'Priya Mukherjee, Field Director',
    readTime: '4 min read',
    summary: 'When water management is placed in the hands of rural women, the community thrives. A deep dive into our solar filtration governance model.',
    fullContent: 'In the arid plains of Barmer, water is more than a resource—it is currency, time, and health. When InAmigos introduced solar-powered micro-filtration plants in 2024, our primary condition was community ownership. We trained 14 local women in basic plumbing, solar battery maintenance, and transparent bookkeeping.\n\nWithin twelve months, these women not only maintained zero downtime for their filtration units but also created a community fund from token maintenance fees ($0.02 per 20 liters). Today, this surplus fund provides emergency medical loans to village families without relying on moneylenders.',
    imageUrl: 'https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&w=800&q=80',
    category: 'Clean Water',
    likes: 142
  },
  {
    id: 'story-2',
    title: 'From Darkness to Digital: The Solar Classroom Revolution',
    date: 'May 24, 2026',
    author: 'Vikram Mehta, EdTech Coordinator',
    readTime: '5 min read',
    summary: 'Exploring how offline interactive learning software and ruggedized solar power are revolutionizing education in off-grid tribal hamlets.',
    fullContent: 'Electricity in remote tribal blocks is unpredictable at best. For children in these schools, standard digital education remained a distant urban luxury. Project Gyan introduced customized solar-charged learning cases equipped with Raspberry Pi servers preloaded with regional language STEM simulations.\n\nTeachers report a dramatic surge in student engagement. Children who previously hesitated to attend math classes now lead peer-to-peer coding clubs after school hours. The digital divide is not unbridgeable when technology is built to respect local ground realities.',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    category: 'Education',
    likes: 98
  },
  {
    id: 'story-3',
    title: 'Restoring the Green Canopy: 150,000 Trees and Counting',
    date: 'April 10, 2026',
    author: 'Sunil Verma, Eco-Restoration Lead',
    readTime: '3 min read',
    summary: 'Why agroforestry works better than charity planting: combining ecological preservation with sustainable farmer livelihoods.',
    fullContent: 'Tree planting campaigns often suffer from low survival rates when local communities have no economic stake in tree preservation. Our Harita Bhumi initiative changed the paradigm by partnering with marginal farmers to plant guava, mango, amla, and teak along farm boundaries.\n\nBy the third year, farmers began harvesting organic fruit, supplementing their seasonal crop income by up to 30%. With economic value attached to living trees, survival rates soared to 88%, creating vibrant green corridors for native birds and pollinators.',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    category: 'Environment',
    likes: 215
  }
];
