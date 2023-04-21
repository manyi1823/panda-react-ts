import * as React from "react";
import { Section5Wrapper, SectionWrapper, TotalSupply } from "./style";
import meme from '../../assets/images/section5/meme.png'
import chart from '../../assets/images/section5/chart.png'
import Button from "../button";

export interface ISection5Props {}

export default function Section5(props: ISection5Props) {
  return (
    <SectionWrapper id='section-tokenomics'>
      <Section5Wrapper>
        <span className="title">Tokenomics</span>
        <TotalSupply>
          <div className="content">
            <span className="title">Total Supply:</span>
            <span className="number">500,000,000,000,000</span>
            <span className="description">
              The token distribution is as follows: 90% of tokens are allocated
              for liquidity, while 5% is reserved for public Airdrop campaigns
              and rewards for the holder addresses list of ARB, Doge, Shiba, and
              Pepe. The remaining 5% of tokens will be used for Cex Listings,
              liquidity pools, and development wallets.
            </span>
          </div>
          <div className="chart">
            <img src={meme} alt="section5-meme" />
          </div>
        </TotalSupply>
        <div className="chart">
          <img src={chart} alt="section5-chart" />
        </div>
        <Button
          text="Learn more Our Github"
          onClick={() => {}}
          style={{
            fontWeight: "700",
          }}
        />
      </Section5Wrapper>
    </SectionWrapper>
  );
}
