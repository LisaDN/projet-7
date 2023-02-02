import React from "react";

export default function Banner({ BannerImg, BannerTitle }) {
  return (
    <div className="banner wrapper">
      <img src={BannerImg} className="img_banner" alt={BannerImg} />
      {/* si il n'y a pas de bannerTitle ne rien mettre sinon affichage de h1 + text 
      condition ternaire qui va permettre de ne pas afficher de balise h1 vide pour la page a propos  */}
      {!BannerTitle ? "" : <h1 className="banner_txt">{BannerTitle}</h1>}
    </div>
  );
}
