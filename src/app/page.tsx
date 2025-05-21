'use client';
import { useRef, RefObject, Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSections } from '@/context';
import { useOnScreen } from '@/hooks/useOnScreen';
import { Props } from '@/interfaces';

// Carregamento dinâmico com lazy loading para cada componente
const componentMap = {
  home: dynamic<Props>(() => import('@/Components/Home')),
  sobre: dynamic<Props>(() => import('@/Components/Sobre')),
  galeria: dynamic<Props>(() => import('@/Components/Galeria')),
  livros: dynamic<Props>(() => import('@/Components/Livros')),
  contato: dynamic<Props>(() => import('@/Components/Contato')),
} as {
  [key: string]: React.ComponentType<Props>;
};

const SectionObserver = ({ section }: { section: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(
    ref as RefObject<Element>,
    '200px'
  );
  const Component = componentMap[section];
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
  if (isVisible && !shouldLoad) {
    const timer = setTimeout(() => setShouldLoad(true), 300);
    return () => clearTimeout(timer);
  }
}, [isVisible, shouldLoad]);

  return (
    <section id={section} className="min-h-screen py-12">
      <div ref={ref} className="h-4" /> {/* Marcador invisível para observação */}
      
      {isVisible && (
        <Suspense fallback={<div className="text-center">Carregando {section}...</div>}>
          {shouldLoad && (
            <Component id={section} />
          )}
        </Suspense>
      )}
    </section>
  );
};

export default function Home() {
  const { sections } = useSections();

  return (
    <div className="container mx-auto px-4">
      {sections.map((section) => (
        <SectionObserver key={section} section={section} />
      ))}
    </div>
  );
}