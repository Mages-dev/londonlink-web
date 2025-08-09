// src/app/page.tsx
'use client';
import { useRef, RefObject, Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSections } from '@/context';
import { useOnScreen } from '@/hooks/useOnScreen';
import { Props } from '@/interfaces';
import { useLanguage } from "@/context";
import { useForceSection } from '@/context/ForceSectionContext';

// Mapeia os componentes com lazy loading
const componentMap = {
  home: dynamic<Props>(() => import('@/Components/Home')),
  sobre: dynamic<Props>(() => import('@/Components/Sobre')),
  galeria: dynamic<Props>(() => import('@/Components/Galeria')),
  livros: dynamic<Props>(() => import('@/Components/Livros')),
  contato: dynamic<Props>(() => import('@/Components/Contato')),
} as {
  [key: string]: React.ComponentType<Props>;
};

const SectionObserver = ({ section, forceLoad = false }: { section: string, forceLoad?: boolean }) => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref as RefObject<Element>, '200px');
  const Component = componentMap[section];
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if ((isVisible || forceLoad) && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible, hasBeenVisible, forceLoad]);

  return (
    <section id={section} className="min-h-screen flex flex-col items-center justify-center">
      <div ref={ref} className="h-4" /> {/* Marcador invisível para observar o scroll */}
      
      {hasBeenVisible && (
        <Suspense fallback={<div className="text-center">{t("loading")}...</div>}>
          <Component id={section} />
        </Suspense>
      )}
    </section>
  );
};

export default function Home() {
  const { sections } = useSections();
  const { forceSection } = useForceSection();

  return (
    <div className="container flex flex-col gap-8 px-4 mx-auto">
      {sections.map((section) => (
        <SectionObserver
          key={section}
          section={section}
          forceLoad={forceSection === section}
        />
      ))}
    </div>
  );
}
