import React from "react";
import Button from "./Button";

// writting story for button in component story format - it has one default export and one or more named export

// default export - as an entry to side Nav in Storybook
// it contain unique named title field
export default {
    title: 'Button',
    component: Button // which we have imported from Button component
}

// named exports
// every named exports represent story

// named export Primary will return Button component with varient(which it is taking as a props)
// after it picks Named Export and render our component

// each function name represent the component name under button
// ex. when you select primary it will render the returned Button component
// then it will go to our Button.js to read its functionality and css
export const Primary = () => <Button varient="primary">Button</Button>

export const Secondary = () => <Button varient="secondary">Button</Button>
export const Success = () => <Button varient="success">Button</Button>
export const Danger = () => <Button varient="danger">Button</Button>
