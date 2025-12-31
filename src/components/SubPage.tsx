import { Home, BookOpen } from 'lucide-react';
import { siteContent, PageId } from '@/data/siteContent';
import { Button } from '@/components/ui/button';
import NetflixContent from './NetflixContent';
import DisneyContent from './DisneyContent';
import FridayContent from './FridayContent';
import ReflectionContent from './ReflectionContent';

interface SubPageProps {
  pageId: PageId;
  onBack: () => void;
}

const SubPage = ({ pageId, onBack }: SubPageProps) => {
  const page = siteContent.pages.find((p) => p.id === pageId);
  
  if (!page) return null;

  const getThemeConfig = (theme: string) => {
    const configs: Record<string, { 
      headerBg: string; 
      badge: string; 
      badgeText: string;
      imageBg: string;
      borderTop: string;
    }> = {
      red: { 
        headerBg: 'from-red-600 to-red-700', 
        badge: 'bg-red-100 dark:bg-red-950',
        badgeText: 'text-red-700 dark:text-red-300',
        imageBg: 'bg-red-100',
        borderTop: '',
      },
      blue: { 
        headerBg: 'from-blue-700 to-blue-800', 
        badge: 'bg-blue-100 dark:bg-blue-950',
        badgeText: 'text-blue-700 dark:text-blue-300',
        imageBg: 'bg-blue-100',
        borderTop: '',
      },
      pink: { 
        headerBg: 'from-pink-500 to-pink-600', 
        badge: 'bg-pink-100 dark:bg-pink-950',
        badgeText: 'text-pink-700 dark:text-pink-300',
        imageBg: 'bg-pink-100',
        borderTop: '',
      },
      green: { 
        headerBg: 'from-emerald-600 to-emerald-700', 
        badge: 'bg-emerald-100 dark:bg-emerald-950',
        badgeText: 'text-emerald-700 dark:text-emerald-300',
        imageBg: 'bg-gradient-to-br from-emerald-400 to-teal-500',
        borderTop: 'border-t-8 border-emerald-500',
      },
    };
    return configs[theme] || configs.red;
  };

  const themeConfig = getThemeConfig(page.colorTheme);

  const renderContent = () => {
    switch (pageId) {
      case 'netflix':
        return <NetflixContent />;
      case 'disney':
        return <DisneyContent />;
      case 'friday':
        return <FridayContent />;
      case 'reflection':
        return <ReflectionContent />;
      default:
        return null;
    }
  };

  const getPlaceholderImage = () => {
    const colors: Record<string, string> = {
      red: 'e53e3e',
      blue: '2b6cb0',
      pink: 'd53f8c',
      green: '38a169',
    };
    const color = colors[page.colorTheme] || 'e53e3e';
    return `https://placehold.co/800x400/${color}/ffffff?text=${encodeURIComponent(page.title)}`;
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-foreground">企業管理個人網</h1>
          <Button variant="outline" size="sm" onClick={onBack} className="gap-2">
            <Home className="w-4 h-4" />
            返回首頁
          </Button>
        </div>
      </nav>

      {/* Content Header */}
      <header className={`bg-gradient-to-r ${themeConfig.headerBg} py-12 md:py-16`}>
        <div className="container mx-auto px-4 animate-fade-in">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${themeConfig.badge} ${themeConfig.badgeText}`}>
            {page.isReflection ? '學習心得' : '企業案例'}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            {page.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80">{page.subtitle}</p>
        </div>
      </header>

      {/* Image or Visual Section */}
      <section className="container mx-auto px-4 -mt-8">
        <div className="max-w-4xl mx-auto animate-fade-in animation-delay-200">
          {page.isReflection ? (
            <div className={`${themeConfig.imageBg} rounded-2xl p-12 flex items-center justify-center shadow-lg`}>
              <BookOpen className="w-24 h-24 text-white" />
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={getPlaceholderImage()}
                alt={page.title}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm">{page.title} - {page.subtitle}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Article */}
      <article className="container mx-auto px-4 py-12">
        <div className={`max-w-4xl mx-auto bg-card rounded-2xl shadow-lg p-8 md:p-12 animate-fade-in animation-delay-300 ${themeConfig.borderTop}`}>
          {renderContent()}
          
          <div className="mt-12 pt-8 border-t border-border">
            <Button onClick={onBack} variant="outline" className="gap-2">
              <Home className="w-4 h-4" />
              回到首頁
            </Button>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 企業管理系個人學習網。Designed for Learning.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SubPage;
