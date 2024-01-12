import { categories } from "data";
import useStore from "store";

const Categories = () => {
	const { selectedProjectCategories, toggleSelectedProjectCategories } = useStore();
	return (
		<ul className="categories__container flex items-center gap-4 overflow-x-auto">
			{ categories.map(category => {
				const isSelected = selectedProjectCategories.includes(category);
				return (
					<li key={ category }>
						<button
							className={ isSelected
								? 'flex-1 capitalize font-semibold w-fit rounded-xl px-2 py-1 border bg-secondary border-secondary text-light dark:text-dark transition-colors'
								: 'flex-1 capitalize font-semibold w-fit rounded-xl px-2 py-1 border bg-light border-secondary text-secondary dark:bg-dark dark:text-secondary transition-colors' }
							onClick={ () => toggleSelectedProjectCategories(category) }
						>
							{ category }
						</button>
					</li>
				);
			}) }
		</ul>
	);
};

export default Categories;
