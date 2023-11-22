import React from "react";
// import s from "./style.module.css";
import SalePreview from "../../components/SalePreview";
import CatalogPreview from "../../components/CatalogPreview";
import DiscountBanner from "../../components/DiscountBanner";
import SaleBanner from "../../components/SaleBanner";

export default function MainPage() {
  return (
    <div>
      <SaleBanner />
      <CatalogPreview />
      <DiscountBanner />
      <SalePreview />
    </div>
  );
}
