import earthImage from ".././assets/earth.png";

function Header() {
  return (
    <header>
      <img
        src={earthImage}
        alt="World Map"
        className="header-image"
      />
      <h1>My Travel Journal</h1>
    </header>
  );
}

export default Header;
