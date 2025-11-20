"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageZoomProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ImageZoom({ src, alt, width, height, className = "" }: ImageZoomProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail - Clickable */}
      <div
        className="cursor-zoom-in relative group"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
        {/* Zoom indicator on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
            Click to zoom
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Full-size image */}
          <div className="max-w-7xl max-h-full overflow-auto">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
              priority
            />
          </div>

          {/* Hint text */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            Click anywhere to close
          </div>
        </div>
      )}
    </>
  );
}
