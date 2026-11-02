import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Menu, X, Compass, BedDouble, Plane, Mountain, Heart, Users, Instagram, Facebook, Youtube, Mail, MapPin, Phone, ArrowDown, Check, Star, Send, Sparkles } from 'lucide-react'
import { photo, Reveal, SectionHead } from './shared'

export default function Goal() {
  return <section id="goal" className="goal"><div className="goal-image"><img src={photo('photo-1469474968028-56623f02e42e',1400)} alt="Sunlight falling across a beautiful mountain landscape" loading="lazy"/><div className="goal-image-caption">TAKE THE SCENIC ROUTE.</div></div><div className="goal-content"><span className="eyebrow">WHY ATLAS & ESCAPE</span><h2>Leave room for<br/><em>the unexpected.</em></h2><p className="goal-lead">Our goal is simple: make travel feel more human, more considered and more memorable.</p><div className="goal-points"><div><span>01</span><section><h3>Our mission</h3><p>To make meaningful travel more accessible through personal planning and thoughtful experiences.</p></section></div><div><span>02</span><section><h3>Our vision</h3><p>A world where every journey brings us closer to new perspectives, people and places.</p></section></div><div><span>03</span><section><h3>Our promise</h3><p>Honest guidance, careful details and a real person to help when you need one.</p></section></div></div><a href="#contact" className="btn btn-light">Travel with us <ArrowUpRight size={17}/></a></div></section>
}
export const reviews=[
  {name:'Aarav Mehta',place:'Bali, Indonesia',quote:'The itinerary felt like it was made by someone who really knew us. We found little places we would nfever have discovered on our own.',initials:'AM'},
  {name:'Mira & Rohan',place:'Kashmir, India',quote:'Everything was beautifully thought through, but never felt over-planned. We could just enjoy being there. Already dreaming of the next one.',initials:'MR'},
  {name:'Ananya Shah',place:'Switzerland',quote:'From the first conversation to the final day, the team made the whole experience feel effortless. The views were unreal.',initials:'AS'},
  {name:'Kabir S.',place:'Maldives',quote:'A wonderfully calm, personal experience. The stay, the little details and the pace were exactly what I needed.',initials:'KS'}
]
