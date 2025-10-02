import styles from "./testimonial.module.scss";

function Card({ src, srcLink, name, clientname, content, urlsrc }) {
  return (
    <div className={styles["testimonialCard"]}>
      <div className="clientLogo">
        <img src={src} alt={name} />
      </div>
      <p>{content}</p>
      <a href={urlsrc}>Read full review </a>
      <div className="client">
        <img src={srcLink} alt={clientname} />
      </div>
    </div>
  );
}

export default Card;
