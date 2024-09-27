
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";

export function Footercomponent() {
  return (
    <Footer container className="dark:bg-black ">
      <div className="w-full text-center ">
        <div className="w-full justify-around sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="./public/assets/LogoFinal.png"
            src="./public/assets/LogoFinal.png"
            alt="Flowbite Logo"
            name="StoryBridge"
          />
          <FooterLinkGroup>
            <FooterLink href="/" className="hover:text-primary100">Home</FooterLink>
            <FooterLink href="/aboutus" className="hover:text-primary100">About Us</FooterLink>
            </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="StoryBridge" year={2022} />
      </div>
    </Footer>
  );
}
