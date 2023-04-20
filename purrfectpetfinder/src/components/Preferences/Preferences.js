import React from 'react';
import 'survey-core/modern.min.css';
import { surveyJson } from "./json";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { Link } from 'react-router-dom'

import "./index.css";

var myCss = {
  question: {
      content: "sd-question__content question_content_custom",
      titleOnAnswer: "question-title-answered"
  }
};
export default function Preferences() {
  const survey = new Model(surveyJson);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  survey.css = myCss;

  return(
    <div id='text-center'>
      <h2>Preferences</h2>
      

      <Survey model={survey} action="/dashboard"/>
      <footer>
                <p><Link to="/dashboard">Check out the pets!</Link>.</p>
      </footer>
    </div>
  );
}