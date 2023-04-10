export const surveyJson = {
    "completeText": "Finish",
    "pageNextText": "Continue",
    "pagePrevText": "Previous",
    "pages": [
      {
        "elements": [
          {
            "name": "FirstName",
            "title": "Enter your first name:",
            "type": "text"
          }, {
            "name": "LastName",
            "title": "Enter your last name:",
            "type": "text"
          },{
            "name": "Allergies",
            "title":"Do you have any pet allergies?",
            "type": "radiogroup",
            "choices": [
              {
                "value": "1",
                "text": "Yes"
              },
              {
                "value": "0",
                "text": "No"
              }
            ],
              "colCount": 2,
              "isRequired": true,
          },
          {
            "type": "checkbox",
            "name": "AllergyType",
            "visible": false,
            "visibleIf": "{Allergies} =1",
            "title": "  ",
            "isRequired": true,
            "choices": [
              "Allergic to cats",
              "Allergic to dogs",
              "Allergic to pet dander"
            ]
          },
          {
            "name": "OtherPets",
            "title": "Do you have any other pets in your home?",
            "type": "radiogroup",
            "choices": [
              {
                "value": "1",
                "text": "Yes"
              },
              {
                "value": "0",
                "text": "No"
              }
            ],
              "colCount": 2,
              "isRequired": true,
          },
          {
            "type": "checkbox",
            "name": "PetType",
            "visible": false,
            "visibleIf": "{OtherPets} =1",
            "title": "  ",
            "isRequired": true,
            "choices": [
              "Cats",
              "Dogs",
              "Small Animals"
            ]
          }
        ],
        "name": "page0"
      },
      {
        "elements":[
          {
            "name": "Children",
            "title":"Do you have any small children?",
            "type": "radiogroup",
            "choices": [
              {
                "value": "1",
                "text": "Yes"
              },
              {
                "value": "0",
                "text": "No"
              }
            ],
              "colCount": 2,
              "isRequired": true,
          },
          {
            "name": "HomeType",
            "title":"What type of home do you live in?",
            "type": "radiogroup",
            "choices": [
              {
                "value": "House",
                "text": "House"
              },
              {
                "value": "Apartment",
                "text": "Apartment"
              },
              {
                "value": "Mobile Home",
                "text": "Mobile Home"
              }
            ],
              "colCount": 3,
              "isRequired": true,
          },
          {
            "type": "radiogroup",
            "name": "PetsAllowed",
            "visibleIf": "{HomeType} = 'Apartment'",
            "title": "Does your apartment allow pets?",
            "choices": [
              {
                "value": "1",
                "text": "Yes"
              },
              {
                "value": "0",
                "text": "No"
              }
            ]
          },
          {
            "type": "checkbox",
            "name": "AllowedType",
            "visible": false,
            "visibleIf": "{PetsAllowed} =1",
            "title": "What kind of pets are allowed?",
            "choices": [
              {
                "value": "0",
                "text": "All pets"
              },
              {
                "value": "1",
                "text": "Cats"
              },
              {
                "value": "2",
                "text": "Dogs"
              },
              {
                "value": "3",
                "text": "Birds or reptiles"
              },
              {
                "value": "4",
                "text": "Small mammals"
              }
            ]
          }

        ],
        "name": "page1"
      }
    ]
};
