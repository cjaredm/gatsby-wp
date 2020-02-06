import {css} from 'styled-components';
import wordpress from './wordpress-blocks';
import elements from './elements';
import mediaQueries from './mediaQueries';
import remCalc from './remCalc';
import buttons from './buttons';
import helpers from './helpers';

export default css`
  ${wordpress}
  ${elements}
  ${mediaQueries}
  ${remCalc}
  ${buttons}
  ${helpers}
`;