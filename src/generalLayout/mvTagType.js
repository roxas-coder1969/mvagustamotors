import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const tagDataList = [
  {
    type: "Rush",
    typePop: "rush-pop.webp",
    typeLogo: "rush.svg",
    typeImg: "rush.webp",
    typeContent:
      "Designed for heart-stopping, tarmac-burning take-offs. Its untamed beastly power and its arrogant, irreverent appeal, make it totally irresistible.",
  },
  {
    type: "Brutale",
    typePop: "brutale-pop.webp",
    typeLogo: "brutale.svg",
    typeImg: "brutale.webp",
    typeContent:
      "An evolution of the original Brutale, the iconic sports naked that rocked the motorcycling world.",
  },
  {
    type: "Dragster",
    typePop: "dragster-pop.webp",
    typeLogo: "dragster.svg",
    typeImg: "dragster.webp",
    typeContent:
      "Awe-inspiring, compact and a lifestyle statement in its own right, Dragster is the perfect    blend of technology, raw power and design.",
  },
  {
    type: "Turismo Veloce",
    typePop: "turismo-veloce-pop.webp",
    typeLogo: "turismo-veloce.svg",
    typeImg: "turismo-veloce.webp",
    typeContent:
      "The flexible sports concept bike, maximising riding pleasure in a variety of situations. Eclectic, easy, at home on any road.",
  },
  {
    type: "F3",
    typePop: "f3-pop.webp",
    typeLogo: "f3.svg",
    typeImg: "f3.webp",
    typeContent:
      "The return of MV Agusta’s racing legacy 3-cylinder engine in a production bike. The first mid-size Supersport featuring a counter-rotating crankshaft.",
  },
  {
    type: "Superveloce",
    typePop: "superveloce-pop.webp",
    typeLogo: "superveloce.svg",
    typeImg: "superveloce.webp",
    typeContent:
      "Inspired in its breathtaking looks by MV Agusta’s glorious racing legacy, powered by a latest-generation 3-cylinder engine.",
  },
];

export default function MvTagType() {
  window.onload = () => {
    function TagHandleClick(i) {
      clickedTag(i);
    }
    for (var i = 0; i < document.getElementsByClassName("mv-tag").length; i++) {
      document
        .getElementsByClassName("mv-tag")
        [i].classList.add("mv-tag_notActive");
      document
        .getElementsByClassName("mv-tag")
        [i].addEventListener("click", TagHandleClick.bind(Event, i));
    }
    document.getElementsByClassName("mv-tag")[2].classList.add("mv-tag_active");
    document
      .getElementsByClassName("mv-tag")[2]
      .classList.remove("mv-tag_notActive");
    document
      .getElementsByClassName("mv-preview")[2]
      .classList.add("mv-preview_hidden");
    document
      .getElementsByClassName("mv-tag-inf")[2]
      .classList.add("mv-tag-inf_appear");
    function clickedTag(key) {
      for (
        var i = 0;
        i < document.getElementsByClassName("mv-tag").length;
        i++
      ) {
        document
          .getElementsByClassName("mv-tag")
          [i].classList.remove("mv-tag_active");
        document
          .getElementsByClassName("mv-tag")
          [i].classList.add("mv-tag_notActive");
        document
          .getElementsByClassName("mv-preview")
          [i].classList.remove("mv-preview_hidden");
        document
          .getElementsByClassName("mv-tag-inf")
          [i].classList.remove("mv-tag-inf_appear");
      }
      document
        .getElementsByClassName("mv-tag")
        [key].classList.remove("mv-tag_notActive");
      document
        .getElementsByClassName("mv-tag")
        [key].classList.add("mv-tag_active");
      document
        .getElementsByClassName("mv-preview")
        [key].classList.add("mv-preview_hidden");
      document
        .getElementsByClassName("mv-tag-inf")
        [key].classList.add("mv-tag-inf_appear");
    }
  };
  return (
    <>
      <div className="mv-tag-layout">
        {tagDataList.map((tagData) => (
          <div className="mv-tag">
            <div className="mv-tag-container">
              <div className="mv-preview">
                <div className="mv-pr-pop">
                  <img alt="" src={`./img/img-tag/${tagData.typePop}`} />
                </div>
                <div className="mv-pr-type">{tagData.type}</div>
              </div>
              <div className="mv-tag-inf">
                <div className="mv-inf-type">
                  <img alt="" src={`./img/img-tag/${tagData.typeLogo}`} />
                </div>
                <div className="mv-tag-bg-inf">
                  <img alt="" src={`./img/img-tag/${tagData.typeImg}`} />
                </div>
                <div className="mv-inf-content">
                  <p>{tagData.typeContent}</p>
                  <a href className="banner-direct">
                    <span>LEARN MORE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export class MvTagMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      slideIndex: 2,
    };
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
    document
      .getElementsByClassName("thumb-" + this.state.slideIndex)[1]
      .classList.add("tag-type-name_chosen");
  }
  render() {
    const settingBannerSlide = {
      // centerMode: true,
      lazyLoad: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      infinite: true,
      focusOnSelect: true,
      initialSlide: 2,
      draggable: true,
      useTransform: true,
      waitForAnimate: true,
      // asNavFor: ".thumbnail_slider",
    };
    const settingThumb = {
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      infinite: true,
      focusOnSelect: true,
      initialSlide: 2,
      useTransform: true,
      waitForAnimate: true,
      beforeChange: (current, next) => {
        document
          .getElementsByClassName("thumb-" + current)[0]
          .classList.remove("tag-type-name_chosen");
        document
          .getElementsByClassName("thumb-" + current)[1]
          .classList.remove("tag-type-name_chosen");
        document
          .getElementsByClassName("thumb-" + next)[0]
          .classList.add("tag-type-name_chosen");
        document
          .getElementsByClassName("thumb-" + next)[1]
          .classList.add("tag-type-name_chosen");
        this.setState({ slideIndex: next });
      },

      // asNavFor: ".banner_slider",
      responsive: [
        {
          breakpoint: 700,
          settings: {
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: (
              <button className="slide-arrow prev-arrow">{"<<"}</button>
            ),
            nextArrow: (
              <button className="slide-arrow next-arrow">{">>"}</button>
            ),
          },
        },
      ],
    };
    return (
      <div className="slider_wrap">
        <Slider
          className="banner_slider"
          {...settingBannerSlide}
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          {tagDataList.map((tagData) => (
            <div className="banner-tag-img">
              <img
                className="img-tag-type"
                alt=""
                src={`./img/img-tag/${tagData.typeImg}`}
              />
              <div className="mv-inf-content banner-tag-content">
                <p>{tagData.typeContent}</p>
                <a href className="banner-direct">
                  <span>LEARN MORE</span>
                </a>
              </div>
            </div>
          ))}
        </Slider>
        <Slider
          className="thumbnail_slider"
          {...settingThumb}
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
        >
          {tagDataList.map((tagData, index) => (
            <section className={`thumb-${index} tag-type-name`}>
              {tagData.type}
            </section>
          ))}
        </Slider>
      </div>
    );
  }
}
