import styled from 'styled-components';

export const StyledThemeToggle = styled.div`
  padding: 15px;

  .toggle--checkbox {
    display: none;
  }
  .toggle--checkbox:checked {
    /** This will all flip from sun to moon **/
    /** Change the label color **/
  }
  .toggle--checkbox:checked ~ .background {
    background: var(--indigo-background);
  }
  .toggle--checkbox:checked + .toggle--label {
    background: var(--indigo-color);
    border-color: var(--indigo-border);
    /** Change the cloud to stars **/
    /** Change the sun into the moon **/
    /** Show the dimples on the moon **/
  }
  .toggle--checkbox:checked + .toggle--label .toggle--label-background {
    left: 15px;
    width: 1px;
  }
  .toggle--checkbox:checked + .toggle--label .toggle--label-background:before {
    width: 1px;
    height: 1px;
    top: -6px;
  }
  .toggle--checkbox:checked + .toggle--label .toggle--label-background:after {
    width: 1px;
    height: 1px;
    left: -7px;
    top: 5px;
  }
  .toggle--checkbox:checked + .toggle--label:before {
    background: var(--white);
    border-color: var(--gray-border);
    animation-name: switch;
    animation-duration: 350ms;
    animation-fill-mode: forwards;
  }
  .toggle--checkbox:checked + .toggle--label:after {
    transition-delay: 350ms;
    opacity: 1;
  }
  .toggle--label {
    /** Placeholder element, starting at blue **/
    width: 50px;
    height: 25px;
    background: var(--blue-color);
    border-radius: 100px;
    border: 1px solid var(--blue-border);
    display: flex;
    position: relative;
    transition: all 350ms ease-in;
    /** The sun cloud and moon stars **/
    /** Sun/Moon element **/
    /** Gray dots on the moon **/
    :hover {
      cursor: pointer;
    }
  }
  .toggle--label-background {
    width: 2px;
    height: 1px;
    border-radius: 5px;
    position: relative;
    background: var(--white);
    left: 33px;
    top: 11px;
    transition: all 150ms ease-in;
  }
  .toggle--label-background:before {
    content: '';
    position: absolute;
    top: -1px;
    width: 10px;
    height: 1px;
    border-radius: 5px;
    background: var(--white);
    left: -5px;
    transition: all 150ms ease-in;
  }
  .toggle--label-background:after {
    content: '';
    position: absolute;
    top: 1px;
    width: 10px;
    height: 1px;
    border-radius: 5px;
    background: var(--white);
    left: -2px;
    transition: all 150ms ease-in;
  }
  .toggle--label:before {
    animation-name: reverse;
    animation-duration: 350ms;
    animation-fill-mode: forwards;
    transition: all 350ms ease-in;
    content: '';
    width: 20px;
    height: 20px;
    border: 2px solid var(--yellow-border);
    top: 1px;
    left: 1px;
    position: absolute;
    border-radius: 82px;
    background: var(--yellow-background);
  }
  .toggle--label:after {
    transition-delay: 0ms;
    transition: all 250ms ease-in;
    position: absolute;
    content: '';
    box-shadow: var(--gray-dots) -3px 0 0 1px, var(--gray-dots) -6px 3px 0 -1px;
    left: 35px;
    top: 5px;
    width: 2px;
    height: 2px;
    background: transparent;
    border-radius: 50%;
    opacity: 0;
  }

  @keyframes switch {
    0% {
      left: 1px;
    }
    60% {
      left: 1px;
      width: 28px;
    }
    100% {
      left: 26px;
      width: 20px;
    }
  }
  @keyframes reverse {
    0% {
      left: 26px;
      width: 20px;
    }
    60% {
      left: 18px;
      width: 28px;
    }
    100% {
      left: 1px;
    }
  }
`;
