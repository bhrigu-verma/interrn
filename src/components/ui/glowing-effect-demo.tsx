"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function GlowingEffectDemo() {
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <ul 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}
        className="md:grid-cols-2 lg:grid-cols-3"
      >
        <GridItem
          icon={<Box className="h-4 w-4" style={{ color: '#9ca3af' }} />}
          title="Do things the right way"
          description="Running out of copy so I'll write anything."
        />

        <GridItem
          icon={<Settings className="h-4 w-4" style={{ color: '#9ca3af' }} />}
          title="The best AI code editor ever."
          description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
        />

        <GridItem
          icon={<Lock className="h-4 w-4" style={{ color: '#9ca3af' }} />}
          title="You should buy Aceternity UI Pro"
          description="It's the best money you'll ever spend"
        />

        <GridItem
          icon={<Sparkles className="h-4 w-4" style={{ color: '#9ca3af' }} />}
          title="This card is also built by Cursor"
          description="I'm not even kidding. Ask my mom if you don't believe me."
        />

        <GridItem
          icon={<Search className="h-4 w-4" style={{ color: '#9ca3af' }} />}
          title="Coming soon on Aceternity UI"
          description="I'm writing the code as I record this, no shit."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li style={{ minHeight: '14rem' }}>
      <div 
        style={{
          position: 'relative',
          height: '100%',
          borderRadius: '1rem',
          border: '1px solid #374151',
          backgroundColor: '#1f2937',
          overflow: 'hidden'
        }}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={100}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div 
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.5rem',
            height: '100%',
            padding: '1.5rem',
            zIndex: 10
          }}
        >
          <div 
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '0.75rem',
              flex: 1
            }}
          >
            <div 
              style={{
                width: 'fit-content',
                borderRadius: '0.5rem',
                border: '1px solid #4b5563',
                padding: '0.5rem',
                backgroundColor: '#374151'
              }}
            >
              {icon}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h3 
                style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.375',
                  fontWeight: '600',
                  color: '#ffffff',
                  margin: 0
                }}
              >
                {title}
              </h3>
              <h2 
                style={{
                  fontSize: '0.875rem',
                  lineHeight: '1.125',
                  color: '#9ca3af',
                  margin: 0
                }}
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};