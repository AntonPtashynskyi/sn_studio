import React from "react";

import "./priceTable.scss";

export const PriceTable = ({ t }) => {
  return (
    <div className="prices uppercase">
      <div className="price--block group">
        <div className="decorative-pill"></div>
        <div className="price">
          <h3 className="price--title">{t("Brows")}</h3>
          <div className="price--description">
            <div className="flex font-medium gap-[1rem]">
              <p className="price--category">{t("Eyebrow styling")}</p>
              <p className="price--amount">80 {t("pln")}</p>
            </div>
            <div className="flex font-medium gap-[1rem]">
              <p className="price--category">{t("Eyebrow lamination")}</p>
              <p className="price--amount">130 {t("pln")}</p>
            </div>
            <div className="flex font-medium gap-[1rem]">
              <p className="price--category">{t("Eyebrow regulation")}</p>
              <p className="price--amount">30 {t("pln")}</p>
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
              <p className="price--amount">140 {t("pln")}</p>
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
              <p className="price--amount">700 {t("pln")}</p>
            </div>
            <div className="flex font-medium gap-[1rem]">
              <p className="price--category">{t("Permanent lip makeup")}</p>
              <p className="price--amount">600 {t("pln")}</p>
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
              <p className="price--amount">200 {t("pln")}</p>
            </div>
            <div className="flex font-medium gap-[1rem]">
              <p className="price--category">
                {t("Eyebrow lamination + eyelash lamination")}
              </p>
              <p className="price--amount">200 {t("pln")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
