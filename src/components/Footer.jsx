import { copyrightSign } from "../assets/icons";
import { image162,  } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className=" w-full ">
      <div className="flex justify-around items-start py-8 bg-teal-700 gap-20 flex-wrap max-lg:flex-col p-3 ">
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center">
            <a href="/">
              <img
                src={image162}
                alt="logo"
                width={75}
                height={46}
                className="m-0"
              />
            </a>
            <h1 className="text-2xl text-white hover:text-green-300 p-2 items-center text-center">
              Healthcare
            </h1>
          </div>
          <div className='flex flex-row items-center  justify-center mt-8 px-2'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-8 h-8 mx-2  bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={16} height={16} />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-white-400 hover:text-green-300 mt-24 max-sm:flex-col max-sm:items-center  px-2">
            <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer ">
              <img
                src={copyrightSign}
                alt="copyright sign"
                width={20}
                height={20}
                className="rounded-full m-0"
              />
              <p className="text-sm">Copyright. All rights reserved.</p>
            </div>
            <p className="font-montserrat cursor-pointer text-sm">
              Terms & Conditions
            </p>
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-sm leading-normal font-medium mb-6 text-white ">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-sm text-base leading-normal text-white-400 hover:text-green-300"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
         
      </div>
    </footer>
  );
};

export default Footer;
