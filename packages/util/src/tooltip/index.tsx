import React, { FunctionComponent } from 'react';
import '../../assets/styles/tooltip.css';
import Line, { LineType } from './line';

interface TooltipProps {
  text: LineType | LineType[];
}

const Tooltip: FunctionComponent<TooltipProps> = (props) => {
  const { text, children } = props;
  const data: LineType[] = typeof text === 'string' ? [text] : text as LineType[];

  return (
    <div className="tooltip">
      {children}
      <span className="tooltip-container">
        {data.map((line) => <Line line={line} />)}
      </span>
    </div>
  );
};

export default Tooltip;
