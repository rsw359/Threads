import "./categories.styles.scss";
import CategoryItem from "./components/category-item/category-item.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "./Assets/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "./Assets/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "./Assets/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "./Assets/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "./Assets/men.png",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default App;
