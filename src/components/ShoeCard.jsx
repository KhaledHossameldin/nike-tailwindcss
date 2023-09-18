import React from "react";

const ShoeCard = ({ image, changeShoe, shoeImage }) => {
  const onTap = () => {
    if (shoeImage !== image.bigShoe) {
      changeShoe(image.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${
        shoeImage === image.bigShoe ? "border-coral-red" : "border-transparent"
      }`}
      onClick={onTap}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={image.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
