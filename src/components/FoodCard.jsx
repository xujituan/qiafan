export default function FoodCard({ food, index, isSelected, isSpinning }) {
  return (
    <div
      className={`food-card ${isSelected ? 'selected' : ''} ${isSpinning ? 'spinning' : ''}`}
      style={{ animationDelay: isSpinning ? `${index * 0.03}s` : '0s' }}
      data-category={food.category}
    >
      <span className="food-name">{food.name}</span>
      <span className="food-category">{food.category}</span>
    </div>
  )
}
