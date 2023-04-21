import * as React from "react";
import { Content, Meme, Road, Section1Wrapper, SectionWrapper } from "./style";
import Button from "../button";
import twitter from "../../assets/images/socials/twitter.png";
import telegram from "../../assets/images/socials/telegram.png";
import coin from "../../assets/images/socials/coin.png";
import meme from "../../assets/images/section1/meme.png";
import road from "../../assets/images/section1/road.png";
import bamboo from "../../assets/images/section1/bamboo.png";
import * as rdd from "react-device-detect";

export interface ISection1Props {}

export default function Section1(props: ISection1Props) {
  const socials = [
    {
      id: 1,
      icon: twitter,
      link: "https://twitter.com/pandamemecoin",
    },
    {
      id: 2,
      icon: telegram,
      link: "https://t.me/pandamemecoin",
    },
    {
      id: 3,
      icon: coin,
      link: "https://www.coingecko.com/en/coins/panda-meme-coin",
    },
  ];
  return (
    <SectionWrapper
      id="section-home"
      style={
        rdd.isMobile
          ? {}
          : {
              height: "100vh",
            }
      }
    >
      <Section1Wrapper>
        <Content>
          <span className="title">PANDA</span>
          <span className="description">
            the funniest meme in China, has joined the race. Accelerate to
            become the most valuable memecoin
          </span>
          <Button
            text="buy now"
            onClick={() => {}}
            style={{
              textTransform: "uppercase",
              fontFamily: "Clash Display",
              fontWeight: 700,
              height: "37px",
            }}
          />
          <div className="socials">
            {socials.map((social) => (
              <img src={social.icon} alt="social" key={social.id} />
            ))}
          </div>
        </Content>
        <Meme>
          <img src={meme} alt="meme" />
        </Meme>
        <Road>
          <img src={road} alt="road" />
        </Road>
      </Section1Wrapper>
      {!rdd.isMobile && (
        <div className="bg">
          <img src={bamboo} alt="section1-bg" />
        </div>
      )}
    </SectionWrapper>
  );
}
