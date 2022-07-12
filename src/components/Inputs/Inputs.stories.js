import React from "react";
import Inputs from "./Inputs";

// default export
export default {
    title: 'Inputs',
    components: Inputs
}


// named export
export const Small = () => <Inputs size="small"/>
export const Large = () => <Inputs size="large"/>
export const ExtraLarge = () => <Inputs size="extraLarge"/>
