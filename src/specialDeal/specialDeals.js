import {SpecialDealsTitle} from "./component/specialDeals__Title";
import SpecialDealsContent from "./component/specialDeals__Content";
import NavDesktop from "../generalLayout/navDesk";
import Nav from "../generalLayout/nav";
import PageName from "../generalLayout/pageName";
export const SpecialDeals = () => {
  return (
    <>
      <div
        className="nav-pc-homepage"
        style={{
          height: "84px",
          width: "100vw",
        }}
      ></div>
      <NavDesktop colorBlack={true}/>
      <Nav/>
      <PageName namePage="Special Deals" />
      <SpecialDealsTitle />
      <SpecialDealsContent />
    </>
  );
};
