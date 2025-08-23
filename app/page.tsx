"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Linkedin, Facebook, Instagram } from "lucide-react"
import profile from "@/static/profile-pic.jpg"
import rootme from "@/static/root-me-logo.png"
import hackthebox from "@/static/hackthebox-logo.png"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import RecrutementForm1 from "@/static/RecrutementForm1.png"
import RecrutementForm2 from "@/static/RecrutementForm2.png"
import RecrutementForm3 from "@/static/RecrutementForm3.png"
import FalseSeismicAlertsDetection1 from "@/static/FalseSeismicAlertsDetection1.jpeg"
import FalseSeismicAlertsDetection2 from "@/static/FalseSeismicAlertsDetection2.jpeg"
import FalseSeismicAlertsDetection3 from "@/static/FalseSeismicAlertsDetection3.jpeg"
import DentalClinicManagement1 from "@/static/DentalClinic1.png"
import DentalClinicManagement2 from "@/static/DentalClinic2.jpg"
import DentalClinicManagement3 from "@/static/DentalClinic3.jpg"
import XmppCracker1 from "@/static/XmppCracker1.jpg"
import XmppCracker2 from "@/static/XmppCracker2.jpg"
import XmppCracker3 from "@/static/XmppCracker3.jpg"
import BoumerdesExplorer1 from "@/static/BoumerdesExplorer1.webp"
import BoumerdesExplorer2 from "@/static/BoumerdesExplorer2.webp"
import BoumerdesExplorer3 from "@/static/BoumerdesExplorer3.webp"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Portfolio() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const recruitmentImages = [RecrutementForm1, RecrutementForm2, RecrutementForm3]
  const falseSeismicAlertDetectionImages = [FalseSeismicAlertsDetection1, FalseSeismicAlertsDetection2, FalseSeismicAlertsDetection3]
  const dentalClinicManagementImages = [DentalClinicManagement1, DentalClinicManagement2, DentalClinicManagement3]
  const xmppCrackerImages = [XmppCracker1, XmppCracker2, XmppCracker3]
  const boumerdesExplorerImages = [BoumerdesExplorer1, BoumerdesExplorer2, BoumerdesExplorer3]
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % recruitmentImages.length)
    }, 2000) // Switch every 2 seconds

    return () => clearInterval(interval)
  }, [recruitmentImages.length])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="text-xl font-bold text-blue-900 dark:text-orange-500">
          Portfolio<span className="text-gray-900 dark:text-white">.</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-blue-900 dark:text-orange-500 hover:text-blue-500 dark:hover:text-orange-400 transition-colors">
            Home
          </a>
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-orange-400 transition-colors">
            About
          </a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-orange-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-orange-400 transition-colors">
            Contact
          </a>
        </div>
        <ThemeToggle />
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex py-10 md:py-15 px-3 md:px-28">
        <div className="w-full md:flex-1 p-1">
          <p className="text-gray-500 dark:text-gray-400 mb-2">Hello,</p>
          <h1 className="text-5xl font-bold mb-4">
            I&apos;m <span className="text-blue-900 dark:text-orange-500">Younes</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-2 w-2xl">Full Stack Web Developer | Murn Developer</p>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-2 w-2xl">Web_Applications & Networks security enthusiast</p>
          <p className="text-gray-500 dark:text-gray-400 mb-8">From Algeria</p>
          <a href="mailto:khiatyounes27@gmail.com?subject=Job Opportunity&body=Hello Younes,%0D%0A%0D%0AI would like to discuss a job opportunity with you.%0D%0A%0D%0ABest regards">
            <Button className="bg-blue-900 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-8 py-3">Hire Me</Button>
          </a>
        </div>
        {/* This div is only visible on md+ screens, hidden on mobile */}
        <div className="hidden md:flex justify-center">
          <div className="">
            <div className="w-72 h-72 rounded-full pointer-events-none flex items-center justify-center bg-blue-900/80 dark:bg-orange-800/80">
              <Image
                src={profile.src}
                alt="Profile silhouette"
                className="w-64 h-64 object-contain rounded-full"
                width={256}
                height={256}
              />
              {/* Gradient effect as a foreground layer - transparent center, colored borders */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
            {/* About Section */}
      <section id="about" className="md:px-28 py-12 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex items-center justify-around gap-36">
            <div className="flex- gap-8">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-orange-500 mb-4">About Me</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">I&apos;m a passionate Web Application & Network Security enthusiast and Full-Stack Web Developer (MERN).</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed ">On the security side, I focus on understanding and exploiting vulnerabilities (Web, Network, and System) to strengthen applications and infrastructures through ethical hacking, penetration testing, and CTF challenges.</p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">I participated in <a href="https://www.instagram.com/p/DGXheruogVi/" className="text-blue-600 dark:text-orange-600/90">Ingehack-CTF-4</a> & <a href="https://www.instagram.com/p/DKCxtAPoNxV/" className="text-blue-600 dark:text-orange-600/90">CTF-ELDJAZAIR-2025</a> & <a href="https://www.instagram.com/p/DLX8WSXIXeE/" className="text-blue-600 dark:text-orange-600/90">Hackini-CTF-2025</a></p> 
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">On the development side, I design and build dynamic applications using the MERN stack (MongoDB, Express.js, React, Node.js), with a strong interest in performance optimization, scalable architectures, and seamless user experiences.</p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">I participated in <a href="https://www.instagram.com/p/DD65SMysYP1/?Image_index=8" className="text-blue-600 dark:text-orange-600/90">Boumerdes-Smart-City</a> & <a href="https://www.instagram.com/p/DF0rVSiOvjg/" className="text-blue-600 dark:text-orange-600/90">Tatweer</a></p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">I am a Master 1 student in Computer Systems and Networks at SAAD Dahleb University. I also hold the Cisco CCNA 1: Introduction to Networks certification.</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">Currently i&apos;m focusing on exploring more security world while keep my self up-to-date with development world</p>
              <a href="/Modern-Minimalist-CV-Resume.pdf" download="Younes_Khiat_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-900 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-8 py-3">Download CV</Button>
              </a>
            </div>
            <div className="flex md:flex-col items-center justify-center gap-16 py-3">
              <div>
                <a href="https://www.root-me.org/Houddini?lang=en" className="flex items-center rounded-2xl px-4 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <div className="w-30 h-30 rounded-full flex items-center justify-center">
                    <Image src={rootme.src} alt="Profile silhouette" className="w-80 h-80 object-contain" width={120} height={120} />
                  </div>
                  <h4>My Rootme Account</h4>
                </a>
              </div>
              <div>
                <a href="https://app.hackthebox.com/profile/2289462" className="flex items-center rounded-2xl px-4 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <div className="w-30 h-30 rounded-full  flex items-center justify-center">
                    <Image src={hackthebox.src} alt="Profile silhouette" className="w-full h-full object-contain" width={120} height={120} />
                  </div>
                  <h4>My HackTheBox Account</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-orange-500 mb-12 text-center">My Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 text-center hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors">
              <h3 className="text-left text-lg font-bold text-blue-900 dark:text-orange-500">Recrutement-Form</h3>
              <div className="w-82 h-48 bg-blue-900 dark:bg-orange-600 rounded-xl flex items-center justify-center overflow-hidden">
                <Image 
                  src={recruitmentImages[currentImageIndex].src} 
                  alt="recrutement-form-cscc"
                  className="w-full h-full object-cover"
                  width={120}
                  height={120}
                />
              </div>
              <div className="">
                <p className="text-gray-600 dark:text-gray-300 text-left mb-2">A dynamic recruitment form  built with React and Express, designed for css recrutement </p>
                <div className="flex justify-center gap-4">
                  <Button className="bg-blue-900 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-3 py-3">View Project</Button>
                  <a href="https://github.com/Younes-khiat/recrutement-form-challenge"><Button className="bg-blue-900 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-3 py-3">View Code</Button></a>
              </div>
              </div>
              
            </Card>
            
            <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 text-center hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors">
              <h3 className="text-left font-bold text-blue-900 dark:text-orange-500">False Seismic Alerts Detection</h3>
              <div className="w-82 h-48 bg-blue-900 dark:bg-orange-600 rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src={falseSeismicAlertDetectionImages[currentImageIndex].src}
                  alt="False Seismic Alerts Detection"
                  className="w-full h-full object-cover"
                  width={120}
                  height={120}
                />
              </div>
              <div className="">
                <p className="text-gray-600 dark:text-gray-300 text-left mb-2">A project focused on detecting false seismic alerts using machine learning techniques.</p>
                <div className="flex justify-center gap-4">
                  <Button className="bg-blue-900 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-3 py-3">View Project</Button>
                  <a href="https://github.com/Younes-khiat/false-seismic-alerts-detection"><Button className="bg-blue-900 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-3 py-3">View Code</Button></a>
                </div>
              </div>
            </Card>
            <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 text-center hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors">
              <h3 className="text-left font-bold text-blue-900 dark:text-orange-500">Dental Clinic Management</h3>
              <div className="w-82 h-48 bg-blue-900 dark:bg-orange-600 rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src={dentalClinicManagementImages[currentImageIndex].src}
                  alt="Dental Clinic Management"
                  className="w-full h-full object-cover"
                  width={120}
                  height={120}
                />
              </div>
              <div className="">
                <p className="text-gray-600 dark:text-gray-300 text-left mb-2">A comprehensive management system for dental clinics, built with React and Node.js.</p>
                <div className="flex justify-center gap-4">
                  <Button className="bg-blue-900 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-3 py-3">View Project</Button>
                  <a href="https://github.com/Younes-khiat/dental-clinic-management"><Button className="bg-blue-900 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-3 py-3">View Code</Button></a>
                </div>
              </div>
              
            </Card>
            <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 text-center hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors">
              <h3 className="text-left font-bold text-blue-900 dark:text-orange-500">Xmpp Cracker</h3>
              <div className="w-82 h-48 bg-blue-900 dark:bg-orange-600 rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src={xmppCrackerImages[currentImageIndex].src}
                  alt="Xmpp Cracker"
                  className="w-full h-full object-cover"
                  width={120}
                  height={120}
                />
              </div>
              <div className="">
                <p className="text-gray-600 dark:text-gray-300 text-left mb-2">A tool for cracking xmpp authentication using a wordlist from a pcap file.</p>
                <div className="flex justify-center gap-4">
                  <Button className="bg-blue-900 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-3 py-3">View Project</Button>
                  <a href="https://github.com/Younes-khiat/XMPP-Cracker"><Button className="bg-blue-900 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-3 py-3">View Code</Button></a>
                </div>
              </div>
            </Card>
            <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 text-center hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors">
              <h3 className="text-left font-bold text-blue-900 dark:text-orange-500">Boumerdes Explorer</h3>
              <div className="w-82 h-48 bg-blue-900 dark:bg-orange-600 rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src={boumerdesExplorerImages[currentImageIndex].src}
                  alt="Boumerdes Explorer"
                  className="w-full h-full object-cover"
                  width={120}
                  height={120}
                />
              </div>
              <div className="">
                <p className="text-gray-600 dark:text-gray-300 text-left mb-2">A web application that manages tourism in Boumerdes, shows touristic attractions and provides information to visitors, also help investors find opportunities (from BSC hackathon).</p>
                <div className="flex justify-center gap-4">
                  <Button className="bg-blue-900 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-3 py-3">View Project</Button>
                  <a href="https://github.com/Younes-khiat/smart-cit--back-strapi"><Button className="bg-blue-900 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-3 py-3">View Code</Button></a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-orange-500 mb-6">Contact Me</h2>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Don&apos;t hesitate to approach me</h3>
          <div className="flex justify-center items-center space-x-6 my-4">
            <a href="https://www.facebook.com/younes.khiat.526/" target="_blank" rel="noopener noreferrer" className="transition-colors">
              <Facebook className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-blue-900 dark:hover:text-orange-400 cursor-pointer transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/younes-khiat-23696031a/" target="_blank" rel="noopener noreferrer" className="transition-colors">
              <Linkedin className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-blue-900 dark:hover:text-orange-400 cursor-pointer transition-colors" />
            </a>
            <a href="https://www.instagram.com/you__ne.x.s/" target="_blank" rel="noopener noreferrer" className="transition-colors">
              <Instagram className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-blue-900 dark:hover:text-orange-400 cursor-pointer transition-colors" />
            </a>
          </div>
          <a href="mailto:khiatyounes27@gmail.com?subject=Let&apos;s Chat&body=Hello Younes,%0D%0A%0D%0AI would like to get in touch with you.%0D%0A%0D%0ABest regards">
            <Button className="bg-blue-900 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-12 py-4 text-lg">Let&apos;s Chat</Button>
          </a>
          
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 dark:bg-orange-600 text-white text-center py-4">
        <p>Created by Younes_Houddini | © 2025 All Rights Reserved</p>
      </footer>
    </div>
  )
}
