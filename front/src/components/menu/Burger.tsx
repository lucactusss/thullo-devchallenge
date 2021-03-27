import React, { Dispatch, SetStateAction } from 'react';
import { StyledBurger } from './Burger.styled';

interface BurgerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen }: BurgerProps) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
