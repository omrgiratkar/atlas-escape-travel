import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Menu, X, Compass, BedDouble, Plane, Mountain, Heart, Users, Instagram, Facebook, Youtube, Mail, MapPin, Phone, ArrowDown, Check, Star, Send, Sparkles } from 'lucide-react'
import { photo, Reveal, SectionHead } from './shared'
import { gallery } from '../data'

export default function Gallery() {
  return <section className="gallery-section section-pad"><div className="gallery-head"><SectionHead eyebrow="POSTCARDS FROM EVERYWHERE" title={<>A world of <em>wonder.</em></>} copy="Little glimpses of the big, beautiful world waiting beyond your everyday."/></div><div className="gallery-grid">{gallery.map(([id,name],i)=><Reveal key={id} delay={(i%3)*.05} className={`gallery-item gallery-${i+1}`}><img src={photo(id,900)} alt={name} loading="lazy"/><div className="gallery-label"><span>0{i+1}</span>{name}</div></Reveal>)}</div></section>
}
