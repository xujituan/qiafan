import { useState, useCallback } from 'react'
import Header from './components/Header'
import FoodGrid from './components/FoodGrid'
import PickerButton from './components/PickerButton'
import ResultModal from './components/ResultModal'
import { foods } from './data/foods'

function pickRandom(foods, exclude) {
  const pool = exclude ? foods.filter((f) => f.name !== exclude.name) : foods
  return pool[Math.floor(Math.random() * pool.length)]
}

export default function App() {
  const [selectedFood, setSelectedFood] = useState(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handlePick = useCallback(() => {
    if (isSpinning) return
    setIsSpinning(true)
    setShowModal(false)
    setSelectedFood(null)

    const target = pickRandom(foods, selectedFood)

    setTimeout(() => {
      setIsSpinning(false)
      setSelectedFood(target)
      setShowModal(true)
    }, 1200)
  }, [isSpinning, selectedFood])

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  return (
    <div className="app">
      <Header />
      <main className="main">
        <FoodGrid foods={foods} selectedFood={selectedFood} isSpinning={isSpinning} />
        <PickerButton onClick={handlePick} isSpinning={isSpinning} />
      </main>
      <ResultModal food={showModal ? selectedFood : null} onClose={handleCloseModal} />
    </div>
  )
}
