import { useEffect } from 'react'

export default function ResultModal({ food, onClose }) {
  useEffect(() => {
    if (!food) return
    const timer = setTimeout(onClose, 2500)
    return () => clearTimeout(timer)
  }, [food, onClose])

  if (!food) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-emoji">
          {food.category === '面食' && '🍜'}
          {food.category === '米饭' && '🍚'}
          {food.category === '火锅' && '🔥'}
          {food.category === '小吃' && '🥟'}
          {food.category === '西式' && '🍔'}
        </div>
        <p className="modal-label">今天中午吃</p>
        <h2 className="modal-food">{food.name}</h2>
        <p className="modal-category">{food.category}</p>
        <button className="modal-close" onClick={onClose}>再来一次</button>
      </div>
    </div>
  )
}
