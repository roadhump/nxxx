import React from 'react';
import {compose, withHandlers, withState} from 'recompose';
import {random} from 'lodash';
import {Fade} from 'react-reveal';

import S from './App.css';

const Section = ({styleTransform, onMouseEnter, children}) => (
  <Fade top={true} duration={500} key="complete">
    <div
      onMouseEnter={onMouseEnter}
      className={S.formOuter}
      style={styleTransform}
    >
      {children}
    </div>
  </Fade>
);

export default compose(
  withState('styleTransform', 'onStyleTransformChange', {}),
  withHandlers({
    onMouseEnter: ({onStyleTransformChange}) => () =>
      onStyleTransformChange( {
        '--transformXBefore': `${random(-50, 50)}px`,
        '--transformYBefore': `${random(-50, 50)}px`,
        '--transformXAfter': `${random(-50, 50)}px`,
        '--transformYAfter': `${random(-50, 50)}px`,
      }),
  })
)(Section);