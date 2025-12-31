import { Play, Film, Tv, BookOpen } from 'lucide-react';

export const siteContent = {
  studentInfo: {
    class: '進修四技企業管理系2A',
    studentId: 'A1121500XX',
    name: '王小明',
  },
  pages: [
    {
      id: 'netflix',
      title: 'Netflix',
      subtitle: '全球串流霸主',
      colorTheme: 'red',
      icon: Play,
      isReflection: false,
    },
    {
      id: 'disney',
      title: 'Disney+',
      subtitle: 'IP 內容與品牌巨頭',
      colorTheme: 'blue',
      icon: Film,
      isReflection: false,
    },
    {
      id: 'friday',
      title: 'friDay 影音',
      subtitle: '在地化與日韓劇首選',
      colorTheme: 'pink',
      icon: Tv,
      isReflection: false,
    },
    {
      id: 'reflection',
      title: '學習心得與反思',
      subtitle: '串流產業管理觀察',
      colorTheme: 'green',
      icon: BookOpen,
      isReflection: true,
    },
  ],
};

export type PageId = 'netflix' | 'disney' | 'friday' | 'reflection';
export type ColorTheme = 'red' | 'blue' | 'pink' | 'green';
