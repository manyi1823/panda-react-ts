import * as React from "react";
import {
  CopyRight,
  FooterWrapper,
  Info,
  ListFooter,
  SectionWrapper,
} from "./style";
import logo from "../../assets/images/logo.png";

export interface IFooterProps {}

const list = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "How to buy",
    link: "/how-to-buy",
  },
  {
    id: 4,
    name: "Tokenomics",
    link: "/tokenomics",
  },
  {
    id: 5,
    name: "Github",
    link: "https://github.com/",
    isHref: true,
  },
  {
    id: 6,
    name: "Roadmap",
    link: "/roadmap",
  },
  {
    id: 7,
    name: "Twitter",
    link: "",
  },
  {
    id: 8,
    name: "Telegram",
    link: "",
  },
];
export default function Footer(props: IFooterProps) {
  return (
    <SectionWrapper>
      <FooterWrapper>
        <div className="flex">
          <ListFooter>
            {list.map((item) => (
              <div className="item">{item.name}</div>
            ))}
          </ListFooter>
          <Info>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="description">
              "$PANDA is a meme coin designed similarly to Doge, Shiba, and
              Pepe. This coin was created to provide amusement and inspire the
              community to dream big, with no intrinsic value or expected
              financial return. There is no official team or roadmap associated
              with the coin."
            </div>
          </Info>
        </div>
        <CopyRight>Copyright ® 2023 Panda. All Rights Reserved</CopyRight>
      </FooterWrapper>
    </SectionWrapper>
  );
}
