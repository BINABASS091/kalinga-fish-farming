import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import heroFallback from './assets/hero-fallback.svg';
import logoFallback from './assets/logo-fallback.svg';

const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID ?? '';
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID ?? '';
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY ?? '';

const whatsappLink = 'https://wa.me/255672411558';
const facebookLink = 'https://www.facebook.com/claus.angelo';
const instagramLink = 'https://www.instagram.com/kalinga_fish_farm_iringa/';
const remoteLogoSrc = 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771859623/kalinga_-_fish_farming_p1aof7.png';

const navLinks = [
  { label: 'Overview', href: '#home' },
  { label: 'Operations', href: '#operations' },
  { label: 'Media', href: '#gallery' },
  { label: 'Contact', href: '#contact' }
];

const socialLinks = [
  { icon: 'bi-whatsapp', href: whatsappLink, label: 'WhatsApp' },
  { icon: 'bi-instagram', href: instagramLink, label: 'Instagram' },
  { icon: 'bi-facebook', href: facebookLink, label: 'Facebook' }
];

const heroMedia = {
  primary: {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1600,h_1100/v1771856246/fish70_x1oxm8.jpg',
    alt: 'Crew guiding a full net of catfish across the pond bank.'
  },
  trims: [
    {
      src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_800,h_800/v1772540691/WhatsApp_Image_2026-03-03_at_15.18.59_hsyuo7.jpg',
      caption: 'Sustainable water reservoir',
      alt: 'Man-made water reservoir surrounded by natural vegetation.'
    },
    {
      src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_800,h_800/v1772540689/WhatsApp_Image_2026-03-03_at_15.18.54_vbeqvw.jpg',
      caption: 'Aquaculture demo',
      alt: 'Presenter showcasing fish tanks during aquaculture exhibition.'
    }
  ]
};

const proofMetrics = [
  { value: '12', label: 'Operational ponds' },
  { value: '1.2T', label: 'Monthly harvest output' },
  { value: '72h', label: 'Max dispatch window' },
  { value: '200+', label: 'Regional buyers served' }
];

const capabilityTracks = [
  {
    title: 'Water & Habitat Engineering',
    description: 'Continuous data logging on pH, dissolved oxygen, and inflow velocity keeps every pond within target bands.',
    bullets: ['IoT probes + manual validation', 'Daily QA review at 06:30', 'Emergency aeration protocol'],
    image: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1400,h_900/v1772540685/WhatsApp_Image_2026-03-03_at_15.19.07_qdknt1.jpg',
    alt: 'Water-filled fish pond used for aquaculture.'
  },
  {
    title: 'Harvest Logistics Program',
    description: 'Structured seine schedules, insulated packing, and rapid weigh-ins create dependable delivery slots.',
    bullets: ['Slotting calendar shared weekly', 'Pack-outs to 2.5T per day', 'GPS-tracked dispatch vans'],
    image: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1400,h_900/v1772540684/WhatsApp_Image_2026-03-03_at_15.19.01_e9fs06.jpg',
    alt: 'Group meeting discussing fish farming project.'
  },
  {
    title: 'Client Experience Office',
    description: 'Dedicated buyer desk handles RFQs, certifications, and spot checks so procurement teams stay confident.',
    bullets: ['Same-day paperwork turnaround', 'WhatsApp + email coordination', 'Transparent farm access'],
    image: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1400,h_900/v1772540683/WhatsApp_Image_2026-03-03_at_15.19.02_ll7cih.jpg',
    alt: 'Participants touring aquaculture facility.'
  }
];

const galleryStories = [
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_1100/v1772540689/WhatsApp_Image_2026-03-03_at_15.18.56_2_einjij.jpg',
    tag: 'Aquaculture training',
    alt: 'Group participating in practical fish farming training.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_1100/v1771848224/fish1_tbbpc4.jpg',
    tag: 'Harvest line',
    alt: 'Crew hauling a seine net from the pond.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_1100/v1772540688/WhatsApp_Image_2026-03-03_at_15.19.08_2_yg1xpu.jpg',
    tag: 'Pond infrastructure',
    alt: 'Outdoor fish pond facility for aquaculture production.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_1100/v1771856251/fish66_kfhgex.jpg',
    tag: 'Sorting',
    alt: 'Catfish being graded for uniform sizing.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_1100/v1772540688/WhatsApp_Image_2026-03-03_at_15.18.56_bwz1yq.jpg',
    tag: 'Quality inspection',
    alt: 'Individual holding freshly harvested fish from pond.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_1100/v1771856241/fish74_c4lxma.jpg',
    tag: 'Quality check',
    alt: 'Fresh tilapia arranged for QA photos.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_1100/v1772540688/WhatsApp_Image_2026-03-03_at_15.18.57_1_dbjsln.jpg',
    tag: 'Community engagement',
    alt: 'Participants attending aquaculture awareness meeting.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_1100/v1771856240/fish75_drzgls.jpg',
    tag: 'Packaging',
    alt: 'Crates being sealed for transport to Dar es Salaam.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_1100/v1772540687/WhatsApp_Image_2026-03-03_at_15.18.57_qnxwml.jpg',
    tag: 'Field supervision',
    alt: 'Team inspecting fish pond during field visit.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_1100/v1771848223/fish5_zik1l7.jpg',
    tag: 'Catfish detail',
    alt: 'Close-up of catfish showing sheen and health.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_1100/v1772540686/WhatsApp_Image_2026-03-03_at_15.18.59_1_davy2w.jpg',
    tag: 'Harvest yield',
    alt: 'Display of harvested fish after pond draining.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_1100/v1771856264/fish57_mjcpsb.jpg',
    tag: 'Pond sunrise',
    alt: 'Sunlight reflecting on still pond water.'
  }
];

const videoShowcase = [
  {
    id: 'vid1',
    type: 'video',
    src: 'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish35_orgaov',
    title: 'Harvest operation — live footage from pond 4'
  },
  {
    id: 'vid2',
    type: 'video',
    src: 'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=WhatsApp_Video_2026-03-03_at_15.18.51_1_dd8dba',
    title: 'Live Demonstration of Sustainable Fish Farming'
  }
];

const photoStrip = [
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_640/v1772540686/WhatsApp_Image_2026-03-03_at_15.18.58_1_exllvc.jpg', alt: 'Trainees learning fish farming techniques outdoors.' },
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_640/v1772540685/WhatsApp_Image_2026-03-03_at_15.18.58_sh8nmq.jpg', alt: 'Community workshop on fish farming practices.' },
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_640/v1772540682/WhatsApp_Image_2026-03-03_at_15.19.08_m11ttn.jpg', alt: 'Large fish pond supporting community food production.' },
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_640/v1772540681/WhatsApp_Image_2026-03-03_at_15.19.09_sn0lme.jpg', alt: 'Community members participating in fish farming activities.' },
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_640/v1772540681/WhatsApp_Image_2026-03-03_at_15.19.08_3_jkhzwo.jpg', alt: 'Fish farming tools displayed during training session.' },
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_640/v1771856246/fish70_x1oxm8.jpg', alt: 'Crew guiding full net of catfish across the pond bank.' },
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_640/v1771856229/fish85_mu9he5.jpg', alt: 'Fresh catfish staged with ice before transport.' },
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_640/v1771856250/fish67_v3u9dl.jpg', alt: 'Clients inspecting harvest lots at the farm.' }
];

const accolades = [
  'Tanzania Fisheries Board Certified',
  'Hazard Analysis Critical Control Point (HACCP) ready',
  'Preferred supplier to 18 hospitality groups',
  'Member – African Aquaculture Alliance'
];

const contactChannels = [
  { icon: 'bi-telephone', label: 'Call us', value: '+255 672 411 558', link: 'tel:+255672411558' },
  { icon: 'bi-whatsapp', label: 'WhatsApp', value: '+255 672 411 558', link: whatsappLink },
  { icon: 'bi-envelope', label: 'Email desk', value: 'ops@kalingafishfarm.com' },
  { icon: 'bi-geo-alt', label: 'Visit us', value: 'Iringa, Tanzania' }
];

const applyLogoFallback = event => {
  const img = event.currentTarget;
  if (img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = 'true';
  img.src = logoFallback;
};

const applyImageFallback = event => {
  const img = event.currentTarget;
  if (img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = 'true';
  img.src = heroFallback;
};

export default function App() {
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });
  const isEmailConfigured = Boolean(EMAIL_SERVICE_ID && EMAIL_TEMPLATE_ID && EMAIL_PUBLIC_KEY);
  const isSubmitting = formStatus.state === 'loading';
  const currentYear = new Date().getFullYear();

  const handleContactSubmit = event => {
    event.preventDefault();
    if (!formRef.current) return;
    if (!isEmailConfigured) {
      setFormStatus({ state: 'error', message: 'Email service is offline. Use phone or WhatsApp for immediate assistance.' });
      return;
    }

    setFormStatus({ state: 'loading', message: '' });
    emailjs
      .sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, formRef.current, { publicKey: EMAIL_PUBLIC_KEY })
      .then(() => {
        setFormStatus({ state: 'success', message: 'Message received. Our operations desk will call you shortly.' });
        formRef.current?.reset();
      })
      .catch(() => {
        setFormStatus({ state: 'error', message: 'Delivery failed. Kindly retry or reach out via WhatsApp.' });
      });
  };

  return (
    <div className="app-shell">
      <header className="global-header">
        <div className="brand-block">
          <img src={remoteLogoSrc} alt="Kalinga Fish Farm logo" onError={applyLogoFallback} />
          <div>
            <p className="brand-title">Kalinga Fish Farm</p>
            <span>Iringa · Tanzania</span>
          </div>
        </div>
        <nav className="primary-nav" aria-label="Primary">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="nav-cta" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            WhatsApp desk
          </a>
          <div className="header-socials">
            {socialLinks.map(link => (
              <a key={link.href} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                <i className={`bi ${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="status-chip">Trusted aquaculture supply · Since 2014</p>
          <h1>
            Official harvest partner for{' '}
            <span className="text-gradient">East African</span>{' '}
            retailers, hoteliers, and institutional buyers.
          </h1>
          <p>
            Our pond systems, documentation, and media transparency show every step of the journey—from water management to
            final dispatch—so procurement leads have zero guesswork.
          </p>
          <div className="metric-grid">
            {proofMetrics.map(metric => (
              <article className="metric" key={metric.label}>
                <span>{metric.value}</span>
                <p>{metric.label}</p>
              </article>
            ))}
          </div>
          <div className="hero-cta">
            <a className="btn-solid" href="#contact">
              Schedule a procurement call
            </a>
            <a className="btn-outline" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Immediate WhatsApp support <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>
        <div className="hero-media" aria-label={heroMedia.primary.alt}>
          <figure className="hero-primary">
            <img src={heroMedia.primary.src} alt={heroMedia.primary.alt} loading="eager" onError={applyImageFallback} />
          </figure>
          <div className="hero-trims">
            {heroMedia.trims.map(item => (
              <figure className="hero-trim" key={item.caption}>
                <img src={item.src} alt={item.alt} loading="lazy" onError={applyImageFallback} />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <main>
        <section className="operations" id="operations">
          <header className="section-lede">
            <p className="eyebrow">Operations intelligence</p>
            <h2>Disciplined systems, broadcast in high fidelity.</h2>
            <p>
              Each capability track pairs an engineered workflow with live imagery so partners can audit us visually at any
              time.
            </p>
          </header>
          <div className="operations-grid">
            {capabilityTracks.map(track => (
              <article className="capability-card" key={track.title}>
                <figure>
                  <img src={track.image} alt={track.alt} loading="lazy" onError={applyImageFallback} />
                </figure>
                <div className="capability-body">
                  <h3>{track.title}</h3>
                  <p>{track.description}</p>
                  <ul>
                    {track.bullets.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="video-showcase" id="video">
          <header className="section-lede">
            <p className="eyebrow">Farm footage</p>
            <h2>Watch the operation live.</h2>
            <p>
              Unedited video from our latest harvests—real conditions, real output, full transparency for every procurement decision.
            </p>
          </header>
          <div className="video-grid">
            {videoShowcase.map(video => (
              <div className="video-card" key={video.id}>
                <div className="video-frame">
                  {video.type === 'image' ? (
                    <img
                      src={video.src}
                      alt={video.alt}
                      loading="lazy"
                      onError={applyImageFallback}
                    />
                  ) : (
                    <iframe
                      src={video.src}
                      title={video.title}
                      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  )}
                </div>
                <p className="video-caption">{video.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery" id="gallery">
          <header className="section-lede">
            <p className="eyebrow">Verified imagery</p>
            <h2>Visual logbook from pond to dispatch.</h2>
            <p>
              Every sequence below is timestamped footage from recent harvests. We rotate galleries weekly to keep stakeholders
              current.
            </p>
          </header>
          <div className="gallery-grid">
            {galleryStories.map(story => (
              <figure className="gallery-card" key={story.src}>
                <img src={story.src} alt={story.alt} loading="lazy" onError={applyImageFallback} />
                <figcaption>
                  <span>{story.tag}</span>
                  <p>{story.alt}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="photo-strip" aria-label="Photo highlights">
          <div className="strip-header">
            <p className="eyebrow">Live from the farm floor</p>
          </div>
          <div className="strip-viewport">
            <div className="strip-track" aria-hidden="true">
              {[...photoStrip, ...photoStrip].map((item, i) => (
                <figure className="strip-item" key={i}>
                  <img src={item.src} alt={item.alt} loading="lazy" onError={applyImageFallback} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="credentials">
          <div className="section-lede">
            <p className="eyebrow">Credentials & membership</p>
            <h2>Independently audited programs, open for inspection.</h2>
          </div>
          <ul className="accolade-list">
            {accolades.map(item => (
              <li key={item}>
                <i className="bi bi-check-circle"></i>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="contact" id="contact">
          <header className="section-lede">
            <p className="eyebrow">Connect with operations</p>
            <h2>Direct line to our harvest planning desk.</h2>
            <p>
              Share your volume targets, preferred dispatch windows, and compliance requirements. We respond within one business
              day (often sooner).
            </p>
          </header>
          <div className="contact-grid">
            <div className="contact-channels">
              {contactChannels.map(channel => (
                <a
                  key={channel.label}
                  className="channel-card"
                  href={channel.link ?? '#'}
                  target={channel.link?.startsWith('http') ? '_blank' : undefined}
                  rel={channel.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <i className={`bi ${channel.icon}`}></i>
                  <div>
                    <span>{channel.label}</span>
                    <strong>{channel.value}</strong>
                  </div>
                </a>
              ))}
              <div className="channel-socials">
                {socialLinks.map(link => (
                  <a key={link.href} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                    <i className={`bi ${link.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            <form className="contact-form" ref={formRef} onSubmit={handleContactSubmit} noValidate>
              <label>
                Full name
                <input type="text" name="from_name" placeholder="Jane Doe" required />
              </label>
              <label>
                Phone number
                <input type="tel" name="phone_number" placeholder="+255 7XX XXX XXX" required />
              </label>
              <label>
                Email address
                <input type="email" name="from_email" placeholder="you@example.com" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="6" placeholder="Volume, product mix, delivery cadence" required></textarea>
              </label>
              <button type="submit" className="btn-solid" disabled={isSubmitting || !isEmailConfigured}>
                {isSubmitting ? 'Dispatching…' : 'Submit request'}
              </button>
              {!isEmailConfigured && (
                <p className="form-hint">
                  Email dispatch disabled until VITE_EMAIL_* variables are configured. Please contact us via phone or WhatsApp.
                </p>
              )}
              {formStatus.state !== 'idle' && (
                <p className={`form-feedback form-feedback--${formStatus.state === 'success' ? 'success' : 'error'}`}>
                  {formStatus.message}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={remoteLogoSrc} alt="Kalinga Fish Farm" onError={applyLogoFallback} />
            <div>
              <p className="footer-brand-name">Kalinga Fish Farm</p>
              <span>Premium freshwater aquaculture · Iringa, Tanzania</span>
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <div className="footer-social">
            {socialLinks.map(link => (
              <a key={link.href} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                <i className={`bi ${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-legal">
          <p>© {currentYear} Kalinga Fish Farm – Iringa. All rights reserved.</p>
          <p>Tanzania Fisheries Board Certified · On-spec delivery · Transparent operations</p>
        </div>
      </footer>
    </div>
  );
}
