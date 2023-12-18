import { Link } from "react-router-dom";
const Header = () => {
  const navItems = [
    { title: "Repertoar", link: "/" },
    { title: "Listor", link: "/listor" },
  ];
  return (
    <header className="flex justify-around items-center bg-gradient-to-r from-green-400 to-blue-500 text-white h-24">
      <h1 className="text-3xl drop-shadow-md">Titanias repertoarlista</h1>

      <nav>
        <ul className="flex gap-4">
          {navItems.map((item, index) => {
            return (
              <li
                key={index}
                className="drop-shadow-md text-lg hover:text-gray-300"
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
