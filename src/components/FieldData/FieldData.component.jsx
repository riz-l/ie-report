// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Container,
  Data,
  Field,
  Wrapper,
  TylerSpan,
} from "./FieldData.elements";

// Element: FieldData
export default function FieldData({
  backgroundColor,
  data,
  field,
  fieldFontWeight,
  fieldLetterSpacing,
  fieldMarginBottom,
  fieldMinHeight,
  fieldTextAlign,
  fieldTextTransform,
  fieldWidth,
  fontSize,
  justifyContent,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  wordWrap,
}) {
  return (
    <Container
      style={{
        backgroundcolor: `${backgroundColor}`,
        fontSize: `${fontSize}`,
        justifyContent: `${justifyContent}`,
        margin: `${margin}`,
        marginTop: `${marginTop}`,
        marginRight: `${marginRight}`,
        marginBottom: `${marginBottom}`,
        marginLeft: `${marginLeft}`,
        padding: `${padding}`,
        paddingTop: `${paddingTop}`,
        paddingRight: `${paddingRight}`,
        paddingBottom: `${paddingBottom}`,
        paddingLeft: `${paddingLeft}`,
      }}
    >
      <Wrapper>
        <Field
          style={{
            fieldWidth: `${fieldWidth}`,
            fontWeight: `${fieldFontWeight}`,
            letterSpacing: `${fieldLetterSpacing}`,
            marginBottom: `${fieldMarginBottom}`,
            minHeight: `${fieldMinHeight}`,
            textAlign: `${fieldTextAlign}`,
            textTransform: `${fieldTextTransform}`,
            wordWrap: `${wordWrap}`,
          }}
        >
          <TylerSpan>{field}</TylerSpan>
        </Field>
        <Data style={{ textAlign: `${fieldTextAlign}` }}>{data}</Data>
      </Wrapper>
    </Container>
  );
}
