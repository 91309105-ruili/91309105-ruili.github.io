import { ArrowRight } from 'lucide-react';
import { siteContent, PageId } from '@/data/siteContent';

interface HomePageProps {
  onNavigate: (pageId: PageId) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const { studentInfo, pages } = siteContent;

  const getThemeClasses = (theme: string) => {
    const themes: Record<string, { bg: string; iconBg: string; text: string }> = {
      red: { bg: 'hover:border-theme-red/30', iconBg: 'bg-theme-red-light text-theme-red', text: 'text-theme-red' },
      blue: { bg: 'hover:border-theme-blue/30', iconBg: 'bg-theme-blue-light text-theme-blue', text: 'text-theme-blue' },
      pink: { bg: 'hover:border-theme-pink/30', iconBg: 'bg-theme-pink-light text-theme-pink', text: 'text-theme-pink' },
      green: { bg: 'hover:border-theme-green/30', iconBg: 'bg-theme-green-light text-theme-green', text: 'text-theme-green' },
    };
    return themes[theme] || themes.red;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        {/* Decorative Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              OTT 產業案例分析
            </h1>
            <p className="text-2xl md:text-3xl font-semibold">
              <span className="text-indigo-300">與學習歷程檔案</span>
            </p>
          </div>

          {/* Student Info Card */}
          <div className="max-w-md mx-auto animate-fade-in animation-delay-200">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
              <h2 className="text-white/80 text-sm font-medium mb-4 uppercase tracking-wider">學生資訊</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/60">班級</span>
                  <span className="text-white font-medium">{studentInfo.class}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">學號</span>
                  <span className="text-white font-medium">{studentInfo.studentId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">姓名</span>
                  <span className="text-white font-medium">{studentInfo.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            案例分析與心得
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pages.map((page, index) => {
              const themeClasses = getThemeClasses(page.colorTheme);
              const IconComponent = page.icon;
              
              return (
                <button
                  key={page.id}
                  onClick={() => onNavigate(page.id as PageId)}
                  className={`group bg-card rounded-2xl p-6 shadow-md border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left animate-fade-in ${themeClasses.bg}`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className={`inline-flex p-3 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110 ${themeClasses.iconBg}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{page.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{page.subtitle}</p>
                  
                  <div className={`flex items-center gap-2 text-sm font-medium ${themeClasses.text}`}>
                    <span>閱讀詳細內容</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
