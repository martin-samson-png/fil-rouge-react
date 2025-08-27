const Nav = () => {
  const allCategorie = ["News", "Biome", "Mobs", "Loots", "Weapons"];

  return (
    <>
      {allCategorie.map((categorie) => (
        <span>{categorie}</span>
      ))}
    </>
  );
};

export default Nav;
