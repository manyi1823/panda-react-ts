import * as React from "react";
import { Section3Wrapper, SectionWrapper } from "./style";
import meme from "../../assets/images/section3/meme.png";
import rock from "../../assets/images/section3/rock.png";

export interface ISection3Props {}

export default function Section3(props: ISection3Props) {
  return (
    <SectionWrapper id="section-about">
      <Section3Wrapper>
        <div className="meme">
          <img src={meme} alt="meme-section3" />
        </div>
        <div className="content">
          <span className="title">About</span>
          <span className="subtitle">
            "Panda is a friend of Doge Shiba and Pepe."
          </span>
          <span className="description">
            Get ready for a new coin meme sensation - Panda! He's not just a
            cute and cuddly bear, but also a loyal friend of Doge Shiba and
            Pepe. With a heart of gold and a determination to help people
            succeed, Panda is on a mission to make you a millionaire. Join Panda
            on his journey and watch your investments soar to new heights. Don't
            miss out on this opportunity to ride the wave of the next big thing
            in the world of cryptocurrency - Panda!
          </span>
          <span className="description">
            Panda has become China's top meme icon, bringing joy to billions of
            people. As an immortal symbol of the meme coin revolution, Panda's
            mission is to help the community create more millionaires and become
            the most valuable meme coin
          </span>
        </div>
        <div
          className="bg"
          style={{
            left: 0,
            right: "unset",
          }}
        >
          <img src={rock} alt="section-3" />
        </div>
      </Section3Wrapper>
    </SectionWrapper>
  );
}
