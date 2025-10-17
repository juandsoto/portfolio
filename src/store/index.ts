import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

import { TCategory } from '@/types';

type Theme = 'light' | 'dark';

interface Store {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  showProjectId: number | null;
  setShowProjectId: (id: number | null) => void;
  selectedProjectCategories: TCategory[];
  toggleSelectedProjectCategories: (category: TCategory) => void;
}

function setDocumentTheme(theme: Theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export const useStore = create<Store>((set, get) => {
  const theme = localStorage.getItem('theme') as Theme;

  if (theme === 'dark') {
    setDocumentTheme('dark');
  }

  return {
    showProjectId: null,
    setShowProjectId: id => set({ showProjectId: id }),
    selectedProjectCategories: [],
    toggleSelectedProjectCategories: category => {
      const categories = get().selectedProjectCategories.includes(category)
        ? get().selectedProjectCategories.filter(c => c !== category)
        : [...get().selectedProjectCategories, category];

      return set({
        selectedProjectCategories: categories,
      });
    },
    theme: (localStorage.getItem('theme') as Theme) ?? 'light',
    setTheme: theme => {
      switch (theme) {
        case 'light':
          localStorage.setItem('theme', 'light');
          setDocumentTheme('light');

          return set({ theme });
        case 'dark':
          localStorage.setItem('theme', 'dark');
          setDocumentTheme('dark');

          return set({ theme });
        default:
          return set({ theme: 'light' });
      }
    },
  };
});

mountStoreDevtool('Store', useStore);
