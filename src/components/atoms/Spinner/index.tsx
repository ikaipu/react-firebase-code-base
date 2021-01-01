import React, { FC } from 'react';
import { Loader, SemanticSIZES } from 'semantic-ui-react';

const Spinner: FC<{ size?: SemanticSIZES }> = ({ size = 'medium' }) => (
  <div className="spinner">
    <Loader size={size} inline="centered" active>
      読み込み中...
    </Loader>
  </div>
);

export default Spinner;
