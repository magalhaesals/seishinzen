"use client";

import React from "react";

interface VectorBiomechanicsDiagramProps {
  techniqueId: string;
  movementNumber: number;
}

export function VectorBiomechanicsDiagram({
  techniqueId,
  movementNumber,
}: VectorBiomechanicsDiagramProps) {
  const isLeft = movementNumber % 2 === 1;

  return (
    <div className="relative rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
      <div className="mb-2 flex items-center justify-between border-b border-slate-100 pb-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
          Esquema Vetorial de Trajetória • Mov. #{movementNumber}
        </span>
        <span className="rounded bg-red-50 px-2 py-0.5 text-[11px] font-medium text-red-700">
          {movementNumber === 13
            ? "Gedan (Joelho)"
            : movementNumber === 14
            ? "Jodan (Em Pé)"
            : isLeft
            ? "Esquerda (Hidari)"
            : "Direita (Migi)"}
        </span>
      </div>

      <svg
        viewBox="0 0 260 220"
        className="mx-auto h-44 w-full max-w-[260px]"
        aria-label={`Diagrama vetorial do movimento ${movementNumber}`}
      >
        <defs>
          <marker
            id={`arrow-${movementNumber}`}
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="#dc2626" />
          </marker>
        </defs>

        {/* Subtle alignment grid */}
        <line
          x1="130"
          y1="10"
          x2="130"
          y2="210"
          stroke="#e2e8f0"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="20"
          y1="195"
          x2="240"
          y2="195"
          stroke="#cbd5e1"
          strokeWidth="2"
        />

        {/* Stance / Lower Body */}
        {movementNumber === 13 ? (
          // Kneeling stance for 13. Juji-Ude-Uke Gedan
          <g>
            {/* Torso */}
            <polygon
              points="108,82 152,82 146,142 114,142"
              fill="#f8fafc"
              stroke="#1e293b"
              strokeWidth="2.5"
            />
            {/* Gi Lapels */}
            <line x1="118" y1="82" x2="134" y2="132" stroke="#1e293b" strokeWidth="2" />
            <line x1="142" y1="82" x2="126" y2="115" stroke="#1e293b" strokeWidth="2" />
            {/* Black Belt */}
            <rect x="111" y="134" width="38" height="8" rx="2" fill="#0f172a" />
            <path d="M126,140 L120,162 M134,140 L140,162" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
            {/* Head */}
            <circle cx="130" cy="58" r="16" fill="#fde68a" stroke="#1e293b" strokeWidth="2.5" />
            <path d="M114,54 C116,40 144,40 146,54" fill="#0f172a" />
            {/* Left leg bent forward, Right knee on ground */}
            <path
              d="M120,142 L95,165 L95,193"
              fill="none"
              stroke="#1e293b"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M140,142 L152,190 L182,192"
              fill="none"
              stroke="#1e293b"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Crossed Arms Low (Gedan X) */}
            <path
              d="M108,92 L144,158"
              stroke="#1e293b"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M152,92 L116,158"
              stroke="#1e293b"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <circle cx="130" cy="148" r="12" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 2" />
            {/* Red motion arrow */}
            <path
              d="M130,96 L130,138"
              stroke="#dc2626"
              strokeWidth="2.5"
              markerEnd={`url(#arrow-${movementNumber})`}
            />
          </g>
        ) : (
          // Standing Stance for all other movements
          <g>
            {/* Legs in Zenkutsu-dachi */}
            <path
              d={
                isLeft
                  ? "M120,132 L92,162 L88,193"
                  : "M120,132 L96,193"
              }
              fill="none"
              stroke="#1e293b"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={
                isLeft
                  ? "M140,132 L164,193"
                  : "M140,132 L168,162 L172,193"
              }
              fill="none"
              stroke="#1e293b"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Torso */}
            <polygon
              points="106,66 154,66 146,132 114,132"
              fill="#f8fafc"
              stroke="#1e293b"
              strokeWidth="2.5"
            />
            {/* Gi Lapels */}
            <line x1="118" y1="66" x2="134" y2="122" stroke="#1e293b" strokeWidth="2" />
            <line x1="142" y1="66" x2="126" y2="104" stroke="#1e293b" strokeWidth="2" />
            {/* Black Belt (Kuro-Obi) */}
            <rect x="111" y="124" width="38" height="8" rx="2" fill="#0f172a" />
            <path d="M127,130 L121,152 M133,130 L139,152" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
            {/* Head */}
            <circle cx="130" cy="42" r="15" fill="#fde68a" stroke="#1e293b" strokeWidth="2.5" />
            <path d="M115,38 C117,24 143,24 145,38" fill="#0f172a" />
          </g>
        )}

        {/* Technique-specific Arms & Trajectory Arrows */}
        {techniqueId === "age-uke" && (
          <g>
            {/* Single Age-Uke: closed fist in front of forehead, eyes clear below forearm */}
            <path
              d="M154,72 L152,48 L118,28"
              fill="none"
              stroke="#1e293b"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <ellipse cx="114" cy="26" rx="7" ry="6" fill="#fde68a" stroke="#1e293b" strokeWidth="2" />
            <line x1="111" y1="23" x2="111" y2="29" stroke="#1e293b" strokeWidth="1.3" />
            <line x1="114" y1="22.5" x2="114" y2="29.5" stroke="#1e293b" strokeWidth="1.3" />
            <line x1="117" y1="23" x2="117" y2="29" stroke="#1e293b" strokeWidth="1.3" />
            <circle cx="124" cy="44" r="1.6" fill="#1e293b" />
            <circle cx="136" cy="44" r="1.6" fill="#1e293b" />
            <path d="M106,72 L94,105 L110,122" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
            <ellipse cx="110" cy="122" rx="6" ry="5" fill="#fde68a" stroke="#1e293b" strokeWidth="2" />
            <path
              d="M140,88 C152,62 148,40 122,30"
              fill="none"
              stroke="#dc2626"
              strokeWidth="2.5"
              strokeDasharray="4 2"
              markerEnd={`url(#arrow-${movementNumber})`}
            />
            <text x="148" y="18" fontSize="9" fill="#b91c1c" fontWeight="700">
              olhos livres
            </text>
          </g>
        )}

        {techniqueId === "gedan-barai-uke" && (
          <g>
            {isLeft ? (
              <>
                {/* Left Arm Sweeping Low */}
                <path
                  d="M106,74 L94,112 L76,148"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="75" cy="150" r="5" fill="#1e293b" />
                {/* Right Arm Hikite */}
                <path d="M154,74 L166,105 L150,122" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                {/* Sweeping Downward Arrow from Right Ear to Left Knee */}
                <path
                  d="M144,58 C122,88 102,118 82,140"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                  markerEnd={`url(#arrow-${movementNumber})`}
                />
              </>
            ) : (
              <>
                {/* Right Arm Sweeping Low */}
                <path
                  d="M154,74 L166,112 L184,148"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="185" cy="150" r="5" fill="#1e293b" />
                {/* Left Arm Hikite */}
                <path d="M106,74 L94,105 L110,122" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                {/* Sweeping Downward Arrow from Left Ear to Right Knee */}
                <path
                  d="M116,58 C138,88 158,118 178,140"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                  markerEnd={`url(#arrow-${movementNumber})`}
                />
              </>
            )}
          </g>
        )}

        {techniqueId === "soto-ude-uke" && (
          <g>
            {isLeft ? (
              <>
                {/* Left Forearm Outside-to-Inside Block */}
                <path
                  d="M106,76 L86,98 L108,58"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="108" cy="56" r="5" fill="#1e293b" />
                <path d="M154,74 L166,105 L150,122" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                {/* Outside-to-inside curved arrow */}
                <path
                  d="M52,52 C62,32 88,38 102,56"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                  markerEnd={`url(#arrow-${movementNumber})`}
                />
              </>
            ) : (
              <>
                {/* Right Forearm Outside-to-Inside Block */}
                <path
                  d="M154,76 L174,98 L152,58"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="152" cy="56" r="5" fill="#1e293b" />
                <path d="M106,74 L94,105 L110,122" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                {/* Outside-to-inside curved arrow */}
                <path
                  d="M208,52 C198,32 172,38 158,56"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                  markerEnd={`url(#arrow-${movementNumber})`}
                />
              </>
            )}
          </g>
        )}

        {techniqueId === "uchi-ude-uke" && (
          <g>
            {isLeft ? (
              <>
                {/* Left Forearm Inside-to-Outside Block */}
                <path
                  d="M106,76 L92,98 L74,58"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="74" cy="56" r="5" fill="#1e293b" />
                <path d="M154,74 L166,105 L150,122" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                {/* Inside-to-outside curved arrow */}
                <path
                  d="M136,96 C112,88 94,74 80,58"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                  markerEnd={`url(#arrow-${movementNumber})`}
                />
              </>
            ) : (
              <>
                {/* Right Forearm Inside-to-Outside Block */}
                <path
                  d="M154,76 L168,98 L186,58"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="186" cy="56" r="5" fill="#1e293b" />
                <path d="M106,74 L94,105 L110,122" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                {/* Inside-to-outside curved arrow */}
                <path
                  d="M124,96 C148,88 166,74 180,58"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                  markerEnd={`url(#arrow-${movementNumber})`}
                />
              </>
            )}
          </g>
        )}

        {techniqueId === "mae-ude-uke" && (
          <g>
            {isLeft ? (
              <>
                {/* Forward Centerline Forearm Block (Left) */}
                <path
                  d="M106,76 L116,102 L124,60"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="124" cy="58" r="5" fill="#1e293b" />
                <path d="M154,74 L166,105 L150,122" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                {/* Direct Forward Arrow */}
                <path
                  d="M94,82 L120,68"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="3"
                  markerEnd={`url(#arrow-${movementNumber})`}
                />
              </>
            ) : (
              <>
                {/* Forward Centerline Forearm Block (Right) */}
                <path
                  d="M154,76 L144,102 L136,60"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="136" cy="58" r="5" fill="#1e293b" />
                <path d="M106,74 L94,105 L110,122" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                {/* Direct Forward Arrow */}
                <path
                  d="M166,82 L140,68"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="3"
                  markerEnd={`url(#arrow-${movementNumber})`}
                />
              </>
            )}
          </g>
        )}

        {techniqueId === "mawashi-ude-uke" && (
          <g>
            {isLeft ? (
              <>
                {/* Circular Mawashi Block (Left) */}
                <path
                  d="M106,76 L80,86 L72,62"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M154,74 L144,102 L126,108" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                {/* Circular Sweep Arrow */}
                <path
                  d="M126,116 C88,122 62,92 84,56 C100,36 128,48 112,72"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                  markerEnd={`url(#arrow-${movementNumber})`}
                />
              </>
            ) : (
              <>
                {/* Circular Mawashi Block (Right) */}
                <path
                  d="M154,76 L180,86 L188,62"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M106,74 L116,102 L134,108" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                {/* Circular Sweep Arrow */}
                <path
                  d="M134,116 C172,122 198,92 176,56 C160,36 132,48 148,72"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                  markerEnd={`url(#arrow-${movementNumber})`}
                />
              </>
            )}
          </g>
        )}

        {techniqueId === "juji-ude-uke" && movementNumber === 14 && (
          <g>
            {/* High Crossed Arms (Jodan X-Block) */}
            <path
              d="M106,72 L96,42 L144,16"
              fill="none"
              stroke="#1e293b"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M154,72 L164,42 L116,16"
              fill="none"
              stroke="#1e293b"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="130" cy="24" r="12" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 2" />
            <path
              d="M130,66 L130,30"
              stroke="#dc2626"
              strokeWidth="2.5"
              markerEnd={`url(#arrow-${movementNumber})`}
            />
          </g>
        )}
      </svg>
    </div>
  );
}
