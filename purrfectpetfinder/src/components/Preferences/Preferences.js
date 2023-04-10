import React from 'react';
import 'survey-core/modern.min.css';
import { surveyJson } from "./json";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

export default function Preferences() {
  const survey = new Model(surveyJson);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});
  return(
    <div>
      <h2>Preferences</h2>
      <Survey model={survey} />
    </div>
  );
}