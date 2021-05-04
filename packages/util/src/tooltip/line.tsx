import React, { FunctionComponent } from 'react';
import Attribute, { AttributeType } from './attribute';

export type LineType = AttributeType | AttributeType[];

interface LineProps {
  line: LineType;
}

const Line: FunctionComponent<LineProps> = (props) => {
  const { line } = props;

  return (
    <div className="tooltip-line">
      {Array.isArray(line) ?
        line.map((attribute) =>
          <Attribute key={attribute.toString()} attribute={attribute} />
        ) :
        <Attribute attribute={line} />
      }
    </div >
  );
};

export default Line;
