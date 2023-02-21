import React from 'react';

const HamburgerMenu = () => {
  return (
    <svg viewBox="0 0 900 900" id="hamburgerMenu">
      <g id="dashes">
        <path
          d="M145 609l609 0c74,0 74,111 0,111l-609 0c-74,0 -74,-111 0,-111z" id="dashBottom">
        </path>
        <path d="M146 394c203,0 406,0 609,0 74,0 74,111 0,111 -203,0 -406,0 -609,0 -74,0 -74,-111 0,-111z"
          id="dashMiddle"></path>
        <path d="M146 179l609 0c74,0 74,111 0,111l-609 0c-74,0 -74,-111 0,-111z" id="dashTop">
        </path>
      </g>
    </svg>
  );
}
export default HamburgerMenu;