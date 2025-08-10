'use client';
import { useRef, RefObject, Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSections } from '@/context';
import { useOnScreen } from '@/hooks/useOnScreen';
import { Props } from '@/interfaces';
import { useLanguage } from "@/context";
import { useForceSection } from '@/context/ForceSectionContext';

const componentMap = {
  home: dynamic<Props>(() => import('@/Components/Home')),
  sobre: dynamic<Props>(() => import('@/Components/Sobre')),
  galeria: dynamic<Props>(() => import('@/Components/Galeria')),
  livros: dynamic<Props>(() => import('@/Components/Livros')),
  contato: dynamic<Props>(() => import('@/Components/Contato')),
} as {
  [key: string]: React.ComponentType<Props>;
};

const SectionObserver = ({
  section,
  preloadUntil,
  sectionsOrder
}: {
  section: string;
  preloadUntil?: string | null;
  sectionsOrder: string[];
}) => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref as RefObject<Element>, '200px');
  const Component = componentMap[section];
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const shouldForceLoad =
    !!preloadUntil &&
    sectionsOrder.indexOf(section) <= sectionsOrder.indexOf(preloadUntil);

  useEffect(() => {
    if ((isVisible || shouldForceLoad) && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible, hasBeenVisible, shouldForceLoad]);

  return (
    <section id={section} className="min-h-screen flex flex-col items-center justify-center">
      <div ref={ref} className="h-4" />
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
  const { preloadUntil } = useForceSection();

  return (
    <div className="container flex flex-col gap-8 px-4 mx-auto">
      {sections.map((section) => (
        <SectionObserver
          key={section}
          section={section}
          preloadUntil={preloadUntil ?? undefined} // garante tipo seguro
          sectionsOrder={sections}
        />
      ))}
    </div>
  );
}
