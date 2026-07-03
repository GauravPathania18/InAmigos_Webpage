import { Project, ImpactMetric, Testimonial, ImpactStory, BlogArticle } from '../types';
import saveWaterGlobeImg from '../assets/images/save_water_globe_1783074178205.jpg';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'seva-101',
    title: 'Project SEVA: Food & Clothing for the Underprivileged',
    category: 'Community',
    shortDescription: 'Providing essential nutrition, warm clothing, and relief materials to underprivileged and marginalized families across rural and urban slums.',
    fullDescription: 'Project Seva is our flagship humanitarian initiative dedicated to eradicating hunger and dignity deprivation among the underprivileged. To date, we have distributed over 50,000+ nutritious meals and clothing kits. We operate continuous community kitchens, ration drives, and winter clothing distribution camps across India.',
    iconName: 'HeartPulse',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    impactMetric: '50,000+ Meals & Clothes Distributed',
    goal: 50000,
    raised: 42500,
    beneficiaries: '50,000+ individuals & families',
    location: 'Chhattisgarh & Pan-India',
    milestones: [
      'Distributed over 50,000+ freshly cooked meals and dry ration kits',
      'Organized 120+ seasonal clothing and blanket donation drives',
      'Established regular emergency relief supply chains for slum communities'
    ]
  },
  {
    id: 'bachpan-201',
    title: 'Project BACHPANSHALA: Quality Education & Digital Literacy',
    category: 'Education',
    shortDescription: 'Bridging educational gaps by training underprivileged children in basic digital literacy, foundational life skills, and after-school academic support.',
    fullDescription: 'Project Bachpanshala ensures that no child is left behind due to economic constraints. We establish community learning centers that train underprivileged children in foundational literacy, numeracy, digital tools, and life skills. Our volunteer educators conduct engaging interactive bootcamps and provide school enrollment assistance.',
    iconName: 'BookOpen',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    impactMetric: '15,000+ Children Educated',
    goal: 60000,
    raised: 48000,
    beneficiaries: '15,000+ underprivileged children & youth',
    location: 'Rural & Urban Slum Centers, India',
    milestones: [
      'Trained thousands of children in computer skills and basic digital literacy',
      'Conducted 200+ life skill and remedial education bootcamps',
      'Provided school bags, books, and stationery to over 10,000 students'
    ]
  },
  {
    id: 'jeev-301',
    title: 'Project JEEV: Animal Welfare, Rescue & Protection',
    category: 'Environment',
    shortDescription: 'Dedicated to animal welfare, including daily feeding, medical rescue, vaccination, and compassion advocacy for stray and abandoned animals.',
    fullDescription: 'Project Jeev recognizes that true compassion extends to all living beings. Our dedicated volunteer network feeds 50+ stray animals daily, conducts emergency rescues for injured dogs and cattle, and organizes anti-rabies vaccination drives in collaboration with local veterinary clinics.',
    iconName: 'Heart',
    imageUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    impactMetric: '50+ Stray Animals Fed Daily',
    goal: 25000,
    raised: 21000,
    beneficiaries: '50+ stray animals daily & rescue cases',
    location: 'Bilaspur, Chhattisgarh & Surrounding Regions',
    milestones: [
      'Consistent daily feeding drives for over 50 community stray dogs and animals',
      'Rescued and treated over 600 injured or abandoned animals',
      'Conducted community awareness workshops on animal rights and kindness'
    ]
  },
  {
    id: 'udaan-401',
    title: 'Project UDAAN: Women Empowerment & Financial Independence',
    category: 'Community',
    shortDescription: 'Empowering women by collaborating with rural self-help groups, promoting financial independence, skill development, and menstrual hygiene.',
    fullDescription: 'Project Udaan gives women the wings to fly toward economic self-reliance and dignity. We partner with rural self-help groups (SHGs) to provide vocational training in tailoring, handicrafts, and micro-entrepreneurship. Simultaneously, we lead widespread menstrual hygiene awareness campaigns and distribute sanitary napkins.',
    iconName: 'Users',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    impactMetric: '8,000+ Women Empowered',
    goal: 40000,
    raised: 35200,
    beneficiaries: '8,000+ women across self-help groups',
    location: 'Chhattisgarh & Rural India',
    milestones: [
      'Collaborated with 45+ rural self-help groups for sustainable income generation',
      'Distributed over 25,000 sanitary hygiene kits in underserved villages',
      'Trained 2,500+ women in vocational skills and financial management'
    ]
  },
  {
    id: 'prakriti-501',
    title: 'Project PRAKRITI: Environmental Conservation & Sustainability',
    category: 'Environment',
    shortDescription: 'Advocating for environmental sustainability by planting 20,000+ saplings, organizing cleanup drives, and promoting eco-friendly agriculture.',
    fullDescription: 'Project Prakriti is our pledge to heal and protect Mother Earth. We have planted and nurtured over 20,000+ native tree saplings with high survival rates. Our initiatives also include plastic-free awareness campaigns, water body rejuvenation, and training rural farmers in sustainable, chemical-free agricultural practices.',
    iconName: 'Trees',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    impactMetric: '20,000+ Saplings Planted',
    goal: 35000,
    raised: 31000,
    beneficiaries: 'Communities across multiple green corridors',
    location: 'Pan-India Eco-Restoration Zones',
    milestones: [
      'Successfully planted and maintained 20,000+ native tree saplings',
      'Organized 80+ urban and rural eco-cleanup and plantation drives',
      'Promoted sustainable agricultural techniques among 1,000+ farmers'
    ]
  },
  {
    id: 'vikas-601',
    title: 'Project VIKAS: Skill Development & Employability Bootcamps',
    category: 'Education',
    shortDescription: 'Facilitating employment through skill development and structured internships, having trained 30,000+ interns across diverse professional domains.',
    fullDescription: 'Project Vikas bridges the gap between academic education and real-world employability. Over the last four years, we have trained 30,000+ interns in practical domains including data operations, finance, research, content writing, digital marketing, and social work—transforming youth into confident industry professionals and community leaders.',
    iconName: 'GraduationCap',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    impactMetric: '30,000+ Interns Trained',
    goal: 45000,
    raised: 40500,
    beneficiaries: '30,000+ youth interns across India',
    location: 'Pan-India Remote & On-Ground Centers',
    milestones: [
      'Trained 30,000+ interns over 4 years in high-demand professional skills',
      'Provided mentorship in finance, research, digital marketing, and data operations',
      'Facilitated career placements and leadership development for thousands of graduates'
    ]
  }
];

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'stat-1',
    value: '50K+',
    numericValue: 50000,
    suffix: '+',
    label: 'Meals & Clothes Distributed',
    iconName: 'HeartPulse',
    description: 'Direct humanitarian relief provided to underprivileged families through Project Seva.'
  },
  {
    id: 'stat-2',
    value: '30K+',
    numericValue: 30000,
    suffix: '+',
    label: 'Interns & Youth Trained',
    iconName: 'GraduationCap',
    description: 'Youth upskilled in finance, research, content writing, and digital marketing over 4 years through Project Vikas.'
  },
  {
    id: 'stat-3',
    value: '20K+',
    numericValue: 20000,
    suffix: '+',
    label: 'Saplings Planted',
    iconName: 'Trees',
    description: 'Trees planted and nurtured through Project Prakriti for long-term environmental sustainability.'
  },
  {
    id: 'stat-4',
    value: '50+',
    numericValue: 50,
    suffix: '+',
    label: 'Stray Animals Fed Daily',
    iconName: 'HeartHandshake',
    description: 'Daily community feeding and animal welfare protection drives under Project Jeev.'
  }
];

export const BLOG_ARTICLES_DATA: BlogArticle[] = [
  {
    id: 'blog-vikas',
    title: 'Project Vikas: Transforming Careers, One Internship At A Time',
    date: '01 Mar 2025',
    category: 'EDUCATION & SKILL DEVELOPMENT',
    commentsCount: 0,
    viewsCount: 6408,
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
    summary: 'For the past four years, InAmigos Foundation has been committed to empowering young minds through Project Vikas, an initiative that has revolutionized internship opportunities across various domains.',
    fullContent: `For the past four years, InAmigos Foundation has been committed to empowering young minds through Project Vikas, an initiative that has revolutionized internship opportunities across various domains. With a vision to bridge the gap between education and employability, we have successfully provided 1,000+ internship opportunities, engaged with 100,000+ interns, and onboarded 30,000+ interns into diverse fields.

### Diverse Internship Opportunities
Our extensive internship programs cater to multiple career paths, ensuring students gain hands-on experience in their areas of interest. Some of our most sought-after internships include:
• **Digital Marketing & Social Media Marketing** – Practical exposure to brand building and online engagement strategies.
• **Content Writing & Graphic Designing** – Refining creative storytelling and design skills for impactful communication.
• **HR Internship & Community Management** – Learning the art of talent acquisition, employee engagement, and team building.
• **Volunteering & Virtual Volunteering** – Encouraging social responsibility and remote engagement.
• **Hosting & Event Management** – Enhancing leadership and coordination skills through live and virtual events.
• **Public Relations (PR) & Fundraising & CSR** – Building networks and contributing to social change.
• **Market Research & Operations & Management** – Gaining insights into consumer behavior and business operations.
• **Video Editing & Entrepreneurship & Startup Internship** – Shaping future entrepreneurs and creative professionals.

### Beyond Internships: Skill Development & Career Guidance
At Project Vikas, we believe in holistic development. Our initiatives go beyond internships, ensuring students are well-equipped with essential career skills. We actively conduct:
✅ **Webinars, Seminars, and Live Shows** – Featuring industry experts sharing valuable insights.
✅ **Talent Shows & Events** – Providing platforms for students to showcase their abilities.
✅ **Resume Building & Interview Preparation** – Enhancing employability through professional guidance.

### Reaching Every Corner of India
Our impact extends PAN India, reaching students from diverse backgrounds. Many of our interns have transitioned into full-time careers, securing roles in leading organizations. Join Project Vikas and become part of a movement that is shaping the future workforce. Opportunities await – are you ready to grow with us?`
  },
  {
    id: 'blog-water',
    title: 'Save Water, Save Life: A Call To Action By InAmigos Foundation',
    date: '30 Jan 2025',
    category: 'ENVIRONMENT, SUSTAINABILITY, SOCIAL IMPACT',
    commentsCount: 0,
    viewsCount: 3783,
    readTime: '5 min read',
    imageUrl: saveWaterGlobeImg,
    summary: 'Water is the essence of life, a resource so vital yet so undervalued. At InAmigos Foundation, we believe that saving water is not just an environmental necessity but also a responsibility for ensuring a sustainable future.',
    fullContent: `Water is the essence of life, a resource so vital yet so undervalued. Despite covering over 70% of the Earth’s surface, less than 1% of water is accessible and safe for human consumption. At InAmigos Foundation, we believe that saving water is not just an environmental necessity but also a responsibility for ensuring a sustainable future.

### The Global Water Crisis
The world is facing a water crisis. According to the United Nations, around 2 billion people lack access to safe drinking water, and by 2025, half of the world’s population is expected to live in water-stressed areas. From prolonged droughts to over-extraction of groundwater, the challenges are escalating. But the crisis isn’t just global; it’s personal. Every drop of water wasted today is a drop stolen from future generations.

### Why Saving Water Matters
1. **Environmental Balance:** Conserving water helps maintain the ecological balance, supporting the survival of countless species.
2. **Agricultural Sustainability:** Agriculture consumes about 70% of global freshwater. Efficient water use ensures food security.
3. **Energy Conservation:** Pumping, treating, and delivering water require energy. Saving water reduces the carbon footprint.
4. **Mitigating Climate Change:** Droughts and water scarcity are worsened by climate change. Conserving water helps adapt to these changes.

### InAmigos Foundation’s Initiatives
At InAmigos Foundation, we are committed to spreading awareness and driving action for water conservation through several impactful projects:
1. **Rainwater Harvesting Campaigns:** We actively promote the installation of rainwater harvesting systems in urban and rural areas. These systems capture and store rainwater, reducing dependence on groundwater and ensuring its sustainable use.
2. **Workshops on Water Management:** Through interactive workshops, we educate communities, schools, and organizations about efficient water usage, leak detection, and adopting water-saving habits.
3. **Tree Plantation Drives:** Trees play a crucial role in preserving water in the soil and maintaining the water cycle. Our plantation drives across drought-prone regions aim to improve groundwater recharge.
4. **Clean Water Accessibility:** In partnership with local governments and NGOs, we work to provide clean drinking water to underserved communities, ensuring that access to water is a right, not a privilege.

### Simple Ways You Can Save Water
Water conservation starts with you. Here are a few steps to make a difference:
• **Fix Leaks:** A dripping faucet can waste over 3,000 liters of water a year.
• **Turn Off Taps:** Don’t let the water run while brushing your teeth or washing dish.
• **Use Water-Efficient Fixtures:** Opt for low-flow showerheads and dual-flush toilets.
• **Reuse Water:** Collect water used for washing vegetables to water plants.
• **Educate Others:** Share water-saving tips with friends, family, and colleagues.

### A Call to Action
At InAmigos Foundation, we envision a future where everyone has access to clean water and respects its value. But we cannot achieve this alone. It requires collective effort—individuals, communities, and organizations must join hands to make water conservation a way of life. Let’s remember, every drop counts. Together, we can ensure that water continues to nourish life on Earth. Join us in our mission to save water and secure a better tomorrow. Take the pledge today with InAmigos Foundation to conserve water and spread awareness.`
  },
  {
    id: 'blog-mission-life',
    title: 'Mission Life: Great Vision Of InAmigos Foundation For A Sustainable Development Future',
    date: '30 Jan 2025',
    category: 'ENVIRONMENT, SUSTAINABILITY, SOCIAL IMPACT',
    commentsCount: 0,
    viewsCount: 2632,
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    summary: 'Mission Life (Lifestyle For Environment) is an initiative to promote sustainable living and combat climate change. At InAmigos Foundation, we embrace this responsibility by actively encouraging an environmentally conscious lifestyle.',
    fullContent: `### INTRODUCTION
Mission Life (Lifestyle For Environment) is an initiative to promote sustainable living and combat climate change. It was introduced by the Honorable Prime Minister of India, Shri Narendra Modi, at the 26th United Nations Climate Change Conference of the Parties (COP26) in Glasgow. This mission aims to unite people’s efforts in protecting the environment by addressing key challenges with collective responsibility.

In a democratic country like India, diversity is not just a characteristic to cherish; it also plays a crucial role in shaping a sustainable future. Protecting our planet ensures the preservation of our traditions, culture, and values while fulfilling the aspirations and dreams of over 1.25 billion Indians.

At InAmigos Foundation, we embrace this responsibility by actively encouraging an environmentally conscious lifestyle. Our vision is to reach individuals, inspire change, and drive sustainability efforts at the grassroots level.

### THE TRUE PURPOSE AND IMPORTANCE OF MISSION LIFE
• Encourages traditional practices to protect the planet sustainably.
• Promotes afforestation and green initiatives for environmental preservation.
• Reduces greenhouse gas emissions and supports clean energy initiatives.
• Fosters a sustainable lifestyle that enhances health and nutrition.
• Inspires citizens to take responsibility for their environmental impact.
• Supports sustainable consumption and production through government policies.
• Addresses climate change issues, ensuring food and water security.
• Aims to make at least 80% of Indian villages and urban areas environmentally sustainable by 2028.
• Encourages mindful resource utilization for a peaceful and sustainable future.
• Aligns with the United Nations Sustainable Development Goals (SDGs) for global environmental transformation.

### The Vision of InAmigos Foundation for a Sustainable Future

#### 1. SAVE ENERGY
Energy conservation reduces dependency on fossil fuels and promotes the use of renewable energy.
• Turn off unnecessary lights and utilize natural lighting.
• Use energy-efficient appliances like solar panels and fans instead of air conditioners.
• Prefer walking over driving whenever possible.
• Wash clothes in cold water and dry them naturally instead of using electric dryers.

#### 2. SAVE WATER
Water is the most valuable natural resource, essential for life and environmental balance.
• Collect rainwater for irrigation and household use.
• Fix leaking taps and use water-efficient appliances.
• Install low-flush toilets and water-saving showerheads.
• Avoid water wastage to ensure a sustainable future.

#### 3. SAY NO TO SINGLE-USE PLASTICS
Plastic pollution is a major environmental threat. Reducing its usage can significantly impact sustainability.
• Avoid plastic bags, straws, and cutlery; opt for reusable alternatives.
• Recycle plastic whenever possible.
• Choose natural fabric clothing over synthetic materials.
• Use reusable containers instead of plastic wraps.

#### 4. ADOPT SUSTAINABLE FOOD SYSTEMS
A sustainable food system ensures health and environmental well-being.
• Consume plant-based, seasonal, and locally sourced foods.
• Reduce food wastage and promote composting.
• Grow your own vegetables at home, schools, or workplaces.
• Support recycling and sustainable agriculture practices.

#### 5. REDUCE WASTE
Minimizing waste contributes to a cleaner and healthier environment.
• Carry reusable shopping bags and avoid unnecessary purchases.
• Buy in bulk and opt for second-hand clothing and furniture.
• Use refillable containers for food and beverages.
• Repair broken furniture and recycle materials.

#### 6. ADOPT A HEALTHY LIFESTYLE
A healthy lifestyle supports sustainability and overall well-being.
• Consume a balanced diet rich in fruits, vegetables, proteins, and whole grains.
• Avoid junk food, sugary beverages, and processed foods.
• Engage in regular physical activities like yoga and exercise.
• Avoid smoking and alcohol consumption.
• Practice meditation and self-care for mental and emotional well-being.

#### 7. REDUCE E-WASTE
Electronic waste poses a significant threat to both human health and the environment.
• Repair and reuse broken electronics instead of discarding them.
• Sell or donate used electronics for reuse.
• Opt for energy-efficient and long-lasting electronic products.
• Recycle electronic waste responsibly.

### A CALL FOR ACTION
We can make a difference by working together to create a world with clean oceans, green landscapes, and pure air. Sustainable development is the key to a prosperous future while preserving our traditional values. This is our opportunity to be a part of the vision and contribute to the mission of protecting the planet.

By embracing sustainability, we ensure a better world for ourselves and future generations. Let’s unite to build a cleaner, greener, and healthier Earth.
**Save Earth, Save Life!**`
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
