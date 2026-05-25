import FoodCard from './FoodCard'

export default function FoodGrid({ foods, selectedFood, isSpinning }) {
  return (
    <div className="food-grid">
      {foods.map((food, index) => (
        <FoodCard
          key={food.name}
          food={food}
          index={index}
          isSelected={selectedFood?.name === food.name}
          isSpinning={isSpinning}
        />
      ))}
    </div>
  )
}
