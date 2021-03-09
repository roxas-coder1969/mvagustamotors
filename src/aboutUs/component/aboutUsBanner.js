export const AboutUsBanner = () => {
  return (
    <>
      <div className="aboutUsBanner-layout">
        <h1 className="title title_color_white aboutus-banner__title">
          <strong>
            Makers <br className="hidden-br" /> of The{" "}
          </strong>
          <span>finest </span>
          <strong>TWO-WHEELED DREAMS </strong>
          <span>SINCE </span>
          <strong>1945 </strong>
        </h1>
        <picture className="aboutUs-banner__picture">
          <source
            media="(max-width: 575px)"
            srcSet="./img/aboutus/header-bg-m.png"
          ></source>
          <source
            media="(max-width: 991px)"
            srcSet="./img/aboutus/header-bg-m.png"
          ></source>
          <source
            media="(max-width: 1500px)"
            srcSet="./img/aboutus/header-bg-l.png"
          ></source>
          <img
            alt=""
            className="aboutUs-banner__img"
            srcSet="./img/aboutus/header-bg-xl.png"
          ></img>
        </picture>
      </div>
    </>
  );
};
