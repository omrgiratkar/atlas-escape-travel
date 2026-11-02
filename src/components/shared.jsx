import { motion, useReducedMotion } from 'framer-motion'

export const photo = (id, w=1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

export function Reveal({children,className='',delay=0}) {
  const reduce = useReducedMotion()
  return <motion.div className={className} variants={{hidden:{opacity:0,y:28},show:{opacity:1,y:0,transition:{duration:.7,ease:[.22,1,.36,1]}}}} initial="hidden" whileInView="show" viewport={{once:true,amount:.15}} transition={{delay:reduce?0:delay}}>{children}</motion.div>
}

export function SectionHead({eyebrow,title,copy,light=false}) {
  return <Reveal className={`section-head ${light?'light':''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</Reveal>
}
