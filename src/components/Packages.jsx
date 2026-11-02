import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Menu, X, Compass, BedDouble, Plane, Mountain, Heart, Users, Instagram, Facebook, Youtube, Mail, MapPin, Phone, ArrowDown, Check, Star, Send, Sparkles } from 'lucide-react'
import { photo, Reveal, SectionHead } from './shared'
import { packages } from '../data'

export default function Packages() {
  return <section id="packages" className="packages section-pad"><SectionHead eyebrow="A GOOD PLACE TO BEGIN" title={<>Choose your <em>kind of escape.</em></>} copy="A few thoughtfully put-together ways to get out there. Every itinerary can be made your own."/>
    <div className="package-grid">{packages.map((p,i)=><Reveal key={p.name} delay={i*.1}><article className={`package-card ${p.popular?'popular':''}`}>{p.popular&&<div className="popular-ribbon">MOST LOVED <Sparkles size={13}/></div>}<span className="package-number">0{i+1} / THE COLLECTION</span><p className="package-note">{p.note}</p><h3>{p.name}<em> journey</em></h3><div className="package-duration">{p.duration}</div><div className="package-price"><small>STARTING AT</small><strong>{p.price}</strong><span>/ person</span></div><div className="package-rule"/><ul>{p.features.map(f=><li key={f}><Check size={15}/>{f}</li>)}</ul><a href="#contact" className={`btn ${p.popular?'btn-dark':'btn-outline'}`}>Plan this trip <ArrowUpRight size={16}/></a></article></Reveal>)}</div><p className="price-note">*Prices are illustrative starting prices and may vary by destination, travel dates, group size and availability.</p>
  </section>
}
