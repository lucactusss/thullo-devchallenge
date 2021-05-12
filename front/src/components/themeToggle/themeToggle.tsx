import React, { ReactNode } from 'react';
import { StyledThemeToggle } from './themeToggle.styled';

type ThemeToggleProps = {
  theme: any;
  toggleTheme: any;
};

class ThemeToggle extends React.Component<
  ThemeToggleProps & React.HTMLAttributes<HTMLDivElement>
> {
  render(): ReactNode {
    return (
      <StyledThemeToggle>
        {this.props.theme === 'dark' ? (
          <input
            type="checkbox"
            id="toggle"
            className="toggle--checkbox"
            onClick={this.props.toggleTheme}
            checked
          />
        ) : (
          <input
            type="checkbox"
            id="toggle"
            className="toggle--checkbox"
            onClick={this.props.toggleTheme}
          />
        )}
        <label htmlFor="toggle" className="toggle--label">
          <span className="toggle--label-background"></span>
        </label>
      </StyledThemeToggle>
    );
  }
}

export default ThemeToggle;
