import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface VideoItem {
  title: string;
  thumbnail?: string;
  videoUrl?: string;
  postUrl?: string;
}

interface SocialVideoSectionProps {
  data?: {
    tagline?: string;
    title?: string;
    subtitle?: string;
    instagramUrl?: string;
    videos?: VideoItem[];
  };
}

export default function SocialVideoSection({ data }: SocialVideoSectionProps) {
  const tagline = data?.tagline || 'Follow Us @mitherasweet';
  const title = data?.title || 'Fresh From Our Kitchen';
  const subtitle = data?.subtitle || 'Watch our master halwais and pastry chefs craft happiness daily in Kandivali, Mumbai.';
  const instagramUrl = data?.instagramUrl || 'https://www.instagram.com/mitherasweet';

  const defaultReels = [
    {
      title: 'Handcrafting our Signature Kaju Katli with Pure Cashews',
      image: '/images/products/Kaju katli.png',
      postUrl: instagramUrl,
      views: '12.4K'
    },
    {
      title: 'Golden Crispy Sourdough & Laminated Butter Croissants',
      image: '/images/products/Butter croissant.png',
      postUrl: instagramUrl,
      views: '18.1K'
    },
    {
      title: 'Festive Luxury Gifting Boxes Assembled Fresh Everyday',
      image: '/images/products/Signature sweet box.png',
      postUrl: instagramUrl,
      views: '9.8K'
    },
    {
      title: 'Pure Desi Ghee Karachi Halwa with Roasted Almonds & Pistachios',
      image: '/images/products/Karachi halwa.png',
      postUrl: instagramUrl,
      views: '15.2K'
    }
  ];

  const videoList = (data?.videos && data.videos.length > 0) ? data.videos : defaultReels;

  return (
    <section className="py-12 lg:py-16 bg-cream overflow-hidden">
      <div className="container px-4 lg:px-[40px]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 reveal">
          <div>
            <div className="inline-flex items-center gap-2 text-[#8C6A4A] mb-2 font-body text-xs font-semibold tracking-[0.2em] uppercase">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>{tagline}</span>
            </div>
            <h2 className="font-heading text-[28px] sm:text-[34px] lg:text-[42px] font-medium text-[#3A241A] leading-tight mb-2">
              {title}
            </h2>
            <p className="font-body text-[14px] text-[#6D5E54] max-w-xl">
              {subtitle}
            </p>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-end inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#3A241A] text-[#3A241A] hover:bg-[#3A241A] hover:text-white transition-all font-body text-xs font-semibold shadow-sm no-underline"
          >
            <span>Visit Instagram Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Video Reel Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {videoList.map((item: any, idx: number) => {
            const thumb = item.thumbnail || item.image || `/images/1 (${(idx % 6) + 1}).png`;
            const link = item.postUrl || instagramUrl;

            return (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col aspect-[9/14] rounded-2xl overflow-hidden bg-[#3A241A] shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 no-underline cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={thumb}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 group-hover:from-black/90 transition-colors"></div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-medium font-body border border-white/20">
                  <InstagramIcon className="w-3 h-3 text-[#E5C37A]" />
                  <span>Reel</span>
                </div>

                {/* Center Play Icon Hover Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:bg-[#3A241A] transition-all duration-300">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Caption & Views */}
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white z-10">
                  <p className="font-body text-[11px] sm:text-[13px] font-semibold leading-snug line-clamp-2 mb-1 group-hover:text-[#E5C37A] transition-colors">
                    {item.title}
                  </p>
                  <span className="font-body text-[10px] text-white/70 tracking-wide uppercase">
                    Watch on Instagram &rarr;
                  </span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
