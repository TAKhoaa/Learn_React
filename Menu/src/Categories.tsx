type Props = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

const Categories = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: Props) => {
  const handleSelectCategory = (category: string) => () => {
    if (selectedCategory === category) onSelectCategory("all");
    else onSelectCategory(category);
  };

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`filter-btn ${
              selectedCategory === category && "active"
            }`}
            key={index}
            onClick={handleSelectCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
