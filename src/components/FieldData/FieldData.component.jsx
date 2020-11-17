// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Data, Field, Wrapper } from "./FieldData.elements";

// Element: FieldData
export default function FieldData({
  data,
  field,
  fieldFontWeight,
  fieldLetterSpacing,
  fieldMarginBottom,
  fieldMinHeight,
  fieldTextTransform,
  fontSize,
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
  fieldWidth,
}) {
  return (
    <Container
      style={{
        fontSize: `${fontSize}`,
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
            marginBottom: `${fieldMarginBottom}`,
            fontWeight: `${fieldFontWeight}`,
            letterSpacing: `${fieldLetterSpacing}`,
            minHeight: `${fieldMinHeight}`,
            textTransform: `${fieldTextTransform}`,
            width: `${fieldWidth}`,
          }}
        >
          {field}
        </Field>
        <Data>{data}</Data>
      </Wrapper>
    </Container>
  );
}
