import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Menu, X, Compass, BedDouble, Plane, Mountain, Heart, Users, Instagram, Facebook, Youtube, Mail, MapPin, Phone, ArrowDown, Check, Star, Send, Sparkles } from 'lucide-react'
import { photo, Reveal, SectionHead } from './shared'

export default function About() {
  return <section id="about" className="about section-pad">
    <div className="about-grid">
      <div className="about-visual"><Reveal className="about-photo-main"><img src={photo('photo-1470770841072-f978cf4d019e')} alt="Serene alpine lake surrounded by mountains" loading="lazy"/></Reveal><Reveal className="about-photo-small" delay={.15}><img src={photo('photo-1500530855697-b586d89ba3ee')} alt="Traveller exploring a scenic landscape" loading="lazy"/></Reveal><div className="about-note"><span>EST.</span><strong>2024</strong><small>THE ART OF<br/>GETTING LOST</small></div></div>
      <div className="about-copy"><span className="eyebrow">A DIFFERENT WAY TO WANDER</span><h2>Travel is not just<br/>where you go. It's<br/><em>how it makes you feel.</em></h2><p className="lead">We believe the best journeys have a little less checklist and a lot more feeling.</p><p>Atlas & Escape is a travel studio for people who want to experience the world, not simply pass through it. We bring together thoughtful planning, local perspective and the freedom to find your own rhythm.</p><a href="#goal" className="under-link">A little more about us <ArrowUpRight size={16}/></a>
        <div className="stats"><div><strong>35<span>+</span></strong><small>DESTINATIONS</small></div><div><strong>1.2k</strong><small>HAPPY EXPLORERS</small></div><div><strong>240<span>+</span></strong><small>JOURNEYS PLANNED</small></div></div>
      </div>
    </div>
  </section>
}
