/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MengToSketchbookLandingPage } from "./shaders/landing-pages/LandingPages";
import "./shaders/threeui.css";

export default function App() {
  return (
    <div
      className="w-full h-screen bg-[#f5f2ed] text-[#2b2721] overflow-hidden flex font-serif"
      style={{
        backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    >
      {/* Editorial Sidebar */}
      <aside className="hidden md:flex w-72 border-r border-[#2b2721]/20 p-10 flex-col justify-between h-full relative z-10">
        <div>
          <h2 className="text-xs uppercase tracking-widest font-sans font-bold opacity-40 mb-12">Singapore Portfolio</h2>
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-sans mb-1 opacity-50">01</span>
              <span className="text-xl border-b border-[#2b2721] w-fit">Botanical Gardens</span>
            </div>
            <div className="flex flex-col opacity-30">
              <span className="text-[10px] uppercase font-sans mb-1">02</span>
              <span className="text-xl">Joo Chiat Row</span>
            </div>
            <div className="flex flex-col opacity-30">
              <span className="text-[10px] uppercase font-sans mb-1">03</span>
              <span className="text-xl">Marina Bay Skyline</span>
            </div>
            <div className="flex flex-col opacity-30">
              <span className="text-[10px] uppercase font-sans mb-1">04</span>
              <span className="text-xl">Lau Pa Sat</span>
            </div>
            <div className="flex flex-col opacity-30">
              <span className="text-[10px] uppercase font-sans mb-1">05</span>
              <span className="text-xl">Little India Architecture</span>
            </div>
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-widest font-sans opacity-40 leading-relaxed">
          Meng To — Sketchbook<br />
          Published 2024 · Singapore
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative flex items-center justify-center p-4 md:p-16">
        <div className="relative w-full h-full bg-white shadow-[20px_20px_60px_rgba(43,39,33,0.1)] rounded-[2px] flex items-stretch overflow-hidden group">
          {/* Subtle inner spine shadow */}
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/5 to-transparent z-20 pointer-events-none"></div>

          {/* Original Component */}
          <div className="shader-frame w-full h-full relative z-10">
            <MengToSketchbookLandingPage
              headingFont="instrument-serif"
              bodyFont="newsreader"
              headingWeight="400"
              bodyWeight="400"
              primaryColor="#2b2721"
              headingSize={30}
              bodySize={20}
              headingLetterSpacing={0.010}
            />
          </div>
        </div>
      </main>

      {/* Decorative side text */}
      <div className="hidden lg:flex absolute bottom-10 right-10 gap-12 font-sans text-[10px] font-bold tracking-[3px] uppercase opacity-40 transform rotate-90 origin-bottom-right translate-x-[-100%] translate-y-[-50px]">
        <span>View Portfolio</span>
        <span>Contact</span>
        <span>About</span>
      </div>
    </div>
  );
}
