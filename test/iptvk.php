{
   "response": {
      "status": 200,
      "text": "OK",
      "data": {
         "action": "update:content:{context:id}",
         "data": {
            "live": {
               "type": "schedule",
               "progressColor": "msx-white-soft",
               "from": null,
               "to": null,
               "titleFooter": null,
               "over": {
                  "action": "execute:service:http://kb-team.club/msx/iptv/iptvk.php?channel=%7Bcontext%3AplayerLabel%7D&id={context:channel}&shift={context:shift}&sid=channel_{context:id}&type=list"
               }
            },
            "selection": {
               "important": true,
               "action": "update:content:overlay:preview",
               "data": {
                  "headline": "{txt:#fbc531:num::time:hh:mm -}  {txt:#fbc531:num::time:hh:mm} ",
                  "live": {
                     "type": "schedule",
                     "from": null,
                     "to": null,
                     "text": "{br}{br}"
                  }
               }
            }
         }
      }
   }
}