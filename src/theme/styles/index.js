import {css} from 'styled-components';
import elements from './elements';
import mediaQueries from './mediaQueries';
import remCalc from './remCalc';
import buttons from './buttons';
import helpers from './helpers';

export default css`
  ${elements}
  ${mediaQueries}
  ${remCalc}
  ${buttons}
  ${helpers}
`;