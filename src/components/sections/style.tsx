import styled from "styled-components";

export const SectionWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 100px 16px 20px 16px;
  @media (min-width: 768px) {
    padding: 170px 50px 40px 50px;
  }
  @media (min-width: 1240px) {
    padding: 170px 80px 40px 80px;
  }
  & > .bg {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    & > img {
      position: absolute;
      height: 100%;
      width: auto;
      right: 0;
    }
  }
`;

export const Section1Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Section2Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 6px solid #9b9f92;
  box-shadow: -6px 6px 0px #484848;
  padding: 20px 16px;
  gap: 12px;
  @media (min-width: 768px) {
    padding: 40px 108px;
    gap: 24px;
  }
  & > .title {
    font-family: "KARASHA";
    font-size: 1.75rem;
    text-align: center;
  }
  & > .total_reward {
    font-family: "Clash Display", sans-serif;
    width: 100%;
    text-align: center;
  }
`;

export const Start = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StartIn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  @media (min-width: 768px) {
    gap: 24px;
    align-items: center;
  }
  & > .time {
    display: flex;
    gap: 3px;
    & > .start-in {
      color: #6ea736;
    }
    & > .number {
      background: #6f6f6f;
      padding: 0 4px;
      color: #fff;
    }
  }
`;
export const StartOut = styled(StartIn)`
  & > .content {
    display: flex;
  }
  @media (min-width: 768px) {
    align-items: self-start;
  }
`;
export const Recieved = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  * {
    font-family: "Clash Display";
  }
  & > .label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  * {
    font-family: "KARASHA";
  }
  & > .title {
    font-size: 2rem;
    color: #4a4a4a;
    text-transform: uppercase;
  }
  & > .description {
    font-size: 1.5rem;
    line-height: 1.5;
    color: #919191;
  }
  & > .socials {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
    height: 24px;
    & > img {
      height: 100%;
      width: auto;
    }
  }
`;

export const Meme = styled.div`
  width: 100%;
  display: flex;
  @media (min-width: 768px) {
    flex: 1.5;
    width: unset;
  }
  @media (min-width: 1240px) {
    flex: 1.5;
    width: unset;
  }
  & > img {
    width: 100%;
    height: auto;
  }
`;

export const Road = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 44px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const Section3Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  & > .meme {
    position: relative;
    z-index: 1;
    width: 100%;
    & > img {
      width: 100%;
      height: auto;
    }
  }
  & > .content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    & > .title,
    & > .subtitle {
      font-family: "KARASHA";
    }
    & > .title {
      font-size: 28px;
    }
    & > .subtitle {
      color: #909090;
      font-size: 24px;
    }
    & > .description {
      color: #909090;
      font-size: 14px;
      line-height: 1.5;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    & > .meme {
      flex: 1;
      display: flex;
    }
    & > .content {
      flex: 2;
      & > .title {
        font-size: 32px;
      }
      & > .subtitle {
        font-size: 28px;
      }
      & > .description {
        font-size: 20px;
      }
    }
  }
  & > .bg {
    position: absolute;
    z-index: 0;
    height: 100%;
    left: -50%;
    width: 100%;
    & > img {
      position: absolute;
      height: 50%;
      left: -40%;
      top: 20%;
    }
    @media (min-width: 678px){
      & > img{
        height: 170%;
      }
    }
  }
`;

export const Section4Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  & > .title {
    color: #4a4a4a;
    font-family: "KARASHA";
    text-transform: capitalize;
    font-size: 1.75rem;
  }
  @media (min-width: 678px) {
    gap: 20px;
  }
`;

export const ItemStep = styled.div`
  border: 2px solid #9b9f92;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 16px;
  width: 100%;
  max-width: 650px;
  & > .title {
    font-family: "KARASHA";
    font-size: 1.5rem;
    color: #6f6f6f;
  }
  & > .description {
    font-size: 1rem;
    color: #919191;
  }
`;
export const BGSection4 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export const Section5Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  & > .title {
    font-family: "KARASHA";
    font-size: 1.5rem;
  }
  & > .chart {
    width: 100%;
    max-width: 550px;
    display: flex;
    & > img {
      width: 100%;
      height: auto;
    }
  }
`;

export const TotalSupply = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  & > .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px 16px;
    gap: 8px;
    & > .title {
      color: #6f6f6f;
      font-family: "KARASHA";
      font-size: 1.5rem;
    }
    & > .number {
      font-size: 1.25rem;
      color: #919191;
      font-weight: 700;
    }
    & > .description {
      font-size: 0.875rem;
      color: #919191;
      font-weight: 500;
    }
  }

  & > .chart {
    flex: 1;
    display: flex;
    & > img {
      width: 100%;
      height: auto;
    }
  }
  @media (min-width: 678px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Section6Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  & > .title {
    font-family: "KARASHA";
    font-size: 1.5rem;
  }
  & > .description {
    width: 100%;
    max-width: 750px;
    color: #919191;
    font-size: 0.875rem;
    text-align: center;
  }
  & > .bg {
    position: absolute;
    left: 50%;
    top: 20%;
    height: 100%;
    width: auto;
    & > img {
      position: absolute;
      height: 100%;
      width: auto;
    }
  }
  & > .flex {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    & > div {
      flex: 1;
    }
  }
`;

export const ListPhase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  & > .item {
    color: #909090;
    font-weight: 500;
    font-size: 0.875rem;
    &.active {
      color: #6ea736;
    }
  }
`;

export const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 40px 0;
  & > .title {
    font-weight: 700;
    color: #6ea736;
    font-size: 1.75rem;
  }
  & > .arrows {
    display: flex;
    align-items: center;
    gap: 10px;
    & > .arrow {
      width: 20px;
      aspect-ratio: 1;
      cursor: pointer;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid #6ea736;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: #6ea736;
        & > svg {
          width: 50;
        }
        & > svg > path {
          fill: #fff;
        }
      }
      &.first,
      &.last {
        border-color: #555555;
        cursor: default;
        &:hover {
          background-color: transparent;
        }
        & > svg > path {
          fill: #555555;
        }
      }
      @media (min-width: 678px) {
        width: 50px;
        border-width: 2.6px;
      }
    }
  }
`;
export const ListItem = styled.div`
  display: flex;
  gap: 10px;
  & > .meme {
    flex: 1;
    & > img {
      width: 100%;
      height: auto;
    }
  }
  & > ul {
    flex: 2;
    padding: 0;
    & > li {
      font-size: 0.875rem;
      color: #4a4a4a;
      font-weight: 500;
    }
  }
`;

export const Section7Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  & > .title {
    font-family: "KARASHA";
    font-size: 1.5rem;
  }
  & > .socials {
    display: flex;
    justify-content: center;
    gap: 40px;
    & > .social {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      & > .name {
        text-transform: capitalize;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
        font-size: 1.25rem;
      }
      & > .al {
        color: #6ea736;
        font-weight: 500;
        font-size: 1.75rem;
      }
    }
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  & > .flex {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  @media (min-width: 678px) {
    & > .flex {
      flex-direction: row-reverse;

      justify-content: space-between;
      & > div {
        flex: 1;
      }
    }
  }
`;

export const ListFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 12px;
  height: max-content;
  & > .item {
    color: #4a4a4a;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  & > .logo {
    width: 100px;
    display: flex;
    & > img {
      width: 100%;
      height: auto;
    }
  }
  & > .description {
    color: #6f6f6f;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

export const CopyRight = styled.div`
  width: 100%;
  border-top: 0.66108px solid #4b4b4b;
  color: #0f0f0f;
  padding: 30px 0;
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
