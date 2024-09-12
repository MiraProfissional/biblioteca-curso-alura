import React from 'react';
import profile from '../../images/perfil.svg';
import shoppingBage from '../../images/sacola.svg';
import styled from 'styled-components';

const Icons = styled.ul`
  display: flex;
  align-items: center;
`;

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const icons = [profile, shoppingBage];

function IconsHeader() {
  return (
    <Icons>
      {icons.map((icons) => (
        <Icon>
          <img src={icons} />
        </Icon>
      ))}
    </Icons>
  );
}

export default IconsHeader;
