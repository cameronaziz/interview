import React, { Fragment, FunctionComponent, useRef } from 'react';
import Tooltip from '../tooltip';
import Atom from './icons/atom';
import VSCode from './icons/vsCode';
import { dirName, join, showLink } from './utils';

const VSCODE_BASE = 'vscode://file/';
const ATOM_BASE = 'atom://open?url=file://';

interface LinksProps {
  stackCall: string[]
}

type LinkType = 'vscode' | 'atom';

const Links: FunctionComponent<LinksProps> = (props) => {
  const { stackCall } = props;
  const directoryRef = useRef(dirName());

  const navigate = (linkType: LinkType) => {
    if (directoryRef.current) {
      const path = join(directoryRef.current, stackCall[1]);
      switch (linkType) {
        case 'vscode': {
          window.location.href = `${VSCODE_BASE}${path}`;
          break;
        }
        case 'atom': {
          window.location.href = `${ATOM_BASE}${path}`;
          break;
        }
        default: {
          throw new Error('Bad Link Type');
        }
      }
    }
  };

  const navigateVSCode = () => {
    navigate('vscode');
  };

  const navigateAtom = () => {
    navigate('atom');
  };

  if (!showLink(stackCall)) {
    return null;
  }

  return (
    <Fragment>
      <Tooltip text="Open in VSCode">
        <div onClick={navigateVSCode} className="error-details-link">
          <VSCode size={12} />
        </div>
      </Tooltip>
      <Tooltip text={[
        'Open in Atom',
        [
          {
            text: 'Requires',
            italics: true,
            small: true,
          },
          {
            text: 'Atom Open',
            url: 'https://atom.io/packages/open',
            small: true,
          },
          {

            text: 'package',
            italics: true,
            small: true,
          },
        ],
      ]}>
        <div onClick={navigateAtom} className="error-details-link">
          <Atom size={12} />
        </div>
      </Tooltip>
    </Fragment>
  );
};

export default Links;
