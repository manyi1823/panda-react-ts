import * as React from "react";
import { Section7Wrapper, SectionWrapper } from "./style";
import TwitterIcon from "../icon/twitter";
import TelegramIcon from "../icon/telegram";

export interface ISection7Props {}

const listSocials = [
  {
    id: 1,
    name: "twitter",
    link: "",
    icon: <TwitterIcon />,
  },
  {
    id: 2,
    name: "telegram",
    link: "",
    icon: <TelegramIcon />,
  },
];
export default function Section7(props: ISection7Props) {
  return (
    <SectionWrapper id='section-roadmap'>
      <Section7Wrapper>
        <span className="title">Join our Comunity</span>
        <div className="socials">
          {listSocials.map((item) => (
            <div className="social">
              <div className="name">
                <span>{item.name}</span>
                {item.icon}
              </div>
              <div className="al">@panda</div>
            </div>
          ))}
        </div>
      </Section7Wrapper>
    </SectionWrapper>
  );
}
