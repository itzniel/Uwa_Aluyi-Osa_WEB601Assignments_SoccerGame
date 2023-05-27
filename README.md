# Uwa_Aluyi-Osa_WEB601Assignments_SoccerGame

Author : Uwaguosa Aluyi-Osa
Student ID: 0817788
Program name: SoccerGame
App Description :

2023-05-13
Created the App using ng new SoccerGame
Changed the App version from 0.0.0 to 0.0.1

2023-05-13
@0100
Added     "generatecomponent": "ng generate component",
    "generatepipe": "ng generate pipe",
    "generatedirective": "ng generate directive" to the package.json and ran "npm run create-component" called content-card
Added a folder app/helper-files and created a content-interface.ts file in helper-files.

@1020
Added a file helper-files/content-list.ts. Created a content-list class and added some functions and property
Exported the content-interface

@1038
Created an instance of the content-list in the content-card definition and added 3 contents with images

@1125
Displayed the content in the content-card component's html , Added the content-card component to the app-component

@1220
Added a condition to check if the index is valid

2023-05-18
@1344
Deleted/Commented out the ContentList class implementation from the Content-card code, and
deletef the content-list.ts helper file.

@1350
Created a new component with  npm run generatecomponent   called content-list

@1420
Cleared the commented content in Content-card component.ts 
Added "<app-content-list><></app-content-list>" to the app component html to display content-list contents
Created an array of 3 items in the content-list.component.ts and created a function to return view of the html content
in the content-list html created a loop to display the contents

2023-05-20
Added new content, made changes to the content-list html, added a click event and made changes to the content-card component, added styling to the content-card.scss, added a condition to not display tag, type and image if value is not set, displayed deleted unnecesary html content and added   "strictPropertyInitialization": false" to the tsconfig.json 

20230527
@1700
Changed the package.json to "0.0.3"
Updated the type in the array contents
Created a pipe to filter the array, using "ng generate pipe" in the terminal