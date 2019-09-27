import React from 'react';
import Text from './Text';

export default {
  title: 'Typography|Text',
  component: Text
};

export const Paragraph = () => (
  <>
    <Text>This is an example of body text.</Text>
    <Text del>This is an example of body text.</Text>
    <Text disabled>This is an example of body text.</Text>
    <Text underline>This is an example of body text.</Text>
    <Text strong>This is an example of body text.</Text>
    <Text color="primary">This is an example of body text.</Text>
    <Text color="light">This is an example of body text.</Text>
    <Text color="dark">This is an example of body text.</Text>
    <Text color="success">This is an example of body text.</Text>
    <Text color="alert">This is an example of body text.</Text>
    <Text color="danger">This is an example of body text.</Text>
  </>
);
