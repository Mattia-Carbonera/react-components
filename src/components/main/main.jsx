import style from "./main.module.css";
import defaultImage from "../../assets/img/card-image.png";

function Main() {
  return (
    <main>
      <div className={style.card}>
        <div className="image-container">
          <img src={defaultImage} alt="card image" className={style.img} />
        </div>
        <div className={style.description}>
          <h2>Titolo del post</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            optio quibusdam facilis, quaerat accusamus molestiae repellendus
            odio error expedita. Soluta dignissimos hic optio voluptas culpa
            molestias, est facere veritatis veniam!
          </p>
          <div className="button">
            <button>prova</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
