import{j as e}from"./index-eae03e9d.js";const n=()=>{const a=[{name:"British Gas",logo:"/supplier-logos/british-gas.png"},{name:"EDF Energy",logo:"/supplier-logos/edf.png"},{name:"E.ON",logo:"/supplier-logos/eon-next.png"},{name:"Scottish Power",logo:"/supplier-logos/scottish-power.png"},{name:"Opus Energy",logo:"/supplier-logos/opus.png"},{name:"Total Energies",logo:"/supplier-logos/total.png"},{name:"Crown Gas",logo:"/supplier-logos/crown.png"},{name:"Pozitive Energy",logo:"/supplier-logos/pozitive.png"},{name:"Drax",logo:"/supplier-logos/drax.webp"},{name:"Smartest Energy",logo:"/supplier-logos/smartest.png"},{name:"Yu Energy",logo:"/supplier-logos/yu.png"},{name:"Valda Energy",logo:"/supplier-logos/valda.png"}];return e.jsxs("div",{className:"overflow-hidden",children:[e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"flex animate-scroll",children:[e.jsx("div",{className:"flex items-center space-x-12 px-6",children:a.map((s,l)=>e.jsx("div",{className:"flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300",children:e.jsx("img",{src:s.logo,alt:`${s.name} - UK Business Energy Supplier`,className:"max-w-full max-h-full object-contain",loading:"lazy"})},l))}),e.jsx("div",{className:"flex items-center space-x-12 px-6","aria-hidden":"true",children:a.map((s,l)=>e.jsx("div",{className:"flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300",children:e.jsx("img",{src:s.logo,alt:s.name,className:"max-w-full max-h-full object-contain",loading:"lazy"})},`duplicate-${l}`))})]})}),e.jsx("style",{jsx:!0,children:`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `})]})};export{n as S};
