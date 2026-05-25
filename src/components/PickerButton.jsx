export default function PickerButton({ onClick, isSpinning }) {
  return (
    <button
      className={`picker-button ${isSpinning ? 'spinning' : ''}`}
      onClick={onClick}
      disabled={isSpinning}
    >
      <span className="button-text">
        {isSpinning ? '正在选择...' : '🎲 帮我选一个'}
      </span>
    </button>
  )
}
