import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Menu, X, Compass, BedDouble, Plane, Mountain, Heart, Users, Instagram, Facebook, Youtube, Mail, MapPin, Phone, ArrowDown, Check, Star, Send, Sparkles } from 'lucide-react'
import { photo, Reveal, SectionHead } from './shared'
import { destinations } from '../data'

export default function Destinations() {
  return <section id="destinations" className="destinations section-pad">
    <div className="dest-top"><SectionHead eyebrow="THE WORLD, IN GOOD COMPANY" title={<>Places that <em>pull you in.</em></>} copy="From far-flung coastlines to familiar mountain air, find a place that feels like yours."/></div>
    <div className="dest-grid">{destinations.map((d,i)=><Reveal key={d.name} delay={(i%4)*.06} className={`dest-card dest-${i+1}`}><div className="dest-image"><img src={photo(d.image,850)} alt={`${d.name}, ${d.country}`} loading="lazy"/><span className="dest-tag">{d.tag}</span><span className="dest-number">0{i+1}</span><div className="dest-overlay"><p>{d.description}</p><a href="#contact" aria-label={`Enquire about ${d.name}`}><ArrowUpRight/></a></div></div><div className="dest-info"><div><h3>{d.name}</h3><span>{d.country}</span></div><div className="dest-price"><small>JOURNEYS FROM</small><strong>{d.price}</strong></div></div></Reveal>)}</div>
    <div className="center-action"><a href="#contact" className="btn btn-outline">Find your next escape <ArrowUpRight size={17}/></a></div>
  </section>
}
const iconMap={compass:Compass,bed:BedDouble,plane:Plane,mountain:Mountain,heart:Heart,users:Users}
