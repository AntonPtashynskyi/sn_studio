import React from "react";

import "./priceTable.scss";
import Link from "next/link";

export const PriceTable = ({ t }) => {
  return (
    <div>
      <div className="prices uppercase">
        <div className="price--block group">
          <div className="decorative-pill"></div>
          <div className="price">
            <h3 className="price--title">{t("Brows")}</h3>
            <div className="price--description">
              <div className="flex font-medium gap-[1rem]">
                <p className="price--category">{t("Eyebrow styling")}</p>
                <p className="price--amount">110 {t("pln")}</p>
              </div>
              <div className="flex font-medium gap-[1rem]">
                <p className="price--category">{t("Eyebrow lamination")}</p>
                <p className="price--amount">150 {t("pln")}</p>
              </div>
              <div className="flex font-medium gap-[1rem]">
                <p className="price--category">{t("Eyebrow regulation")}</p>
                <p className="price--amount">60 {t("pln")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="price--block group">
          <div className="decorative-pill"></div>
          <div className="price">
            <h3 className="price--title">{t("Lashes")}</h3>
            <div className="price--description">
              <div className="flex font-medium gap-[1rem]">
                <p className="price--category">{t("Eyelash lamination")}</p>
                <p className="price--amount">160 {t("pln")}</p>
              </div>
              <div className="flex font-medium gap-[1rem]">
                <p className="price--category">{t("Eyelash dye")}</p>
                <p className="price--amount">30 {t("pln")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="price--block group">
          <div className="decorative-pill"></div>
          <div className="price">
            {/* TODO! translate MPU */}
            <h3 className="price--title">MPU</h3>
            <div className="price--description">
              <div className="flex font-medium gap-[1rem]">
                <p className="price--category">{t("Permanent eyebrow makeup")}</p>
                <p className="price--amount">900 {t("pln")}</p>
              </div>
              <div className="flex font-medium gap-[1rem]">
                <p className="price--category">{t("Permanent lip makeup")}</p>
                <p className="price--amount">900 {t("pln")}</p>
              </div>
              <div className="flex font-medium gap-[1rem]">
                <p className="price--category">{t("Refresh PMU")}</p>
                <p className="price--amount">450 {t("pln")}</p>
              </div>

            </div>
          </div>
        </div>
        <div className="price--block group">
          <div className="decorative-pill"></div>
          <div className="price">
            <h3 className="price--title">{t("Sets")}</h3>
            <div className="price--description">
              <div className="flex font-medium gap-[1rem]">
                <p className="price--category">
                  {t("Eyebrow styling + eyelash lamination")}
                </p>
                <p className="price--amount">240 {t("pln")}</p>
              </div>
              <div className="flex font-medium gap-[1rem]">
                <p className="price--category">
                  {t("Eyebrow lamination + eyelash lamination")}
                </p>
                <p className="price--amount">270 {t("pln")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href="https://dikidi.net/1788548" target="_blank" className="bg-black bg-opacity-90 px-4 py-4 rounded-[3rem] text-white text-center block w-[80%] mx-auto font-light mt-6">{t("Make an appointment!")}</Link>
    </div>
  );
};
