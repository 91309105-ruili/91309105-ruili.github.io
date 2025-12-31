import { useState, useEffect } from 'react';
import HomePage from '@/components/HomePage';
import SubPage from '@/components/SubPage';
import { PageId } from '@/data/siteContent';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<PageId | null>(null);

  const handleNavigate = (pageId: PageId) => {
    setCurrentPage(pageId);
  };

  const handleBack = () => {
    setCurrentPage(null);
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <main className="min-h-screen">
      {currentPage ? (
        <SubPage pageId={currentPage} onBack={handleBack} />
      ) : (
        <HomePage onNavigate={handleNavigate} />
      )}
    </main>
  );
};

export default Index;
