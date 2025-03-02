import React from "react";
// import "tailwindcss/tailwind.css";

const ImmersiveBackground = ({
  imghi,
  imgwi,
  widdth,
  heigght,
  Classprop = "",
  imgLink,
  small,
}) => {
  if (small != "true") {
    return (
      <div
        style={{ width: widdth, height: heigght }}
        className={`   ${Classprop}  w-36  h-72 top-20`}
      >
        <img
          src="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696811effea0ba47d64ed58_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp"
          className=" 
        relative z-50  w-full h-full"
        />
        <img
          src={imgLink}
          className=" h-[100%]  absolute inset-0  w-full rounded-3xl object-fill z-0"
          style={{ height: "", width: "" }} // Ensure proper scaling for images
        />
      </div>
    );
  }
  return (
    <div
      style={{ width: widdth, height: heigght }}
      className={` w-36 h-72 top-20   ${Classprop}`}
    >
      <img
        src="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696811effea0ba47d64ed58_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp"
        className="
      relative z-50 block w-full h-full"
      />
      <img
        src={imgLink}
        className=" h-[100%]  absolute inset-0  w-full rounded-3xl object-fill z-0"
        style={{ height: "", width: "" }} // Ensure proper scaling for images
      />
    </div>
  );
};

export default ImmersiveBackground;