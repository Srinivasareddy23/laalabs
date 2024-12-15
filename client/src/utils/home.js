import Innovation from '../../public/Images/innovation.jpg';
import Future from '../../public/Images/future.jpg';
import Technology from '../../public/Images/technology.jpg';
import Ideas from '../../public/Images/ideas.jpg';
import { FaCogs, FaUserFriends, FaChartLine, FaClipboardCheck, FaBullseye, FaHandsHelping, FaRocket } from "react-icons/fa";
import { FaNodeJs, FaReact, FaAws, FaDocker, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


export const carouselData = [
  {
    image: Innovation,
    heading: "Innovate for a Better Tomorrow",
    text: "Transforming ideas into powerful digital solutions to achieve your vision.",
    path: '/innovating',
  },
  {
    image: Future,
    heading: "Shaping the Future with AI and Beyond",
    text: "Leveraging artificial intelligence, quantum computing, and more to redefine possibilities.",
    path: '/futuring',
  },
  {
    image: Technology,
    heading: "Redefining Digital Transformation",
    text: "Empowering businesses with scalable, secure, and sustainable technology solutions.",
    path: '/digital-transformation',
  },
  {
    image: Ideas,
    heading: "Crafting Bold Ideas into Reality",
    text: "Transforming ambitious ideas into impactful, world-class experiences.",
    path: '/creative-solutions',
  },
];

export const testimonials = [
  {
    name: "Haifa D",
    title: "CEO, Fanadaq",
    text: "LaaLabs has been instrumental in transforming our business. Their dedication and innovation are unmatched.",
  },
  {
    name: "Govindraj P",
    title: "CTO, 39 properties",
    text: "The team at LaaLabs helped us build a user-friendly platform. Their technical expertise and design thinking are top-notch.",
  },
  {
    name: "Thaman S",
    title: "Founder, Startup Inc.",
    text: "Working with LaaLabs was a game changer. They delivered beyond expectations, providing exceptional results.",
  },
  {
    name: "Raina S",
    title: "COO, Digital Networks",
    text: "LaaLabs’ solutions empowered our team to be more productive, and the design process was seamless.",
  },
];

export const workData = [
  {
    title: "E-commerce Revolution",
    description:
      "Built a scalable e-commerce platform enabling global reach, seamless user experience, and optimized transactions.",
    icon: '/images/ecommerce.jpg',
  },
  {
    title: "Smart Healthcare",
    description:
      "Engineered an intelligent healthcare management system to streamline patient care and health record organization.",
    icon: '/images/hospitalicon.jpg',
  },
  {
    title: "AI Insights Hub",
    description:
      "Developed an AI-powered analytics platform to drive decision-making with actionable insights for businesses.",
    icon: '/images/innovation.jpg',
  },
];

export const futureProjects = [
  {
    title: "AI-Driven Healthcare",
    description: "Empowering healthcare systems with predictive analytics and real-time solutions.",
    image: "/images/hospitalicon.jpg",
  },
  {
    title: "Next-Gen E-commerce",
    description: "Creating seamless, personalized, and immersive shopping experiences.",
    image: "/images/ecommerce.jpg",
  },
  {
    title: "Autonomous Systems",
    description: "Driving innovation in robotics for real-world applications.",
    image: "/images/innovation.jpg",
  },
];

export const howItWorksSteps = [
  { icon: <FaCogs />, title: "Plan", description: "Strategize and define the scope of your project." },
  { icon: <FaUserFriends />, title: "Collaborate", description: "Engage with stakeholders and team members." },
  { icon: <FaChartLine />, title: "Design", description: "Create designs tailored to your needs." },
  { icon: <FaClipboardCheck />, title: "Develop", description: "Build your project with precision and care." },
  { icon: <FaBullseye />, title: "Test", description: "Ensure quality with rigorous testing procedures." },
  { icon: <FaHandsHelping />, title: "Launch", description: "Deploy your project seamlessly." },
  { icon: <FaRocket />, title: "Support", description: "Provide continuous support and improvements." },
];


export const employeeTestimonials = [
  {
    name: 'Srinivasareddy',
    role: 'UI Developer',
    quote: `Working at LaaLabs has been an enriching journey. The focus on cutting-edge technology and seamless collaboration creates an ideal environment for growth. My skills in UI development have flourished here.`,
    image: '/Images/user.png',
  },
  {
    name: 'Srikanth',
    role: 'Associate UI Developer',
    quote: `At LaaLabs, the supportive team and innovative projects keep me motivated every day. The company fosters creativity and ensures everyone feels valued in their role.`,
    image: '/Images/user.png',
  },
  {
    name: 'Siva Reddy',
    role: 'Java Full Stack Developer',
    quote: `LaaLabs provides the perfect blend of technical challenges and professional growth. The work culture is amazing, and the team spirit makes every project a rewarding experience.`,
    image: '/Images/user.png',
  },
  {
    name: 'Manikanta',
    role: 'Manual Tester',
    quote: `The positive work environment at LaaLabs has helped me enhance my problem-solving skills. The emphasis on quality and innovation makes it a great place to grow.`,
    image: '/Images/user.png',
  },
  {
    name: 'Ramesh Rao',
    role: 'Laravel Developer',
    quote: `LaaLabs is a hub of innovation and collaboration. The company’s commitment to excellence has significantly advanced my development skills while providing a fulfilling career path.`,
    image: '/Images/user.png',
  },
];


export const roles = [
  {
    title: 'DevOps Engineer',
    description: 'Manage and optimize infrastructure, automate processes, and ensure seamless deployments for a reliable system.',
    path : '/openings/devops-engineer'
  },
  {
    title: 'MERN Stack Developer',
    description: 'Develop end-to-end applications using MongoDB, Express.js, React, and Node.js, ensuring robust and scalable solutions.',
    path : '/openings/mernstack-developer'
  },
  {
    title: 'Java Backend Developer',
    description: 'Design and implement backend services and APIs using Java, focusing on scalability, performance, and maintainability.',
    path : 'openings/java-backend-developer'
  },
];


export const technologies = [
  { name: "Node.js", icon: <FaNodeJs size={24} /> },
  { name: "React", icon: <FaReact size={24} /> },
  { name: "Next.js", icon: <TbBrandNextjs size={24} /> },
  { name: "MongoDB", icon: <SiMongodb size={24} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
  { name: "AWS", icon: <FaAws size={24} /> },
  { name: "Docker", icon: <FaDocker size={24} /> },
  { name: "GitHub", icon: <FaGithub size={24} /> },
];

export const services = [
  {
    title: 'Web Development',
    description: 'Crafting responsive, fast, and scalable websites using the latest web technologies.',
    image: '/images/webdevelopment.jpg',
  },
  {
    title: 'Mobile App Development',
    description: 'Designing and developing feature-rich mobile apps for Android and iOS platforms.',
    image: '/images/mobileappdevelopment.jpg',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating user-centric, visually appealing interfaces and experiences.',
    image: '/images/uiux.jpg',
  },
  {
    title: 'AI & Machine Learning Solutions',
    description: 'Integrating AI-driven systems to automate processes and enhance decision-making.',
    image: '/images/artificial.jpg',
  },
  {
    title: 'Cloud Computing Services',
    description: 'Providing cloud migration, integration, and management for scalable solutions.',
    image: '/images/cloudcomputing.jpg',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Building secure, scalable online stores with seamless payment integration.',
    image: '/images/ecommerces.jpg',
  },
  {
    title: 'Digital Marketing',
    description: 'Boosting your brand with data-driven strategies across SEO, PPC, and social media.',
    image: '/images/marketing.jpg',
  },
];

export const Values = [
              {
                title: 'Mission',
                text: 'Our mission is to empower businesses with cutting-edge technology, fostering sustainable growth through innovative, reliable, and scalable solutions.',
                image: '/images/mission.jpg',
              },
              {
                title: 'Vision',
                text: 'We envision a future where technology serves as a bridge to unlock human potential, enabling businesses to achieve excellence and make a global impact.',
                image: '/images/vision.jpg',
              },
];

export const Founders = [
              {
                name: 'Bhramaih',
                role: 'CEO & Co-Founder',
                bio: 'A visionary leader with a passion for technology and innovation.',
                image: '/Images/john_doe.jpg',
              },
              {
                name: 'Peraiah',
                role: 'CTO & Co-Founder',
                bio: 'With a deep understanding of technical architecture, Jane ensures our solutions are future-ready.',
                image: '/Images/jane_smith.jpg',
              },
              {
                name: 'willaims',
                role: 'COO & Co-Founder',
                bio: 'An operations expert, Sam ensures smooth processes and exceptional client delivery.',
                image: '/Images/sam_wilson.jpg',
              },
];

export const Cultures = [
  {
    title: 'Innovation',
    description:
      'We thrive on creative ideas and cutting-edge technologies, ensuring that every solution we deliver is ahead of the curve.',
    icon: '💡',
  },
  {
    title: 'Collaboration',
    description:
      'Our team operates as a family, working together to achieve shared goals and celebrating each milestone as a unit.',
    icon: '🤝',
  },
  {
    title: 'Integrity',
    description:
      'Honesty and trust are at the heart of everything we do, helping us build meaningful relationships with our clients and team members.',
    icon: '🌟',
  },
  {
    title: 'Customer First',
    description:
      'We are committed to exceeding client expectations by providing personalized, impactful, and timely solutions.',
    icon: '👥',
  },
  {
    title: 'Continuous Learning',
    description:
      'We embrace growth by staying updated with the latest trends and empowering our team with learning opportunities.',
    icon: '📚',
  },
  {
    title: 'Sustainability',
    description:
      'We believe in creating a better future by adopting sustainable practices in all aspects of our operations.',
    icon: '🌱',
  },
];

export const Whyjoin = [
  {
    title: 'Innovative Culture',
    description: 'We nurture creativity and foster innovative thinking in all projects.',
    icon: '🚀',
  },
  {
    title: 'Career Growth',
    description: 'Customized career paths and mentorship programs to help you excel.',
    icon: '📈',
  },
  {
    title: 'Wellness First',
    description: 'Holistic wellness programs and work-life balance to keep you thriving.',
    icon: '💡',
  },
]


