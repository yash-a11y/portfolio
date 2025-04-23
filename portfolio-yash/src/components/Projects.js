'use client';

import { Calendar, Github, ExternalLink, Code, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ImageContainer = ({ src, alt, onClick }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <motion.div
        className="relative flex-shrink-0 w-72 h-48 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.05 }}
        onClick={onClick}
      >
        <div className="text-gray-400 flex flex-col items-center">
          <ImageIcon size={24} />
          <span className="mt-2 text-sm">Image not available</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="relative flex-shrink-0 w-72 h-48 cursor-pointer rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover bg-gray-800"
        onError={() => setError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </motion.div>
  );
};

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Distributed Internet Banking – Microservices Architecture",
      organization: "University of Windsor, Windsor, ON",
      duration: "Jan 2025 – Present",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Keycloak", "Docker", "Kafka"],
      github: "https://github.com/yash-a11y/distributed-internet-banking",
      description: [
        "Built secure, modular Spring Boot microservices with OAuth2 via Keycloak and message passing using Kafka",
        "Deployed services via Docker Compose to ensure service isolation and scalability, enabling cloud native operation",
        "Achieved stable performance with 70% service availability under concurrent transaction simulations, validating system scalability"
      ],
      images: [
        "/images/projects/banking-1.png"
      ]
    },
    {
      title: "NYC Taxi Trip Data Analysis with Privacy-Enhancing Technique",
      organization: "University of Windsor, Windsor, ON",
      duration: "Jan 2025 - May 2025",
      technologies: ["Python", "Pandas", "Jupyter", "Matplotlib"],
      github: "https://github.com/yash-a11y/PET-on-big-data",
      description: [
        "Processed and analyzed 800,000+ records using Python, applying privacy-enhancing techniques to protect personally identifiable information",
        "Ensured 85% compliance with simulated differential privacy constraints while extracting meaningful geospatial trends"
      ],
      images: [
        "/images/projects/nyctaxi-1.png",
        "/images/projects/nyctaxi-2.png",
        "/images/projects/nyctaxi-3.png"
      ]
    },
    {
      title: "Distributed file system",
      organization: "University Of Windsor, Windsor, ON",
      duration: "Jan 2025 - Apr 2025",
      technologies: ["C", "Linux", "Selenium", "Socket Programming"],
      github: "https://github.com/yash-a11y/Distributed-File-System",
      description: [
        "Developed a fault-tolerant distributed file system using forked processes and sockets for asynchronous routing",
        "Supported 10+ concurrent clients with 99% uptime in testing environments, showcasing system robustness"
      ],
      images: [
        "/images/projects/dfs.png"
      ]
    },
    {
      title: "PickAPlan",
      organization: "University Of Windsor, Windsor, ON",
      duration: "Sep 2024 - Dec 2024",
      technologies: ["Java", "Spring Boot", "Selenium", "Firebase", "Retrofit", "Stripe", "native-android"],
      github: "https://github.com/yash-a11y/PickAPlan",
      description: [
        "Designed and developed a mobile app for comparing Canadian data plans, incorporating Selenium-based web scraping, a Spring Boot backend, and Firebase authentication",
        "Enhanced user experience by implementing advanced search functionalities, preference filtering, and secure transactions using optimized algorithms and Stripe integration"
      ],
      images: [
        "/images/projects/pickaplan-1.png",
        "/images/projects/pickaplan-2.png",
        "/images/projects/pickaplan-3.png"
      ]
    },
    {
      title: "Techno IT Hub Application",
      organization: "Techno IT Hub, Ahmedabad, India",
      duration: "Jan 2023 - Jun 2023",
      technologies: ["Flutter", "Spring Boot", "Razorpay", "CI/CD", "Cross-platform android"],
      link: "https://apkpure.com/techno-it-hub/com.techit.technoithub",
      description: [
        "Utilized Riverpod for state management, Dio for API integration, and Firebase (Realtime Database, Auth, Analytics) for backend services",
        "Created REST APIs using Spring Boot, implemented Razor-Pay for payment processing, and deployed via CI/CD to the Play Store"
      ],
      images: [
        "/images/projects/technoithub-1.png",
        "/images/projects/technoithub-2.png",
        "/images/projects/technoithub-3.png"
      ]
    },
    {
      title: "Fitness App (Android)",
      organization: "Personal Project",
      duration: "Sep 2022 – Dec 2022",
      technologies: ["Kotlin", "XML", "Room Database", "Kotlin Coroutines", "Intent Navigation"],
      github: "https://github.com/yash-a11y/fitness_App",
      description: [
        "Built an Android fitness app with home dashboard, BMI calculator and workout tracking screens using modern Android development practices",
        "Integrated Room Database for storing user data securely in internal storage, ensuring persistence across sessions",
        "Implemented asynchronous data operations using Kotlin Coroutines, enhancing performance and UI responsiveness"
      ],
      images: [
        "/images/projects/fitness-1.png"
      ]
    },
    {
      title: "Notes Application (Android)",
      organization: "Personal Project",
      duration: "Jul 2022 – Oct 2022",
      technologies: ["Kotlin", "XML", "Room (Jetpack)", "MVVM", "RecyclerView"],
      github: "https://github.com/yash-a11y/Notes",
      description: [
        "Developed a modern note-taking Android app with features to add, edit, and delete notes using Room Database and MVVM architecture",
        "Designed a clean and responsive UI using XML and integrated RecyclerView for dynamic note listing and updates",
        "Applied Jetpack components to ensure scalable architecture and smooth user interactions with persistent local storage"
      ],
      images: [
        "/images/projects/notes-1.png"
      ]
    },
    {
      title: "E-Commerce Application",
      organization: "L.D. College Of Engineering, Ahmedabad, India",
      duration: "Jan 2022 - Jun 2022",
      technologies: ["PHP", "MySQL", "REST API", "OkHttp", "XML", "Android"],
      github: "https://github.com/yash-a11y/E-Commerce-",
      description: [
        "Built a PHP & MySQL backend with REST APIs, enabling seamless product management and user transactions",
        "Integrated OkHttp network client in the Android application for efficient API data fetching",
        "Designed an intuitive XML-based UI with features such as category-wise filtering, cart, and wishlist for smooth shopping experience"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-700/50"
        >
          {/* Project Images */}
          {project.images && project.images.length > 0 && (
            <div className="mb-6 overflow-hidden rounded-xl">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x scrollbar-hide">
                {project.images.map((image, i) => (
                  <ImageContainer
                    key={i}
                    src={image}
                    alt={`${project.title} screenshot ${i + 1}`}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{project.title}</h3>
            <div className="flex items-center gap-2 text-green-400">
              <Calendar size={16} />
              <span>{project.duration}</span>
            </div>
          </div>

          {/* Organization */}
          <div className="text-gray-300 mb-4">
            <div className="flex items-center gap-2">
              <Code size={16} className="text-blue-400" />
              <span>{project.organization}</span>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <motion.span 
                key={i}
                className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:bg-gray-600/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Description */}
          <ul className="space-y-3 mb-4">
            {project.description.map((point, i) => (
              <motion.li 
                key={i} 
                className="flex gap-3 text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <span className="text-green-400 mt-1.5">•</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>

          {/* Links */}
          <div className="flex gap-4 mt-4">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                <span>View Code</span>
              </motion.a>
            )}
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </motion.div>
      ))}

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative w-full h-full flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full max-w-5xl max-h-[85vh] bg-gray-800/50 rounded-lg overflow-hidden">
              <div className="relative w-full h-full aspect-[16/9]">
                <Image
                  src={selectedImage}
                  alt="Project screenshot"
                  fill
                  className="object-contain"
                  onError={() => setSelectedImage(null)}
                  quality={100}
                  priority
                />
              </div>
            </div>
            <button
              className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors bg-black/50 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}