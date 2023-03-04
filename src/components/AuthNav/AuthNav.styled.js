import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
const globalAnimEffect = `cubic-bezier(.06,.57,.52,.97) 300ms`;
const StyledLink = styled(NavLink)`
  position: relative;
  transition: color ${globalAnimEffect};
  &::after {
    position: absolute;
    left: 0;
    bottom: -4px;
    display: block;
    content: ' ';
    width: 100%;
    height: 2px;
    background-color: #e2580a;
    opacity: 0;
    transition: transform ${globalAnimEffect}, opacity ${globalAnimEffect};
    transform: scaleX(0);
  }
  &.active {
    color: #e2580a;
  }
  &.active::after {
    transform: scaleX(1);
    opacity: 1;
  }
  &:hover::after {
    transform: scaleX(1);
    opacity: 1;
  }
  &:not(.active):hover,
  :focus {
    color: #e2580a;
  }
`;

const Nav = styled.div`
  display: flex;
  gap: 15px;
`;
export { StyledLink, Nav };
