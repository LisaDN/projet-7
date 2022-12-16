import React from "react";

export default function Banner({ BannerImg }) {
  return (
    <div className="banner wrapper">
      <img src={BannerImg} className="img_banner" alt="banner_img" />
      <h1 className="banner_txt">Chez vous, partout et ailleurs</h1>
    </div>
  );
}
