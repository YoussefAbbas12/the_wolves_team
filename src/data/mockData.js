import { Code2, Shield, Megaphone, Palette, Mic } from 'lucide-react';

export const departments = [
  {
    id: 1,
    title: 'Programming',
    arTitle: 'البرمجة',
    description: 'Building the foundation of the future. Full-stack, AI, and systems engineering.',
    arDescription: 'بناء أساس المستقبل. تطوير كامل (Full-stack)، الذكاء الاصطناعي وهندسة النظم.',
    deepDetails: 'Our programming division focuses on modern web frameworks (React, Node), AI integration, and scalable cloud infrastructure. Members participate in intensive hackathons and build real-world tools.',
    arDeepDetails: 'يركز قسم البرمجة لدينا على أطر عمل الويب الحديثة، ودمج الذكاء الاصطناعي، والبنية التحتية السحابية القابلة للتوسع. يشارك الأعضاء في هاكاثونات مكثفة ويبنون أدوات حقيقية.',
    icon: Code2,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 2,
    title: 'Cyber Security',
    arTitle: 'الأمن السيبراني',
    description: 'Protecting the pack. Ethical hacking, cryptography, and network defense.',
    arDescription: 'حماية القطيع. الاختراق الأخلاقي، التشفير، والدفاع عن الشبكات.',
    deepDetails: 'The first line of defense. We train in penetration testing, reverse engineering, and threat analysis. Our members regularly compete in global CTF competitions.',
    arDeepDetails: 'خط الدفاع الأول. نتدرب على اختبار الاختراق، الهندسة العكسية، وتحليل التهديدات. يتنافس أعضاؤنا بانتظام في مسابقات CTF العالمية.',
    icon: Shield,
    color: 'from-slate-600 to-indigo-500'
  },
  {
    id: 3,
    title: 'Marketing',
    arTitle: 'التسويق',
    description: 'Spreading the vision. Strategic growth, community building, and digital presence.',
    arDescription: 'نشر الرؤية. النمو الاستراتيجي، بناء المجتمع، والتواجد الرقمي.',
    deepDetails: 'Crafting the Wolves narrative. We specialize in digital campaigns, SEO, and community engagement, ensuring our impact is known globally.',
    arDeepDetails: 'صياغة قصة الذئاب. نحن متخصصون في الحملات الرقمية وتحسين محركات البحث والتفاعل المجتمعي لضمان وصول تأثيرنا عالمياً.',
    icon: Megaphone,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    title: 'Graphic Design',
    arTitle: 'التصميم الجرافيكي',
    description: 'Crafting the identity. UI/UX, 3D modeling, and visual storytelling.',
    arDescription: 'صناعة الهوية. واجهة وتجربة المستخدم، النمذجة ثلاثية الأبعاد، والقصص البصرية.',
    deepDetails: 'Turning ideas into visual masterpieces. Our design team creates high-impact UI/UX interfaces, 3D assets, and cohesive branding for all our projects.',
    arDeepDetails: 'تحويل الأفكار إلى روائع بصرية. يصمم فريقنا واجهات مستخدم عالية التأثير وأصول 3D وهوية بصرية متماسكة لجميع مشاريعنا.',
    icon: Palette,
    color: 'from-emerald-400 to-teal-600'
  },
  {
    id: 5,
    title: 'Public Speaking',
    arTitle: 'التحدث أمام الجمهور',
    description: 'Leading the narrative. Presentation skills, leadership, and communication.',
    arDescription: 'قيادة السرد. مهارات العرض، القيادة، والتواصل.',
    deepDetails: 'The voice of the pack. We develop leaders who can articulate complex technical concepts with clarity, confidence, and charisma on global stages.',
    arDeepDetails: 'صوت القطيع. نحن نطور قادة يمكنهم التعبير عن المفاهيم التقنية المعقدة بوضوح وثقة وكاريزما على المسارح العالمية.',
    icon: Mic,
    color: 'from-amber-500 to-orange-600'
  }
];

export const achievements = [
  {
    id: 1,
    name: 'Ahmed Y.',
    arName: 'أحمد ي.',
    username: '@ahmed_sec',
    role: 'Lead Security Researcher',
    arRole: 'باحث أمني رئيسي',
    avatarImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    postImg: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    text: 'Discovered a critical zero-day vulnerability in a major open-source framework. Patch released globally today. Security is not an option; it is a necessity.',
    arText: 'اكتشفت ثغرة يوم صفر خطيرة في أحد أطر العمل مفتوحة المصدر الكبرى. تم إطلاق التحديث عالمياً اليوم. الأمن ليس خياراً بل ضرورة.',
    tags: ['#cybersecurity', '#zeroday', '#bounty'],
    timeAgo: '2h',
    arTimeAgo: 'منذ ساعتين',
    verified: true,
    likes: 1240,
    comments: 89,
    shares: 45
  },
  {
    id: 2,
    name: 'Sarah K.',
    arName: 'سارة ك.',
    username: '@sarah_dev',
    role: 'Frontend Developer',
    arRole: 'مطور واجهات أمامية',
    avatarImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    postImg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    text: 'Won 1st place in the National Hackathon for our AI-driven accessibility tool! Proud of the Wolves Team for the late nights and flawless execution. 🐺🔥',
    arText: 'حصلنا على المركز الأول في الهاكاثون الوطني بفضل أداة سهولة الوصول المدعومة بالذكاء الاصطناعي! فخورة بفريق الذئاب والسهر والتنفيذ الخالي من العيوب. 🐺🔥',
    tags: ['#hackathon', '#frontend', '#ai'],
    timeAgo: '1d',
    arTimeAgo: 'منذ يوم',
    verified: true,
    likes: 3890,
    comments: 210,
    shares: 800
  },
  {
    id: 3,
    name: 'Omar T.',
    arName: 'عمر ط.',
    username: '@omar_ui',
    role: 'UI/UX Designer',
    arRole: 'مصمم واجهات',
    avatarImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    text: 'Published my new design system which reached 10,000 downloads on Figma community in just a week. The UI game is changing.',
    arText: 'نشرت نظام التصميم الجديد الخاص بي والذي وصل إلى 10,000 تحميل في مجتمع فيجما في غضون أسبوع واحد فقط.',
    tags: ['#design', '#uiux', '#milestone'],
    timeAgo: '3d',
    arTimeAgo: 'منذ 3 أيام',
    verified: false,
    likes: 850,
    comments: 42,
    shares: 12
  }
];

export const members = [
  {
    id: 1,
    name: 'Tarek F.',
    arName: 'طارق ف.',
    role: 'Founder & CEO',
    arRole: 'المؤسس والمدير التنفيذي',
    specialty: 'Visionary & Systems Architect',
    arSpecialty: 'صاحب رؤية ومهندس أنظمة',
    bio: 'Tarek founded Wolves Team to bridge the gap between ambition and execution. He architects large-scale systems and leads the overall strategy.',
    arBio: 'أسس طارق فريق الذئاب لسد الفجوة بين الطموح والتنفيذ. وهو يهندس الأنظمة واسعة النطاق ويقود الاستراتيجية الشاملة.',
    avatarImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop',
    socials: { x: '#', linkedin: '#', github: '#' }
  },
  {
    id: 2,
    name: 'Nour E.',
    arName: 'نور إ.',
    role: 'Head of Engineering',
    arRole: 'رئيس قسم الهندسة',
    specialty: 'Full-Stack & Cloud Infrastructure',
    arSpecialty: 'تطوير كامل وبنية سحابية',
    bio: 'Nour leads the technical execution. With a background in scalable cloud solutions, she ensures every project is robust and performant.',
    arBio: 'تقود نور التنفيذ التقني. بخلفية في الحلول السحابية القابلة للتوسع، تضمن أن كل مشروع قوي وعالي الأداء.',
    avatarImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    socials: { github: '#', linkedin: '#' }
  },
  {
    id: 3,
    name: 'Youssef A.',
    arName: 'يوسف أ.',
    role: 'Cyber Security Lead',
    arRole: 'رئيس الأمن السيبراني',
    specialty: 'Penetration Testing & Cryptography',
    arSpecialty: 'اختبار الاختراق والتشفير',
    bio: 'Youssef keeps the pack safe. He specializes in ethical hacking and frequently publishes research on emerging security threats.',
    arBio: 'يحافظ يوسف على سلامة القطيع. متخصص في الاختراق الأخلاقي وينشر أبحاثاً بانتظام حول التهديدات الأمنية الناشئة.',
    avatarImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop',
    socials: { x: '#' }
  },
  {
    id: 4,
    name: 'Hana S.',
    arName: 'هنا س.',
    role: 'Lead Designer',
    arRole: 'كبير المصممين',
    specialty: 'UI/UX & Brand Identity',
    arSpecialty: 'واجهة المستخدم وهوية العلامة',
    bio: 'Hana translates complex ideas into beautiful, intuitive interfaces. Her work defines the premium aesthetic of the Wolves Team.',
    arBio: 'تترجم هنا الأفكار المعقدة إلى واجهات جميلة وبديهية. عملها يحدد الجمالية النخبوية لفريق الذئاب.',
    avatarImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
    socials: { linkedin: '#' }
  }
];
