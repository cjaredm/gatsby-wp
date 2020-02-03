import { css } from 'styled-components';

export default css`
// Full Width Override;
@mixin full-width {
	left: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	position: relative;
	right: 50%;
	width: 100vw;
}
  //--------------------------------------------------------------
  // ELEMENTS
  //--------------------------------------------------------------

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    // font-family: $font-family-body;
    font-size: ${({ theme }) => theme.FONT.SIZE.NORMAL};
    font-weight: normal;
    line-height: 1.5;
    margin: 0;
    overflow-x: hidden;
  }

  //-----------------------------------------
  // Headings
  //-----------------------------------------
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.black};
    // font-family: $font-family-heading;
    font-weight: bold;
    line-height: 1.2;
    margin: 0 0 10px 0;
  }

  h1 {
    font-size: ${({ theme }) => theme.FONT.SIZE.H1};
  }

  h2 {
    font-size: ${({ theme }) => theme.FONT.SIZE.H2};
  }

  h3 {
    font-size: ${({ theme }) => theme.FONT.SIZE.H3};
  }

  h4 {
    font-size: ${({ theme }) => theme.FONT.SIZE.H4};
  }

  h5 {
    font-size: ${({ theme }) => theme.FONT.SIZE.H5};
  }

  h6 {
    font-size: ${({ theme }) => theme.FONT.SIZE.H5};
  }

  //-----------------------------------------
  // Paragraph
  //-----------------------------------------
  p {
    font-size: ${({ theme }) => theme.FONT.SIZE.NORMAL};
    margin: 0;
  }

  //-----------------------------------------
  // List
  //-----------------------------------------
  ul,
  ol,
  dl {
    font-size: ${({ theme }) => theme.FONT.SIZE.NORMAL};
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  // Unordered List
  ul {
  }

  // Ordered List
  ol {
  }

  // Definition List
  dl {
  }

  //-----------------------------------------
  // List Item
  //-----------------------------------------
  li {
  }

  // Unordered List Item
  ul {
    li {
    }
  }

  // Ordered List Item
  ol {
    li {
    }
  }

  // Definition List
  dl {
    // Definition Term
    dt {
    }

    // Definition Name
    dd {
    }
  }

  //-----------------------------------------
  // Blockquote
  //-----------------------------------------
  blockquote {
  }

  //-----------------------------------------
  // Cite
  //-----------------------------------------
  cite {
  }

  //-----------------------------------------
  // Horizontal Rule
  //-----------------------------------------
  hr {
    border-bottom: 0;
    border-top: 2px solid ${({ theme }) => theme.black};
    margin: 0 0 ${({ theme }) => theme.SPACING.global} 0;
  }

  //-----------------------------------------
  // Table
  //-----------------------------------------
  table {
    border-collapse: collapse;
    margin-bottom: 25px;
    width: 100%;

    caption {
      // font-weight: ${({ theme }) => theme.FONT.WEIGHT.bold};
      padding: 10px;
    }

    thead {
      background-color: ${({ theme }) => theme.tertiary};
      color: ${({ theme }) => theme.white};

      th {
        font-weight: ${({ theme }) => theme.FONT.WEIGHT.bold};
        padding: 10px;
        text-align: left;
        word-break: break-all;
      }
    }

    tfoot {
      background-color: ${({ theme }) => theme.tertiary};
      color: ${({ theme }) => theme.white};

      th {
        font-weight: ${({ theme }) => theme.FONT.WEIGHT.bold};
        padding: 10px;
        text-align: left;
        word-break: break-all;
      }
    }

    tbody {
      tr {
        background-color: transparent;

        &:not(:last-child) {
          border-bottom: 1px solid ${({ theme }) => theme.tertiary};
        }

        &:nth-child(even) {
          background-color: ${({ theme }) => theme.grey};
        }

        &:nth-child(odd) {
          background-color: ${({ theme }) => theme.white};
        }
      }

      td {
        font-weight: ${({ theme }) => theme.FONT.WEIGHT.bold};
        padding: 10px;
        text-align: left;
        word-break: break-all;
      }
    }

    &--scroll {
      display: block;
      overflow-x: auto;
      width: 100%;
    }
  }

  //-----------------------------------------
  // Form
  //-----------------------------------------
  form {
  }

  //-----------------------------------------
  // Fieldset
  //-----------------------------------------
  fieldset {
    border: 1px solid ${({ theme }) => theme.black};
    border-radius: ${({ theme }) => theme.radius};
    font-size: ${({ theme }) => theme.FONT.SIZE.NORMAL};
    padding: 10px;
    width: 100%;
  }

  //-----------------------------------------
  // Legend
  //-----------------------------------------
  legend {
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.normal};
  }

  //-----------------------------------------
  // Label
  //-----------------------------------------
  label {
    display: block;
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.bold};
  }

  //-----------------------------------------
  // Input
  //-----------------------------------------
  input {
    border: 1px solid ${({ theme }) => theme.black};
    border-radius: ${({ theme }) => theme.radius};
    font-size: ${({ theme }) => theme.FONT.SIZE.NORMAL};
    padding: 10px;
    width: 100%;

    &[type="date"],
    &[type="month"] {
      padding: 7px;
    }

    &[type="radio"],
    &[type="checkbox"] {
      width: auto;
    }
  }

  //-----------------------------------------
  // Textarea
  //-----------------------------------------
  textarea {
    border: 1px solid ${({ theme }) => theme.black};
    border-radius: ${({ theme }) => theme.radius};
    font-family: inherit;
    font-size: ${({ theme }) => theme.FONT.SIZE.NORMAL};
    padding: 10px;
    width: 100%;
  }

  
  //-----------------------------------------
  // Select Dropdown
  //-----------------------------------------
  select {
    @include background-image(
      "icon-arrow-down.svg",
      $position: right 10px center,
      $size: 16px
    );

    appearance: none;
    border: 1px solid ${({ theme }) => theme.black};
    border-radius: ${({ theme }) => theme.radius};
    font-size: ${({ theme }) => theme.FONT.SIZE.NORMAL};
    padding: 10px 35px 10px 10px;
    width: 100%;
  }

  //-----------------------------------------
  // Anchor
  //-----------------------------------------
  a {
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    outline: 0;
    text-decoration: none;

    &:focus {
      outline: 1px dotted;
    }

    &:focus,
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  //-----------------------------------------
  // Image
  //-----------------------------------------
  img {
    height: auto;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  //-----------------------------------------
  // Strong Importance
  // For SEO usage.
  //-----------------------------------------
  strong {
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.bold};
  }

  //-----------------------------------------
  // Bold
  //-----------------------------------------
  b {
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.bold};
  }

  //-----------------------------------------
  // Emphasis
  // For SEO usage.
  //-----------------------------------------
  em {
    font-style: italic;
  }

  //-----------------------------------------
  // Italic
  //-----------------------------------------
  i {
    font-style: italic;
  }

  //-----------------------------------------
  // Underlined
  //-----------------------------------------
  u {
    text-decoration: underline;
  }

  //-----------------------------------------
  // Higher
  //-----------------------------------------
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    top: -0.5em;
    vertical-align: baseline;
  }
  
  //-----------------------------------------
  // Lower
  //-----------------------------------------
  sub {
    bottom: -0.25em;
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  //-----------------------------------------
  // Small Print
  //-----------------------------------------
  small {
    font-size: ${({ theme }) => theme.FONT.SIZE.SMALL};
  }

  //-----------------------------------------
  // Text Selection
  //-----------------------------------------
  ::selection {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    text-shadow: none;
  }

  //-----------------------------------------
  // Text Placeholder
  //-----------------------------------------
  ::placeholder {
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.light};
  }
  
  //-----------------------------------------
  // SVG
  //-----------------------------------------
  svg:not(:root) {
    overflow: hidden;
  }

  //-----------------------------------------
  // Button
  //-----------------------------------------
  button {
    cursor: pointer;
    font: inherit;

    &[disabled] {
      cursor: default;
    }

    & > * {
      pointer-events: none;
    }
  }

  //-----------------------------------------
  // Figure
  //-----------------------------------------
  figure {
    margin-top: 0;
  }

  //-----------------------------------------
  // Code
  //-----------------------------------------
  code {
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    display: inline;
    padding: 2px 8px;
  }

  //-----------------------------------------
  // Preformatted
  //-----------------------------------------
  pre {
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    margin: 0 0 ${({ theme }) => theme.SPACING.global} 0;
    max-width: 100%;
    min-width: 100px;
    overflow: hidden;

    code {
      display: block;
      font-size: 16px;
      line-height: 1.75;
      max-width: 100%;
      min-width: 100px;
      overflow-x: auto;
      padding: 30px;
    }
  }

  //-----------------------------------------
  // Details
  //-----------------------------------------
  details {
  }

  //-----------------------------------------
  // Summary
  //-----------------------------------------
  summary {
    cursor: pointer;
    display: inline-block;
  }

  //-----------------------------------------
  // Iframe
  //-----------------------------------------
  iframe {
     @include mq($mq-tablet, false) {
      width: 100%;
    }
  }
`;
