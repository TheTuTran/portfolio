import { BiLogoPatreon } from "react-icons/bi";
import { BsDiscord, BsPaypal } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const logoStyling = "cursor-pointer";

const Footer = async () => {
  return (
    <footer className="dark w-full absolute z-40 bottom-0 mt-auto bg-background text-foreground">
      <div className="py-6 mx-20 h-[60px] flex">
        <p>&copy; {new Date().getFullYear()}. Tu Tran</p>
        <div className="ml-auto items-center flex gap-6">
          <BsDiscord className={logoStyling} size={20} />
          <BsPaypal className={logoStyling} size={20} />
          <BiLogoPatreon className={logoStyling} size={20} />
          <CgProfile className={logoStyling} size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
