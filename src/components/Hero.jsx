import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Menu, X, Compass, BedDouble, Plane, Mountain, Heart, Users, Instagram, Facebook, Youtube, Mail, MapPin, Phone, ArrowDown, Check, Star, Send, Sparkles } from 'lucide-react'
import { photo, Reveal, SectionHead } from './shared'

export default function Hero() {
  return <section id="home" className="hero">
    <div className="hero-bg" style={{backgroundImage:`url(${photo('photo-1476514525535-07fb3b4ae5f1',2200)})`}}/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <motion.div className="hero-kicker" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.25}}><span/> THE WORLD IS WIDE. GO FEEL IT.</motion.div>
      <motion.h1 initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{delay:.4,duration:1}}>Find your<br/><em>somewhere.</em></motion.h1>
      <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.65}}>Meaningful journeys, made around you.<br/>For the places that stay with you long after you leave.</motion.p>
      <motion.div className="hero-actions" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.85}}>
        <a href="#destinations" className="btn btn-light">Explore destinations <ArrowUpRight size={17}/></a><a href="#about" className="text-link light-link">Discover our story <ArrowRight size={16}/></a>
      </motion.div>
    </div>
    <div className="hero-bottom"><span>01 — 08&nbsp;&nbsp; CURATED FOR THE CURIOUS</span><span className="hero-location"><MapPin size={14}/> EVERYWHERE, WITH INTENTION</span></div>
    <motion.a href="#about" className="scroll-cue" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}}><span>SCROLL TO EXPLORE</span><ArrowDown size={16}/></motion.a>
    <div className="hero-stamp"><Sparkles size={17}/><span>GO<br/>BEYOND<br/>ORDINARY</span></div>
  </section>
}
