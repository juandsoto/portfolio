import { mountStoreDevtool } from "simple-zustand-devtools";
import { TCategory } from "types";
import create from "zustand";

type Theme = "light" | "dark";

interface Store {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  showProjectId: number | null;
  setShowProjectId: (id: number | null) => void;
  selectedProjectCategories: TCategory[];
  toggleSelectedProjectCategories: (category: TCategory) => void;
}

const useStore = create<Store>((set, get) => {
  const theme = localStorage.getItem("theme") as Theme;
  theme === "dark" && setDocumentTheme("dark");

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
    theme: (localStorage.getItem("theme") as Theme) ?? "light",
    setTheme: theme => {
      switch (theme) {
        case "light":
          localStorage.setItem("theme", "light");
          setDocumentTheme("light");
          return set({ theme });
        case "dark":
          localStorage.setItem("theme", "dark");
          setDocumentTheme("dark");
          return set({ theme });
        default:
          return set({ theme: "light" });
      }
    },
  };
});

function setDocumentTheme(theme: Theme) {
  theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
}

mountStoreDevtool("Store", useStore);

export default useStore;
