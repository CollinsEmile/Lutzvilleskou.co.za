import instagram from '../images/instagram.svg';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import hamburger from '../images/hamburger.svg';

// function handleClick() {
//   for (let i = 0; i < navLinks.length; i++) {
//     navLinks[i].classList.toggle('expanded');
//   }
// }

const Navbar = ({ logo, items }) => {
  return (
    <>
      <div className="flex flew-row justify-between px-[10%] md:items-center py-5 bg-gray-50 text-gray-900 fixed w-full border-b-2 border-gray-900 font-inter font-medium z-50">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="" className="h-[5rem]" />
        </a>
        {/* Navbar Links */}
        <div className="nav-links absolute h-[60vh] md:h-[50vh] w-[100vw] left-0 top-[7rem] bg-gray-50 pt-10 lg:flex lg:flew-row lg:h-fit lg:relative lg:bg-transparent lg:w-fit lg:top-0 gap-x-5 lg:pt-0 lg:items-center border-b-2 border-gray-900 lg:border-0">
          <ul className="flex flex-col lg:flex-row h-[80%] w-[100vw] lg:w-fit text-center">
            {items.map((item) => (
              <li
                key={item.key}
                className="w-fit mx-auto hover:underline text-2xl lg:text-xl py-5 md:p-2">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Social Links */}
        <div className="nav-links absolute h-fit left-0 top-[40rem] md:top-[30rem] w-[100vw] lg:w-fit lg:relative lg:flex lg:flew-row lg:top-0 gap-x-5 justify-center items-center">
          {/* <a href="">
            <img
              src={instagram.src}
              alt="Link to instagram account"
              className="h-[2rem]"
            />
          </a> */}
          <a href="https://www.facebook.com/share/cEm4Cr2ARQ2xqdNu/">
            <img
              src={facebook.src}
              alt="Link to facebook account"
              className="h-[2rem]"
            />
          </a>
          {/* <a href="">
            <img
              src={twitter.src}
              alt="Link to twitter account"
              className="h-[2rem]"
            />
          </a> */}
        </div>
        <button
          onClick={() => {
            const navLinks = document.querySelectorAll('.nav-links');
            // for (let index = 0; index < navLinks.length; index++) {
            //   navLinks[index].classList.toggle('expanded');
            navLinks[0].classList.toggle('expanded');
            navLinks[1].classList.toggle('expanded');
          }}
          className="lg:hidden">
          <img src={hamburger.src} alt="menu icon" className="h-7" />
        </button>
      </div>
    </>
  );
};
export default Navbar;
