import { Link, useLocation } from "react-router-dom";

import "../index.css";

const Navbar = () => {
  const location = useLocation();

  const navbarLinks = [
    { title: "Home", link: "/" },
    {
      title: "About Us",
      link: "",
      subLinks: [
        { subLinkTitle: "Our Story", subLink: "/" },
        { subLinkTitle: "Testimonials", subLink: "/" },
        { subLinkTitle: "News & Events", subLink: "/" },
        { subLinkTitle: "FAQ", subLink: "/" },
      ],
    },
    {
      title: "Universities",
      link: "",
      subLinks: [
        { subLinkTitle: "In Australia", subLink: "/" },
        { subLinkTitle: "In Canada", subLink: "/" },
        { subLinkTitle: "In New Zealand", subLink: "/" },
        { subLinkTitle: "In UK", subLink: "/" },
        { subLinkTitle: "In Malaysia", subLink: "/" },
        { subLinkTitle: "In European Countries", subLink: "/" },
        { subLinkTitle: "In Asian Countries", subLink: "/" },
      ],
    },
    {
      title: "Hot courses",
      link: "",
      subLinks: [
        { subLinkTitle: "Medicine", subLink: "/" },
        { subLinkTitle: "Engineering", subLink: "/" },
        { subLinkTitle: "Computer Science", subLink: "/" },
        { subLinkTitle: "Business Management", subLink: "/" },
      ],
    },
  ];

  return (
    <header className="px-[75px] py-[50px]">
      <nav className="flex items-center justify-between">
        <Link to="/">
          <img src="/images/logo.svg" alt="Logo" />
        </Link>

        <ul className="flex gap-[100px]">
          {navbarLinks.map((link) => (
            <li
              key={link.title}
              className={`relative ${
                location.pathname === link.link && "font-extrabold"
              }`}
            >
              {link.link !== "" ? (
                <Link
                  to={link.link}
                  className={`block px-4 py-2 hover:text-orange-400`}
                >
                  {link.title}
                </Link>
              ) : (
                <span className="block py-2 cursor-pointer group">
                  {link.title}
                  {link.subLinks && (
                    <ul className="absolute hidden space-y-2 mt-2 bg-white navbar_gradient border group-hover:block rounded-lg">
                      {link.subLinks.map((sublink) => (
                        <li key={sublink.subLinkTitle}>
                          <Link
                            to={`${link.link}${sublink.subLink}`}
                            className="block px-4 w-[150px] py-2 text-base text-gray-700 hover:bg-gray-100 rounded-lg"
                          >
                            {sublink.subLinkTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
