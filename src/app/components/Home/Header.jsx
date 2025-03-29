import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="custom_container flex justify-between items-center pt-[12px] absolute w-full top-[-0] left-[0]">
      <img src="/assets/gtf-logo.png" className="h-[60px]" alt="logo" />
      <RxHamburgerMenu className="text-[30px]" />
    </header>
  );
};

export default Header;
