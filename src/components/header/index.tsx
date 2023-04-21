import * as React from "react";
import { HeaderWrapper, Item, Logo, Menu } from "./style";
import logo from "../../assets/images/logo.png";
import Button from "../button";
import HamburgerIcon from "../icon/hamburger";
import * as rdd from "react-device-detect";
import { motion } from "framer-motion";

export interface IHeaderProps {}

export interface ItemMenu {
  id: number;
  name: string;
  link: string;
  value: string
  isHref?: boolean;
}
export default function Header(props: IHeaderProps) {
  const menu: ItemMenu[] = [
    {
      id: 1,
      name: "Home",
      link: "/",
      value: 'home'
    },
    {
      id: 2,
      name: "About",
      link: "/about",
      value: 'about'
    },
    {
      id: 3,
      name: "How to buy",
      link: "/how-to-buy",
      value: 'how-to-buy'
    },
    {
      id: 4,
      name: "Tokenomics",
      link: "/tokenomics",
      value: 'tokenomics'
    },
    {
      id: 5,
      name: "Github",
      link: "https://github.com/",
      isHref: true,
      value: '/',
    },
    {
      id: 6,
      name: "Roadmap",
      link: "/roadmap",
      value: 'roadmap'
    },
  ];
  const [currentMenu, setCurrentMenu] = React.useState(menu[0]);
  const scrollToSection = (value: string) => {
    const section = document.getElementById("section-" + value.toLowerCase());
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const handleMenuClick = (item: ItemMenu) => {
    setCurrentMenu(item);
    scrollToSection(item.value);
  };
 

  return (
    <HeaderWrapper>
      <div className="wrapper">
        {" "}
        <Logo src={logo} alt="logo" />
        {!rdd.isMobile ? (
          <>
            <Menu>
              {menu.map((item) => (
                <Item
                  key={"header-menu-item-" + item.id}
                  className={currentMenu.id === item.id ? "active" : ""}
                  onClick={() => handleMenuClick(item)}
                >
                  {item.name}
                  {currentMenu.id === item.id ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </Item>
              ))}
            </Menu>
            <Button text="connect wallet" onClick={() => {}} />
          </>
        ) : (
          <HamburgerIcon />
        )}
      </div>
    </HeaderWrapper>
  );
}
