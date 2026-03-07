import { useState, useCallback, useEffect } from 'react';
import heroFallback from './assets/hero-fallback.svg';
import logoFallback from './assets/logo-fallback.svg';
import SplashScreen from './SplashScreen';
import translations from './translations';

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
    links: [
      { label: 'Fresh Tilapia',  href: '#gallery' },
      { label: 'Catfish',        href: '#gallery' },
      { label: 'Nile Perch',     href: '#gallery' },
      { label: 'Smoked Fish',    href: '#contact' },
      { label: 'Dried Fish',     href: '#contact' },
    ]
  },
  {
    title: 'OUR SERVICES',
    links: [
      { label: 'Bulk Orders',        href: '#contact' },
      { label: 'Farm Visits',        href: '#contact' },
      { label: 'Custom Packaging',   href: '#contact' },
      { label: 'Training Programs',  href: '#contact' },
      { label: 'Hatchery Supply',    href: '#operations' },
    ]
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'About Kalinga',  href: '#why-us' },
      { label: 'Certifications', href: '#why-us' },
      { label: 'Media Gallery',  href: '#gallery' },
      { label: 'Contact Us',     href: '#contact' },
      { label: 'WhatsApp Desk',  href: whatsappLink },
    ]
  }
];

const gmailLink = 'mailto:kalingaklaus3@gmail.com';

const socialLinks = [
  { icon: 'bi-whatsapp',    href: whatsappLink,  label: 'WhatsApp'  },
  { icon: 'bi-instagram',   href: instagramLink, label: 'Instagram' },
  { icon: 'bi-envelope-at-fill', href: gmailLink, label: 'Gmail'   },
  { icon: 'bi-facebook',    href: facebookLink,  label: 'Facebook'  },
];

// Product-shot transform: c_pad fills white/transparent bg with dark navy, ar_16:9 fits the hero frame
const PAD = 'f_auto,q_auto,c_pad,b_rgb:04090f,ar_16:9,w_1400,g_center';
// Natural/contextual photo transform: standard cover crop
const COVER = 'f_auto,q_auto,c_fill,ar_16:9,w_1400,g_auto';

const heroSlides = [
  { src: `https://res.cloudinary.com/diyy8h0d9/image/upload/${COVER}/v1772632446/catfish15_mpozfb.jpg`,           alt: 'Catfish at Kalinga Fish Farm' },
  { src: `https://res.cloudinary.com/diyy8h0d9/image/upload/${PAD}/v1772632449/black-tilapia-tilapia_hiqddv.jpg`, alt: 'Black tilapia — premium grade' },
  { src: `https://res.cloudinary.com/diyy8h0d9/image/upload/${COVER}/v1772632440/catfish1_ya4s2y.jpg`,            alt: 'Farm-fresh catfish Tanzania' },
  { src: `https://res.cloudinary.com/diyy8h0d9/image/upload/${PAD}/v1772632442/catfish10_sbvtuq.jpg`,             alt: 'Catfish harvest Iringa Tanzania' },
  { src: `https://res.cloudinary.com/diyy8h0d9/image/upload/${COVER}/v1772632439/catfish18_vz8hrx.jpg`,           alt: 'Quality catfish freshwater fish' },
  { src: `https://res.cloudinary.com/diyy8h0d9/image/upload/${PAD}/v1772632439/catfish14_vg1p0y.jpg`,             alt: 'Catfish aquaculture Iringa' },
  { src: `https://res.cloudinary.com/diyy8h0d9/image/upload/${PAD}/v1772632440/catfish2_d2spxc.jpg`,              alt: 'Catfish ready for market' },
];

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
    image: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_580/v1772540685/WhatsApp_Image_2026-03-03_at_15.19.07_qdknt1.jpg',
    alt: 'Water-filled fish pond used for aquaculture.'
  },
  {
    tag: 'FLAGSHIP',
    title: 'Harvest Logistics Program',
    description: 'Structured seine schedules, insulated packing, and rapid weigh-ins create dependable delivery slots.',
    bullets: ['Slotting calendar shared weekly', 'Pack-outs to 2.5T per day', 'GPS-tracked dispatch vans'],
    image: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_580/v1772540684/WhatsApp_Image_2026-03-03_at_15.19.01_e9fs06.jpg',
    alt: 'Group meeting discussing fish farming project.'
  },
  {
    tag: 'CERTIFIED',
    title: 'Client Experience Office',
    description: 'Dedicated buyer desk handles RFQs, certifications, and spot checks so procurement teams stay confident.',
    bullets: ['Same-day paperwork turnaround', 'WhatsApp + email coordination', 'Transparent farm access'],
    image: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_580/v1772540683/WhatsApp_Image_2026-03-03_at_15.19.02_ll7cih.jpg',
    alt: 'Participants touring aquaculture facility.'
  }
];

const galleryStories = [
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1772540689/WhatsApp_Image_2026-03-03_at_15.18.56_2_einjij.jpg',
    tag: 'Aquaculture training',
    alt: 'Group participating in practical fish farming training.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1771848224/fish1_tbbpc4.jpg',
    tag: 'Harvest line',
    alt: 'Crew hauling a seine net from the pond.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1772540688/WhatsApp_Image_2026-03-03_at_15.19.08_2_yg1xpu.jpg',
    tag: 'Pond infrastructure',
    alt: 'Outdoor fish pond facility for aquaculture production.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1771856251/fish66_kfhgex.jpg',
    tag: 'Sorting',
    alt: 'Catfish being graded for uniform sizing.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1772540688/WhatsApp_Image_2026-03-03_at_15.18.56_bwz1yq.jpg',
    tag: 'Quality inspection',
    alt: 'Individual holding freshly harvested fish from pond.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1771856241/fish74_c4lxma.jpg',
    tag: 'Quality check',
    alt: 'Fresh tilapia arranged for QA photos.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1772540688/WhatsApp_Image_2026-03-03_at_15.18.57_1_dbjsln.jpg',
    tag: 'Community engagement',
    alt: 'Participants attending aquaculture awareness meeting.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1771856240/fish75_drzgls.jpg',
    tag: 'Packaging',
    alt: 'Crates being sealed for transport to Dar es Salaam.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1772540687/WhatsApp_Image_2026-03-03_at_15.18.57_qnxwml.jpg',
    tag: 'Field supervision',
    alt: 'Team inspecting fish pond during field visit.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1771848223/fish5_zik1l7.jpg',
    tag: 'Catfish detail',
    alt: 'Close-up of catfish showing sheen and health.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1772540686/WhatsApp_Image_2026-03-03_at_15.18.59_1_davy2w.jpg',
    tag: 'Harvest yield',
    alt: 'Display of harvested fish after pond draining.'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1771856264/fish57_mjcpsb.jpg',
    tag: 'Pond sunrise',
    alt: 'Sunlight reflecting on still pond water.'
  }
];

const videoShowcase = [
  {
    id: 'vid1',
    type: 'video',
    src: 'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish35_orgaov',
    num: '01',
    tag: 'POND 4 · HARVEST DAY',
    title: 'Harvest Operation',
    subtitle: 'Seine net pull, live weigh-in, and iced packing — unedited footage from our last major dispatch run.'
  },
  {
    id: 'vid2',
    type: 'video',
    src: 'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=WhatsApp_Video_2026-03-03_at_15.18.51_1_dd8dba',
    num: '02',
    tag: 'FARM WALK · TRAINING',
    title: 'Sustainable Farming Demo',
    subtitle: 'Guided walkthrough of our water-management system and hatchery protocols with our aquaculture team.'
  }
];

const photoStrip = [
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_400,h_430/v1772540686/WhatsApp_Image_2026-03-03_at_15.18.58_1_exllvc.jpg', alt: 'Trainees learning fish farming techniques outdoors.' },
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_400,h_430/v1772540685/WhatsApp_Image_2026-03-03_at_15.18.58_sh8nmq.jpg', alt: 'Community workshop on fish farming practices.' },
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_400,h_430/v1772540682/WhatsApp_Image_2026-03-03_at_15.19.08_m11ttn.jpg', alt: 'Large fish pond supporting community food production.' },
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_400,h_430/v1772540681/WhatsApp_Image_2026-03-03_at_15.19.09_sn0lme.jpg', alt: 'Community members participating in fish farming activities.' },
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_400,h_430/v1772540681/WhatsApp_Image_2026-03-03_at_15.19.08_3_jkhzwo.jpg', alt: 'Fish farming tools displayed during training session.' },
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_400,h_430/v1771856246/fish70_x1oxm8.jpg', alt: 'Crew guiding full net of catfish across the pond bank.' },
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_400,h_430/v1771856229/fish85_mu9he5.jpg', alt: 'Fresh catfish staged with ice before transport.' },
  { src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_400,h_430/v1771856250/fish67_v3u9dl.jpg', alt: 'Clients inspecting harvest lots at the farm.' }
];

const accolades = [
  'Tanzania Fisheries Board Certified',
  'Hazard Analysis Critical Control Point (HACCP) ready',
  'Preferred supplier to 18 hospitality groups',
  'Member – African Aquaculture Alliance'
];

const contactChannels = [
  { icon: 'bi-telephone', label: 'Call us',    value: '+255 672 411 558',        link: 'tel:+255672411558' },
  { icon: 'bi-whatsapp', label: 'WhatsApp',   value: '+255 672 411 558',        link: whatsappLink },
  { icon: 'bi-envelope', label: 'Email desk', value: 'kalingaklaus3@gmail.com', link: 'mailto:kalingaklaus3@gmail.com' },
  { icon: 'bi-geo-alt',  label: 'Visit us',   value: 'Iringa, Tanzania',        link: 'https://maps.google.com/?q=Iringa,Tanzania' }
];

const currentYear = new Date().getFullYear();

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
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  const [inquiry, setInquiry] = useState({ product: 'Tilapia', date: '', volume: '', unit: 'KG' });
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashDone = useCallback(() => setShowSplash(false), []);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [heroSlide, setHeroSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setHeroSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleRequestQuote = () => {
    const product = inquiry.product;
    const vol  = inquiry.volume ? t.waVol(inquiry.volume, inquiry.unit) : '';
    const date = inquiry.date   ? t.waDate(inquiry.date) : '';
    const msg  = t.waMsg(product, vol, date);
    window.open(`https://wa.me/255672411558?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handlePrev = () => setHeroSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
  const handleNext = () => setHeroSlide(prev => (prev + 1) % heroSlides.length);

  return (
    <>
      {showSplash && <SplashScreen onDone={handleSplashDone} />}
      <div className="app-shell">

      {/* ── TOP INFO BAR ── */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <a href="tel:+255672411558"><i className="bi bi-telephone-fill"></i> +255 672 411 558</a>
            <a href="mailto:kalingaklaus3@gmail.com"><i className="bi bi-envelope-fill"></i> kalingaklaus3@gmail.com</a>
            <span><i className="bi bi-geo-alt-fill"></i> Iringa, Tanzania</span>
          </div>
          <div className="top-bar-right">
            <span className="top-bar-badge"><i className="bi bi-patch-check-fill"></i> {t.topBadge}</span>
            <button
              className="lang-toggle"
              onClick={() => setLang(l => l === 'en' ? 'sw' : 'en')}
              aria-label="Switch language"
            >
              <i className="bi bi-translate"></i>
              <span>{t.langSwitchLabel}</span>
            </button>
          </div>
        </div>
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
          <a href="#home"    onClick={() => setMenuOpen(false)}><span>{t.navHome}</span></a>
          <a href="#why-us"  onClick={() => setMenuOpen(false)}><span>{t.navWhyUs}</span></a>
          <a href="#operations" onClick={() => setMenuOpen(false)}><span>{t.navOperations}</span></a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}><span>{t.navMedia}</span></a>
          <a href="#contact" onClick={() => setMenuOpen(false)}><span>{t.navContact}</span></a>
        </nav>

        <div className="header-actions">
          <a className="nav-cta" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp"></i>
            <span>{t.navWhatsApp}</span>
          </a>
          <button
            className="lang-toggle lang-toggle--header"
            onClick={() => setLang(l => l === 'en' ? 'sw' : 'en')}
            aria-label="Switch language"
            title={lang === 'en' ? 'Badilisha hadi Kiswahili' : 'Switch to English'}
          >
            <i className="bi bi-translate"></i>
            <span>{t.langSwitchLabel}</span>
          </button>
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
        {/* Slideshow background */}
        <div className="hero-bg">
          {heroSlides.map((slide, i) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              onError={applyImageFallback}
              className={i === heroSlide ? 'slide-active' : 'slide-inactive'}
            />
          ))}
        </div>

        {/* Cinematic dark overlay */}
        <div className="hero-overlay" />

        {/* Centred content */}
        <div className="hero-content">
          <div className="hero-copy">
            <p className="status-chip">{t.statusChip}</p>
            <h1>
              {t.heroTitle1}{' '}
              <span className="text-gradient">{t.heroTitle2}</span>{' '}
              {t.heroTitle3}
            </h1>
            <p className="hero-lead">{t.heroLead}</p>
            <div className="metric-grid">
              {[
                { value: '12',   label: t.metric1Label },
                { value: '1.2T', label: t.metric2Label },
                { value: '72h',  label: t.metric3Label },
                { value: '200+', label: t.metric4Label },
              ].map(metric => (
                <article className="metric" key={metric.label}>
                  <span>{metric.value}</span>
                  <p>{metric.label}</p>
                </article>
              ))}
            </div>
            <div className="inquiry-widget">
              <div className="inquiry-field">
                <label>{t.inquiryProduct}</label>
                <select
                  name="product"
                  value={inquiry.product}
                  onChange={e => setInquiry(prev => ({ ...prev, product: e.target.value }))}
                >
                  <option>{t.optTilapia}</option>
                  <option>{t.optCatfish}</option>
                  <option>{t.optMixed}</option>
                  <option>{t.optNilePerch}</option>
                </select>
              </div>
              <div className="inquiry-field">
                <label>{t.inquiryDate}</label>
                <input
                  type="date"
                  name="preferred_date"
                  value={inquiry.date}
                  onChange={e => setInquiry(prev => ({ ...prev, date: e.target.value }))}
                />
              </div>
              <div className="inquiry-field">
                <label>{t.inquiryVolume} ({inquiry.unit})</label>
                <div className="volume-input-group">
                  <input
                    type="number"
                    name="volume_kg"
                    placeholder="e.g. 500"
                    min="1"
                    value={inquiry.volume}
                    onChange={e => setInquiry(prev => ({ ...prev, volume: e.target.value }))}
                  />
                  <select
                    className="unit-select"
                    value={inquiry.unit}
                    onChange={e => setInquiry(prev => ({ ...prev, unit: e.target.value }))}
                    aria-label="Unit"
                  >
                    <option value="KG">KG</option>
                    <option value="TONNE">TONNE</option>
                  </select>
                </div>
              </div>
              <button type="button" className="btn-solid inquiry-btn" onClick={handleRequestQuote}>
                {t.inquiryBtn}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom controls bar */}
        <div className="hero-controls">
          <div className="hero-counter">
            <span className="hero-counter-current">{String(heroSlide + 1).padStart(2, '0')}</span>
            <span className="hero-counter-sep"> / </span>
            <span className="hero-counter-total">{String(heroSlides.length).padStart(2, '0')}</span>
          </div>
          <div className="slide-dots">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                className={`slide-dot${i === heroSlide ? ' slide-dot--active' : ''}`}
                onClick={() => setHeroSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="hero-arrows">
            <button className="hero-arrow" onClick={handlePrev} aria-label="Previous slide">
              <i className="bi bi-arrow-left"></i>
            </button>
            <button className="hero-arrow" onClick={handleNext} aria-label="Next slide">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <a className="hero-scroll-hint" href="#why-us" aria-label="Scroll down">
          <i className="bi bi-chevron-double-down"></i>
        </a>
      </section>

      <main>

        {/* ── WHY CHOOSE US ── */}
        <section className="why-us" id="why-us">
          <header className="section-lede">
            <p className="eyebrow">{t.whyEyebrow}</p>
            <h2>{t.whyH2}</h2>
            <p>{t.whyP}</p>
          </header>
          <div className="values-grid">
            {[
              { icon:'bi-award',        tag:t.val1Tag, title:t.val1Title, description:t.val1Desc },
              { icon:'bi-truck',        tag:t.val2Tag, title:t.val2Title, description:t.val2Desc },
              { icon:'bi-patch-check',  tag:t.val3Tag, title:t.val3Title, description:t.val3Desc },
              { icon:'bi-headset',      tag:t.val4Tag, title:t.val4Title, description:t.val4Desc },
            ].map(val => (
              <article className="value-card" key={val.title}>
                <div className="value-icon"><i className={`bi ${val.icon}`}></i></div>
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
            <p className="eyebrow">{t.opsEyebrow}</p>
            <h2>{t.opsH2}</h2>
            <p>{t.opsP}</p>
            <div className="live-badge">
              <span className="live-pulse"></span>
              {t.opsLiveBadge}
            </div>
          </header>
          <div className="operations-grid">
            {[
              { tag:t.ops1Tag, title:t.ops1Title, desc:t.ops1Desc, bullets:[t.ops1b1,t.ops1b2,t.ops1b3],
                image:'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_580/v1772540685/WhatsApp_Image_2026-03-03_at_15.19.07_qdknt1.jpg',
                alt:'Water-filled fish pond used for aquaculture.' },
              { tag:t.ops2Tag, title:t.ops2Title, desc:t.ops2Desc, bullets:[t.ops2b1,t.ops2b2,t.ops2b3],
                image:'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_580/v1772540684/WhatsApp_Image_2026-03-03_at_15.19.01_e9fs06.jpg',
                alt:'Group meeting discussing fish farming project.' },
              { tag:t.ops3Tag, title:t.ops3Title, desc:t.ops3Desc, bullets:[t.ops3b1,t.ops3b2,t.ops3b3],
                image:'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_580/v1772540683/WhatsApp_Image_2026-03-03_at_15.19.02_ll7cih.jpg',
                alt:'Participants touring aquaculture facility.' },
            ].map(track => (
              <article className="capability-card" key={track.title}>
                <figure className="capability-img">
                  <img src={track.image} alt={track.alt} loading="lazy" onError={applyImageFallback} />
                  <span className="capability-tag">{track.tag}</span>
                </figure>
                <div className="capability-body">
                  <h3>{track.title}</h3>
                  <p>{track.desc}</p>
                  <ul>
                    {track.bullets.map(point => (
                      <li key={point}><i className="bi bi-check2-circle-fill"></i>{point}</li>
                    ))}
                  </ul>
                  <a className="card-cta" href="#contact">{t.viewDetails} <i className="bi bi-arrow-right"></i></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="video-showcase" id="video">
          <div className="video-showcase-inner">
            <header className="section-lede">
              <p className="eyebrow">{t.vidEyebrow}</p>
              <h2>{t.vidH2}</h2>
              <p>{t.vidP}</p>
              <div className="video-rec-badge">
                <span className="rec-dot"></span>
                {t.vidRecBadge}
              </div>
            </header>
            <div className="video-grid">
              {[
                { id:'vid1', type:'video', num:'01',
                  src:'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish35_orgaov',
                  tag:t.vid1Tag, title:t.vid1Title, subtitle:t.vid1Sub },
                { id:'vid2', type:'video', num:'02',
                  src:'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=WhatsApp_Video_2026-03-03_at_15.18.51_1_dd8dba',
                  tag:t.vid2Tag, title:t.vid2Title, subtitle:t.vid2Sub },
              ].map(video => (
                <div className="video-card" key={video.id}>
                  <div className="video-frame">
                    <iframe
                      src={video.src}
                      title={video.title}
                      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                    <div className="video-frame-overlay">
                      <span className="video-live-chip">
                        <span className="rec-dot rec-dot--red"></span>
                        REC
                      </span>
                      <span className="video-num">{video.num}</span>
                    </div>
                  </div>
                  <div className="video-caption">
                    <span className="video-tag">{video.tag}</span>
                    <strong className="video-title">{video.title}</strong>
                    <p className="video-sub">{video.subtitle}</p>
                    <a className="video-cta" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-whatsapp"></i> {t.vidFarmVisit}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery" id="gallery">
          <header className="section-lede">
            <p className="eyebrow">{t.galEyebrow}</p>
            <h2>{t.galH2}</h2>
            <p className="section-lede-italic">{t.galSub}</p>
          </header>
          <div className="gallery-grid">
            {[
              { src:'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1772540689/WhatsApp_Image_2026-03-03_at_15.18.56_2_einjij.jpg',  tag:t.gal1Tag,  alt:'Group participating in practical fish farming training.' },
              { src:'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1771848224/fish1_tbbpc4.jpg',  tag:t.gal2Tag,  alt:'Crew hauling a seine net from the pond.' },
              { src:'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1772540688/WhatsApp_Image_2026-03-03_at_15.19.08_2_yg1xpu.jpg',  tag:t.gal3Tag,  alt:'Outdoor fish pond facility for aquaculture production.' },
              { src:'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1771856251/fish66_kfhgex.jpg',  tag:t.gal4Tag,  alt:'Catfish being graded for uniform sizing.' },
              { src:'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1772540688/WhatsApp_Image_2026-03-03_at_15.18.56_bwz1yq.jpg',  tag:t.gal5Tag,  alt:'Individual holding freshly harvested fish from pond.' },
              { src:'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1771856241/fish74_c4lxma.jpg',  tag:t.gal6Tag,  alt:'Fresh tilapia arranged for QA photos.' },
              { src:'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1772540688/WhatsApp_Image_2026-03-03_at_15.18.57_1_dbjsln.jpg',  tag:t.gal7Tag,  alt:'Participants attending aquaculture awareness meeting.' },
              { src:'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1771856240/fish75_drzgls.jpg',  tag:t.gal8Tag,  alt:'Crates being sealed for transport to Dar es Salaam.' },
              { src:'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1772540687/WhatsApp_Image_2026-03-03_at_15.18.57_qnxwml.jpg',  tag:t.gal9Tag,  alt:'Team inspecting fish pond during field visit.' },
              { src:'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1771848223/fish5_zik1l7.jpg',  tag:t.gal10Tag, alt:'Close-up of catfish showing sheen and health.' },
              { src:'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1772540686/WhatsApp_Image_2026-03-03_at_15.18.59_1_davy2w.jpg',  tag:t.gal11Tag, alt:'Display of harvested fish after pond draining.' },
              { src:'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_740/v1771856264/fish57_mjcpsb.jpg',  tag:t.gal12Tag, alt:'Sunlight reflecting on still pond water.' },
            ].map(story => (
              <figure className="gallery-card" key={story.src}>
                <img src={story.src} alt={story.alt} loading="lazy" onError={applyImageFallback} />
                <figcaption>
                  <span className="gallery-ops-badge">{t.galBadge}</span>
                  <p>{story.tag}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="photo-strip" aria-label="Photo highlights">
          <div className="strip-header">
            <p className="eyebrow">{t.stripEyebrow}</p>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="strip-ig-handle">
              <i className="bi bi-instagram"></i> @KALINGA_FISH_FARM_IRINGA
            </a>
          </div>
          <div className="strip-viewport">
            <div className="strip-track" aria-hidden="true">
              {[...photoStrip, ...photoStrip].map((item, i) => (
                <figure className="strip-item" key={`${item.src}-${i}`}>
                  <img src={item.src} alt={item.alt} loading="lazy" onError={applyImageFallback} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="credentials">
          <div className="credentials-inner">
            <div className="credentials-badge-col">
              <div className="cred-shield"><i className="bi bi-shield-fill-check"></i></div>
              <p className="cred-caption">{t.credBadge}</p>
            </div>
            <div className="credentials-content">
              <p className="eyebrow cred-eyebrow">{t.credEyebrow}</p>
              <h2>{t.credH2a}<br/>{t.credH2b}</h2>
              <p className="cred-sub">{t.credSub}</p>
              <ul className="accolade-list">
                {[t.accolade1, t.accolade2, t.accolade3, t.accolade4].map((item, idx) => (
                  <li key={idx}>
                    <span className="cred-num">{String(idx + 1).padStart(2,'0')}</span>
                    <i className="bi bi-check2-circle"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <header className="section-lede">
            <p className="eyebrow">{t.contactEyebrow}</p>
            <h2>{t.contactH2}</h2>
            <p>{t.contactP}</p>
          </header>
          <div className="contact-channels">
            {[
              { icon:'bi-telephone', label:t.chCall,     value:'+255 672 411 558',        link:'tel:+255672411558' },
              { icon:'bi-whatsapp',  label:t.chWhatsApp, value:'+255 672 411 558',        link:whatsappLink },
              { icon:'bi-envelope',  label:t.chEmail,    value:'kalingaklaus3@gmail.com', link:'mailto:kalingaklaus3@gmail.com' },
              { icon:'bi-geo-alt',   label:t.chVisit,    value:'Iringa, Tanzania',        link:'https://maps.google.com/?q=Iringa,Tanzania' },
            ].map(channel => (
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
        </section>
      </main>

      {/* ── PRE-FOOTER CTA BAND ── */}
      <div className="cta-band">
        <div className="cta-band-inner">
          <div className="cta-band-copy">
            <p className="cta-band-eyebrow">{t.ctaEyebrow}</p>
            <h2>{t.ctaH2}</h2>
            <p>{t.ctaP}</p>
          </div>
          <div className="cta-band-actions">
            <a className="cta-band-btn cta-band-btn--primary" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp"></i>
              {t.ctaChat}
            </a>
            <a className="cta-band-btn cta-band-btn--ghost" href="tel:+255672411558">
              <i className="bi bi-telephone-fill"></i>
              +255 672 411 558
            </a>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={remoteLogoSrc} alt="Kalinga Fish Farm" onError={applyLogoFallback} />
            <div>
              <p className="footer-brand-name">Kalinga Fish Farm</p>
              <span>{t.footerTagline}</span>
            </div>
            <p className="footer-desc">{t.footerDesc}</p>
            <address className="footer-contact-info">
              <a href="tel:+255672411558"><i className="bi bi-telephone-fill"></i> +255 672 411 558</a>
              <a href="mailto:kalingaklaus3@gmail.com"><i className="bi bi-envelope-fill"></i> kalingaklaus3@gmail.com</a>
              <span><i className="bi bi-geo-alt-fill"></i> Iringa, Tanzania</span>
            </address>
          </div>
          {[
            { title: t.footerCol1Title, links: [
              { label: t.footerCol1L1, href: '#gallery' },
              { label: t.footerCol1L2, href: '#gallery' },
              { label: t.footerCol1L3, href: '#gallery' },
              { label: t.footerCol1L4, href: '#contact' },
              { label: t.footerCol1L5, href: '#contact' },
            ]},
            { title: t.footerCol2Title, links: [
              { label: t.footerCol2L1, href: '#contact' },
              { label: t.footerCol2L2, href: '#contact' },
              { label: t.footerCol2L3, href: '#contact' },
              { label: t.footerCol2L4, href: '#contact' },
              { label: t.footerCol2L5, href: '#operations' },
            ]},
            { title: t.footerCol3Title, links: [
              { label: t.footerCol3L1, href: '#why-us' },
              { label: t.footerCol3L2, href: '#why-us' },
              { label: t.footerCol3L3, href: '#gallery' },
              { label: t.footerCol3L4, href: '#contact' },
              { label: t.footerCol3L5, href: whatsappLink },
            ]},
          ].map(cat => (
            <div className="footer-col" key={cat.title}>
              <h4>{cat.title}</h4>
              <ul>
                {cat.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-social-col">
            <h4>{t.footerFollow}</h4>
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
          <span>{t.footerLegal1}</span>
          <span>{t.footerLegal2}</span>
          <span>{t.footerLegal3(currentYear)}</span>
          <span>{t.footerLegal4}</span>
        </div>
      </footer>
    </div>

    {/* ── FLOATING SOCIAL CLUSTER (bottom-right) ── */}
    <div className="fab-socials">
      {socialLinks.map(link => {
        const mod = link.label === 'WhatsApp' ? 'wa'
                  : link.label === 'Instagram' ? 'instagram'
                  : link.label === 'Gmail'     ? 'gmail'
                  : link.label === 'Facebook'  ? 'facebook'
                  : '';
        return (
          <a
            key={link.href}
            className={`fab-social-icon${mod ? ` fab-social-icon--${mod}` : ''}`}
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`bi ${link.icon}`}></i>
          </a>
        );
      })}
    </div>
    </>
  );
}
