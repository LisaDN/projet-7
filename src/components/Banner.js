import React from "react";

export default function Banner({ BannerImg, BannerTitle }) {
  return (
    <div className="banner wrapper">
      <img src={BannerImg} className="img_banner" alt="banner_img" />
      {!BannerTitle ? "" : <h1 className="banner_txt">{BannerTitle}</h1>}
    </div>
  );
}
