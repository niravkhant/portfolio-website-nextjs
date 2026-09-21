"use client";

import { Children, useEffect, useRef } from "react";
import Swiper from "swiper";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";

import styles from "./CarouselSwiper.module.scss";

export const DESKTOP_THREE_BREAKPOINTS = {
  640: { slidesPerView: 2, spaceBetween: 20 },
  992: { slidesPerView: 3, spaceBetween: 24 },
};

/** Wrapper for slide content — renders as .swiper-slide */
export function CarouselSlide({ children, className = "" }) {
  return (
    <div className={`swiper-slide ${styles.slide} ${className}`.trim()}>{children}</div>
  );
}

function resolveAutoplay(autoplay) {
  if (!autoplay) return false;
  if (autoplay === true) {
    return {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      stopOnLastSlide: true,
    };
  }
  return autoplay;
}

export default function CarouselSwiper({
  children,
  className = "",
  swiperClassName = "",
  headerSlot = null,
  showNavigation = true,
  showPagination = true,
  showHeaderNav = true,
  slidesPerView = 1,
  spaceBetween = 16,
  breakpoints = DESKTOP_THREE_BREAKPOINTS,
  loop = false,
  rewind = false,
  grabCursor = true,
  centeredSlides = false,
  autoplay = false,
  slidesPerGroup = 1,
  direction = "horizontal",
  ...restOptions
}) {
  const rootRef = useRef(null);
  const swiperElRef = useRef(null);
  const paginationRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const slideCount = Children.count(children);

  useEffect(() => {
    const el = swiperElRef.current;
    if (!el || slideCount === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const autoplayResolved = reduced ? false : resolveAutoplay(autoplay);

    const instance = new Swiper(el, {
      modules: [Navigation, Pagination, Autoplay, A11y, Keyboard],
      direction,
      slidesPerView,
      slidesPerGroup,
      spaceBetween,
      breakpoints,
      loop,
      rewind,
      grabCursor,
      centeredSlides,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      navigation: showNavigation
        ? {
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }
        : false,
      pagination: showPagination
        ? {
            el: paginationRef.current,
            clickable: true,
          }
        : false,
      autoplay: autoplayResolved || false,
      keyboard: { enabled: true },
      ...restOptions,
    });

    swiperRef.current = instance;

    const syncNavDisabled = () => {
      if (prevRef.current) {
        prevRef.current.disabled = instance.isBeginning;
        prevRef.current.classList.toggle("swiper-button-disabled", instance.isBeginning);
      }
      if (nextRef.current) {
        nextRef.current.disabled = instance.isEnd;
        nextRef.current.classList.toggle("swiper-button-disabled", instance.isEnd);
      }
    };

    instance.on("slideChange", syncNavDisabled);
    instance.on("reachBeginning", syncNavDisabled);
    instance.on("reachEnd", syncNavDisabled);
    instance.on("fromEdge", syncNavDisabled);
    syncNavDisabled();

    const refresh = () => instance.update();
    refresh();
    window.addEventListener("resize", refresh);
    const timer = window.setTimeout(refresh, 100);

    return () => {
      window.removeEventListener("resize", refresh);
      window.clearTimeout(timer);
      instance.destroy(true, true);
      swiperRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Swiper re-inits when slide count changes
  }, [slideCount, autoplay, showNavigation, showPagination]);

  return (
    <div ref={rootRef} className={`${styles.root} ${className}`.trim()}>
      {(headerSlot || showHeaderNav) && (
        <div className={styles.header}>
          {headerSlot ? <div className={styles.headerLeft}>{headerSlot}</div> : null}
          {showHeaderNav && showNavigation ? (
            <div className={styles.navGroup}>
              <button
                type="button"
                ref={prevRef}
                className={styles.navBtn}
                aria-label="Previous slide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M15 6l-6 6 6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                ref={nextRef}
                className={styles.navBtn}
                aria-label="Next slide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M9 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ) : null}
        </div>
      )}

      <div
        ref={swiperElRef}
        className={`swiper ${styles.carouselHost} ${swiperClassName}`.trim()}
      >
        <div className="swiper-wrapper">{children}</div>
        {showPagination ? (
          <div ref={paginationRef} className={`swiper-pagination ${styles.paginationBar}`} />
        ) : null}
      </div>
    </div>
  );
}
