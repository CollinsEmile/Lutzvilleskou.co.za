import facebook from '../images/FB.png';
import tiktok from '../images/TIKTOK.png';
import instagram from '../images/INSTA.png';
import hamburger from '../images/hamburger.svg';

const Navbar = ({ logo, items }) => {
  return (
    <>
      <div className="flex flex-row justify-between px-[10%] md:items-center py-5 bg-gray-50 text-gray-900 fixed w-full border-b-2 border-gray-900 font-georgia font-medium z-50">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Lutzville Landbouskou" className="h-[5rem]" />
        </a>

        {/* Navbar Links */}
        <div className="nav-links absolute min-h-fit w-[100vw] left-0 top-[7rem] bg-gray-50 pt-10 lg:flex lg:flex-row lg:relative lg:bg-transparent lg:w-fit lg:top-0 gap-x-5 lg:pt-0 lg:items-center border-b-2 border-gray-900 lg:border-0">
          <ul className="flex flex-col lg:flex-row w-[100vw] lg:w-fit text-center pb-10 lg:pb-0">
            {items.map((item) => (
              <li
                key={item.key}
                className="w-fit mx-auto hover:underline text-2xl lg:text-xl py-5 lg:py-2 lg:px-2">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>

          {/* Social Links - moved inside the nav-links div for mobile */}
          <div className="flex flex-row gap-x-5 justify-center items-center pb-10 lg:hidden">
            <a
              href="https://www.facebook.com/share/VSo4BrR9fNgdKRPf/?mibextid=qi2Omg"
              target="_blank">
              <img
                src={facebook.src}
                alt="Link to facebook account"
                className="h-[2rem]"
              />
            </a>
            <a
              href="https://www.instagram.com/lutzville_landbouskou/"
              target="_blank">
              <img
                src={instagram.src}
                alt="Link to instagram account"
                className="h-[2rem]"
              />
            </a>
            <a href="https://www.tiktok.com/@lutzvilleskou" target="_blank">
              <img
                src={tiktok.src}
                alt="Link to tiktok account"
                className="h-[2rem]"
              />
            </a>
          </div>
        </div>

        {/* Social Links - separate for desktop */}
        <div className="hidden lg:flex flex-row gap-x-5 justify-center items-center">
          <a
            href="https://www.facebook.com/share/VSo4BrR9fNgdKRPf/?mibextid=qi2Omg"
            target="_blank">
            <img
              src={facebook.src}
              alt="Link to facebook account"
              className="h-[2rem]"
            />
          </a>
          <a
            href="https://www.instagram.com/lutzville_landbouskou/"
            target="_blank">
            <img
              src={instagram.src}
              alt="Link to instagram account"
              className="h-[2rem]"
            />
          </a>
          <a href="https://www.tiktok.com/@lutzvilleskou" target="_blank">
            <img
              src={tiktok.src}
              alt="Link to tiktok account"
              className="h-[2rem]"
            />
          </a>
        </div>

        <button
          onClick={() => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('expanded');
          }}
          className="lg:hidden">
          <img src={hamburger.src} alt="menu icon" className="h-7" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
