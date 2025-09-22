// components/NewSocialLinks.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// This line is crucial. Make sure the CSS file is in the same folder.
import './NewSocialLinks.css';

// The data array is the same
const social_links = [
  { 
    id: 1, 
    href: 'https://www.facebook.com/shoutotb', 
    icon: '/assets/img/facebook.svg', 
    name: 'Facebook',
    'aria-label': 'Visit our Facebook page' 
  },
  { 
    id: 2, 
    href: 'https://www.linkedin.com/company/shoutotb', 
    icon: '/assets/img/linkedin.svg', 
    name: 'LinkedIn',
    'aria-label': 'Visit our LinkedIn page' 
  },
  { 
    id: 3, 
    href: 'https://www.instagram.com/shoutotb', 
    icon: '/assets/img/instagram.svg', 
    name: 'Instagram',
    'aria-label': 'Visit our Instagram page' 
  },
  { 
    id: 4, 
    href: 'https://www.youtube.com/@shoutotb', 
    icon: '/assets/img/youtube (1).svg', 
    name: 'YouTube',
    'aria-label': 'Visit our YouTube channel' 
  },
  { 
    id: 5, 
    href: 'https://x.com/shoutotb', 
    icon: '/assets/img/x.svg', 
    name: 'X(Twitter)',
    'aria-label': 'Visit our X (Twitter) page' 
  },
  { 
    id: 6, 
    href: 'https://threads.net/@shoutotb', 
    icon: '/assets/img/threads.svg', 
    name: 'Threads',
    'aria-label': 'Visit our Threads page' 
  },
];

const NewSocialLinks = () => {
  return (
    <div className="cs_social_links_wrapper">
      <h4 className="cs_social_title">Follow Us</h4>
      
      <div className="cs_social_grid_container">
        {social_links.map((link) => (
          <Link 
            key={link.id} 
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cs_social_grid_item"
            aria-label={link['aria-label']}
          >
            <Image
              src={link.icon}
              alt={link.name}
              width={24}
              height={24}
            />
            <span className="cs_social_name">{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewSocialLinks;