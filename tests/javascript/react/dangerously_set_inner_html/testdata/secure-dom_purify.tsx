import React from 'react';
import * as DOMPurify from 'dompurify';

interface Props {
  htmlContent: string;
}

const InsecureComponent: React.FC<Props> = ({ htmlContent }) => {
  return (
    <div dangerouslySetInnerHTML={{
			__html: DOMPurify.sanitize(htmlContent)
		}} />
  );
};

export default InsecureComponent;
