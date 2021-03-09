import React from "react";
import ReactDOM from "react-dom";
import { BodyHomepage } from "./bodyHomePage/bodyHomepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BodyBrutale1000RR from "./motor_item_page/brutale1000rr_body";
import Rush1000 from "./motor_item_page/rush1000_body";
import BodyBrutale1000SerieOro from "./motor_item_page/brutale1000serie_oro_body";
import Dragster800Rosso from "./motor_item_page/dragster800rosso_body";
import BodyDragster800RR from "./motor_item_page/dragster800rr_body";
import Dragster800RR_SCS from "./motor_item_page/dragster800rr_scs_body";
import SuperveloceAlpine from "./motor_item_page/superveloceAlpine_body";
import AboutUsLayout from "./aboutUs/aboutUsLayout";
import { ScrollNavFunction } from "./generalFunctionForOnScroll/ScrollEventFor_MotorPage";
import { NavWhiteCompact } from "./generalFunctionForOnScroll/ScrollEventFor_Homepage";
import { SpecialDeals } from "./specialDeal/specialDeals";
import MvEmail from "./generalLayout/mvEmail";
import { FooterGe } from "./generalLayout/footer_test";
import { ContactUsLayout } from "./contactUs/contactUsLayout";
import MotorRideAppLayout from "./motorRideApp/motorRideApp_Layout";
import {Container} from "./certificate/mv-certificate";
function Index() {
  window.addEventListener("scroll", () => {
    ScrollNavFunction();
    NavWhiteCompact();
  });
  // window.addEventListener("scroll", NavWhiteCompact);
  return (
    <BrowserRouter>
      <div
        style={{
          width: "98.6%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Switch>
          <Route path="/index" component={BodyHomepage} exact />
          <Route path="/homepage" component={BodyHomepage} exact />
          <Route path="/" component={BodyHomepage} exact />
          <Route path="/about-us" component={AboutUsLayout} exact />
          <Route path="/special-deals" component={SpecialDeals} exact />
          <Route path="/contact-us" component={ContactUsLayout} exact />
          <Route path="/mv-ride-app" component={MotorRideAppLayout} exact />
          <Route path="/dragster800rr" component={BodyDragster800RR} />
          <Route path="/dragster800rrscs" component={Dragster800RR_SCS} />
          <Route path="/brutale1000rr" component={BodyBrutale1000RR} />
          <Route path="/certificate" component={Container} />
          {/* <Route
            path="/brutale1000serieoro"
            component={BodyBrutale1000SerieOro}
          /> */}
          <Route path="/rush1000" component={Rush1000} />
          <Route path="/dragster800rosso" component={Dragster800Rosso} />
          <Route path="/superveloce-alpine" component={SuperveloceAlpine} />
        </Switch>
        <MvEmail />
        <FooterGe />
      </div>
    </BrowserRouter>
  );
}
ReactDOM.render(<Index />, document.getElementById("body"));
