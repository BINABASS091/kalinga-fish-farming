import { useRef, useState, useCallback, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import heroFallback from './assets/hero-fallback.svg';
import logoFallback from './assets/logo-fallback.svg';
import SplashScreen from './SplashScreen';

const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID ?? '';
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID ?? '';
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY ?? '';

const whatsappLink = 'https://wa.me/255672411558';
const facebookLink = 'https://www.facebook.com/claus.angelo';
const instagramLink = 'https://www.instagram.com/kalinga_fish_farm_iringa/';
const remoteLogoSrc = 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771859623/kalinga_-_fish_farming_p1aof7.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Operations', href: '#operations' },
  { label: 'Media', href: '#gallery' },
  { label: 'Contact', href: '#contact' }
];

const coreValues = [
  {
    icon: 'bi-award',
    tag: 'OUR STRENGTH',
    title: 'Expertise & Experience',
    description: 'Over a decade of freshwater aquaculture expertise ensuring top-notch fish quality and expert farm management.'
  },
  {
    icon: 'bi-truck',
    tag: 'OUR STRENGTH',
    title: 'Reliable Supply Chain',
    description: 'Structured harvest schedules and GPS-tracked dispatch vans delivering consistently to every verified buyer.'
  },
  {
    icon: 'bi-patch-check',
    tag: 'OUR STRENGTH',
    title: 'Certified & Compliant',
    description: 'Tanzania Fisheries Board certified and HACCP-ready, meeting every food safety standard required for institutional supply.'
  },
  {
    icon: 'bi-headset',
    tag: 'OUR STRENGTH',
    title: 'Dedicated Support',
    description: 'Our buyer desk responds within the same business day, coordinating RFQs, documentation, and farm access seamlessly.'
  }
];

const footerCategories = [
  {
    title: 'FISH PRODUCTS',
    links: ['Fresh Tilapia', 'Catfish', 'Nile Perch', 'Smoked Fish', 'Dried Fish']
  },
  {
    title: 'OUR SERVICES',
    links: ['Bulk Orders', 'Farm Visits', 'Custom Packaging', 'Training Programs', 'Hatchery Supply']
  },
  {
    title: 'COMPANY',
    links: ['About Kalinga', 'Certifications', 'Media Gallery', 'Contact Us', 'WhatsApp Desk']
  }
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
    tag: 'ACTIVE NOW',
    title: 'Water & Habitat Engineering',
    description: 'Continuous data logging on pH, dissolved oxygen, and inflow velocity keeps every pond within target bands.',
    bullets: ['IoT probes + manual validation', 'Daily QA review at 06:30', 'Emergency aeration protocol'],
    image: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1400,h_900/v1772540685/WhatsApp_Image_2026-03-03_at_15.19.07_qdknt1.jpg',
    alt: 'Water-filled fish pond used for aquaculture.'
  },
  {
    tag: 'FLAGSHIP',
    title: 'Harvest Logistics Program',
    description: 'Structured seine schedules, insulated packing, and rapid weigh-ins create dependable delivery slots.',
    bullets: ['Slotting calendar shared weekly', 'Pack-outs to 2.5T per day', 'GPS-tracked dispatch vans'],
    image: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1400,h_900/v1772540684/WhatsApp_Image_2026-03-03_at_15.19.01_e9fs06.jpg',
    alt: 'Group meeting discussing fish farming project.'
  },
  {
    tag: 'CERTIFIED',
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
  const formRef    = useRef(null);
  const messageRef  = useRef(null);
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });
  const [inquiry, setInquiry] = useState({ product: 'Tilapia', date: '', volume: '' });
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashDone = useCallback(() => setShowSplash(false), []);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleRequestQuote = () => {
    const parts = [
      `Product: ${inquiry.product}`,
      `Preferred date: ${inquiry.date || 'Flexible'}`,
      `Volume: ${inquiry.volume ? inquiry.volume + ' kg' : 'To discuss'}`,
    ];
    if (messageRef.current) messageRef.current.value = parts.join('\n');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => messageRef.current?.focus(), 600);
  };
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
    <>
      {showSplash && <SplashScreen onDone={handleSplashDone} />}
      <div className="app-shell">

      {/* ── TOP INFO BAR ── */}
      <div className="top-info-bar">
        <span><i className="bi bi-geo-alt-fill"></i> IRINGA, TANZANIA</span>
        <span><i className="bi bi-clock"></i> MON – SUN: 6AM – 6PM</span>
        <span><i className="bi bi-headset"></i> BUYER SUPPORT AVAILABLE</span>
      </div>

      {/* ── HEADER ── */}
      <header className={`global-header${scrolled ? ' header--scrolled' : ''}`}>
        <a className="brand-block" href="#home">
          <div className="brand-logo-ring">
            <img src={remoteLogoSrc} alt="Kalinga Fish Farm logo" onError={applyLogoFallback} />
          </div>
          <div>
            <p className="brand-title">Kalinga Fish Farm</p>
            <span>Iringa · Tanzania</span>
          </div>
        </a>

        <nav className={`primary-nav${menuOpen ? ' nav--open' : ''}`} aria-label="Primary">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="nav-cta" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp"></i>
            <span>WhatsApp</span>
          </a>
          <div className="header-socials">
            {socialLinks.map(link => (
              <a key={link.href} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                <i className={`bi ${link.icon}`}></i>
              </a>
            ))}
          </div>
          <button
            className={`nav-toggle${menuOpen ? ' nav-toggle--open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="status-chip">Trusted aquaculture supply · Since 2014</p>
          <h1>
            Your Gateway to{' '}
            <span className="text-gradient">Premium</span>{' '}
            Freshwater Fish
          </h1>
          <p>
            Official harvest partner for East African retailers, hoteliers, and institutional buyers. Full transparency from water management to final dispatch.
          </p>
          <div className="metric-grid">
            {proofMetrics.map(metric => (
              <article className="metric" key={metric.label}>
                <span>{metric.value}</span>
                <p>{metric.label}</p>
              </article>
            ))}
          </div>
          <div className="inquiry-widget">
            <div className="inquiry-field">
              <label>PRODUCT</label>
              <select
                name="product"
                value={inquiry.product}
                onChange={e => setInquiry(prev => ({ ...prev, product: e.target.value }))}
              >
                <option>Tilapia</option>
                <option>Catfish</option>
                <option>Mixed Order</option>
                <option>Nile Perch</option>
              </select>
            </div>
            <div className="inquiry-field">
              <label>PREFERRED DATE</label>
              <input
                type="date"
                name="preferred_date"
                value={inquiry.date}
                onChange={e => setInquiry(prev => ({ ...prev, date: e.target.value }))}
              />
            </div>
            <div className="inquiry-field">
              <label>VOLUME (KG)</label>
              <input
                type="number"
                name="volume_kg"
                placeholder="e.g. 500"
                min="1"
                value={inquiry.volume}
                onChange={e => setInquiry(prev => ({ ...prev, volume: e.target.value }))}
              />
            </div>
            <button type="button" className="btn-solid inquiry-btn" onClick={handleRequestQuote}>
              REQUEST QUOTE
            </button>
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

        {/* ── WHY CHOOSE US ── */}
        <section className="why-us" id="why-us">
          <header className="section-lede">
            <p className="eyebrow">OUR CORE VALUES</p>
            <h2>Why Partner With Kalinga?</h2>
            <p>Four pillars that set us apart as the most reliable freshwater fish supplier in the Iringa highland region.</p>
          </header>
          <div className="values-grid">
            {coreValues.map(val => (
              <article className="value-card" key={val.title}>
                <div className="value-icon">
                  <i className={`bi ${val.icon}`}></i>
                </div>
                <span className="value-tag">{val.tag}</span>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── OPERATIONS ── */}
        <section className="operations" id="operations">
          <header className="section-lede">
            <p className="eyebrow">REAL-TIME OPERATIONS</p>
            <h2>Live from Our Farm Floor.</h2>
            <p>Each operational track combines an engineered workflow with live imagery so partners can audit us visually at any time.</p>
            <div className="live-badge">
              <span className="live-pulse"></span>
              3 PROGRAMS CURRENTLY ACTIVE
            </div>
          </header>
          <div className="operations-grid">
            {capabilityTracks.map(track => (
              <article className="capability-card" key={track.title}>
                <figure className="capability-img">
                  <img src={track.image} alt={track.alt} loading="lazy" onError={applyImageFallback} />
                  <span className="capability-tag">{track.tag}</span>
                </figure>
                <div className="capability-body">
                  <h3>{track.title}</h3>
                  <p>{track.description}</p>
                  <ul>
                    {track.bullets.map(point => (
                      <li key={point}><i className="bi bi-check2"></i>{point}</li>
                    ))}
                  </ul>
                  <a className="card-cta" href="#contact">VIEW DETAILS <i className="bi bi-arrow-right"></i></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="video-showcase" id="video">
          <header className="section-lede">
            <p className="eyebrow">FARM FOOTAGE</p>
            <h2>Watch the Operation Live.</h2>
            <p>
              Unedited video from our latest harvests — real conditions, real output, full transparency for every procurement decision.
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
            <p className="eyebrow">VISUAL JOURNEY</p>
            <h2>Our Aquaculture Gallery</h2>
            <p className="section-lede-italic">
              A glimpse into the heart of the farm — through the eyes of our team and our partners.
            </p>
          </header>
          <div className="gallery-grid">
            {galleryStories.map(story => (
              <figure className="gallery-card" key={story.src}>
                <img src={story.src} alt={story.alt} loading="lazy" onError={applyImageFallback} />
                <figcaption>
                  <span className="gallery-ops-badge">KALINGA PHOTO OPS</span>
                  <p>{story.tag}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="photo-strip" aria-label="Photo highlights">
          <div className="strip-header">
            <p className="eyebrow">FOLLOW OUR INSTAGRAM</p>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="strip-ig-handle">
              <i className="bi bi-instagram"></i> @KALINGA_FISH_FARM_IRINGA
            </a>
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
            <p className="eyebrow">CREDENTIALS & MEMBERSHIP</p>
            <h2>Independently Audited. Open for Inspection.</h2>
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
            <p className="eyebrow">CONNECT WITH OPERATIONS</p>
            <h2>Direct Line to Our Harvest Planning Desk.</h2>
            <p>
              Share your volume targets, preferred dispatch windows, and compliance requirements. We respond within one business day — often sooner.
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
                <textarea name="message" rows="6" placeholder="Volume, product mix, delivery cadence" ref={messageRef} required></textarea>
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
            <p className="footer-desc">
              Delivering certified, farm-fresh fish to East African retailers, hotels, and institutions since 2014. Transparency and quality at every step.
            </p>
            <address className="footer-contact-info">
              <a href="tel:+255672411558"><i className="bi bi-telephone-fill"></i> +255 672 411 558</a>
              <a href="mailto:ops@kalingafishfarm.com"><i className="bi bi-envelope-fill"></i> ops@kalingafishfarm.com</a>
              <span><i className="bi bi-geo-alt-fill"></i> Iringa, Tanzania</span>
            </address>
          </div>
          {footerCategories.map(cat => (
            <div className="footer-col" key={cat.title}>
              <h4>{cat.title}</h4>
              <ul>
                {cat.links.map(link => (
                  <li key={link}><a href="#contact">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-social-col">
            <h4>FOLLOW US</h4>
            <div className="footer-social">
              {socialLinks.map(link => (
                <a key={link.href} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                  <i className={`bi ${link.icon}`}></i>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <span>CERTIFIED AQUACULTURE OPERATORS</span>
          <span>TANZANIA FISHERIES BOARD MEMBER</span>
          <span>© {currentYear} KALINGA FISH FARM. ALL RIGHTS RESERVED.</span>
          <span>DESIGNED FOR THE MODERN BUYER.</span>
        </div>
      </footer>
    </div>
    </>
  );
}
