import * as React from "react";
import {
  Recieved,
  Section2Wrapper,
  SectionWrapper,
  Start,
  StartIn,
  StartOut,
} from "./style";
import * as rdd from "react-device-detect";
import Range from "../range";
import Input from "../input";
import Button from "../button";
export interface ISection2Props {}

export default function Section2(props: ISection2Props) {
  return (
    <SectionWrapper id='section-claim'>
      <Section2Wrapper>
        <span className="title">The rewards is free. Claim PANDA now </span>
        <span className="total_reward">
          Total Reward
          <br />
          15,000,000,000,000
        </span>
        <Start>
          <StartIn>
            <div className="content">
              <span>"Valid addresses:</span>
              <ul>
                <li>200,000 ARB Holder addresses</li>
                <li>30,000 PePe Holder addresses"</li>
              </ul>
            </div>
            <div className="time">
              <span className="start-in">Start in </span>
              <span className="number"> 00 </span>:
              <span className="number"> 00 </span>:
              <span className="number"> 2023-04-24 </span>
            </div>
          </StartIn>
          <StartOut>
            <div className="content">
              <span
                style={{
                  textAlign: "left",
                }}
              >
                "Note: <br />
                All addresses are random. Addresses that are not able to claim
                will not be included in the list of reward recipients."
              </span>
            </div>
            <div className="time">
              <span className="start-in">End in </span>
              <span className="number"> 00 </span>:
              <span className="number"> 00 </span>:
              <span className="number"> 2023-05-15 </span>
            </div>
          </StartOut>
        </Start>
        <Recieved>
          <div className="label">
            <span>Recieved</span>
            {!rdd.isMobile && (
              <span>8% ( 1,000,000 / 15,000,000,000,000 )</span>
            )}
          </div>
          <Range percent={0.8} />
        </Recieved>
        <Input />
        <Button text='Claim' onClick={() => {}}/>
      </Section2Wrapper>
    </SectionWrapper>
  );
}
