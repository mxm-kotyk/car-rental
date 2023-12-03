import styled from "@emotion/styled";

export const LearnMoreModalWrapper = styled.div`
  width: 461px;
  /* height: 672px; */
`;

export const LearnMoreImg = styled.img`
  width: 461px;
  height: 248px;
  margin-bottom: 14px;
  object-fit: cover;
  border-radius: 14px;
  background: #f3f3f2;
`;

export const LearnMoreTitle = styled.h2`
  margin-bottom: 8px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);

  span {
    color: #3470ff;
  }
`;

export const LearnMoreTagList = styled.ul`
  max-width: 400px;
  margin-bottom: 14px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 4px;

  & li {
    position: relative;
  }

  & :not(:last-child)::after {
    position: absolute;
    top: 1px;
    right: -6px;
    display: inline-block;
    content: "";
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

export const LearnMoreTag = styled.span`
  display: block;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: calc(18 / 12);
`;

export const LearnMoreDescription = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: calc(20 / 14);
`;

export const LearnMoreSubtitle = styled.h3`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: calc(20 / 14);
`;

export const LearnMoreFeaturesWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LearnMoreFeaturesList = styled(LearnMoreTagList)`
  max-width: 100%;
  margin: 0;
`;

export const LearnMoreRentalCondList = styled.ul`
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const LearnMoreRentalCondItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const LearnMoreRentalCondText = styled.span`
  color: #363535;
  font-size: 12px;
  line-height: calc(18 / 12);

  span {
    color: #3470ff;
  }
`;

export const LearnMoreLinkBtn = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
`;
