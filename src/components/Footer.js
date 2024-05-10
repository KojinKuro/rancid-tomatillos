import "./Footer.css";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <article className="footer--about">
        <Logo />
        <p>
          This project is definitely not Rotten Tomatoes. Nor is it Netflix. Nor
          is it IMDB. It’s Rancid Tomatillos. Very different!
        </p>
      </article>
      <div className="footer--credits">
        <div className="footer--credits-by">Coded & desgined by</div>
        <section className="credit--container">
          <Credit
            name="Charles Kwang"
            github="KojinKuro"
            linkedin="charleskwangdevs"
          />
          <Credit
            name="Theotis McCray"
            github="Virulencies"
            linkedin="theotis-mccray-849262207"
          />
        </section>
      </div>
    </footer>
  );
}

function Credit({ name, github, linkedin }) {
  return (
    <section className="credit">
      <div className="credit--name">{name}</div>
      <a href={`https://github.com/${github}`}>
        <box-icon color="white" name="github" type="logo"></box-icon>
        <span className="credit--text">@{github}</span>
      </a>
      <a href={`https://www.linkedin.com/in/${linkedin}/`}>
        <box-icon color="white" type="logo" name="linkedin-square"></box-icon>
        <span className="credit--text">@{linkedin}</span>
      </a>
    </section>
  );
}
