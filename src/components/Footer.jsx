import {
  Compass,
  Instagram,
  Facebook,
  Youtube,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand footer-logo" href="#home">
            <span className="brand-mark">
              <Compass size={22} />
            </span>

            <span>
              atlas<span className="brand-amp">&</span>escape
              <small>TRAVEL, THOUGHTFULLY</small>
            </span>
          </a>

          <p>
            For the curious, the open-hearted and everyone in between. Here's to
            finding your somewhere.
          </p>

          <div className="footer-social">
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

        <div className="footer-col">
          <h4>EXPLORE</h4>

          {[
            ["Home", "home"],
            ["Our story", "about"],
            ["Destinations", "destinations"],
            ["Travel gallery", "gallery"],
            ["Tour packages", "packages"],
          ].map(([label, id]) => (
            <button key={id} onClick={() => go(id)}>
              {label}
            </button>
          ))}
        </div>

        <div className="footer-col">
          <h4>THE GOOD STUFF</h4>

          {[
            "Custom journeys",
            "Handpicked stays",
            "Adventure trips",
            "Honeymoon escapes",
            "Group getaways",
          ].map((item) => (
            <a key={item} href="#services">
              {item}
            </a>
          ))}
        </div>

        <div className="footer-news">
          <h4>A NOTE FROM US</h4>

          <p>
            Occasional inspiration for your next great escape. No noise, just
            good places.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Newsletter email"
            />

            <button type="submit" aria-label="Subscribe">
              <ArrowUpRight />
            </button>
          </form>

          <small>Newsletter UI preview — subscription is not active.</small>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 ATLAS & ESCAPE. MADE FOR THE JOURNEY.</span>

        <div>
          <a href="#">Privacy policy</a>
          <a href="#">Terms & conditions</a>
        </div>

        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
