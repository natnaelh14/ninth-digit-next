import React from 'react';
import NinthLogo from './ninth-logo.png';
import Image from 'next/image'

import { HeaderContainer, HeaderText } from './Header.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Image
        src={NinthLogo}
        alt='ninth-digit-logo'
        width={100}
        height={100}
      />
      <HeaderText className='f2'>
        NINTH DIGIT
      </HeaderText>
    </HeaderContainer>
  );
};

export default Header;
