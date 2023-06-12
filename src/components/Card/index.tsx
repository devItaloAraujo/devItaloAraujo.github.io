type CardPropsType = {
  dataOfCard: {
    id: string;
    title: string;
    text: string;
    img: string;
    link: string;
  }
};

function Card({ dataOfCard }: CardPropsType) {
  const { title, text, img, link } = dataOfCard;

  return (

    <div className="card">
      <img src={ img } alt="" />
      <div className="card-content">
        <h2>
          { title }
        </h2>
        <p>
          { text }
        </p>
        <a href={ link } className="button">
          Confira o projeto
        </a>
      </div>
    </div>

  );
}

export default Card;
