import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = 'service_scw44cq';
const EMAIL_TEMPLATE_ID = 'template_nmx93r8';
const EMAIL_PUBLIC_KEY = 'UHrSJdQPpgSgzp3a_';

const heroImages = [
  'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1920,h_1080/v1771848224/fish1_tbbpc4.jpg',
  'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1920,h_1080/v1771848223/fish5_zik1l7.jpg',
  'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1920,h_1080/v1771848218/fish14_o7o9vy.jpg',
  'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1920,h_1080/v1771848221/fish8_ayrrpc.jpg',
  'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1920,h_1080/v1771848215/fish17_njmu9m.jpg',
  'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1920,h_1080/v1771856234/fish79_lyey5x.jpg',
  'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1920,h_1080/v1771856246/fish70_x1oxm8.jpg',
  'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1920,h_1080/v1771856241/fish74_c4lxma.jpg',
  'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1920,h_1080/v1771856229/fish85_mu9he5.jpg',
  'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1920,h_1080/v1771848206/fish22_dlnbro.jpg'
];

const heroMetrics = [
  { value: '12', label: 'Active Ponds', detail: 'across Iringa Region' },
  { value: '1.2T', label: 'Monthly Harvest', detail: 'tilapia & catfish' },
  { value: '72h', label: 'Delivery Window', detail: 'from confirmed order' }
];

const statsData = [
  { target: 10, suffix: '+', label: 'Years Experience' },
  { target: 10, suffix: 'T', label: 'Tons Produced/Year' },
  { target: 200, suffix: '+', label: 'Satisfied Buyers' },
  { target: 2, suffix: '', label: 'Fish Species' }
];

const fishProducts = [
  {
    title: 'Tilapia',
    description: 'Fresh, well-sized tilapia grown in clean earthen ponds with reliable harvesting schedules.',
    badge: 'Available Now',
    image: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_700/v1771848150/fish68_do5fqm.jpg',
    featured: false
  },
  {
    title: 'Catfish',
    description: 'Strong-quality catfish production optimized for taste, growth consistency, and market demand.',
    badge: 'Most Popular',
    image: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_700/v1771856250/fish67_v3u9dl.jpg',
    featured: true
  },
  {
    title: 'Bulk Orders',
    description: 'Scalable fish supply for traders, restaurants, and processors with organized delivery planning.',
    badge: 'Wholesale',
    image: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_900,h_700/v1771848206/fish22_dlnbro.jpg',
    featured: false
  }
];

const galleryCarouselSlides = [
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1400,h_600/v1771848224/fish1_tbbpc4.jpg',
    caption: "Kalinga Fish Farm – Iringa",
    alt: 'Harvest scene 1'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1400,h_600/v1771848218/fish14_o7o9vy.jpg',
    caption: 'Earthen Pond Farming',
    alt: 'Fish harvest operations'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1400,h_600/v1771856234/fish79_lyey5x.jpg',
    caption: 'Fresh Catch',
    alt: 'Fresh fish 79'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1400,h_600/v1771856246/fish70_x1oxm8.jpg',
    caption: 'Pond Operations',
    alt: 'Farm fish 70'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1400,h_600/v1771856241/fish74_c4lxma.jpg',
    caption: 'Quality Tilapia',
    alt: 'Farm fish 74'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1400,h_600/v1771856229/fish85_mu9he5.jpg',
    caption: 'Bulk Supply Ready',
    alt: 'Farm fish 85'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1400,h_600/v1771856251/fish66_kfhgex.jpg',
    caption: 'Harvest Day',
    alt: 'Farm fish 66'
  },
  {
    src: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1400,h_600/v1771856275/fish51_fvb6mq.jpg',
    caption: 'Fresh Catfish',
    alt: 'Farm fish 51'
  }
];

const galleryImages = [
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848224/fish1_tbbpc4.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848224/fish1_tbbpc4.jpg',
    alt: 'Harvest scene at the fish farm'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848224/fish3_kkwvbe.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848224/fish3_kkwvbe.jpg',
    alt: 'Tilapia close-up'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848223/fish4_a7kyzw.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848223/fish4_a7kyzw.jpg',
    alt: 'Fish harvest operations'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848223/fish5_zik1l7.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848223/fish5_zik1l7.jpg',
    alt: 'Fish pond farming activity'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848222/fish6_zombuc.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848222/fish6_zombuc.jpg',
    alt: 'Earthen pond overview'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848223/fish7_o5yggy.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848223/fish7_o5yggy.jpg',
    alt: 'Fish sorting after harvest'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848221/fish8_ayrrpc.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848221/fish8_ayrrpc.jpg',
    alt: 'Fresh fish ready for market'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848221/fish9_gcs2qz.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848221/fish9_gcs2qz.jpg',
    alt: 'Catfish from the pond'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848220/fish10_xduu0j.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848220/fish10_xduu0j.jpg',
    alt: 'Bulk fish catch'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848219/fish12_pb2ldb.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848219/fish12_pb2ldb.jpg',
    alt: 'Fish harvest net haul'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848218/fish14_o7o9vy.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848218/fish14_o7o9vy.jpg',
    alt: 'Pond full of tilapia'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848217/fish15_f2gzfx.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848217/fish15_f2gzfx.jpg',
    alt: 'Fish ready for packing'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848216/fish16_a1btdb.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848216/fish16_a1btdb.jpg',
    alt: 'Fish farm pond view'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848215/fish17_njmu9m.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848215/fish17_njmu9m.jpg',
    alt: 'Aquaculture earthen pond'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848206/fish22_dlnbro.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848206/fish22_dlnbro.jpg',
    alt: 'Bulk fish supply batch'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771848206/fish23_seow2x.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771848206/fish23_seow2x.jpg',
    alt: 'Fresh fish delivery ready'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856229/fish85_mu9he5.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856229/fish85_mu9he5.jpg',
    alt: 'Farm fish harvest 85'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856231/fish81_gejad8.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856231/fish81_gejad8.jpg',
    alt: 'Farm fish harvest 81'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856232/fish80_gtrbxp.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856232/fish80_gtrbxp.jpg',
    alt: 'Farm fish harvest 80'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856234/fish79_lyey5x.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856234/fish79_lyey5x.jpg',
    alt: 'Farm fish harvest 79'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856240/fish75_drzgls.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856240/fish75_drzgls.jpg',
    alt: 'Farm fish harvest 75'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856239/fish76_ji5lw6.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856239/fish76_ji5lw6.jpg',
    alt: 'Farm fish harvest 76'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856241/fish74_c4lxma.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856241/fish74_c4lxma.jpg',
    alt: 'Farm fish harvest 74'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856246/fish70_x1oxm8.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856246/fish70_x1oxm8.jpg',
    alt: 'Farm fish harvest 70'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856247/fish69_m1pfqc.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856247/fish69_m1pfqc.jpg',
    alt: 'Farm fish harvest 69'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856249/fish68_o8hwrg.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856249/fish68_o8hwrg.jpg',
    alt: 'Farm fish harvest 68'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856250/fish67_v3u9dl.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856250/fish67_v3u9dl.jpg',
    alt: 'Farm fish harvest 67'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856251/fish66_kfhgex.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856251/fish66_kfhgex.jpg',
    alt: 'Farm fish harvest 66'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856254/fish64_qpsy1u.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856254/fish64_qpsy1u.jpg',
    alt: 'Farm fish harvest 64'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856253/fish65_cy1nim.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856253/fish65_cy1nim.jpg',
    alt: 'Farm fish harvest 65'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856264/fish57_mjcpsb.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856264/fish57_mjcpsb.jpg',
    alt: 'Farm fish harvest 57'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856269/fish53_ry6jpc.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856269/fish53_ry6jpc.jpg',
    alt: 'Farm fish harvest 53'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856267/fish54_a7dg9d.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856267/fish54_a7dg9d.jpg',
    alt: 'Farm fish harvest 54'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856266/fish55_k89nsi.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856266/fish55_k89nsi.jpg',
    alt: 'Farm fish harvest 55'
  },
  {
    full: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771856275/fish51_fvb6mq.jpg',
    thumb: 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_600,h_420/v1771856275/fish51_fvb6mq.jpg',
    alt: 'Farm fish harvest 51'
  }
];

const videoEmbeds = [
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish25_nnfu7a&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish27_dmsszs&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish28_ihbhwj&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish24_qfwagk&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish50_nk8dax&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish49_k4w3vv&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish48_opdslb&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish43_wvngur&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish42_nqdobd&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish41_blhj1k&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish40_iimthq&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish39_lnlvzo&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish38_fm9v54&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish37_nnlmgg&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish36_gkjav4&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish35_orgaov&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish34_s19qia&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish33_apfzj3&profile=cld-default',
  'https://player.cloudinary.com/embed/?cloud_name=diyy8h0d9&public_id=fish32_yjq6im&profile=cld-default'
];

const qualityHighlights = [
  {
    icon: 'bi-droplet-half',
    title: 'Water Quality Management',
    description: 'Routine checks and practical pond management maintain healthy aquatic conditions year-round.'
  },
  {
    icon: 'bi-basket2',
    title: 'Responsible Feeding',
    description: 'Balanced feed schedules support steady growth and efficient production performance.'
  },
  {
    icon: 'bi-recycle',
    title: 'Sustainable Production',
    description: 'Our methods reduce waste and support long-term pond productivity and community supply.'
  },
  {
    icon: 'bi-tree',
    title: 'Natural Growth Environment',
    description: 'Earthen ponds provide a stable, natural habitat that supports fish health and quality.'
  }
];

const videoTitleCycle = ['Farm Harvest — Part 1', 'Pond Operations', 'Fresh Catch in Action'];

const whatsappLink = 'https://wa.me/255672411558';
const facebookLink = 'https://www.facebook.com/claus.angelo';
const instagramLink = 'https://www.instagram.com/kalinga_fish_farm_iringa/';

const SplashScreen = ({ progress }) => (
  <div className="splash-layout">
    <div className="bg-bubbles" aria-hidden="true">
      {Array.from({ length: 7 }).map((_, idx) => (
        <div className="bubble" key={`bubble-${idx}`} />
      ))}
    </div>

    <div className="splash-card">
      <div className="logo-wrap">
        <img
          src="https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771859623/kalinga_-_fish_farming_p1aof7.png"
          alt="Kalinga Fish Farm logo"
        />
      </div>
      <span className="splash-tagline">Iringa, Tanzania</span>
      <h1 className="splash-title">
        Welcome to
        <br />
        <span>Kalinga Fish Farm</span>
      </h1>
      <p className="splash-sub">Fresh · Sustainable · Quality<br />Premium tilapia &amp; catfish from earthen ponds.</p>

      <div className="progress-wrap">
        <div className="progress-label">
          <span>Loading your experience…</span>
          <span>{progress}%</span>
        </div>
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="dots">
        <div className="dot active"></div>
        <div className="dot active"></div>
        <div className="dot active"></div>
      </div>
    </div>

    <p className="splash-footer">kalingafishfarm-iringa.netlify.app</p>
  </div>
);

function MainSite() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const navbar = document.getElementById('appNavbar');
    const topbar = document.querySelector('.topbar');
    const onScroll = () => {
      const y = window.scrollY;
      if (navbar) navbar.classList.toggle('scrolled', y > 40);
      if (topbar) topbar.classList.toggle('hidden', y > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.target ?? '0', 10);
          const duration = 1600;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              el.textContent = String(target);
              clearInterval(timer);
            } else {
              el.textContent = String(Math.floor(current));
            }
          }, 16);
          observer.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    const navCollapse = document.getElementById('mainNav');
    const handleClick = () => {
      if (navCollapse?.classList.contains('show')) {
        const instance = window.bootstrap?.Collapse.getOrCreateInstance(navCollapse);
        instance?.hide();
      }
    };
    navLinks.forEach(link => link.addEventListener('click', handleClick));
    return () => navLinks.forEach(link => link.removeEventListener('click', handleClick));
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const link = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
          if (link) link.classList.toggle('active', entry.isIntersecting);
        });
      },
      { threshold: 0.45 }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return undefined;
    const handleKey = event => {
      if (event.key === 'Escape') setLightboxOpen(false);
      if (event.key === 'ArrowLeft') {
        setLightboxIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
      if (event.key === 'ArrowRight') {
        setLightboxIndex(prev => (prev + 1) % galleryImages.length);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [lightboxOpen]);

  const handleContactSubmit = event => {
    event.preventDefault();
    if (!formRef.current) return;
    setFormStatus({ state: 'loading', message: '' });
    emailjs
      .sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, formRef.current, {
        publicKey: EMAIL_PUBLIC_KEY
      })
      .then(() => {
        setFormStatus({ state: 'success', message: '✅ Message sent! We will get back to you shortly.' });
        formRef.current?.reset();
      })
      .catch(() => {
        setFormStatus({ state: 'error', message: '❌ Failed to send message. Please try WhatsApp or call us directly.' });
      });
  };

  const isSubmitting = formStatus.state === 'loading';
  const currentLightboxImage = galleryImages[lightboxIndex];

  return (
    <>
      <header>
        <div className="topbar">
          <div className="container topbar-inner">
            <div className="topbar-left">
              <span>
                <i className="bi bi-geo-alt-fill"></i> Iringa, Tanzania
              </span>
              <span>
                <i className="bi bi-telephone-fill"></i> +255 672 411 558
              </span>
            </div>
            <div className="topbar-right">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href={facebookLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg fixed-top app-navbar" id="appNavbar">
          <div className="container">
            <a className="navbar-brand" href="#home">
              <span className="brand-icon">
                <img
                  src="https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771859623/kalinga_-_fish_farming_p1aof7.png"
                  alt="Kalinga Fish Farm logo"
                />
              </span>
              <span className="brand-text">
                Kalinga <strong>Fish Farm – Iringa</strong>
              </span>
            </a>
            <button
              className="navbar-toggler hamburger"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="ham-line"></span>
              <span className="ham-line"></span>
              <span className="ham-line"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
                {['home', 'about', 'fish', 'gallery', 'videos'].map(section => (
                  <li className="nav-item" key={section}>
                    <a className="nav-link" href={`#${section}`}>
                      <span>{section === 'fish' ? 'Our Fish' : section.charAt(0).toUpperCase() + section.slice(1)}</span>
                    </a>
                  </li>
                ))}
                <li className="nav-item ms-lg-2">
                  <a className="nav-link nav-cta" href="#contact">
                    Contact Us <i className="bi bi-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-slides-wrap" aria-hidden="true">
            {heroImages.map((src, idx) => (
              <img
                key={src}
                className={`hero-slide ${heroIndex === idx ? 'active' : ''}`}
                src={src}
                alt=""
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
          <div className="hero-overlay"></div>
          <div className="container hero-content reveal">
            <div className="hero-badge">
              <i className="bi bi-patch-check-fill"></i> Tanzania's Premium Aquaculture Farm
            </div>
            <h1>
              Premium Farmed
              <br />
              <span className="hero-highlight">Tilapia &amp; Catfish</span>
            </h1>
            <p>Sustainable Earthen Pond Aquaculture in Tanzania</p>
            <div className="hero-actions d-flex flex-wrap gap-3 justify-content-center">
              <a href="#fish" className="btn app-btn-primary">
                <i className="bi bi-grid-fill me-2"></i>View Our Fish
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn app-btn-outline">
                <i className="bi bi-whatsapp me-2"></i>Chat on WhatsApp
              </a>
            </div>
            <div className="hero-meta-grid">
              {heroMetrics.map(metric => (
                <article className="hero-meta-card" key={metric.label}>
                  <span className="hero-meta-value">{metric.value}</span>
                  <span className="hero-meta-label">{metric.label}</span>
                  <span className="hero-meta-detail">{metric.detail}</span>
                </article>
              ))}
            </div>
            <div className="hero-scroll-indicator">
              <span></span>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="container">
            <div className="row g-0 text-center">
              {statsData.map(({ target, suffix, label }) => (
                <div className="col-6 col-md-3 stat-item reveal" key={label}>
                  <span className="stat-number" data-target={target}>
                    0
                  </span>
                  <span className="stat-suffix">{suffix}</span>
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-space">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 reveal">
                <div className="about-img-wrap">
                  <img
                    src="https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto,c_fill,w_1200,h_800/v1771848218/fish14_o7o9vy.jpg"
                    className="img-fluid rounded-4 section-image"
                    alt="Earthen pond fish farming in Tanzania"
                    loading="lazy"
                  />
                  <div className="about-img-badge">
                    <i className="bi bi-award-fill"></i>
                    <span>Certified Farm</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 reveal">
                <div className="section-label">Who We Are</div>
                <h2>
                  Tanzania's Leading
                  <br />Freshwater Fish Farm
                </h2>
                <p className="lead-text">
                  We produce high-quality tilapia and catfish in carefully managed earthen ponds designed for healthy, natural fish growth.
                </p>
                <p>
                  Our team follows sustainable aquaculture practices, balancing water quality, responsible feeding, and pond ecology for consistent harvest performance.
                </p>
                <div className="about-features">
                  {['Earthen Pond Farming', 'Fresh Harvest Model', 'Bulk Supply Ready', 'Quality Certified'].map(feature => (
                    <span className="feature-pill" key={feature}>
                      <i className="bi bi-check-circle-fill"></i>
                      {feature}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="btn app-btn-primary mt-4">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="fish" className="section-space bg-nearwhite">
          <div className="container">
            <div className="section-heading text-center reveal">
              <div className="section-label mx-auto">Our Products</div>
              <h2>Fresh From Our Ponds</h2>
              <p>Commercial-scale supply for local markets, retailers, and institutional buyers.</p>
            </div>
            <div className="row g-4 mt-2">
              {fishProducts.map(product => (
                <div className="col-md-6 col-lg-4 reveal" key={product.title}>
                  <article className={`fish-card h-100 ${product.featured ? 'fish-card--featured' : ''}`}>
                    <div className="fish-card-img-wrap">
                      <img src={product.image} alt={product.title} loading="lazy" />
                      <span className={`fish-card-badge ${product.featured ? 'fish-card-badge--popular' : ''}`}>
                        {product.badge}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                      <a href="#contact" className="btn app-btn-primary w-100">
                        Request Quote <i className="bi bi-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section-space">
          <div className="container">
            <div className="section-heading text-center reveal">
              <div className="section-label mx-auto">Photo Gallery</div>
              <h2>Harvest Gallery</h2>
              <p>Real moments from pond to harvest operations.</p>
            </div>

            <div id="galleryCarousel" className="carousel slide gallery-carousel mt-4" data-bs-ride="carousel" data-bs-interval="3500">
              <div className="carousel-indicators">
                {galleryCarouselSlides.map((_, idx) => (
                  <button
                    type="button"
                    data-bs-target="#galleryCarousel"
                    data-bs-slide-to={idx}
                    className={idx === 0 ? 'active' : ''}
                    aria-current={idx === 0 ? 'true' : undefined}
                    aria-label={`Slide ${idx + 1}`}
                    key={`indicator-${idx}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner rounded-4">
                {galleryCarouselSlides.map((slide, idx) => (
                  <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={slide.src}>
                    <img src={slide.src} className="d-block w-100" alt={slide.alt} loading={idx === 0 ? 'eager' : 'lazy'} />
                    <div className="carousel-caption d-none d-md-block">
                      <p className="carousel-tag">{slide.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <div className="gallery-grid mt-5">
              {galleryImages.map((image, idx) => (
                <button
                  className="gallery-item reveal"
                  key={image.full}
                  onClick={() => {
                    setLightboxIndex(idx);
                    setLightboxOpen(true);
                  }}
                  aria-label={`Open ${image.alt}`}
                >
                  <img src={image.thumb} alt={image.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="videos" className="section-space bg-nearwhite">
          <div className="container">
            <div className="section-heading text-center reveal">
              <div className="section-label mx-auto">Video Showcase</div>
              <h2>See Our Harvest in Action</h2>
              <p>Watch live operations from our ponds to packaging.</p>
            </div>
            <div className="row g-4 mt-1">
              {videoEmbeds.map((url, idx) => (
                <div className="col-md-6 col-lg-4 reveal" key={url}>
                  <div className="video-card h-100">
                    <div className="video-card-header">
                      <i className="bi bi-play-circle-fill"></i>
                      {videoTitleCycle[idx % videoTitleCycle.length] || 'Farm Video'}
                    </div>
                    <div className="video-embed-wrap rounded-4">
                      <iframe
                        src={url}
                        title={`Fish farm video ${idx + 1}`}
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                        loading="lazy"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space quality-section">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5 reveal">
                <div className="section-label section-label--light">Our Standards</div>
                <h2 className="text-white">
                  Quality &amp;
                  <br />Sustainability
                </h2>
                <p className="text-white opacity-75 mt-3">
                  Every fish we deliver meets the highest quality benchmarks, backed by responsible farming practices designed for long-term environmental and economic sustainability.
                </p>
                <a href="#contact" className="btn app-btn-outline mt-3">
                  Partner With Us
                </a>
              </div>
              <div className="col-lg-7">
                <div className="row g-4">
                  {qualityHighlights.map((item, idx) => (
                    <div className="col-sm-6 reveal" key={item.title}>
                      <article className="quality-card h-100">
                        <div className="quality-card-number">{String(idx + 1).padStart(2, '0')}</div>
                        <i className={`bi ${item.icon}`}></i>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-space contact-section">
          <div className="container">
            <div className="section-heading text-center reveal">
              <div className="section-label mx-auto">Get In Touch</div>
              <h2>Contact Us</h2>
              <p>Request pricing, supply details, or farm partnership information.</p>
            </div>
            <div className="row g-4 mt-2">
              <div className="col-lg-7 reveal">
                <form className="contact-form" ref={formRef} onSubmit={handleContactSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="from_name">
                        Full Name
                      </label>
                      <input className="form-control" id="from_name" name="from_name" type="text" placeholder="John Doe" required />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="phone_number">
                        Phone Number
                      </label>
                      <input className="form-control" id="phone_number" name="phone_number" type="tel" placeholder="+255 7XX XXX XXX" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="from_email">
                        Email Address
                      </label>
                      <input className="form-control" id="from_email" name="from_email" type="email" placeholder="you@example.com" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Tell us about your requirements..."
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn app-btn-primary px-5" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message <i className="bi bi-send ms-2"></i>
                          </>
                        )}
                      </button>
                    </div>
                    {formStatus.state !== 'idle' && (
                      <div className="col-12" id="contact-feedback" role="alert">
                        <div className={`alert ${formStatus.state === 'success' ? 'alert-success' : 'alert-danger'} mt-2 mb-0`}>
                          {formStatus.message}
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
              <div className="col-lg-5 reveal">
                <div className="contact-info-card h-100 d-flex flex-column gap-3">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div>
                      <strong>Phone</strong>
                      <p>
                        <a href="tel:+255672411558" style={{ color: 'inherit', textDecoration: 'none' }}>
                          +255 672 411 558
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon contact-info-icon--green">
                      <i className="bi bi-whatsapp"></i>
                    </div>
                    <div>
                      <strong>WhatsApp</strong>
                      <p>+255 672 411 558</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div>
                      <strong>Location</strong>
                      <p>Iringa, Tanzania</p>
                    </div>
                  </div>
                  <div className="map-wrap mt-auto">
                    <iframe
                      title="Google Maps location placeholder"
                      src="https://maps.google.com/maps?q=Tanzania&t=&z=6&ie=UTF8&iwloc=&output=embed"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="container">
          <div className="row g-4 footer-top">
            <div className="col-lg-4">
              <div className="footer-brand">
                <img
                  src="https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771859623/kalinga_-_fish_farming_p1aof7.png"
                  alt="Kalinga Fish Farm logo"
                  className="footer-logo"
                />
                Kalinga Fish Farm – Iringa
              </div>
              <p className="footer-tagline">
                Premium freshwater aquaculture from the heart of Tanzania. Tilapia and catfish raised in sustainable earthen ponds.
              </p>
              <div className="footer-socials">
                <a href={whatsappLink} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href={facebookLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href={instagramLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2 offset-lg-1">
              <h6 className="footer-heading">Site</h6>
              <ul className="footer-links">
                {['home', 'about', 'fish', 'gallery', 'videos', 'contact'].map(section => (
                  <li key={`footer-${section}`}>
                    <a href={`#${section}`}>{section === 'fish' ? 'Our Fish' : section.charAt(0).toUpperCase() + section.slice(1)}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-sm-6 col-lg-2">
              <h6 className="footer-heading">Products</h6>
              <ul className="footer-links">
                <li>
                  <a href="#fish">Tilapia</a>
                </li>
                <li>
                  <a href="#fish">Catfish</a>
                </li>
                <li>
                  <a href="#fish">Bulk Orders</a>
                </li>
                <li>
                  <a href="#contact">Request Quote</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h6 className="footer-heading">Contact</h6>
              <p className="footer-contact-item">
                <i className="bi bi-telephone"></i> +255 672 411 558
              </p>
              <p className="footer-contact-item">
                <i className="bi bi-geo-alt"></i> Iringa, Tanzania
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn app-btn-primary btn-sm mt-2">
                <i className="bi bi-whatsapp me-1"></i> WhatsApp Us
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="mb-0">© {currentYear} Kalinga Fish Farm – Iringa. All rights reserved.</p>
            <p className="mb-0">Premium aquaculture supply for Tanzania and beyond.</p>
          </div>
        </div>
      </footer>

      <a href={whatsappLink} className="whatsapp-float" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-whatsapp"></i>
      </a>

      <div className="social-float">
        <a href={instagramLink} className="social-float-btn social-float-btn--instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        <a href={facebookLink} className="social-float-btn social-float-btn--facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
      </div>

      <div
        className={`lightbox ${lightboxOpen ? 'show' : ''}`}
        id="lightbox"
        aria-hidden={lightboxOpen ? 'false' : 'true'}
        role="dialog"
        aria-label="Image preview"
        onClick={event => {
          if (event.target.id === 'lightbox') {
            setLightboxOpen(false);
          }
        }}
      >
        <div className="lightbox-inner">
          <button className="lightbox-close" aria-label="Close image preview" onClick={() => setLightboxOpen(false)}>
            <i className="bi bi-x-lg"></i>
          </button>
          {currentLightboxImage && (
            <img src={currentLightboxImage.full} alt={currentLightboxImage.alt} />
          )}
          <div className="lightbox-nav">
            <button onClick={() => setLightboxIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length)} aria-label="Previous image">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button onClick={() => setLightboxIndex(prev => (prev + 1) % galleryImages.length)} aria-label="Next image">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [showHome, setShowHome] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3800;
    let animationFrame;
    const start = performance.now();

    const tick = now => {
      const elapsed = Math.min(now - start, duration);
      const percent = Math.round((elapsed / duration) * 100);
      setProgress(percent);
      if (elapsed < duration) {
        animationFrame = requestAnimationFrame(tick);
      } else {
        setProgress(100);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    const timer = setTimeout(() => setShowHome(true), duration + 500);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timer);
    };
  }, []);

  return showHome ? <MainSite /> : <SplashScreen progress={progress} />;
}
