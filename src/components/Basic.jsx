


export function Basic({ image, title, description }) {
    return (
      <section className="basics">
        <ul className="basicFrame">
          <img className="img"src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </ul>
      </section>
    );
  }