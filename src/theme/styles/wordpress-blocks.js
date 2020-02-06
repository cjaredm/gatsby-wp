import {css} from 'styled-components';

export default css`
  .wp-block-columns {
    display: grid;
    gap: 20px;
    grid-template-columns: auto auto;
    margin: 0 auto 20px;
  }
  .wp-block-column {
    flex: 1;
  }

  ${'' /* Helpers */}
  .has-text-align-right {
    text-align: right;
  }
  .has-text-align-center {
    text-align: center;
  }
`;