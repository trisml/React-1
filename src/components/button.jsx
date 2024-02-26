export function Boton({ isSelected, children, onSelect }) {
    return (
      <button className={`boton ${isSelected ? 'active' : 'unactive'}`} onClick={onSelect}>
        {children}
      </button>
    );
  }
  