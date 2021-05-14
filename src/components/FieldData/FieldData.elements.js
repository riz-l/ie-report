// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: flex-start;
  display: -webkit-flex;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  padding-bottom: 1rem;
  white-space: pre-wrap;
  width: 100%;
  -ms-word-wrap: break-word;
  word-wrap: break-word;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  text-align: left;
  white-space: pre-wrap;
  width: 100%;
  -ms-word-wrap: break-word;
  word-wrap: break-word;
`;

// Element: Field
export const Field = styled.span`
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  color: #414141;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  flex-direction: column;
  -webkit-box-pack: flex-start;
  -ms-flex-pack: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  text-align: left;
  width: 100%;

  & p {
    white-space: pre-wrap;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
  }
`;

// Element: Data
export const Data = styled.span`
  color: #2c2c2c;
  font-weight: 600;
  word-wrap: break-word;
  width: 100%;
  max-width: 100%;
  white-space: pre-wrap;
  -ms-word-wrap: break-word;
  word-wrap: break-word;
`;

// Element: TylerSpan
export const TylerSpan = styled.span`
  max-width: 100%;
  width: 100%;
  -ms-word-wrap: break-word;
  word-wrap: break-word;
  white-space: pre-wrap;
`;
