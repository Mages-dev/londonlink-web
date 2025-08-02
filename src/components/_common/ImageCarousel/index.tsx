'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import styles from './ImageCarousel.module.css';

export default function ImageCarousel() {
  const [images, setImages] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderReady, setSliderReady] = useState(false);
const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
  sliderReady
    ? {
        loop: true,
        slides: { perView: 1 },
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel);
          restartAutoplay();
        },
        created() {},
      }
    : undefined
);


  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Verifica se container tem largura > 0
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
        setSliderReady(true);
      }
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    timerRef.current = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
  }, [stopAutoplay, instanceRef]);

  const restartAutoplay = useCallback(() => {
    stopAutoplay();
    startAutoplay();
  }, [stopAutoplay, startAutoplay]);

  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then(setImages);
  }, []);

  useEffect(() => {
    if (images.length > 1 && sliderReady) {
      startAutoplay();
    }
    return () => stopAutoplay();
  }, [images, sliderReady, startAutoplay, stopAutoplay]);

  if (images.length === 0) return <p>Carregando imagens...</p>;

  return (
    <div className={styles.carouselWrapper} ref={containerRef}>
      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {images.map((src, index) => (
          <div className={`keen-slider__slide ${styles.slide}`} key={index}>
            <div className={styles.imageContainer}>
              <img
                src={src}
                alt={`Imagem ${index + 1}`}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>

      {sliderReady && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className={styles.navButton}
            style={{ left: 10 }}
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className={styles.navButton}
            style={{ right: 10 }}
            aria-label="Próxima"
          >
            ›
          </button>
        </>
      )}

      {sliderReady && instanceRef.current && (
        <div className={styles.dots}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`${styles.dot} ${currentSlide === idx ? styles.active : ''}`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
