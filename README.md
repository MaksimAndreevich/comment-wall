
### BUILD

`gh repo clone MaksimAndreevich/comment-wall`
<br>
`npm i`
<br>
`npm run build`

### STARTING THE SERVER
/mock_and_build/...
 - Windows: run mockServer_win_x64.exe
 - Linux: run an executable file mockServer_linux_x64 or mockServer_linux_arm64 if the processor is on ARM
 - MacOS: run an executable file mockServer_darwin_amd64 or mockServer_darwin_arm64 if the processor is on ARM

`http://localhost:8080/` - opens the main page


note: for the development mode, you need to change 
```
const REQUESTS = {
  GET_USERS: "/api/json/users",
  GET_MESSAGES: "/api/json/messages",
  GET_ME: "/api/json/me",
  POST_MESSAGE: "/api/json/message",
 };
 ```
 the application in this mode works through a proxy. this is due to cors security
