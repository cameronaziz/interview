import React, { FunctionComponent } from 'react';

export interface Link extends StringFormat {
  url: string;
}

interface StringFormat {
  text: string;
  italics?: boolean;
  small?: boolean;
}

export type AttributeType = StringFormat | string | Link;

interface LineProps {
  attribute: AttributeType;
}

const isLink = (unknown: AttributeType): unknown is Link =>
  typeof unknown !== 'string' && !!(unknown as Link).url;

const isStringFormat = <T extends StringFormat>(unknown: AttributeType): unknown is T =>
  typeof unknown !== 'string';

const getFormat = (attribute: AttributeType): string => {
  if (!isStringFormat(attribute)) {
    return '';
  }

  let classNames = '';
  if (attribute.italics) {
    classNames = `${classNames} tooltip-italic`
  }

  if (attribute.small) {
    classNames = `${classNames} tooltip-small`
  }

  return classNames;
}

const Attribute: FunctionComponent<LineProps> = (props) => {
  const { attribute } = props;

  const navigate = () => {
    if (isLink(attribute)) {
      window.open(attribute.url);
    }
  };

  return (
    <div className={`tooltip-attribute${getFormat(attribute)}`}>
      {isLink(attribute) ?
        <div
          className="tooltip-link"
          onClick={navigate}
        >
          {attribute.text}
        </div> :
        <div className="tooltip-text">
          {typeof attribute === 'string' ? attribute : attribute.text}
        </div>
      }
    </div>
  );
};

export default Attribute;
