import React from 'react';
import Button from './Button';

export default {
  title: 'Design System|Button',
  component: Button
}

export const Buttons = () => (
  <>
    <Button color="primary">Primary</Button>
    <Button color="light">Light</Button>
    <Button color="dark">Dark</Button>
    <Button color="success">Success</Button>
    <Button color="alert">Alert</Button>
    <Button color="danger">Danger</Button>
  </>
);

export const Outline = () => (
  <>
    <Button color="primary" outline>Primary</Button>
    <Button color="light" outline>Light</Button>
    <Button color="dark" outline>Dark</Button>
    <Button color="success" outline>Success</Button>
    <Button color="alert" outline>Alert</Button>
    <Button color="danger" outline>Danger</Button>
  </>
);

export const Disabled = () => (
  <>
    <Button color="primary" disabled>Primary</Button>
    <Button color="light" disabled>Light</Button>
    <Button color="dark" disabled>Dark</Button>
    <Button color="success" disabled>Success</Button>
    <Button color="alert" disabled>Alert</Button>
    <Button color="danger" disabled>Danger</Button>
  </>
);

// stories.add(
//   'Light',
//   wInfo()(() => (
//     <Button
//       color="light"
//       disabled={boolean('Disabled', false)}
//       outline={boolean('Outline', false)}
//     >
//       {text('Label', 'Click Here!')}
//     </Button>
//   ))
// );

// stories.add(
//   'Dark',
//   wInfo()(() => (
//     <Button
//       color="dark"
//       disabled={boolean('Disabled', false)}
//       outline={boolean('Outline', false)}
//     >
//       {text('Label', 'Click Here!')}
//     </Button>
//   ))
// );

// stories.add(
//   'Success',
//   wInfo()(() => (
//     <Button
//       color="success"
//       disabled={boolean('Disabled', false)}
//       outline={boolean('Outline', false)}
//     >
//       {text('Label', 'Click Here!')}
//     </Button>
//   ))
// );

// stories.add(
//   'Alert',
//   wInfo()(() => (
//     <Button
//       color="alert"
//       disabled={boolean('Disabled', false)}
//       outline={boolean('Outline', false)}
//     >
//       {text('Label', 'Click Here!')}
//     </Button>
//   ))
// );

// stories.add(
//   'Danger',
//   wInfo()(() => (
//     <Button
//       color="danger"
//       disabled={boolean('Disabled', false)}
//       outline={boolean('Outline', false)}
//     >
//       {text('Label', 'Click Here!')}
//     </Button>
//   ))
// );
