import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

interface MenuProps {
  open: boolean;
}

const Menu: React.FC<MenuProps> = ({ open }: MenuProps) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open}>
      <Link to="/" tabIndex={tabIndex}>
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </Link>
      <Link to="/" tabIndex={tabIndex}>
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Pricing
      </Link>
      <Link to="/account" tabIndex={tabIndex}>
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        My account
      </Link>
    </StyledMenu>
  );
};
export default Menu;
