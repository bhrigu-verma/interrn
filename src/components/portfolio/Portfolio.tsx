'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Use 'any' to avoid type errors with dynamic import
const ReactPlayer: any = dynamic(() => import('react-player'), { ssr: false });

interface DataType {
  id: number;
  category: string;
  videoUrl?: string;
  instagramUrl?: string;
  title: string;
  des: string;
}

const portfolio_data: DataType[] = [
  // YouTube items in Creatives & Content
  {
    id: 1,
    category: 'Creatives & Content',
    videoUrl: "https://www.youtube.com/watch?v=5_suZOqG4EM",
    title: "Creative Video Campaign 1",
    des: "Video Marketing / Brand Content"
  },
  {
    id: 2,
    category: 'Creatives & Content',
    videoUrl: "https://www.youtube.com/watch?v=lX1WpG8YQKc",
    title: "Creative Video Campaign 2",
    des: "Video Marketing / Brand Content"
  },
  {
    id: 3,
    category: 'Creatives & Content',
    videoUrl: "https://www.youtube.com/watch?v=NHugkCIa5wk",
    title: "Creative Video Campaign 3",
    des: "Video Marketing / Brand Content"
  },
  // Instagram items in Motion Graphics
  {
    id: 4,
    category: 'Motion Graphics',
    instagramUrl: 'https://www.instagram.com/reel/DD2C1uiz9sZ/',
    title: 'Asha Mam Testimonial',
    des: 'Instagram Testimonial'
  },
  {
    id: 5,
    category: 'Motion Graphics',
    instagramUrl: 'https://www.instagram.com/reel/DDmS8CwTnpN/',
    title: 'Best Moments',
    des: 'Instagram Reel'
  },
  {
    id: 6,
    category: 'Motion Graphics',
    instagramUrl: 'https://www.instagram.com/reel/DBOhoqYg6rR/',
    title: 'Motion Graphics Reel',
    des: 'Instagram Reel'
  },
  {
    id: 7,
    category: 'Motion Graphics',
    instagramUrl: 'https://www.instagram.com/reel/DA3FshuN-uX/',
    title: 'Level Up Your Brand',
    des: 'Instagram Reel'
  },
  // Coming soon for other categories
  {
    id: 8,
    category: 'Social & Community Growth',
    title: "Community Platform",
    des: "Social Media / Community Building"
  },
  {
    id: 9,
    category: 'Performance & Growth',
    title: "Performance Analytics Dashboard",
    des: "Data Analytics / Growth Strategy"
  },
  {
    id: 10,
    category: 'AI & Future-Ready Solutions',
    title: "AI-Powered Solution",
    des: "Artificial Intelligence / Machine Learning"
  },
  {
    id: 11,
    category: 'Web, App & Custom Development',
    title: "Custom Web Application",
    des: "Full-Stack Development / Custom Solutions"
  },
  {
    id: 12,
    category: 'ONDC & Retail Media Operations',
    title: "ONDC Integration Platform",
    des: "E-commerce / Retail Technology"
  },
];

const categories = ["All", "Creatives & Content", "Social & Community Growth", "Performance & Growth", "AI & Future-Ready Solutions", "Web, App & Custom Development", "ONDC & Retail Media Operations"];


// Helper function to get YouTube video ID and thumbnail
const getYouTubeVideoInfo = (url: string) => {
  try {
    const videoId = new URL(url).searchParams.get('v');
    if (!videoId) return null;
    return {
      id: videoId,
      embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    };
  } catch (error) {
    return null;
  }
};


const fetchInstagramThumbnail = async (url: string): Promise<string | null> => {
  try {
    const oembedUrl = `https://graph.facebook.com/v18.0/instagram_oembed?url=${encodeURIComponent(url)}&access_token=IGQVJ...YOUR_TOKEN`;
    const res = await fetch(oembedUrl);
    if (!res.ok) return null;
    const data = await res.json();
    return data.thumbnail_url || null;
  } catch {
    return null;
  }
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(portfolio_data);
  const [modalItem, setModalItem] = useState<DataType | null>(null);
  const [instaThumbs, setInstaThumbs] = useState<{ [url: string]: string }>({});
  // Fetch Instagram thumbnails on mount
  useEffect(() => {
    const fetchThumbs = async () => {
      const thumbs: { [url: string]: string } = {};
      const instaItems = portfolio_data.filter(i => i.instagramUrl);
      for (const item of instaItems) {
        if (item.instagramUrl) {
          const thumb = await fetchInstagramThumbnail(item.instagramUrl);
          if (thumb) thumbs[item.instagramUrl] = thumb;
        }
      }
      setInstaThumbs(thumbs);
    };
    fetchThumbs();
  }, []);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      setItems(portfolio_data);
    } else {
      setItems(portfolio_data.filter((findItem) => findItem.category === cateItem));
    }
  };

  const openModal = (item: DataType) => {
    if (item.videoUrl || item.instagramUrl) {
      setModalItem(item);
    }
  }

  const closeModal = () => {
    setModalItem(null);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (modalItem) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [modalItem]);

  // Instagram embed helper
  const getInstagramEmbedUrl = (url: string) => {
    // Remove trailing slash if present
    const cleanUrl = url.endsWith('/') ? url.slice(0, -1) : url;
    return `${cleanUrl}/embed`;
  };

  const modalVideoEmbedUrl = modalItem?.videoUrl ? getYouTubeVideoInfo(modalItem.videoUrl)?.embedUrl : null;
  const modalInstagramEmbedUrl = modalItem?.instagramUrl ? getInstagramEmbedUrl(modalItem.instagramUrl) : null;

  return (
    <>
      {/* Move modal to the very top so it appears above the fold */}
      {modalItem && (modalVideoEmbedUrl || modalInstagramEmbedUrl) && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{modalItem.title}</h3>
              <button className="modal-close" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-video">
              {modalVideoEmbedUrl && (
                <iframe
                  src={modalVideoEmbedUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="modal-iframe"
                ></iframe>
              )}
              {modalInstagramEmbedUrl && (
                <iframe
                  src={modalInstagramEmbedUrl}
                  title="Instagram post embed"
                  allowTransparency={true}
                  allow="encrypted-media; picture-in-picture"
                  frameBorder="0"
                  scrolling="no"
                  className="modal-iframe"
                  style={{ background: '#FFF' }}
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
  <style jsx>{`
        .dropdown-select { width: 100%; max-width: 300px; background: #1a1a1a; color: white; border: 1px solid rgba(243, 60, 82, 0.4); border-radius: 10px; padding: 0.6rem 1rem; font-size: 1rem; font-weight: 500; outline: none; transition: border-color 0.3s ease, box-shadow 0.3s ease; cursor: pointer; }
        .dropdown-select:focus { border-color: #F33C52; box-shadow: 0 0 8px rgba(243, 60, 82, 0.6); }
        
        .cs_portfolio_img { position: relative; height: 250px; background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%); display: flex; align-items: center; justify-content: center; border-radius: 15px; border: 1px solid rgba(243, 60, 82, 0.2); transition: all 0.4s ease; overflow: hidden; }
        
        /* This wrapper ensures ReactPlayer behaves correctly */
        .video-thumbnail-wrapper { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        
        .coming-soon-text { text-align: center; color: white; }
        .coming-soon-title { font-size: 1.8rem; font-weight: 700; background: linear-gradient(135deg, #F33C52 0%, #ff6b6b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 0.5rem; }
        .coming-soon-subtitle { font-size: 1rem; color: #e0e0e0; opacity: 0.8; }
        
        .cs_portfolio { transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); border-radius: 15px; overflow: hidden; margin-bottom: 2rem; }
        .cs_portfolio:hover { transform: translateY(-15px) rotateX(5deg) rotateY(5deg); box-shadow: 0 25px 50px rgba(243, 60, 82, 0.2), 0 15px 30px rgba(0, 0, 0, 0.3); }
        .cs_portfolio:hover .cs_portfolio_img { background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%); border-color: #F33C52; box-shadow: inset 0 0 30px rgba(243, 60, 82, 0.1); }
        
        .portfolio-content { padding: 1.5rem; background: #1a1a1a; border-radius: 0 0 15px 15px; border: 1px solid rgba(243, 60, 82, 0.2); border-top: none; }
        .portfolio-title { font-size: 1.3rem; font-weight: 700; color: white; margin-bottom: 0.5rem; }
        .portfolio-description { font-size: 0.9rem; color: #e0e0e0; opacity: 0.8; }

        /* This is the new transparent overlay for handling clicks */
        .click-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; cursor: pointer; }
        
        .play-icon { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: rgba(243, 60, 82, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; z-index: 2; transition: all 0.3s ease; pointer-events: none; /* Make sure icon doesn't block click on overlay */ }
        .cs_portfolio_img:hover .play-icon { background: #F33C52; transform: translate(-50%, -50%) scale(1.1); }
        
        /* Modal Styles */
        .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.9); display: block; z-index: 9999; padding: 0; overflow-y: auto; }
        .modal-content { position: relative; width: 100%; max-width: 900px; margin: 0 auto; margin-top: 0; background: #1a1a1a; border-radius: 15px; overflow: hidden; border: 2px solid rgba(243, 60, 82, 0.3); top: 0; }
        @media (max-width: 991px) {
          .modal-content { max-width: 100vw; border-radius: 0; }
        }
        .modal-header { padding: 20px; background: #2a2a2a; display: flex; justify-content: space-between; align-items: center; }
        .modal-title { color: white; font-size: 1.5rem; font-weight: 700; margin: 0; }
        .modal-close { background: none; border: none; color: white; font-size: 2rem; cursor: pointer; padding: 0; line-height: 1; transition: color 0.3s ease; }
        .modal-close:hover { color: #F33C52; }
        .modal-video { position: relative; width: 100%; aspect-ratio: 16 / 9; background: #000; }
        .modal-iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; }
      `}</style>

      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                Some Recent Project We Successfully Done
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_50 cs_height_lg_25"></div>
      <section className="cs_ui_design">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-12 text-center">
              <select
                className="dropdown-select"
                value={activeCategory}
                onChange={(e) => filterItems(e.target.value)}
              >
                {categories.map((cate, i) => (
                  <option key={i} value={cate}>{cate}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="cs_isotop_items_details row">
            {items.map((item) => (
              <div key={item.id} className="col-md-4 cs_item cs_ui_design cs_development">
                <div className="cs_portfolio cs_style_1">
                  <div className="cs_portfolio_img">
                    {item.instagramUrl ? (
                      <div className="video-thumbnail-wrapper" style={{ cursor: 'pointer' }} onClick={() => openModal(item)}>
                        <img
                          src={instaThumbs[item.instagramUrl] || "/assets/img/instagram-placeholder.jpg"}
                          alt={item.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px', filter: 'brightness(0.9)' }}
                          onError={e => { (e.target as HTMLImageElement).src = "/assets/img/instagram-placeholder.jpg"; }}
                        />
                        <div className="play-icon" style={{ background: '#E1306C' }}>▶</div>
                      </div>
                    ) : item.videoUrl ? (() => {
                      const videoInfo = getYouTubeVideoInfo(item.videoUrl);
                      const fallbackImg = '/assets/img/portfolio-fallback.jpg';
                      const thumbnailUrl = videoInfo?.thumbnailUrl || fallbackImg;
                      return (
                        <>
                          <div className="video-thumbnail-wrapper">
                            <img
                              src={thumbnailUrl}
                              alt={item.title}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                              onError={e => { (e.target as HTMLImageElement).src = fallbackImg; }}
                            />
                          </div>
                          <div className="click-overlay" onClick={() => openModal(item)}>
                            <div className="play-icon">▶</div>
                          </div>
                        </>
                      );
                    })() : (
                      <div className="coming-soon-text">
                        <div className="coming-soon-title">Coming Soon</div>
                        <div className="coming-soon-subtitle">{item.category}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal is now rendered at the top for better visibility */}
    </>
  );
};

export default Portfolio;