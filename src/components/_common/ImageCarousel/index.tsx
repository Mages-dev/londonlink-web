"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import styles from "./ImageCarousel.module.css";
import Image from "next/image";

const breakPoints = [
  { width: 0, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1024, itemsToShow: 3 },
];

interface CarouselCallbackPayload {
  index: number;
}

export default function GalleryCarousel() {
  const [images, setImages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Carrega imagens
  useEffect(() => {
    fetch("/api/gallery")
      .then((r) => r.json())
      .then((list: string[]) => setImages(list || []))
      .catch((err) => {
        console.error("Erro ao carregar imagens:", err);
        setImages([]);
      });
  }, []);

  // Quantos itens mostrar no breakpoint atual
  const getItemsToShow = useCallback((): number => {
    const width =
      containerRef.current?.clientWidth ??
      (typeof window !== "undefined" ? window.innerWidth : 0);

    let items = 1;
    for (const bp of breakPoints) {
      if (width >= bp.width) {
        items = bp.itemsToShow;
      }
    }
    return items;
  }, []);

  // Total de páginas baseado no breakpoint
  const computeTotalPages = useCallback((): number => {
    const itemsToShow = getItemsToShow();
    return Math.max(1, Math.ceil(images.length / itemsToShow));
  }, [images.length, getItemsToShow]);

  // Autoplay com loop infinito baseado em páginas
  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      if (isPaused) return;
      const container = containerRef.current;
      if (!container) return;

      const totalPages = computeTotalPages();
      if (totalPages <= 1) return;

      const nextPage = (currentPage + 1) % totalPages;
      const dots = container.querySelectorAll<HTMLButtonElement>("button.rec-dot");

      if (dots.length > 0) {
        dots[nextPage]?.click();
      } else {
        // fallback: simula clique na seta
        const arrows = container.querySelectorAll<HTMLButtonElement>("button.rec-arrow");
        if (nextPage === 0) {
          arrows[0]?.click(); // volta para primeira página
        } else {
          arrows[1]?.click(); // avança
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, currentPage, isPaused, computeTotalPages]);

  function handleNextEnd(payload: CarouselCallbackPayload) {
    setCurrentPage(payload.index / getItemsToShow());
  }
  function handlePrevEnd(payload: CarouselCallbackPayload) {
    setCurrentPage(payload.index / getItemsToShow());
  }

  if (!images.length) return <p>Carregando imagens...</p>;

  return (
    <div
      className={`painelGaleriaCarrosselWrapper ${styles.carouselWrapper}`}
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Carousel
        breakPoints={breakPoints}
        isRTL={false}
        itemPadding={[10, 10]}
        pagination
        showArrows
        onNextEnd={handleNextEnd}
        onPrevEnd={handlePrevEnd}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              height: 400,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <ImageWithHover src={src} alt={`Imagem ${i + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

function ImageWithHover({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          objectFit: "contain",
          transition: "transform 0.35s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.06)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      />
    </div>
  );
}
