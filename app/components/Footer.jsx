// components/Footer.js
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-8">
       
      <div className="flex items-center justify-evenly px-4 mx-2">

      
        <div className=" p-10">
          <img src="./icons/footerLogo.svg" alt="" srcset="" />
        </div>
      

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
       
          <div>
            <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
            <ul className="text-[#6a6a6a]">
              <li className="mb-2">
                <Link href="/who-we-are">Who we are</Link>
              </li>
              <li className="mb-2">
                <Link href="/work-with-us">Work with us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">EXPLORE</h3>
            <ul className="text-[#6a6a6a]">
              <li className="mb-2">
                <Link href="/batches-and-classes">Batches and Classes</Link>
              </li>
              <li className="mb-2">
                <Link href="/community">Community</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
            <ul className="text-[#6a6a6a]">
              <li className="mb-2">
                <Link href="/privacy-policy">Privacy policy</Link>
              </li>
              <li className="mb-2">
                <Link href="/terms-conditions">Terms & conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
            <p className="text-[#6a6a6a]" >Phone: +443308220688</p>
            <div className="flex items-center justify-between  p-2">
          <a href="https://twitter.com">
            <img src="/icons/twitter.png" alt="Twitter" className="h-6 w-6" />
          </a>
          <a href="https://instagram.com">
            <img
              src="/icons/instagram.png"
              alt="Instagram"
              className="h-6 w-6"
            />
          </a>
          <a href="https://youtube.com">
            <img src="/icons/youtube.png" alt="YouTube" className="h-6 w-6" />
          </a>
          <a href="https://whatsapp.com">
            <img src="/icons/whatsapp.png" alt="whatsapp" className="h-6 w-6" />
          </a>
        </div>
          </div>
        </div>
        
        
      </div>
      <div className="text-center mt-8">
          <p>© 2022 All Rights Reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
