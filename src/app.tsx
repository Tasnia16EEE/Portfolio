import React, { useState, useRef } from 'react';
import { Briefcase, GraduationCap, Code, Mail, Linkedin, Github, ExternalLink, ChevronDown, ChevronUp, MapPin, BookUser, FlaskConical } from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface Experience {
  role: string;
  company: string;
  duration: string;
  description?: string[];
}

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  gpa: string;
}

interface Project {
  title: string;
  description: string;
  repoUrl: string;
  tags?: string[];
}

interface ResearchItem {
    title: string;
    description: string;
    link: string;
    linkText: string;
}


// --- DATA FROM YOUR WEBSITE ---
const personalInfo = {
  name: "Tasnia Sultana",
  title: "Machine Learning Engineer @ AI Enthusiast",
  subtitle: "Research Assistant @ University of Washington",
  about: "I specialize in developing scalable AI solutions for resource-constrained environments, with a strong focus on neural network compression techniques including pruning, quantization, and knowledge distillation. My work spans model evaluation, dataset development, and multimodal optimization—driven by hands-on experience with Python, SQL, and PyTorch in computer vision and deep learning applications. Passionate about making AI more efficient and accessible, I aim to deliver high-impact, production-ready solutions through interdisciplinary collaboration.",
  email: "sultanatasniaeee92@gmail.com",
  phone: "+1 (253) 357-3143",
  location: "Washington, USA",
  linkedin: "https://www.linkedin.com/in/tasnia-sultana-15090a186/",
  github: "https://github.com/Tasnia16EEE",
  googleScholar: "https://scholar.google.com/citations?user=otnK6ocAAAAJ&hl=en",
};

const workExperience: Experience[] = [
  {
    role: "Research Assistant",
    company: "University of Washington Tacoma",
    duration: "Sept 2023 - Present",
  },
  {
    role: "Data Intern",
    company: "IB Analytica, USA",
    duration: "Mar 2025 - May 2025",
  },
  {
    role: "Junior Software Engineer Intern",
    company: "Sourcetop Inc, Bangladesh",
    duration: "Jul 2022 - Dec 2022",
  },
  {
    role: "General Secretary & Python Instructor",
    company: "Andromeda Space & Robotics Organization",
    duration: "Dec 2019 - Mar 2022",
  },
];

const education: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science & Systems",
    institution: "University of Washington Tacoma",
    duration: "2024 - Present",
    gpa: "GPA: 3.95 / 4.00"
  },
  {
    degree: "Bachelor of Science in Electrical & Electronic Engineering",
    institution: "Chittagong University of Engineering and Technology",
    duration: "2017 - 2022",
    gpa: "CGPA: 3.43 / 4.00"
  },
];

const research: ResearchItem[] = [
    {
        title: "Computer Vision",
        description: "A Computer Vision Approach for Detecting Discrepancies in Map Textual Labels”, Published at Journal of Distributed and Parallel Databases.",
        link: "https://link.springer.com/article/10.1007/s10619-025-07453-z",
        linkText: "Learn More"
    },
    {
        title: "Scalable AI",
        description: "MiniMedAssistant: A Multimodal Medical Assistant Model for Resource Constrained Devices.",
        link: "#",
        linkText: "In Progress"
    },
    {
        title: "Model Compression",
        description: "Survey on Multimodal Large Language Model Compression.",
        link: "#",
        linkText: "In Progress"
    },
    {
        title: "Electrical Model Simulation",
        description: "Effect of scandium concentration on the performances of cantilever based AlN unimorph piezoelectric energy harvester with silicon nitride substrate.",
        link: "https://link.springer.com/article/10.1007/s40243-024-00272-9",
        linkText: "Learn More"
    }
];

const projects: Project[] = [
  {
    title: "Fashion Product Recommendation System Using CLIP",
    description: "A CLIP-based fashion recommender that returns visually and textually similar items using image and text input.",
    repoUrl: "https://github.com/Tasnia16EEE/Fashion-Product-Recommendation-System-Using-Clip",
    tags: ["CLIP", "Recommendation System", "Computer Vision"]
  },
  {
    title: "Movie Recommender System",
    description: "A hybrid movie recommender using collaborative + content-based filtering.",
    repoUrl: "https://github.com/Tasnia16EEE/Movie-Recommender-System",
    tags: ["Collaborative Filtering", "Content-Based"]
  },
  {
    title: "Understanding Key Features of Swin V2 Transformer",
    description: "This project uses LIME to analyze SwinV2's object classification, revealing key feature dependencies and suggesting dataset refinement for improved accuracy.",
    repoUrl: "https://github.com/Tasnia16EEE/Swin-Transformer-Understanding-Key-Features-and-Dataset-Refinement",
    tags: ["SwinV2", "LIME", "XAI", "Transformer"]
  },
  {
    title: "Mask2Former Model Feature Importance",
    description: "This study explores feature importance in Mask2Former to improve interpretability, robustness, and transparency in image segmentation and object detection tasks.",
    repoUrl: "https://github.com/Tasnia16EEE/Feature-Importance-of-Mask2Former-Model",
    tags: ["Mask2Former", "Feature Importance", "Interpretability"]
  },
  {
    title: "Swin Transformer Lime Interpretability",
    description: "This project uses LIME to interpret Swin Transformer classifications, enhancing model transparency and trustworthiness.",
    repoUrl: "https://github.com/Tasnia16EEE/Lime_Interpretability",
    tags: ["LIME", "Swin Transformer", "XAI"]
  },
  {
    title: "Similarity Detection in Trajectory Databases",
    description: "Developed clustering algorithm with QuickBundles and DBSCAN with spatiotemporal metrics on SF Taxi Dataset to facilitate ridesharing.",
    repoUrl: "https://github.com/Tasnia16EEE/Similarity-Detection-in-Trajectory-Databases-to-Facilitate-Ridesharing/tree/main",
    tags: ["DBSCAN", "GIS", "Spatiotemporal Analysis"]
  },
  {
    title: "Quantization Aware Dynamic Scheduling",
    description: "Proposed a framework to speed up inference and optimize multimodal AI on low-power devices using Task parallelization and Graph Optimization.",
    repoUrl: "https://github.com/Tasnia16EEE/Quantization-Aware-Dynamic-Scheduling-Task-Parallelization-for-Resource-Constrained-Devices",
    tags: ["Quantization", "Task Parallelization", "Edge AI"]
  },
  {
    title: "Pruning Vision Transformer SwinV2",
    description: "A project focused on compressing the SwinV2 vision transformer model.",
    repoUrl: "https://colab.research.google.com/drive/1NBiobfeJgYQiIMkGLK17DzcFWGWFi_uk?usp=sharing",
    tags: ["Pruning", "Model Compression", "SwinV2"]
  },
  {
    title: "Data Science Projects and SQL Query Optimization",
    description: "A comprehensive portfolio showcasing various data science projects and SQL query optimization techniques.",
    repoUrl: "https://www.datascienceportfol.io/sultanatasniaeee92",
    tags: ["Data Science", "SQL", "Portfolio"]
  }
];

const skills = {
    "Programming Languages": ["Python", "R", "SQL", "C++", "Java", "HTML/CSS", "JavaScript", "TypeScript", "GoLang", "MATLAB"],
    "Tools": ["Google Colab", "Jupyter Notebook", "VS Code", "Weights & Biases", "Tableau", "Power BI", "Azure", "AWS", "Git", "JIRA"],
    "ML Frameworks": ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "PyTorch Lightning", "Hugging Face", "ONNX", "OpenCV", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    "AI Concepts": ["Supervised & Unsupervised Learning", "Deep Learning", "NLP", "Vision-Language Models", "Transformer Compression", "Model Compression", "Lightweight Inference", "Multimodal AI"]
};


// --- COMPONENTS ---

const Section: React.FC<{ id: string; title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ id, title, icon, children }) => (
  <section id={id} className="mb-16 md:mb-24 scroll-mt-20 text-center">
    <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-12 flex items-center justify-center gap-3">
      {icon}
      {title}
    </h2>
    {children}
  </section>
);

const TimelineItem: React.FC<{ title: string; subtitle: string; duration: string; children?: React.ReactNode }> = ({ title, subtitle, duration, children }) => (
  <div className="relative pl-8 sm:pl-12 pb-8 last:pb-0">
    <div className="absolute left-0 top-1 h-full border-l-2 border-teal-300 dark:border-teal-700"></div>
    <div className="absolute left-[-9px] top-1.5 w-5 h-5 bg-white dark:bg-slate-900 border-4 rounded-full border-teal-400 dark:border-teal-600"></div>
    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
    <p className="text-md font-medium text-teal-600 dark:text-teal-400 mb-1">{subtitle}</p>
    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{duration}</p>
    <div className="text-slate-600 dark:text-slate-300 space-y-2">{children}</div>
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white dark:bg-slate-800/50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 flex flex-col text-left">
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm flex-grow">{project.description}</p>
    {project.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
                <span key={tag} className="bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
            ))}
        </div>
    )}
    <div className="flex items-center gap-4 mt-auto">
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-teal-600 dark:text-teal-400 hover:underline font-medium">
          <Github size={16} /> View on GitHub
        </a>
    </div>
  </div>
);

const ResearchCard: React.FC<{ item: ResearchItem }> = ({ item }) => (
    <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-lg transition-colors duration-300 hover:bg-slate-200 dark:hover:bg-slate-800 text-left">
        <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">{item.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">{item.description}</p>
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
            {item.linkText} <ExternalLink size={16} />
        </a>
    </div>
);


const Header: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'research', label: 'Research' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 py-3 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-slate-900 dark:text-white" onClick={() => onNavigate('home')}>
          {personalInfo.name}
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => onNavigate(link.id)} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              {link.label}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 px-4 sm:px-6 lg:px-8 pb-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => { onNavigate(link.id); setIsOpen(false); }} className="text-left text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};


// --- MAIN APP COMPONENT ---
export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsToShow = showAllProjects ? projects : projects.slice(0, 6);
  const appRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'home' && appRef.current) {
      appRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div ref={appRef} className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans leading-relaxed">
      <Header onNavigate={handleNavigate} />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* --- Hero --- */}
        <section id="home" className="mb-16 md:mb-24 text-center scroll-mt-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-2">Hi, I'm <span className="text-teal-500">Tasnia Sultana</span></h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium mb-2">{personalInfo.title}</p>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8">{personalInfo.subtitle}</p>
          <div className="flex justify-center items-center gap-4">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-teal-500" aria-label="LinkedIn Profile">
                <Linkedin size={28} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-teal-500" aria-label="GitHub Profile">
                <Github size={28} />
              </a>
               <a href={personalInfo.googleScholar} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-teal-500" aria-label="Google Scholar Profile">
                <BookUser size={28} />
              </a>
          </div>
        </section>
        
        {/* --- About Me --- */}
        <Section id="about" title="About Me" icon={<BookUser/>}>
             <p className="max-w-4xl mx-auto text-slate-600 dark:text-slate-300 text-lg leading-relaxed">{personalInfo.about}</p>
        </Section>


        {/* --- Work Experience --- */}
        <Section id="experience" title="Work Experience" icon={<Briefcase />}>
          <div className="max-w-3xl mx-auto text-left">
            <div className="relative">
              {workExperience.map((exp, index) => (
                <TimelineItem key={index} title={exp.role} subtitle={exp.company} duration={exp.duration} />
              ))}
            </div>
          </div>
        </Section>

        {/* --- Research --- */}
        <Section id="research" title="Research & Publications" icon={<FlaskConical />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {research.map((item, index) => (
                    <ResearchCard key={index} item={item} />
                ))}
            </div>
        </Section>
        
        {/* --- Projects --- */}
        <Section id="projects" title="Projects" icon={<Code />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsToShow.map((proj, index) => (
              <ProjectCard key={index} project={proj} />
            ))}
          </div>
          {projects.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2 mx-auto"
              >
                {showAllProjects ? 'Show Less' : 'Show More'}
                {showAllProjects ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
          )}
        </Section>

        {/* --- Skills --- */}
        <Section id="skills" title="Technical Skills" icon={<Code />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="text-left">
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillList.map(skill => (
                                <span key={skill} className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 py-1 px-3 rounded-md text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        {/* --- Education --- */}
        <Section id="education" title="Education" icon={<GraduationCap />}>
           <div className="max-w-3xl mx-auto text-left">
            <div className="relative">
              {education.map((edu, index) => (
                <TimelineItem key={index} title={edu.degree} subtitle={edu.institution} duration={edu.duration}>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{edu.gpa}</p>
                </TimelineItem>
              ))}
            </div>
          </div>
        </Section>

        {/* --- Contact --- */}
        <Section id="contact" title="Get In Touch" icon={<Mail />}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Say Hello
            </a>
          </div>
        </Section>
      </main>

      <footer className="text-center py-6 border-t border-slate-200 dark:border-slate-800">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
