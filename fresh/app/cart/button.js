function ColorButton({ color }) {
  return (
    <div>
      <button type="button" className={`${color} w-12 h-6`}>
        버튼
      </button>
    </div>
  );
}

export default ColorButton;
