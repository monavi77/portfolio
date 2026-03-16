import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Footer } from './Footer';

interface MagazinePageProps {
  onBack: () => void;
}

// I load images with import.meta.glob, then sort by page number so the order is correct.

const pageModules = (import.meta as any).glob('../assets/magazine/travel-magazine_Page_*.png', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const extractPageNumber = (path: string) => {
  const match = path.match(/_Page_(\d+)\.png$/i);
  return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
};

const allPages = Object.entries(pageModules)
  .sort(([a], [b]) => extractPageNumber(a) - extractPageNumber(b))
  .map(([, src]) => src);

export function MagazinePage({ onBack }: MagazinePageProps) {
  const [pageIndex, setPageIndex] = useState(1);
  const [isReady, setIsReady] = useState(false);
  const bookRef = useRef(null);
  const turnLoadedRef = useRef(false);

  const totalPages = allPages.length;
  const isCover = pageIndex === 1;
  const isBackCover = pageIndex === totalPages;
  const canNext = pageIndex < totalPages;
  const canPrev = pageIndex > 1;

  const progressText = useMemo(() => {
    if (isCover) return `Cover • Page 1 of ${totalPages}`;
    if (isBackCover) return `Back Cover • Page ${totalPages} of ${totalPages}`;
    const left = pageIndex % 2 === 0 ? pageIndex : pageIndex - 1;
    const right = Math.min(left + 1, totalPages);
    return `Page ${left}-${right} of ${totalPages}`;
  }, [pageIndex, totalPages, isCover, isBackCover]);

  useEffect(() => {
    if (!bookRef.current || turnLoadedRef.current) return;

    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
      });

    const initTurn = () => {
      const $ = (window as any).jQuery;
      if (!$ || !bookRef.current) return;
      const version = $.fn?.jquery || '';
      if (version.startsWith('4.')) {
        console.error('turn.js is not compatible with jQuery 4.x. Please use jQuery 3.7.x.');
        return;
      }
      if (!$.fn?.turn) return;

      const isMobile = window.innerWidth < 768;
      const pageWidth = Math.min(420, Math.max(240, Math.floor(window.innerWidth * (isMobile ? 0.72 : 0.32))));
      const pageHeight = Math.round(pageWidth / 0.715);

      if (bookRef.current.children.length === 0) return;

      $(bookRef.current).turn({
        width: isMobile ? pageWidth : pageWidth * 2,
        height: pageHeight,
        autoCenter: true,
        display: 'single',
        duration: 900,
        gradients: true,
        elevation: 50,
        page: 1,
        when: {
          turning: (_e: Event, page: number) => {
            const isMobileNow = window.innerWidth < 768;
            const isSingle = isMobileNow || page === 1 || page === totalPages;
            $(bookRef.current).turn('display', isSingle ? 'single' : 'double');
            $(bookRef.current).turn('size', isSingle ? pageWidth : pageWidth * 2, pageHeight);
          },
          turned: (_e: Event, page: number) => {
            setPageIndex(page);
            const isMobileNow = window.innerWidth < 768;
            const isSingle = isMobileNow || page === 1 || page === totalPages;
            $(bookRef.current).turn('display', isSingle ? 'single' : 'double');
            $(bookRef.current).turn('size', isSingle ? pageWidth : pageWidth * 2, pageHeight);
          }
        }
      });

      setIsReady(true);
      turnLoadedRef.current = true;
    };

// jQuery is used to flip the pages. 
// As well asTurn.js is used to flip the pages.
// I load the scripts dynamically so the page loads faster. 

    loadScript('/jquery.min.js')
      .then(() => loadScript('/turn.js'))
      .then(initTurn)
      .catch(() => {});

      const handleResize = () => {
      const $ = (window as any).jQuery;
      if (!$ || !bookRef.current) return;
      const isMobile = window.innerWidth < 768;
      const pageWidth = Math.min(420, Math.max(240, Math.floor(window.innerWidth * (isMobile ? 0.72 : 0.32))));
      const pageHeight = Math.round(pageWidth / 0.715);
      const currentPage = $(bookRef.current).turn('page');
      const isSingle = isMobile || currentPage === 1 || currentPage === totalPages;
      $(bookRef.current).turn('display', isSingle ? 'single' : 'double');
      $(bookRef.current).turn('size', isSingle ? pageWidth : pageWidth * 2, pageHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      const $ = (window as any).jQuery;
      if ($ && bookRef.current && $(bookRef.current).data('turn')) {
        $(bookRef.current).turn('destroy');
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-20 mt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#57352A] mb-4">Magazine</h1>
            <p className="text-lg text-[#57352A]/70 max-w-2xl mx-auto">
              Click or drag to flip pages.
            </p>
          </div>

          <div className="magazine-interactive">
            <div className="magazine-turn">
              <div className="magazine-turn__book" ref={bookRef}>
                {allPages.map((src, index) => {
                  const isHard = index === 0 || index === totalPages - 1;
                  return (
                    <div
                      key={src}
                      className={`magazine-turn__page ${isHard ? 'hard' : ''}`}
                      style={{ backgroundImage: `url(${src})` }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="text-sm text-[#57352A]/60">{progressText}</div>
            <div className="magazine-turn__controls">
              <button
                type="button"
                className="glass-button glass-button-white px-6 py-2"
                onClick={() => (window as any).jQuery?.(bookRef.current).turn('previous')}
                disabled={!canPrev || !isReady}
              >
                Previous
              </button>
              <button
                type="button"
                className="glass-button px-6 py-2"
                onClick={() => (window as any).jQuery?.(bookRef.current).turn('next')}
                disabled={!canNext || !isReady}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
