import { useCallback, useEffect, useMemo, useState } from "react";

interface ScrollSpyOptions {
  /** Pixels from top of viewport considered as the "reading line" */
  offset?: number;
}

/**
 * Scroll-based section spy.
 * More reliable than IntersectionObserver for complex layouts/overflow/animated sections.
 */
export function useScrollSpy(sectionIds: string[], options: ScrollSpyOptions = {}) {
  const offset = options.offset ?? 120;
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds]);
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  const computeActive = useCallback(() => {
    const y = offset;

    let bestId = activeId;
    let bestDistance = Number.POSITIVE_INFINITY;

    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      // Only consider sections that are on-screen (or very near)
      const isRelevant = rect.bottom > y && rect.top < window.innerHeight;
      if (!isRelevant) continue;

      const distance = Math.abs(rect.top - y);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestId = id;
      }
    }

    if (bestId && bestId !== activeId) setActiveId(bestId);
  }, [activeId, ids, offset]);

  useEffect(() => {
    if (!ids.length) return;

    let raf = 0;
    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(computeActive);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    // Initial compute
    onScrollOrResize();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [computeActive, ids.length]);

  return { activeId, setActiveId };
}
