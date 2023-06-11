type CardPropsType = {
  dataOfCard: {
    id: string;
    title: string;
    text: string;
  }
};

function Card({ dataOfCard }: CardPropsType) {
  const { id, title, text } = dataOfCard;

  return (

    <div className="card">
      <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="" />
      <div className="card-content">
        <h2>
          { title }
        </h2>
        <p>
          { text }
        </p>
        <a href="" className="button">
          Find out more
          <span className="material-symbols-outlined">
            arrow_right_alt
          </span>
        </a>
      </div>
    </div>

  );
}

export default Card;
