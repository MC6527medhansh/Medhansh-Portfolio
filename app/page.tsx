"use client"; // Enables client-side rendering for this page

// Importing required modules and components
import { Canvas } from '@react-three/fiber'; // For rendering 3D content
import { OrbitControls } from '@react-three/drei'; // For controlling 3D camera interactions
import { Suspense } from 'react'; // For handling lazy loading
import Link from 'next/link'; // For client-side routing
import { Button } from '@/components/ui/button'; // Custom button UI component
import { Input } from '@/components/ui/input'; // Custom input UI component
import { Textarea } from '@/components/ui/textarea'; // Custom textarea UI component
import { Github, Linkedin, Mail } from 'lucide-react'; // Icons for GitHub, LinkedIn, and Mail
import IITDelhiExperience from '@/components/experiences/iit-delhi-experience'; // 3D experience for IIT Delhi
import UBCSailbotExperience from '@/components/experiences/ubc-sailbot-experience'; // 3D experience for UBC Sailbot
import VisualCognitionLabExperience from '@/components/experiences/visual-cognition-lab-experience'; // 3D experience for Visual Cognition Lab
import FruitNinjaProject from '@/components/projects/fruit-ninja-project'; // 3D project for Fruit Ninja
import EmployeeAttritionProject from '@/components/projects/employee-attrition-project'; // 3D project for Employee Attrition
import MeteorDemo from '@/components/ui/MeteorDemo'; // Import MeteorDemo component
import BoxReveal from '@/components/ui/box-reveal'; // Import BoxReveal for animated headings
import {ParticlesDemo} from '@/components/ui/particlesDemo'; // Import ParticlesDemo component
import HTTPSServerProject from '@/components/projects/https-server';
import FruitNinjaGame from '@/components/projects/fruit-ninja-project';
import CataractAIProject from '@/components/projects/cataract-ai-project'; // Add this line



export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-darkgrey dark:bg-gray-900 relative">
      {/* Header Section */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:border-gray-800">
        <div className="container mx-auto px-4 flex h-14 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-black">Medhansh Choubey</span>
            </Link>

            {/* Mobile Hamburger Menu */}
            <div className="block md:hidden">
            <button
                className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
                aria-label="Open navigation menu"
            >
                {/* Replace with Hamburger Icon */}
                <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                ></path>
                </svg>
            </button>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex gap-4 sm:gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4 text-black">
                About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:underline underline-offset-4 text-black">
                Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4 text-black">
                Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4 text-black">
                Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4 text-black">
                Contact
            </Link>
            </nav>
        </div>
        </header>

      {/* Main Content */}
      <main className="flex flex-col items-center w-full">
        {/* Hero Section */}
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative -mt-20">
          <MeteorDemo />
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-2 md:py-5 bg-white dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center mx-auto text-center px-4 md:px-6 max-w-6xl min-h-[50vh]">
            <BoxReveal boxColor="#003366" duration={0.5}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-black text-center">About Me</h2>
            </BoxReveal>
            <p className="mt-4 text-black md:text-xl max-w-3xl mx-auto text-center">
              I'm a second year Statistics student at the University of British Columbia, passionate about data science and software
              development. With a strong foundation in computational structures and programming, I'm constantly seeking
              opportunities to apply my skills in real-world scenarios.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-16 md:py-24">
          <div className="flex flex-col items-center justify-center mx-auto text-center px-4 md:px-6 max-w-6xl min-h-[50vh]">
            <BoxReveal boxColor="#003366" duration={0.5}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-black text-center">Experience</h2>
            </BoxReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="h-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <ParticlesDemo/>
                <IITDelhiExperience />
              </div>
              <div className="h-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <UBCSailbotExperience />
              </div>
              <div className="h-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <VisualCognitionLabExperience />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-16 md:py-24 bg-white">
          <div className="flex flex-col items-center justify-center mx-auto text-center px-4 md:px-6 max-w-6xl min-h-[50vh]">
            <BoxReveal boxColor="#003366" duration={0.5}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-black text-center">Projects</h2>
            </BoxReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <CataractAIProject />
              <FruitNinjaGame />
              <HTTPSServerProject />
              <EmployeeAttritionProject />
            </div>
          </div>
        </section>


        {/* Skills Section */}
        <section id="skills" className="w-full py-16 md:py-24">
          <div className="flex flex-col items-center justify-center mx-auto text-center px-4 md:px-6 max-w-6xl min-h-[50vh]">
            <BoxReveal boxColor="#003366" duration={0.5}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-black text-center">Skills</h2>
            </BoxReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                'Python',
                'Java',
                'C',
                'HTML/CSS',
                'JavaScript',
                'SQL',
                'PyTorch',
                'scikit-learn',
                'OpenCV',
                'React.js',
                'Firebase',
                'GitHub',
              ].map((skill) => (
                <div 
                  key={skill} 
                  className="rounded-lg shadow p-4 text-center text-white"
                  style={{ backgroundColor: '#003366' }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center mx-auto text-center px-4 md:px-6 max-w-6xl min-h-[50vh]">
            <BoxReveal boxColor="#003366" duration={0.5}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-black text-center">Contact Me</h2>
            </BoxReveal>
            <form className="max-w-md mx-auto space-y-4">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-black">© 2024 Medhansh Choubey. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="https://github.com/MC6527medhansh" className="text-black hover:text-gray-700">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/medhanshchoubey" className="text-black hover:text-gray-700">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:medhanshchoubey230804@gmail.com" className="text-black hover:text-gray-700">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
