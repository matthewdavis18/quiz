import React from "react";
//import data from "./data.js";
import IntroPage from "./IntroPage";
import Question from "./Question";


export default function Quiz(props) {
    const [showIntro, setShowIntro] = React.useState(true);

    console.log(showIntro)

    return showIntro ? (
        <IntroPage setShowIntro={() => setShowIntro(false)} />) : (<Question />);

}   
