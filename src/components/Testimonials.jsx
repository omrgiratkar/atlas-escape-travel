import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { reviews } from "./OurGoal";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonials section-pad">
      <div className="testimonial-left">
        <span className="eyebrow">KIND WORDS, BIG MEMORIES</span>

        <h2>
          Stories from
          <br />
          <em>the other side.</em>
        </h2>

        <p>
          Every trip leaves a story. Here are a few imagined examples of the
          moments we're here to help create.
        </p>

        <div className="slider-controls">
          <button
            onClick={() =>
              setActive((active + reviews.length - 1) % reviews.length)
            }
            aria-label="Previous testimonial"
          >
            <ArrowRight className="flip" size={18} />
          </button>

          <span>
            0{active + 1} <i>/</i> 0{reviews.length}
          </span>

          <button
            onClick={() => setActive((active + 1) % reviews.length)}
            aria-label="Next testimonial"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="testimonial-card-wrap">
        <AnimatePresence mode="wait">
          <motion.article
            key={active}
            className="testimonial-card"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.35 }}
          >
            <div className="quote-mark">“</div>

            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>

            <blockquote>{reviews[active].quote}</blockquote>

            <div className="reviewer">
              <div className="avatar">{reviews[active].initials}</div>

              <div>
                <strong>{reviews[active].name}</strong>
                <small>
                  TRAVELLED TO {reviews[active].place.toUpperCase()}
                </small>
              </div>

              <Sparkles className="review-spark" size={22} />
            </div>
          </motion.article>
        </AnimatePresence>

        <p className="sample-note">
          Illustrative sample testimonials — not verified customer reviews.
        </p>
      </div>
    </section>
  );
}
