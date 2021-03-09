import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import PageName from "../generalLayout/pageName";
import { ContactUsContent } from "./component/contactUsContent";

export const ContactUsLayout = () =>{
    return (
      <>
        <NavDesktop />
        <Nav color="white" />
        <PageName namePage="Contact Us" />
        <ContactUsContent />
      </>
    );
}