import { useMemo, useState } from 'react';
import { Footer } from './Footer';

interface MagazinePageProps {
  onBack: () => void;
}

const pageModules = import.meta.glob('../assets/magazine/travel-magazine_Page_*.png', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const allPages = Object.entries(pageModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

export function MagazinePage({ onBack }: MagazinePageProps) {
  const [pageIndex, setPageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const totalPages = allPages.length;
  const isCover = pageIndex === 0;
  const isLastSingle = pageIndex === totalPages - 1;

  const leftPage = allPages[pageIndex];
  const rightPage = isCover || isLastSingle ? '' : allPages[pageIndex + 1] || allPages[pageIndex];

  const canPrev = pageIndex > 0;
  const canNext = isCover ? totalPages > 1 : pageIndex + 2 < totalPages;

  const progressText = useMemo(() => {
    if (isCover) return `Cover • Page 1 of ${totalPages}`;
    if (isLastSingle) return `Page ${totalPages} of ${totalPages}`;
    const current = Math.min(pageIndex + 2, totalPages);
    return `Page ${pageIndex + 1}-${current} of ${totalPages}`;
  }, [pageIndex, totalPages, isCover, isLastSingle]);

  const handleNext = () => {
    if (!canNext || isFlipping) return;
    setIsFlipping(true);
    window.setTimeout(() => {
      setPageIndex((prev) => (prev === 0 ? 1 : prev + 2));
      setIsFlipping(false);
    }, 700);
  };

  const handlePrev = () => {
    if (!canPrev || isFlipping) return;
    setIsFlipping(true);
    window.setTimeout(() => {
      setPageIndex((prev) => (prev === 1 ? 0 : Math.max(0, prev - 2)));
      setIsFlipping(false);
    }, 700);
  };

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-20 mt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#57352A] mb-4">Magazine</h1>
            <p className="text-lg text-[#57352A]/70 max-w-2xl mx-auto">
              Interactive preview. Use the buttons to flip pages.
            </p>
          </div>

          <div className={`magazine-wrap ${isCover || isLastSingle ? 'magazine-wrap--single' : ''}`}>
            <div className={`magazine-book ${isFlipping ? 'magazine-book--flipping' : ''} ${isCover || isLastSingle ? 'magazine-book--single' : ''}`}>
              <div className="magazine-page magazine-page--left" style={{ backgroundImage: `url(${leftPage})` }} />
              {!isCover && !isLastSingle && (
                <div className="magazine-page magazine-page--right" style={{ backgroundImage: `url(${rightPage})` }} />
              )}
              <div className="magazine-spine" />
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-[#57352A]/60">{progressText}</div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              className="glass-button w-32 px-6 py-3 font-medium"
              disabled={!canPrev || isFlipping}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="glass-button glass-button-red w-32 px-6 py-3 font-medium"
              disabled={!canNext || isFlipping}
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
