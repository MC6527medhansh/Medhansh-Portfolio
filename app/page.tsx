'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import Loader from "../components/Loader";
import { Github, Linkedin, Mail } from 'lucide-react'
import IITDelhiExperience from '../components/experiences/iit-delhi-experience'
import UBCSailbotExperience from '../components/experiences/ubc-sailbot-experience'
import VisualCognitionLabExperience from '../components/experiences/visual-cognition-lab-experience'
import FruitNinjaProject from '../components/projects/fruit-ninja-project'
import EmployeeAttritionProject from '../components/projects/employee-attrition-project'

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-400 dark:bg-gray-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:border-gray-800">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-black">Medhansh Choubey</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
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

      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Medhansh Choubey
                </h1>
                <p className="mx-auto max-w-[700px] text-black md:text-xl dark:text-black">
                  Statistics Student | Data Science Enthusiast | Software Developer
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button asChild>
                  <Link href="#projects" className="border border-input bg-background hover:bg-accent hover:text-accent-foreground">View Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-black">About Me</h2>
            <p className="mt-4 max-w-[700px] text-black md:text-xl">
              I'm a Statistics student at the University of British Columbia, passionate about data science and software development. With a strong foundation in computational structures and programming, I'm constantly seeking opportunities to apply my skills in real-world scenarios.
            </p>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-black">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="h-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <Canvas>
                  <Suspense fallback={null}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <IITDelhiExperience />
                  </Suspense>
                </Canvas>
              </div>
              <div className="h-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <Canvas>
                  <Suspense fallback={null}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <UBCSailbotExperience />
                  </Suspense>
                </Canvas>
              </div>
              <div className="h-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <Canvas>
                  <Suspense fallback={null}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <VisualCognitionLabExperience />
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-black">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-[300px] bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                <Canvas>
                  <Suspense fallback={null}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <FruitNinjaProject />
                  </Suspense>
                </Canvas>
              </div>
              <div className="h-[300px] bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                <Canvas>
                  <Suspense fallback={null}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <EmployeeAttritionProject />
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-black">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Python', 'Java', 'C', 'HTML/CSS', 'JavaScript', 'SQL', 'PyTorch', 'scikit-learn', 'OpenCV', 'React.js', 'Firebase', 'GitHub'].map((skill) => (
                <div key={skill} className="bg-white dark:bg-gray-700 rounded-lg shadow p-4 text-center text-black">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-black">Contact Me</h2>
            <form className="max-w-md mx-auto space-y-4">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-black">© 2024 Medhansh Choubey. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="https://github.com/yourgithub" className="text-black hover:text-gray-700">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/in/medhansh-choubey" className="text-black hover:text-gray-700">
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
  )
}

