import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Menu, X, Compass, BedDouble, Plane, Mountain, Heart, Users, Instagram, Facebook, Youtube, Mail, MapPin, Phone, ArrowDown, Check, Star, Send, Sparkles } from 'lucide-react'
import { photo, Reveal, SectionHead } from './shared'
import { services } from '../data'

const iconMap={compass:Compass,bed:BedDouble,plane:Plane,mountain:Mountain,heart:Heart,users:Users}

export default function Services() {
  return <section id="services" className="services section-pad"><div className="services-intro"><span className="eyebrow">THE DETAILS, BEAUTIFULLY HANDLED</span><h2>More than a trip.<br/><em>A whole feeling.</em></h2><p>Every good journey starts with a little curiosity. We take care of the details, so you can be fully there for the moments.</p><a href="#contact" className="under-link">Let's plan something <ArrowUpRight size={16}/></a></div>
    <div className="service-grid">{services.map(([ico,title,desc],i)=>{const Icon=iconMap[ico];return <Reveal key={title} delay={(i%2)*.08}><div className="service-card"><div className="service-icon"><Icon size={22}/></div><span className="service-index">0{i+1}</span><h3>{title}</h3><p>{desc}</p><ArrowUpRight className="service-arrow" size={19}/></div></Reveal>})}</div>
  </section>
}
