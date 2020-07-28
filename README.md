# RoboClaire
RoboClaire is the Twitch Chatbot of ClaireUnaware's twitch channel.
# Download and Configuration
RoboClaire is freeware- feel free to take her code and alter it to fit your needs. However- for obvious reasons, I intentionally neglected to add the var.js file which contains the user and token variables- as I want to keep my OATH private and the user malliable. This means in order to get your version of roboclaire to work you need to: <br>
* Create var.js
  * create the var folder in the folder javscrpt
  * add the var.js file inside that folder.
  * inside var.js place your variables in this format:
```
var user = "YOURCHANNELNAME"
var token =  "oath:TOKENKEYHERE"`
```
You can get your twitch oath token at http://twitchapps.com/tmi/
## Automod Discretion Warning
RoboClaire's main automod system has ***extremely offensive*** terms hardcoded into it. This allows no mistakes when it comes to the automod banning people for using certain terms. **If you plan on altering roboclaire's automod system to suit your needs please keep this in mind. You have been warned. User discretion is adivsed.**
# ComfyJS
I did *not* create ComfyJS, however RoboClaire is dependent on it. Instafluff is the creator and maintainer of [ComfyJS](https://www.github.com/Instafluff/ComfyJS).
