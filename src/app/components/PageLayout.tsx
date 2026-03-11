import { useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router';
import { PageLoadingAnimation } from './PageLoadingAnimation';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show loading animation on route change
    setIsLoading(true);
    
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return <PageLoadingAnimation />;
  }

  return <>{children}</>;
}