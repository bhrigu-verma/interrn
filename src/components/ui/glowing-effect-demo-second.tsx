// "use client";

// import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
// import { GlowingEffect } from "@/components/ui/glowing-effect";

// export function GlowingEffectDemoSecond() {
//   return (
//     <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
//       <GridItem
//         area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
//         icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
//         title="Do things the right way"
//         description="Running out of copy so I'll write anything."
//       />

//       <GridItem
//         area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
//         icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
//         title="The best AI code editor ever."
//         description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
//       />

//       <GridItem
//         area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
//         icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
//         title="You should buy Aceternity UI Pro"
//         description="It's the best money you'll ever spend"
//       />

//       <GridItem
//         area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
//         icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
//         title="This card is also built by Cursor"
//         description="I'm not even kidding. Ask my mom if you don't believe me."
//       />

//       <GridItem
//         area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
//         icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
//         title="Coming soon on Aceternity UI"
//         description="I'm writing the code as I record this, no shit."
//       />
//     </ul>
//   );
// }

// interface GridItemProps {
//   area: string;
//   icon: React.ReactNode;
//   title: string;
//   description: React.ReactNode;
// }

// const GridItem = ({ area, icon, title, description }: GridItemProps) => {
//   return (
//     <li className={`min-h-[14rem] list-none ${area}`}>
//       <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
//         <GlowingEffect
//           blur={0}
//           borderWidth={3}
//           spread={80}
//           glow={true}
//           disabled={false}
//           proximity={64}
//           inactiveZone={0.01}
//         />
//         <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
//           <div className="relative flex flex-1 flex-col justify-between gap-3">
//             <div className="w-fit rounded-lg border border-gray-600 p-2">
//               {icon}
//             </div>
//             <div className="space-y-3">
//               <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
//                 {title}
//               </h3>
//               <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
//                 {description}
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// };


"use client";

import React from 'react';
import { Box, Lock, Search, Settings, Sparkles, Zap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemoSecond() {
  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          50% { 
            transform: translateY(-10px) rotate(0.5deg);
          }
        }

        .floating-card {
          animation: float 3s ease-in-out infinite;
        }

        .floating-card:nth-child(1) { animation-delay: 0s; }
        .floating-card:nth-child(2) { animation-delay: 0.2s; }
        .floating-card:nth-child(3) { animation-delay: 0.4s; }
        .floating-card:nth-child(4) { animation-delay: 0.1s; }
        .floating-card:nth-child(5) { animation-delay: 0.3s; }
        .floating-card:nth-child(6) { animation-delay: 0.5s; }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <GridItem
          icon={<Box className="h-4 w-4" />}
          title="Do things the right way"
          description="Running out of copy so I'll write anything."
        />
        <GridItem
          icon={<Lock className="h-4 w-4" />}
          title="This card is also built by Cursor"
          description="I'm not even kidding. Ask my mom if you don't believe me."
        />
        <GridItem
          icon={<Sparkles className="h-4 w-4" />}
          title="You should buy Aceternity UI Pro"
          description="It's the best money you'll ever spend"
        />
        <GridItem
          icon={<Settings className="h-4 w-4" />}
          title="The best AI code editor ever."
          description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
        />
        <GridItem
          icon={<Zap className="h-4 w-4" />}
          title="Lightning fast performance"
          description="Optimized for speed and efficiency in every way possible."
        />
        <GridItem
          icon={<Search className="h-4 w-4" />}
          title="Coming soon on Aceternity UI"
          description="I'm writing the code as I record this, no shit."
        />
      </div>
    </>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <div className="floating-card group relative">
      <div className="relative h-full min-h-[200px] rounded-2xl border border-gray-800 bg-black/90 backdrop-blur-sm p-[1px] transition-all duration-300 hover:scale-[1.02] hover:border-orange-900/50">
        <GlowingEffect
          blur={8}
          borderWidth={2}
          spread={80}
          glow={true}
          disabled={false}
          proximity={100}
          inactiveZone={0.3}
          variant="peach"
        />
        
        <div className="relative h-full rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6 overflow-hidden">
          {/* Peach gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-amber-500/0 to-yellow-500/0 group-hover:from-orange-500/5 group-hover:via-amber-500/5 group-hover:to-yellow-500/5 transition-all duration-500 rounded-2xl" />
          
          <div className="relative z-10 flex h-full flex-col">
            <div className="mb-4 w-fit rounded-lg border border-orange-900/30 bg-gradient-to-br from-orange-950/50 to-amber-950/50 p-2.5 backdrop-blur-sm group-hover:border-orange-700/50 transition-colors duration-300">
              {React.cloneElement(icon as React.ReactElement, { 
                className: "h-4 w-4 text-orange-300/70 group-hover:text-orange-200 transition-colors duration-300" 
              })}
            </div>
            
            <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-orange-50 transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};