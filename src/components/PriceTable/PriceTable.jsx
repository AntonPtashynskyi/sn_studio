import React from "react";

import "./priceTable.scss";

export const PriceTable = () => {
  return (
    <div className="prices uppercase">
      <div className="price--block group">
        <div className="decorative-pill"></div>
        <div className="price">
          <h3 className="price--title">Brwi</h3>
          <div className="price--description">
            <div className="flex font-medium gap-[1rem]">
              <p className="price--category">STYLIZACJA BRWI</p>
              <p className="price--amount">80zł</p>
            </div>
            <div className="flex font-medium gap-[1rem]">
              <p className="price--category">LAMINACJA BRWI</p>
              <p className="price--amount">130zł</p>
            </div>
            <div className="flex font-medium gap-[1rem]">
              <p className="price--category">REGULACJA BRWI</p>
              <p className="price--amount">30zł</p>
            </div>
          </div>
        </div>
      </div>
      <div className="price--block group">
        <div className="decorative-pill"></div>
        <div className="price">
          <h3 className="price--title">RZĘSY</h3>
          <div className="price--description">
            <div className="flex font-medium gap-[1rem]">
              <p className="price--category">LAMINACJA RZĘS</p>
              <p className="price--amount">140zł</p>
            </div>
            <div className="flex font-medium gap-[1rem]">
              <p className="price--category">FARBKA RZĘS</p>
              <p className="price--amount">30zł</p>
            </div>
          </div>
        </div>
      </div>
      <div className="price--block group">
        <div className="decorative-pill"></div>
        <div className="price">
          <h3 className="price--title">MPU</h3>
          <div className="price--description">
            <div className="flex font-medium gap-[1rem]">
              <p className="price--category">Makijaż permanentny brwi</p>
              <p className="price--amount">700zł</p>
            </div>
            <div className="flex font-medium gap-[1rem]">
              <p className="price--category">Makijaż permanentny UST</p>
              <p className="price--amount">600zł</p>
            </div>
          </div>
        </div>
      </div>
      <div className="price--block group">
        <div className="decorative-pill"></div>
        <div className="price">
          <h3 className="price--title">PAKIETY</h3>
          <div className="price--description">
            <div className="flex font-medium gap-[1rem]">
              <p className="price--category">
                Stylizacja brwi + laminacja rzęs
              </p>
              <p className="price--amount">200zł</p>
            </div>
            <div className="flex font-medium gap-[1rem]">
              <p className="price--category">Laminacja brwi + laminacja rzęs</p>
              <p className="price--amount">200zł</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
