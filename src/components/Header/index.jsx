import React from "react";
import Logo from "../../assets/CYBERWATCH/Transparent Logo/Logo Horizontal/TransparentLogo9.png";

const Header = () => {
  return (
    <header className="h-20 flex items-center">
      <a
        href="/"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        data-aos-easing="ease-out"
      >
        <img src={Logo} width={200} alt="Cyberwatch Logo" />
      </a>
    </header>
  );
};

export default Header;
