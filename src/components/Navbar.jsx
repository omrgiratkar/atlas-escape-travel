import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Menu, X, Compass, BedDouble, Plane, Mountain, Heart, Users, Instagram, Facebook, Youtube, Mail, MapPin, Phone, ArrowDown, Check, Star, Send, Sparkles } from 'lucide-react'
import { photo, Reveal, SectionHead } from './shared'

export default function Navbar() {
  const [scrolled,setScrolled]=useState(false),[open,setOpen]=useState(false)
  useEffect(()=>{const f=()=>setScrolled(window.scrollY>35);window.addEventListener('scroll',f);return()=>window.removeEventListener('scroll',f)},[])
  const links=[['Home','home'],['About','about'],['Destinations','destinations'],['Services','services'],['Packages','packages'],['Our Goal','goal'],['Contact','contact']]
  const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setOpen(false)}
  return <motion.header className={`navbar ${scrolled?'scrolled':''}`} initial={{y:-80}} animate={{y:0}} transition={{duration:.7}}>
    <a className="brand" href="#home" onClick={e=>{e.preventDefault();go('home')}}><span className="brand-mark"><Compass size={22}/></span><span>atlas<span className="brand-amp">&</span>escape<small>TRAVEL, THOUGHTFULLY</small></span></a>
    <nav className="desktop-nav">{links.map(([l,id])=><button key={id} onClick={()=>go(id)}>{l}</button>)}</nav>
    <button className="nav-cta" onClick={()=>go('packages')}>Explore trips <ArrowUpRight size={16}/></button>
    <button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    <AnimatePresence>{open&&<motion.nav className="mobile-nav" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}>{links.map(([l,id])=><button key={id} onClick={()=>go(id)}>{l}<ArrowUpRight size={15}/></button>)}<button className="mobile-cta" onClick={()=>go('packages')}>Explore trips <ArrowRight size={16}/></button></motion.nav>}</AnimatePresence>
  </motion.header>
}
