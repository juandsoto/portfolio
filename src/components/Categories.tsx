import { categories } from "data";
import useStore from "store";

const Categories = () => {
  const { selectedProjectCategories, toggleSelectedProjectCategories } = useStore();
  return (
    <ul className="categories__container flex items-center gap-4 overflow-x-auto">
      {categories.map(category => {
        const isSelected = selectedProjectCategories.includes(category);
        return (
          <li key={category}>
            <button
              className={[
                "btn-primary bg-light text-dark border border-dark dark:bg-dark dark:text-white dark:border-light flex-1 capitalize",
                isSelected ? "bg-dark text-white border-dark dark:bg-light dark:text-dark dark:border-light" : "",
              ].join(" ")}
              onClick={() => toggleSelectedProjectCategories(category)}
            >
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
