export const AboutUsLegend = () => {
  return (
    <>
      <div className="legend-layout">
        <picture>
          <source
            media="(max-width: 991px)"
            srcset="./img/aboutus/removebg-m.png"
          ></source>
          <img src="./img/aboutus/removebg-l.png" alt=""></img>
        </picture>
        <div className="legend-container">
          <div className="lg-title">
            <h3>A LASTING</h3>
            <span>LEGEND</span>
          </div>
          <div className="lg-content">
            <p>
              Born out of Count Giovanni Agusta’s passion for flying machines,
              the company owes the first part of its name, MV, to the location
              of its first plant, originally producing airplanes, near what is
              today Malpensa international airport, Verghera.
            </p>
            <div className="lg-bt">
              <a href>HISTORY</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
