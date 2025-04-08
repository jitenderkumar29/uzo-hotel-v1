import React from "react";

import logoPng from "../Assets/icons/logo.png";

const defaultPropData = {
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere alias
  consectetur amet qui blanditiis laboriosam, quas possimus placeat
  dicta enim doloribus sunt sint cumque delectus expedita a eos repellat
  odio rem recusandae. Nisi repudiandae consectetur nostrum voluptatem
  tempora quos repellendus tenetur voluptatum voluptate esse nam
  dolorum, eaque sit nesciunt natus voluptatibus ipsum assumenda
  expedita odit eveniet corrupti itaque nemo laudantium! Esse quo amet
  possimus ipsa!`,
  name: "",
};

const FooterTop = ({ data = defaultPropData }) => {
  return (
    <section className="FooterTop">
      <div className="text-center">
        <img src={logoPng} alt="" />
      </div>
      <div className="text-center">
        <p>{`${data.name} ${defaultPropData.text}`}</p>
      </div>
    </section>
  );
};

export default FooterTop;
