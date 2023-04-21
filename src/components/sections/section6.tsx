import * as React from "react";
import {
  Arrows,
  ListItem,
  ListPhase,
  Section6Wrapper,
  SectionWrapper,
} from "./style";
import ArrowIcon from "../icon/arrow";
import meme from "../../assets/images/section6/meme.png";
import bg from "../../assets/images/section6/bg.png";
import * as rdd from 'react-device-detect'

export interface ISection6Props {}

interface IPhase {
  id: number;
  name: string;
  items: string[];
}
export const listPhase: IPhase[] = [
  {
    id: 1,
    name: "Phase 1: Meme",
    items: [
      "Panda Trending",
      "Coinmarketcap & Coingecko",
      "Uniswap",
      "500+ Holders",
      "Airdrop Claim",
      "Airdrop Community",
    ],
  },
  {
    id: 2,
    name: "Phase 2: Transfers and Holders",
    items: [
      "Panda Trending",
      "Coinmarketcap & Coingecko",
      "Uniswap",
      "500+ Holders",
      "Airdrop Claim",
      "Airdrop Community",
    ],
  },
  {
    id: 3,
    name: "Phase 3: CEX Listings",
    items: [
      "Panda Trending",
      "Coinmarketcap & Coingecko",
      "Uniswap",
      "500+ Holders",
      "Airdrop Claim",
      "Airdrop Community",
    ],
  },
  {
    id: 4,
    name: "Phase 4: Stand with PEPE",
    items: [
      "Panda Trending",
      "Coinmarketcap & Coingecko",
      "Uniswap",
      "500+ Holders",
      "Airdrop Claim",
      "Airdrop Community",
    ],
  },
];
export default function Section6(props: ISection6Props) {
  const [currentPhase, setCurrentPhase] = React.useState(0);
  const nex = React.useCallback(() => {
    if (currentPhase < listPhase.length - 1) setCurrentPhase((pre) => pre + 1);
  }, [currentPhase]);
  const pre = React.useCallback(() => {
    if (currentPhase > 0) setCurrentPhase((pre) => pre - 1);
  }, [currentPhase]);

  const renderListPhase = React.useMemo(() => {
    return (
      <ListPhase>
        {listPhase.map((item) => (
          <div
            className={`item ${
              listPhase[currentPhase].id === item.id ? "active" : ""
            }`}
          >
            {item.name}
          </div>
        ))}
      </ListPhase>
    );
  }, [currentPhase]);

  const renderArrow = React.useMemo(() => {
    return (
      <Arrows>
        <div className="title">{listPhase[currentPhase].name}</div>
        <div className="arrows">
          <div
            onClick={pre}
            className={`arrow ${
              listPhase[currentPhase].id === 1 ? "first" : ""
            }`}
          >
            <ArrowIcon />
          </div>
          <div
            onClick={nex}
            className={`arrow ${
              listPhase[currentPhase].id === listPhase.length ? "last" : ""
            }`}
            style={{
              transform: "scale(-1, 1)",
            }}
          >
            <ArrowIcon direction="right" />
          </div>
        </div>
      </Arrows>
    );
  }, [currentPhase, pre, nex]);

  const renderList = React.useMemo(() => {
    return (
      <ListItem>
        <div className="meme">
          <img src={meme} alt="" />
        </div>
        <ul>
          {listPhase[currentPhase].items.map((item) => (
            <li className="item">{item}</li>
          ))}
        </ul>
      </ListItem>
    );
  }, [currentPhase]);
  return (
    <SectionWrapper>
      <Section6Wrapper>
        <span className="title">Roadmap</span>
        <span className="description">
          Seriously, this will be a challenging journey for Panda. We consider
          Pepe to be the leader of a new generation of memes. All is not a joke,
          everything we develop is serious. Please go to the specific route
          below.
        </span>
        {rdd.isMobile ? (
          <>
            {renderListPhase}
            {renderArrow}
            {renderList}
          </>
        ) : (
          <>
            {renderArrow}
            <div className="flex">
              {renderListPhase}
              {renderList}
            </div>
            <div className="bg">
              <img src={bg} alt="section-bg" />
            </div>
          </>
        )}
      </Section6Wrapper>
    </SectionWrapper>
  );
}
