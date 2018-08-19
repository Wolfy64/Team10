# Team10

#### Resources
http://localhost:3001/users

#### Requirements
Add constants.json to src/common folder which has your google API credentials
Example body:

{
  "GOOGLE_OAUTH2_API": "https://accounts.google.com/o/oauth2/v2/auth",
  "GOOGLE_OAUTH2_REDIRECT_URL": "http://localhost:3000/signin",
  "GOOGLE_USER_INFO_API": "https://www.googleapis.com/oauth2/v3/userinfo",
  "GOOGLE_TOKEN_INFO_API": "https://www.googleapis.com/oauth2/v3/tokeninfo",
  "GOOGLE_CLIENT_ID": "YOUR_ID.apps.googleusercontent.com",
  "GOOGLE_CLIENT_SECRET": "YOUR_KEY",
  "GOOGLE_API_KEY": "",
  "GOOGLE_API_SCOPES": "profile email",
  "GOOGLE_DISCOVERY_DOCS": []
}

#### To run from folder root
npm install json-server -g
json-server --watch database/db.json
npm install
npm start
