import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Compass,
  BedDouble,
  Plane,
  Mountain,
  Heart,
  Users,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowDown,
  Check,
  Star,
  Send,
  Sparkles,
} from "lucide-react";
import { photo, Reveal, SectionHead } from "./shared";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travellers: "2",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        destination: "",
        travellers: "2",
        message: "",
      });
    }, 850);
  };
  return (
    <section id="contact" className="contact section-pad">
      <div className="contact-top">
        <div>
          <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>
            Tell us where
            <br />
            you'd <em>love to go.</em>
          </h2>
          <p>
            Have a place in mind, or just a feeling you're chasing? Tell us a
            little and we'll take it from there.
          </p>
          <div className="contact-details">
            <a href="mailto:omgiratkar95@gmail.com">
              <Mail size={17} /> omgiratkar95@gmail.com
            </a>
            <a href="tel:+917720845031">
              <Phone size={17} /> +91 7720845031
            </a>
            <span>
              <MapPin size={17} /> Pune, Maharashtra, India
            </span>
          </div>
          <div className="contact-social">
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" aria-label="Youtube">
              <Youtube />
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-title">
            <span>LET'S MAKE IT HAPPEN</span>
            <Sparkles size={18} />
          </div>
          <div className="form-row">
            <label>
              Your name
              <input
                required
                name="name"
                value={form.name}
                onChange={update}
                placeholder="What should we call you?"
              />
            </label>
            <label>
              Email address
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Phone number
              <input
                required
                type="tel"
                name="phone"
                pattern="[0-9+() -]{7,18}"
                value={form.phone}
                onChange={update}
                placeholder="+91 98765 43210"
              />
            </label>
            <label>
              Where to?
              <input
                name="destination"
                value={form.destination}
                onChange={update}
                placeholder="Your dream destination"
              />
            </label>
          </div>
          <label>
            Number of travellers
            <select name="travellers" value={form.travellers} onChange={update}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6+</option>
            </select>
          </label>
          <label>
            Tell us a little more
            <textarea
              required
              name="message"
              rows="4"
              value={form.message}
              onChange={update}
              placeholder="Dates, ideas, the kind of trip you're dreaming of..."
            />
          </label>
          <button
            className="btn btn-dark submit-btn"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              "Sending your note..."
            ) : (
              <>
                Send an enquiry <Send size={16} />
              </>
            )}
          </button>
          {status === "success" && (
            <p className="success-message" role="status">
              Thank you! We will contact you soon.
            </p>
          )}
          <p className="form-disclaimer">
            Demo form only. Your details are not sent or stored.
          </p>
        </form>
      </div>
    </section>
  );
}
