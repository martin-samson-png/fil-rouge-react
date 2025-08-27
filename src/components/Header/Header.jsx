import Nav from "./Nav";
import Title from "./Title";
import UserMenu from "./UserMenu";
import "../../style/header.css";

const Header = () => {
  return (
    <header>
      <section className="title-section">
        <Title />
      </section>
      <section className="right-section">
        <div className="user-menu">
          <UserMenu />
        </div>
        <div className="nav-categorie">
          <Nav />
        </div>
      </section>
    </header>
  );
};

export default Header;
