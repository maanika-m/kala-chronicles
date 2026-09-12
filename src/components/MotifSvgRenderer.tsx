import React from 'react';
import { MotifTint } from '../types';

interface MotifSvgRendererProps {
  svgPath: string;
  tint?: MotifTint;
  className?: string;
}

export const MotifSvgRenderer: React.FC<MotifSvgRendererProps> = ({
  svgPath,
  tint = 'default',
  className = 'w-full h-full'
}) => {
  // Resolve primary and secondary color depending on tint
  let mainColor = '#f6f4ea'; // default Warli white
  let secondaryColor = '#e2be8c'; // default bronze accent
  let tertiaryColor = '#c83827'; // Phad vermillion
  let outlineColor = '#161413'; // Phad black outline

  if (tint === 'monochrome-white') {
    mainColor = '#f6f4ea';
    secondaryColor = '#e5e3d7';
    tertiaryColor = '#dcdad0';
    outlineColor = '#3a3530';
  } else if (tint === 'vermillion') {
    mainColor = '#c83827';
    secondaryColor = '#e8a938';
    tertiaryColor = '#a82c1e';
    outlineColor = '#161413';
  } else if (tint === 'ochre-gold') {
    mainColor = '#e8a938';
    secondaryColor = '#f2be8c';
    tertiaryColor = '#c83827';
    outlineColor = '#161413';
  } else if (tint === 'charcoal') {
    mainColor = '#242220';
    secondaryColor = '#3a3734';
    tertiaryColor = '#161413';
    outlineColor = '#0d0c0c';
  }

  switch (svgPath) {
    // ----------------- WARLI MOTIFS -----------------
    case 'warli-tarpa-dance':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Central Tarpa Musician */}
          <circle cx="100" cy="94" r="5" fill={mainColor} />
          <polygon points="100,99 96,108 104,108" fill={mainColor} />
          <polygon points="100,117 96,108 104,108" fill={mainColor} />
          <line x1="97" y1="117" x2="94" y2="126" stroke={mainColor} strokeWidth="2" strokeLinecap="round" />
          <line x1="103" y1="117" x2="106" y2="126" stroke={mainColor} strokeWidth="2" strokeLinecap="round" />
          {/* Tarpa Horn */}
          <path d="M102,102 Q115,95 125,78" stroke={mainColor} strokeWidth="3" strokeLinecap="round" fill="none" />
          <polygon points="123,76 130,73 126,82" fill={mainColor} />

          {/* Concentric Circle Dancers */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const r = 64;
            const cx = 100 + r * Math.cos(rad);
            const cy = 100 + r * Math.sin(rad);
            const rot = deg + 90;
            return (
              <g key={i} transform={`translate(${cx}, ${cy}) rotate(${rot})`}>
                {/* Head */}
                <circle cx="0" cy="-14" r="3.5" fill={mainColor} />
                {/* Upper Triangle (Chest) */}
                <polygon points="0,-10 -4,-3 4,-3" fill={mainColor} />
                {/* Lower Triangle (Pelvis) */}
                <polygon points="0,4 -4,-3 4,-3" fill={mainColor} />
                {/* Legs */}
                <path d="M-2,4 L-4,12" stroke={mainColor} strokeWidth="1.8" strokeLinecap="round" />
                <path d="M2,4 L5,11" stroke={mainColor} strokeWidth="1.8" strokeLinecap="round" />
                {/* Arm linking */}
                <path d="M-4,-3 Q-10,-5 -15,-4" stroke={mainColor} strokeWidth="1.6" strokeLinecap="round" />
                <path d="M4,-3 Q10,-5 15,-4" stroke={mainColor} strokeWidth="1.6" strokeLinecap="round" />
              </g>
            );
          })}
        </svg>
      );

    case 'warli-dancers-pair':
      return (
        <svg viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Dancer 1 */}
          <g transform="translate(48, 60)">
            <circle cx="0" cy="-28" r="6" fill={mainColor} />
            <polygon points="0,-22 -9,-8 9,-8" fill={mainColor} />
            <polygon points="0,6 -9,-8 9,-8" fill={mainColor} />
            <path d="M-4,6 L-10,24 L-16,24" stroke={mainColor} strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M4,6 L10,24 L16,24" stroke={mainColor} strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M-9,-8 Q-18,-15 -22,-6" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M9,-8 Q18,-15 24,-12" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
          {/* Dancer 2 */}
          <g transform="translate(92, 60)">
            <circle cx="0" cy="-28" r="6" fill={mainColor} />
            <polygon points="0,-22 -9,-8 9,-8" fill={mainColor} />
            <polygon points="0,6 -9,-8 9,-8" fill={mainColor} />
            <path d="M-4,6 L-8,24 L-4,25" stroke={mainColor} strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M4,6 L12,24 L8,25" stroke={mainColor} strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M-9,-8 Q-16,-15 -20,-12" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M9,-8 Q20,-15 26,-4" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      );

    case 'warli-archer-hunter':
      return (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(50, 60)">
            <circle cx="-5" cy="-28" r="6" fill={mainColor} />
            <polygon points="-5,-22 -14,-7 4,-7" fill={mainColor} />
            <polygon points="-5,8 -14,-7 4,-7" fill={mainColor} />
            {/* Lunge Legs */}
            <path d="M-8,8 L-22,28" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
            <path d="M-2,8 L15,26" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
            {/* Extended Arms */}
            <path d="M-14,-7 L-4,-4 L20,-8" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" />
            {/* Bow & Arrow */}
            <path d="M22,-32 Q36,-8 22,16" stroke={mainColor} strokeWidth="2.5" fill="none" />
            <line x1="22" y1="-32" x2="22" y2="16" stroke={mainColor} strokeWidth="1" strokeDasharray="2 2" />
            <line x1="4" y1="-8" x2="38" y2="-8" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
            <polygon points="38,-8 33,-11 33,-5" fill={secondaryColor} />
          </g>
        </svg>
      );

    case 'warli-harvest-couple':
      return (
        <svg viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Harvester with grain basket */}
          <g transform="translate(45, 65)">
            <circle cx="0" cy="-26" r="5.5" fill={mainColor} />
            {/* Grain basket on head */}
            <path d="M-14,-32 Q0,-26 14,-32 L10,-40 L-10,-40 Z" fill={mainColor} />
            <line x1="-10" y1="-40" x2="-14" y2="-32" stroke={secondaryColor} strokeWidth="1.5" />
            <line x1="0" y1="-40" x2="0" y2="-28" stroke={secondaryColor} strokeWidth="1.5" />
            <line x1="10" y1="-40" x2="14" y2="-32" stroke={secondaryColor} strokeWidth="1.5" />
            <polygon points="0,-20 -8,-7 8,-7" fill={mainColor} />
            <polygon points="0,6 -8,-7 8,-7" fill={mainColor} />
            <path d="M-4,6 L-8,24" stroke={mainColor} strokeWidth="2.8" strokeLinecap="round" />
            <path d="M4,6 L8,24" stroke={mainColor} strokeWidth="2.8" strokeLinecap="round" />
            {/* Arms holding basket */}
            <path d="M-8,-7 L-12,-24 L-6,-34" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M8,-7 L12,-24 L6,-34" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
          {/* Harvester with sickle and sheaf */}
          <g transform="translate(95, 65)">
            <circle cx="0" cy="-26" r="5.5" fill={mainColor} />
            <polygon points="0,-20 -8,-7 8,-7" fill={mainColor} />
            <polygon points="0,6 -8,-7 8,-7" fill={mainColor} />
            <path d="M-4,6 L-8,24" stroke={mainColor} strokeWidth="2.8" strokeLinecap="round" />
            <path d="M4,6 L8,24" stroke={mainColor} strokeWidth="2.8" strokeLinecap="round" />
            {/* Sickle */}
            <path d="M-8,-7 L-18,-4 Q-24,-12 -18,-18" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Sheaf of paddy */}
            <path d="M8,-7 L16,-16" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" />
            <path d="M16,-16 L12,-30 M16,-16 L18,-32 M16,-16 L24,-28" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'warli-sacred-chowk':
      return (
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Outer Diamond Grid */}
          <rect x="25" y="25" width="110" height="110" stroke={mainColor} strokeWidth="3" fill="none" />
          <rect x="35" y="35" width="90" height="90" stroke={secondaryColor} strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
          {/* Triangular fringe around square */}
          {[35, 55, 75, 95, 115].map((x) => (
            <React.Fragment key={x}>
              <polygon points={`${x},25 ${x + 10},15 ${x + 20},25`} fill={mainColor} />
              <polygon points={`${x},135 ${x + 10},145 ${x + 20},135`} fill={mainColor} />
            </React.Fragment>
          ))}
          {[35, 55, 75, 95, 115].map((y) => (
            <React.Fragment key={y}>
              <polygon points={`25,${y} 15,${y + 10} 25,${y + 20}`} fill={mainColor} />
              <polygon points={`135,${y} 145,${y + 10} 135,${y + 20}`} fill={mainColor} />
            </React.Fragment>
          ))}
          {/* Palaghata Mother Goddess inside */}
          <circle cx="80" cy="62" r="7" fill={mainColor} />
          <polygon points="80,69 68,85 92,85" fill={mainColor} />
          <polygon points="80,101 68,85 92,85" fill={mainColor} />
          <path d="M72,101 L66,116" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M88,101 L94,116" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M68,85 L56,76" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M92,85 L104,76" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Comb and mirror symbols */}
          <path d="M50,55 L50,68 M47,58 L53,58 M47,62 L53,62 M47,66 L53,66" stroke={secondaryColor} strokeWidth="1.5" />
          <circle cx="110" cy="60" r="5" stroke={secondaryColor} strokeWidth="1.5" fill="none" />
          <line x1="110" y1="65" x2="110" y2="72" stroke={secondaryColor} strokeWidth="1.5" />
        </svg>
      );

    case 'warli-solar-radiance':
      return (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="60" cy="60" r="16" fill={mainColor} />
          <circle cx="60" cy="60" r="24" stroke={secondaryColor} strokeWidth="2" strokeDasharray="3 3" fill="none" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 60 + 26 * Math.cos(rad);
            const y1 = 60 + 26 * Math.sin(rad);
            const x2 = 60 + (i % 2 === 0 ? 44 : 36) * Math.cos(rad);
            const y2 = 60 + (i % 2 === 0 ? 44 : 36) * Math.sin(rad);
            return (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" />
                {i % 2 === 0 && (
                  <circle cx={x2} cy={y2} r="2" fill={secondaryColor} />
                )}
              </g>
            );
          })}
        </svg>
      );

    case 'warli-horned-bull':
      return (
        <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(70, 50)">
            {/* Body formed by two triangles */}
            <polygon points="-30,-10 0,6 0,-20" fill={mainColor} />
            <polygon points="25,-10 0,6 0,-20" fill={mainColor} />
            {/* Legs */}
            <path d="M-22,6 L-24,28" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
            <path d="M-15,6 L-13,28" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
            <path d="M15,6 L13,28" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
            <path d="M22,6 L24,28" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
            {/* Tail */}
            <path d="M-28,-10 Q-38,0 -34,16" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Head and Horns */}
            <circle cx="34" cy="-18" r="6" fill={mainColor} />
            <path d="M34,-24 Q28,-40 18,-38" stroke={mainColor} strokeWidth="2.8" strokeLinecap="round" fill="none" />
            <path d="M36,-24 Q44,-42 52,-38" stroke={mainColor} strokeWidth="2.8" strokeLinecap="round" fill="none" />
            {/* Muzzle */}
            <path d="M38,-16 L46,-12" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'warli-thatched-hut':
      return (
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Triangular Thatched Roof */}
          <polygon points="70,25 25,65 115,65" fill={mainColor} stroke={secondaryColor} strokeWidth="2" />
          {/* Thatch lines */}
          <line x1="70" y1="25" x2="45" y2="65" stroke={secondaryColor} strokeWidth="1.5" />
          <line x1="70" y1="25" x2="70" y2="65" stroke={secondaryColor} strokeWidth="1.5" />
          <line x1="70" y1="25" x2="95" y2="65" stroke={secondaryColor} strokeWidth="1.5" />
          {/* Walls */}
          <rect x="35" y="65" width="70" height="50" stroke={mainColor} strokeWidth="2.5" fill="none" />
          <line x1="35" y1="65" x2="105" y2="115" stroke={mainColor} strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="105" y1="65" x2="35" y2="115" stroke={mainColor} strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Doorway */}
          <polygon points="60,115 60,85 80,85 80,115" fill={mainColor} />
          {/* Palm Frond beside hut */}
          <path d="M115,115 Q125,75 128,45" stroke={mainColor} strokeWidth="2" fill="none" />
          <path d="M128,45 Q115,35 105,40" stroke={mainColor} strokeWidth="1.8" fill="none" />
          <path d="M128,45 Q135,32 142,40" stroke={mainColor} strokeWidth="1.8" fill="none" />
          <path d="M128,45 Q120,25 125,18" stroke={mainColor} strokeWidth="1.8" fill="none" />
        </svg>
      );

    case 'warli-sawtooth-border':
      return (
        <svg viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <line x1="0" y1="10" x2="240" y2="10" stroke={mainColor} strokeWidth="2" />
          <line x1="0" y1="30" x2="240" y2="30" stroke={mainColor} strokeWidth="2" />
          {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220].map((x) => (
            <polygon key={x} points={`${x},10 ${x + 10},30 ${x + 20},10`} fill={mainColor} />
          ))}
        </svg>
      );

    // ----------------- PHAD MOTIFS -----------------
    case 'phad-pabuji-steed':
      return (
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(80, 85)">
            {/* The Black Steed Kesar Kalmi */}
            <path
              d="M-40,10 Q-30,-20 0,-15 Q25,-25 35,-10 Q40,15 15,20 Q-15,25 -40,10 Z"
              fill={outlineColor}
              stroke={secondaryColor}
              strokeWidth="1.5"
            />
            {/* Horse Arching Neck & Head */}
            <path
              d="M15,-15 Q25,-40 38,-38 Q46,-35 44,-24 Q38,-15 32,-8 Z"
              fill={outlineColor}
            />
            <circle cx="40" cy="-30" r="2.5" fill={mainColor} stroke={outlineColor} strokeWidth="1" />
            <path d="M38,-38 L42,-44 L36,-41 Z" fill={outlineColor} /> {/* Ear */}
            {/* Horse Legs (Prancing) */}
            <path d="M-30,10 L-36,45 L-30,48" stroke={outlineColor} strokeWidth="4.5" strokeLinecap="round" />
            <path d="M-20,15 L-24,42 L-18,46" stroke={outlineColor} strokeWidth="4.5" strokeLinecap="round" />
            <path d="M15,18 L24,35 L38,28" stroke={outlineColor} strokeWidth="4.5" strokeLinecap="round" />
            <path d="M22,12 L32,32 L46,26" stroke={outlineColor} strokeWidth="4.5" strokeLinecap="round" />
            {/* Flowing Mane and Tail */}
            <path d="M-40,10 Q-55,25 -50,45" stroke={outlineColor} strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* Ornate Red & Gold Saddlecloth */}
            <path d="M-15,-12 L15,-12 L18,8 L-18,8 Z" fill={tertiaryColor} stroke={secondaryColor} strokeWidth="1.5" />
            <circle cx="0" cy="-2" r="3" fill={secondaryColor} />

            {/* Pabuji Rider */}
            {/* Torso in Flared Angarkha */}
            <path d="M-8,-14 L12,-14 L8,-42 L-6,-42 Z" fill={tertiaryColor} stroke={outlineColor} strokeWidth="1.5" />
            {/* Saffron Sash */}
            <path d="M-8,-26 L12,-22" stroke={secondaryColor} strokeWidth="3" />
            {/* Head in Profile */}
            <circle cx="2" cy="-52" r="8" fill={secondaryColor} stroke={outlineColor} strokeWidth="1.5" />
            {/* Fish-shaped Machhali Eye */}
            <ellipse cx="5" cy="-53" rx="2.5" ry="1.2" fill={mainColor} stroke={outlineColor} strokeWidth="0.8" />
            <circle cx="5.5" cy="-53" r="0.8" fill={outlineColor} />
            {/* Mewari Pagri Turban with Plume */}
            <path d="M-6,-58 Q4,-68 14,-58 Q8,-52 -6,-54 Z" fill={secondaryColor} stroke={outlineColor} strokeWidth="1.5" />
            <path d="M12,-62 Q18,-72 14,-76" stroke={tertiaryColor} strokeWidth="2.5" strokeLinecap="round" />
            {/* Extended Spear / Lance */}
            <line x1="-30" y1="-10" x2="55" y2="-65" stroke={secondaryColor} strokeWidth="3" />
            <polygon points="55,-65 62,-72 52,-68" fill={mainColor} stroke={outlineColor} strokeWidth="1" />
          </g>
        </svg>
      );

    case 'phad-courtly-falconer':
      return (
        <svg viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(60, 75)">
            {/* Royal Angarkha Tunic */}
            <path d="M-18,50 L-12,0 L12,0 L18,50 Z" fill={tertiaryColor} stroke={outlineColor} strokeWidth="2" />
            {/* Golden Belt */}
            <rect x="-14" y="8" width="28" height="6" fill={secondaryColor} stroke={outlineColor} strokeWidth="1" />
            {/* Slender Profile Torso */}
            <path d="M-12,0 L12,0 L8,-30 L-8,-30 Z" fill={secondaryColor} stroke={outlineColor} strokeWidth="1.8" />
            {/* Curved Talwar Scabbard */}
            <path d="M-6,12 Q-22,26 -28,42" stroke={secondaryColor} strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* Noble Profile Head */}
            <circle cx="0" cy="-42" r="11" fill={secondaryColor} stroke={outlineColor} strokeWidth="1.5" />
            {/* Large Fish Eye */}
            <ellipse cx="4" cy="-43" rx="3.5" ry="1.6" fill={mainColor} stroke={outlineColor} strokeWidth="1" />
            <circle cx="5" cy="-43" r="1.2" fill={outlineColor} />
            {/* Curved Mustache */}
            <path d="M4,-38 Q12,-37 14,-34" stroke={outlineColor} strokeWidth="1.8" strokeLinecap="round" fill="none" />
            {/* Rajasthani Pagri */}
            <path d="M-10,-50 Q4,-62 14,-48 Q6,-42 -10,-44 Z" fill={secondaryColor} stroke={outlineColor} strokeWidth="1.5" />
            <polygon points="12,-55 18,-64 12,-62" fill={tertiaryColor} />
            {/* Extended Arm with Falcon */}
            <path d="M6,-20 L24,-24 L32,-35" stroke={outlineColor} strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* The Hunting Falcon */}
            <ellipse cx="34" cy="-40" rx="6" ry="8" fill={mainColor} stroke={outlineColor} strokeWidth="1.2" />
            <path d="M38,-44 L44,-42 L38,-40 Z" fill={secondaryColor} /> {/* Beak */}
            <circle cx="37" cy="-44" r="1" fill={outlineColor} />
            <path d="M28,-36 L24,-26" stroke={outlineColor} strokeWidth="1.8" strokeLinecap="round" /> {/* Tail */}
          </g>
        </svg>
      );

    case 'phad-sarangi-bard':
      return (
        <svg viewBox="0 0 130 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(65, 70)">
            {/* Seated / Chanting Stance */}
            <path d="M-22,40 Q-30,45 -20,50 L20,50 Q30,45 22,40 Z" fill={tertiaryColor} stroke={outlineColor} strokeWidth="1.5" />
            <path d="M-15,40 L-10,-5 L10,-5 L15,40 Z" fill={secondaryColor} stroke={outlineColor} strokeWidth="1.8" />
            {/* Head chanting with open expression */}
            <circle cx="0" cy="-20" r="11" fill={secondaryColor} stroke={outlineColor} strokeWidth="1.5" />
            <ellipse cx="5" cy="-21" rx="3.5" ry="1.6" fill={mainColor} stroke={outlineColor} strokeWidth="1" />
            <circle cx="6" cy="-21" r="1.2" fill={outlineColor} />
            <path d="M6,-15 Q10,-12 6,-10" stroke={outlineColor} strokeWidth="1.5" fill="none" /> {/* Chanting mouth */}
            {/* High Folk Turban */}
            <path d="M-8,-28 Q2,-42 12,-26 Z" fill={tertiaryColor} stroke={outlineColor} strokeWidth="1.5" />
            {/* The Ravanahatha / Sarangi Instrument */}
            {/* Resonator Bowl */}
            <circle cx="16" cy="22" r="12" fill={outlineColor} stroke={secondaryColor} strokeWidth="2" />
            {/* Long Bamboo Neck */}
            <line x1="16" y1="22" x2="32" y2="-32" stroke={secondaryColor} strokeWidth="4" strokeLinecap="round" />
            {/* Tuning Pegs */}
            <line x1="28" y1="-28" x2="36" y2="-28" stroke={mainColor} strokeWidth="2" />
            <line x1="30" y1="-22" x2="38" y2="-22" stroke={mainColor} strokeWidth="2" />
            {/* The Bow (Gaz) held in hand */}
            <path d="M-5,10 Q14,8 30,12" stroke={mainColor} strokeWidth="2" fill="none" />
          </g>
        </svg>
      );

    case 'phad-royal-pavilion':
      return (
        <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Scalloped Chhatri Dome */}
          <path
            d="M30,50 Q50,20 80,18 Q110,20 130,50 Q105,44 80,48 Q55,44 30,50 Z"
            fill={tertiaryColor}
            stroke={secondaryColor}
            strokeWidth="2"
          />
          {/* Kalasha Finial */}
          <circle cx="80" cy="12" r="4" fill={secondaryColor} stroke={outlineColor} strokeWidth="1" />
          <polygon points="80,4 78,10 82,10" fill={secondaryColor} />
          {/* Flying Pennant */}
          <polygon points="82,8 96,5 82,12" fill={tertiaryColor} />
          {/* Scalloped Arch Valance */}
          <path
            d="M35,52 Q45,62 55,54 Q67,64 80,54 Q93,64 105,54 Q115,62 125,52"
            stroke={secondaryColor}
            strokeWidth="3"
            fill="none"
          />
          {/* Slender Ornate Columns */}
          <rect x="38" y="58" width="6" height="60" fill={secondaryColor} stroke={outlineColor} strokeWidth="1" />
          <rect x="116" y="58" width="6" height="60" fill={secondaryColor} stroke={outlineColor} strokeWidth="1" />
          {/* Plinth Base */}
          <rect x="25" y="118" width="110" height="12" fill={tertiaryColor} stroke={secondaryColor} strokeWidth="1.5" />
        </svg>
      );

    case 'phad-desert-camel':
      return (
        <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(80, 70)">
            {/* Camel Hump & Body */}
            <path
              d="M-40,5 Q-30,-15 -10,-10 Q0,-35 15,-10 Q35,-5 35,15 Q20,30 -20,25 Q-40,20 -40,5 Z"
              fill={secondaryColor}
              stroke={outlineColor}
              strokeWidth="2"
            />
            {/* Long S-curve Neck */}
            <path
              d="M30,10 Q42,-15 40,-35 Q35,-42 46,-44 Q54,-40 50,-30 Q44,-10 38,15"
              fill={secondaryColor}
              stroke={outlineColor}
              strokeWidth="1.8"
            />
            {/* Head and Muzzle */}
            <circle cx="48" cy="-38" r="2" fill={outlineColor} />
            <path d="M52,-34 L56,-32" stroke={outlineColor} strokeWidth="2" strokeLinecap="round" />
            {/* Legs with Knobby Knees */}
            <path d="M-30,22 L-32,58 L-28,60" stroke={outlineColor} strokeWidth="3.5" strokeLinecap="round" />
            <path d="M-18,25 L-20,54 L-16,56" stroke={outlineColor} strokeWidth="3.5" strokeLinecap="round" />
            <path d="M12,25 L16,58 L20,60" stroke={outlineColor} strokeWidth="3.5" strokeLinecap="round" />
            <path d="M24,20 L28,54 L32,56" stroke={outlineColor} strokeWidth="3.5" strokeLinecap="round" />
            {/* Mirrored Saddlecloth */}
            <rect x="-8" y="-12" width="26" height="24" fill={tertiaryColor} stroke={secondaryColor} strokeWidth="1.5" />
            <circle cx="5" cy="0" r="4" fill={mainColor} />
            {/* Hanging Tassels */}
            <line x1="-5" y1="12" x2="-5" y2="18" stroke={tertiaryColor} strokeWidth="2" />
            <line x1="5" y1="12" x2="5" y2="18" stroke={secondaryColor} strokeWidth="2" />
            <line x1="15" y1="12" x2="15" y2="18" stroke={tertiaryColor} strokeWidth="2" />
          </g>
        </svg>
      );

    case 'phad-expressive-face':
      return (
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(60, 60)">
            {/* Profile Face Outline */}
            <path
              d="M-20,-15 Q-15,-28 5,-28 Q24,-20 20,4 Q16,25 -2,26 Q-18,25 -20,-15 Z"
              fill={secondaryColor}
              stroke={outlineColor}
              strokeWidth="2"
            />
            {/* Iconic Fish Eye (Machhali Aankh) */}
            <path
              d="M2,-6 Q12,-14 20,-6 Q12,2 2,-6 Z"
              fill={mainColor}
              stroke={outlineColor}
              strokeWidth="1.5"
            />
            <circle cx="11" cy="-6" r="2.8" fill={outlineColor} />
            {/* Sweeping Arched Brow */}
            <path d="M-2,-12 Q10,-22 24,-12" stroke={outlineColor} strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Curved Rajput Mustache */}
            <path d="M8,12 Q20,10 24,6" stroke={outlineColor} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Flared Saffron Pagri */}
            <path
              d="M-24,-12 Q-10,-42 16,-34 Q28,-30 24,-18 Q10,-24 -12,-18 Z"
              fill={tertiaryColor}
              stroke={outlineColor}
              strokeWidth="2"
            />
            <circle cx="18" cy="-28" r="4" fill={secondaryColor} />
          </g>
        </svg>
      );

    case 'phad-talwar-swordsman':
      return (
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(70, 70)">
            {/* Robust Warrior Stance */}
            <path d="M-18,45 L-12,-10 L12,-10 L18,45 Z" fill={tertiaryColor} stroke={outlineColor} strokeWidth="2" />
            {/* Head in Profile */}
            <circle cx="0" cy="-28" r="11" fill={secondaryColor} stroke={outlineColor} strokeWidth="1.8" />
            <ellipse cx="5" cy="-29" rx="3.5" ry="1.6" fill={mainColor} stroke={outlineColor} strokeWidth="1" />
            <circle cx="6" cy="-29" r="1.2" fill={outlineColor} />
            <path d="M-8,-38 Q4,-50 14,-36 Z" fill={secondaryColor} stroke={outlineColor} strokeWidth="1.5" />
            {/* Round Shield (Dhal) */}
            <circle cx="-18" cy="10" r="16" fill={outlineColor} stroke={secondaryColor} strokeWidth="2" />
            <circle cx="-18" cy="10" r="4" fill={secondaryColor} />
            {/* Curved Talwar Sword */}
            <path d="M10,0 Q32,-10 44,-28 Q46,-32 42,-34 Q38,-30 28,-14 L12,4" fill={mainColor} stroke={outlineColor} strokeWidth="1.5" />
            <line x1="8" y1="2" x2="14" y2="8" stroke={secondaryColor} strokeWidth="3" />
          </g>
        </svg>
      );

    case 'phad-bel-buti-border':
      return (
        <svg viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Border Boundaries */}
          <line x1="0" y1="5" x2="240" y2="5" stroke={secondaryColor} strokeWidth="2" />
          <line x1="0" y1="35" x2="240" y2="35" stroke={secondaryColor} strokeWidth="2" />
          {/* Undulating Vine */}
          <path
            d="M0,20 Q30,5 60,20 Q90,35 120,20 Q150,5 180,20 Q210,35 240,20"
            stroke={secondaryColor}
            strokeWidth="2.5"
            fill="none"
          />
          {/* Lotus Flowers along the vine */}
          {[30, 90, 150, 210].map((x, i) => (
            <g key={x} transform={`translate(${x}, 20)`}>
              <circle cx="0" cy={i % 2 === 0 ? -8 : 8} r="5" fill={tertiaryColor} stroke={outlineColor} strokeWidth="1" />
              <polygon
                points={`0,${i % 2 === 0 ? -16 : 16} -4,${i % 2 === 0 ? -8 : 8} 4,${i % 2 === 0 ? -8 : 8}`}
                fill={secondaryColor}
              />
            </g>
          ))}
        </svg>
      );

    // ----------------- FUSION MOTIFS -----------------
    case 'fusion-geometric-pabuji':
      return (
        <svg viewBox="0 0 140 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <g transform="translate(70, 75)">
            {/* Warli Triangular Anatomy */}
            <polygon points="0,-24 -14,-4 14,-4" fill={mainColor} stroke={tertiaryColor} strokeWidth="1.5" />
            <polygon points="0,18 -14,-4 14,-4" fill={mainColor} stroke={tertiaryColor} strokeWidth="1.5" />
            {/* Legs with Warli Lunge */}
            <path d="M-6,18 L-16,45 L-22,45" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
            <path d="M6,18 L16,45 L22,45" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />

            {/* Phad Saffron Pagri Turban on Warli Round Head */}
            <circle cx="0" cy="-32" r="7" fill={mainColor} />
            <path d="M-8,-36 Q2,-48 12,-34 Q4,-30 -8,-32 Z" fill={secondaryColor} stroke={outlineColor} strokeWidth="1.5" />
            <polygon points="10,-42 16,-48 12,-46" fill={tertiaryColor} />
            {/* Phad Machhali Eye applied to minimalist face */}
            <ellipse cx="2" cy="-33" rx="2.5" ry="1.2" fill={mainColor} stroke={outlineColor} strokeWidth="0.8" />
            <circle cx="3" cy="-33" r="0.8" fill={outlineColor} />

            {/* Phad Saffron Sash across Warli Triangular Torso */}
            <line x1="-12" y1="-8" x2="12" y2="-18" stroke={tertiaryColor} strokeWidth="3.5" />

            {/* Arms holding Rajasthani Talwar sword */}
            <path d="M-14,-4 L-24,12" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" />
            <path d="M14,-4 L26,-12" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" />
            <path d="M26,-12 Q36,-24 44,-36" stroke={secondaryColor} strokeWidth="3" strokeLinecap="round" fill="none" />
            <polygon points="44,-36 48,-42 42,-39" fill={mainColor} />
          </g>
        </svg>
      );

    case 'fusion-tarpa-procession':
      return (
        <svg viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Phad Upper & Lower Register Borders */}
          <line x1="0" y1="8" x2="240" y2="8" stroke={secondaryColor} strokeWidth="2" />
          <line x1="0" y1="92" x2="240" y2="92" stroke={secondaryColor} strokeWidth="2" />
          {/* Phad Lotus Buds at ends */}
          <circle cx="16" cy="50" r="8" fill={tertiaryColor} stroke={secondaryColor} strokeWidth="1.5" />
          <circle cx="224" cy="50" r="8" fill={tertiaryColor} stroke={secondaryColor} strokeWidth="1.5" />

          {/* Warli Linear Wave Procession of Dancers */}
          {[45, 75, 105, 135, 165, 195].map((x, i) => (
            <g key={x} transform={`translate(${x}, 50)`}>
              <circle cx="0" cy="-18" r="4.5" fill={mainColor} />
              <polygon points="0,-13 -6,-2 6,-2" fill={mainColor} />
              <polygon points="0,9 -6,-2 6,-2" fill={mainColor} />
              <path d="M-3,9 L-6,22" stroke={mainColor} strokeWidth="2" strokeLinecap="round" />
              <path d="M3,9 L6,22" stroke={mainColor} strokeWidth="2" strokeLinecap="round" />
              {/* Linked Arms */}
              <path d="M-6,-2 L-15,-6" stroke={mainColor} strokeWidth="2" strokeLinecap="round" />
              <path d="M6,-2 L15,-6" stroke={mainColor} strokeWidth="2" strokeLinecap="round" />
            </g>
          ))}
        </svg>
      );

    case 'fusion-hybrid-border':
      return (
        <svg viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <line x1="0" y1="5" x2="240" y2="5" stroke={secondaryColor} strokeWidth="2" />
          <line x1="0" y1="35" x2="240" y2="35" stroke={secondaryColor} strokeWidth="2" />
          {/* Warli Triangular Sawtooth enclosing Phad Lotus Buds */}
          {[0, 40, 80, 120, 160, 200].map((x) => (
            <g key={x}>
              <polygon points={`${x},5 ${x + 20},35 ${x + 40},5`} fill="none" stroke={mainColor} strokeWidth="2" />
              <circle cx={x + 20} cy="18" r="4" fill={tertiaryColor} stroke={secondaryColor} strokeWidth="1" />
            </g>
          ))}
        </svg>
      );

    case 'fusion-devchauk-chhatri':
      return (
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Phad Scalloped Architectural Chhatri at Top */}
          <path
            d="M30,42 Q50,15 80,14 Q110,15 130,42 Q105,36 80,40 Q55,36 30,42 Z"
            fill={tertiaryColor}
            stroke={secondaryColor}
            strokeWidth="2"
          />
          <circle cx="80" cy="10" r="3.5" fill={secondaryColor} />
          {/* Warli Sacred Devchauk Square Below */}
          <rect x="40" y="52" width="80" height="80" stroke={mainColor} strokeWidth="2.5" fill="none" />
          {/* Triangles along perimeter */}
          {[45, 65, 85, 105].map((x) => (
            <polygon key={x} points={`${x},52 ${x + 8},44 ${x + 16},52`} fill={mainColor} />
          ))}
          {/* Palaghata Mother Goddess with Phad Gold Crown */}
          <circle cx="80" cy="80" r="6" fill={mainColor} />
          <polygon points="80,72 76,66 84,66" fill={secondaryColor} /> {/* Little crown */}
          <polygon points="80,86 70,100 90,100" fill={mainColor} />
          <polygon points="80,114 70,100 90,100" fill={mainColor} />
          <path d="M74,114 L68,126" stroke={mainColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M86,114 L92,126" stroke={mainColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="50" cy="50" r="35" stroke={mainColor} strokeWidth="2" strokeDasharray="4 4" />
          <polygon points="50,30 35,65 65,65" fill={mainColor} />
        </svg>
      );
  }
};
