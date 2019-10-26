Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    questions: [
        {
            type: "dropdown",
            name: "saving_duration",
            title: "How long would you like to keep the saving with us?",
            isRequired: true,
            colCount: 0,
            choices: [
                "1 Month",
                "2 Months",
                "3 Months",
                "4 Months",
                "5 Months",
                "6 Months",
                "More than 6 Months",
                "More than 1 year"
            ]
        },{
            type: "text",
            name: "more_than_six_months",
            isRequired: true,
            "title": "How many months?",
            "visibleIf": "{saving_duration} == 'More than 6 Months'",
            placeHolder: 7
        },{
            type: "text",
            name: "more_than_a_year",
            isRequired: true,
            "title": "How many years?",
            "visibleIf": "{saving_duration} == 'More than 1 year'",
            placeHolder: 2
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});
