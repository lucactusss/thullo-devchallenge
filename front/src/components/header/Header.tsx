import React, { ReactNode } from 'react';
import ThemeToggle from '../themeToggle/themeToggle';
import { StyledHeader } from './Header.styled';
import { BsBookmarkFill } from 'react-icons/bs';

type HeaderProps = {
  theme: any;
  toggleTheme: any;
};

class Header extends React.Component<HeaderProps> {
  render(): ReactNode {
    return (
      <StyledHeader>
        <div className="bookmarker-name">
          <div>Bookmarker</div>
          <BsBookmarkFill className="logo" />
        </div>
        <div className="theme-toggle">
          <ThemeToggle
            theme={this.props.theme}
            toggleTheme={this.props.toggleTheme}
          />
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
