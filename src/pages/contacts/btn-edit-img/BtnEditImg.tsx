import Image from 'next/image';
import { useState } from 'react';
import btnEditImageHover from '@svgs/edit-image-hover.svg';
import btnEditImage from '@svgs/edit-image.svg';
import cl from './BtnEditImg.module.scss';

const BtnEditImg = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={cl.edit}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Image
        src={hover ? btnEditImageHover : btnEditImage}
        alt={'edit'}
        width={22}
        height={23}
      />
    </div>
  );
};

export default BtnEditImg;
