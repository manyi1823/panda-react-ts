import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-family: "KARASHA", sans-serif;
  color: #000;
  width: 100%;
  height: 80px;
  padding: 12px 16px;
  z-index: 1000;
  backdrop-filter: blur(5px);
  @media (min-width: 768px) {
    padding: 0px 50px;
    height: 90px;
  }
  @media (min-width: 1240px) {
    padding: 0px 80px;
  }
  & > .wrapper {
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    gap: 100px;
  }
`;

export const Logo = styled.img`
  height: 100%;
  width: auto;
`;

export const Menu = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  justify-content: space-between;
`;

export const Item = styled(motion.div)`
  position: relative;
  color: #9b9f92;
  font-size: 20px;
  line-height: 1.5;
  cursor: pointer;
  &.active {
    color: #6ea736;
  }
  & > .underline {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: #6ea736;
  }
`;
