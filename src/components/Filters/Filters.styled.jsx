import styled from "@emotion/styled";

export const FiltersForm = styled.form`
  width: fit-content;
  margin: auto;
  margin-bottom: 50px;
  display: flex;
  align-items: end;
  gap: 18px;
`;

export const InputUpperText = styled.span`
  display: block;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  margin-bottom: 8px;
`;

export const MileageGroupWrapper = styled.div`
  display: flex;

  & :not(:last-child):is(div) {
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    border-radius: 14px 0px 0px 14px;
    overflow: hidden;
  }

  & :not(:first-child):is(div) {
    border-radius: 0px 14px 14px 0px;
    overflow: hidden;
  }
`;

export const MileageInputWrapper = styled.div`
  position: relative;
`;

export const MileageInputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
`;

export const MileageInput = styled.input`
  width: 160px;
  padding: 14px 24px 14px 70px;
  background: #f7f7fb;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
`;

export const FiltersSearchButton = styled.button`
  height: 48px;
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  transition: background 200ms ease;

  &:hover,
  &:focus-visible {
    background: #0b44cd;
  }
`;
