import * as React from "react";
import { BGSection4, ItemStep, Section4Wrapper, SectionWrapper } from "./style";
import bg from "../../assets/images/section4/bg.png";
import * as rdd from "react-device-detect";

export interface ISection4Props {}

const steps = [
  {
    id: 1,
    title: "Create a Wallet",
    description:
      "To create a wallet, you can download Metamask or your preferred wallet app from the App Store or Google Play Store at no cost. If you're using a desktop, simply visit metamask.io to download the Google Chrome extension.",
  },
  {
    id: 2,
    title: "Get ETH ( Arbitrum )",
    description:
      "To purchase $PANDA, you must have ETH on the Arbitrum network in your wallet. If you don't have any, you can transfer it from an exchange or convert it through Metamask's Bridge from the official Arbitrum network.",
  },
  {
    id: 3,
    title: "Open UniSwap",
    description:
      "Access www.uniswap.org, connect your wallet and paste the $PANDA token address into Uniswap. Select Pepe and confirm the transaction. Once Metamask prompts you for a wallet signature, simply sign and you're all set",
  },
  {
    id: 4,
    title: "ETH to PANDA",
    description:
      "Convert your ETH to PANDA, store your PANDA securely, and wait for the price to potentially increase by 100000% with PANDA's exciting growth potential.",
  },
];
export default function Section4(props: ISection4Props) {
  return (
    <SectionWrapper id='section-how-to-buy'>
      <Section4Wrapper>
        {!rdd.isMobile && (
          <BGSection4>
            <img src={bg} alt="br-section4" />
          </BGSection4>
        )}
        <span className="title">How to buy</span>
        {steps.map((item) => (
          <ItemStep>
            <span className="title">{item.title}</span>
            <span className="description">{item.description}</span>
          </ItemStep>
        ))}
      </Section4Wrapper>
    </SectionWrapper> 
  );
}
