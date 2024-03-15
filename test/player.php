<!DOCTYPE html>
<html>
<head>
<title>Live Interaction Plugin</title>
<meta charset="UTF-8" />
<meta name="author" content="Benjamin Zachey" />
<meta name="contact" content="admin@benzac.de" />
<meta name="copyright" content="Benjamin Zachey" />
<script type="text/javascript" src="https://msx.benzac.de/js/tvx-plugin.min.js?v=0.0.17"></script>
<script type="text/javascript">
          /******************************************************************************/
          //Live Interaction Plugin v0.0.2
          //(c) 2021 Benjamin Zachey
          /******************************************************************************/

          /******************************************************************************/
          //LiveTools
          /******************************************************************************/
          var LiveTools = {
              setupState: function(state) {
                  TVXInteractionPlugin.executeAction("player:video:state:" + TVXTools.strToNum(state, -1));
              },
              setupPosition: function(position) {
                  TVXInteractionPlugin.executeAction("player:video:position:" + TVXTools.strToNum(position, -1));
              },
              setupDuration: function(duration) {
                  TVXInteractionPlugin.executeAction("player:video:duration:" + TVXTools.strToNum(duration, -1));
              },
              setupSpeed: function(speed) {
                  TVXInteractionPlugin.executeAction("player:video:speed:" + TVXTools.strToNum(speed, -1));
              },
              setupPositionLabel: function(label) {
                  TVXInteractionPlugin.executeAction("player:label:position:" + TVXTools.strFullCheck(label, "default"));
              },
              setupDurationLabel: function(label) {
                  TVXInteractionPlugin.executeAction("player:label:duration:" + TVXTools.strFullCheck(label, "default"));
              },
              setupProgressType: function(type) {
                  TVXInteractionPlugin.executeAction("player:progress:type:" + TVXTools.strFullCheck(type, "default"));
              },
              disableButton: function(id) {
                  if (TVXTools.isId(id)) {
                      TVXInteractionPlugin.executeAction("player:button:" + id + ":disable");
                  }
              },
              invalidateProgressMarker: function() {
                  TVXInteractionPlugin.executeAction("player:progress:marker:invalidate");
              },
              refreshPlayer: function() {
                  TVXInteractionPlugin.executeAction("player:refresh");
              },
              resetPlayer: function() {
                  TVXInteractionPlugin.executeAction("player:reset");
              }
          };
          /******************************************************************************/

          /******************************************************************************/
          //LiveBackend
          /******************************************************************************/
                    function LiveBackend() {
              var URL = TVXTools.getHostUrl("msx/iptv/iptvk.php?channel={CHANNEL}&program={PROGRAM}&shift={context:shift}&type=play");
              var service = new TVXDataService();

              var callCallback = function(callback, data) {
                  if (typeof callback == "function") {
                      callback(data);
                  }
              };
              this.loadProgram = function(channelNumber, programNumber, callback) {
                  if (channelNumber >= -1 && programNumber >= -1) {
                      service.loadData("channel" + channelNumber, URL.replace("{CHANNEL}", channelNumber).replace("{PROGRAM}", programNumber), {
                          success: function(entry) {
                              if (entry.data != null &&
                                      entry.data.data != null &&
                                      entry.data.data.live != null) {
                                  callCallback(callback, entry.data.data.live);
                              } else {
                                  TVXInteractionPlugin.error("Load program failed: Response live data is missing");
                                  callCallback(callback, null);
                              }
                          },
                          error: function(entry) {
                              TVXInteractionPlugin.error("Load program failed: " + entry.error);
                              callCallback(callback, null);
                          }
                      });
                  } else {
                      callCallback(callback, null);
                  }
              };
          }
          /******************************************************************************/

          /******************************************************************************/
          //LiveProgram
          /******************************************************************************/
          function LiveProgram(data) {
              var id = "program_" + data.from;
              var title = data.titleHeader;
              var textinfo = data.text;
              var from = data.from;
              var to = data.to;

              var getDuration = function() {
                  return to - from;
              };
              var getPosition = function() {
                  var duration = getDuration();
                  var position = TVXDateTools.getTimestamp() - from;
                  if (position > 0 && duration > 0) {
                      return position < duration ? position : duration;
                  }
                  return 0;
              };
              var getCountdown = function() {
                  var duration = getDuration();
                  var position = TVXDateTools.getTimestamp() - from;
                  if (position > 0 && duration > 0) {
                      return position < duration ? duration - position : 0;
                  }
                  return duration;
              };
              var getDateLabel = function() {
                  return TVXDateTools.getDayFullStr(from);
              };
              var getFromLabel = function() {
                  return TVXDateTools.getFormattedTimeStr(from, "hh:mm");
              };
              var getToLabel = function() {
                  return TVXDateTools.getFormattedTimeStr(to, "hh:mm");
              };
              var getDurationLabel = function() {
                  return TVXDateTools.getDurationStr(getDuration(), "hm");
              };
              var getTimeLabel = function() {
                  return getFromLabel() + " - " + getToLabel() + " | " + getDurationLabel() + "";
              };
              var getProgressLabel = function() {
                  return "осталось:" + TVXDateTools.getDurationStr(getCountdown(), "mm");
              };
              this.getFrom = function() {
                  return from;
              };
              this.getTo = function() {
                  return to;
              };
              this.getPosition = function() {
                  return getPosition() / 1000;
              };
              this.getDuration = function() {
                  return getDuration() / 1000;
              };
              this.updateProgress = function() {
                  LiveTools.setupPosition(this.getPosition());
                  LiveTools.setupDurationLabel(getTimeLabel() + " | " + getProgressLabel());
              };
              this.apply = function() {
                  this.updateProgress();
                  LiveTools.setupState(TVXVideoState.PLAYING);
                  LiveTools.setupProgressType("fix:Live");
                  LiveTools.setupPositionLabel(title);
                  LiveTools.setupDuration(this.getDuration());
                  LiveTools.setupSpeed(1);
                  LiveTools.disableButton("play_pause");
                  LiveTools.disableButton("forward");
                  LiveTools.disableButton("rewind");
                //  LiveTools.disableButton("restart");
                //  LiveTools.disableButton("speed");
                  LiveTools.invalidateProgressMarker();
                  LiveTools.refreshPlayer();
              };
              this.isComing = function() {
                  return TVXDateTools.getTimestamp() < from;
              };
              this.isRunning = function() {
                  return TVXDateTools.getTimestamp() >= from && TVXDateTools.getTimestamp() < to;
              };
              this.isOver = function() {
                  return TVXDateTools.getTimestamp() >= to;
              };
              this.handleData = function(data) {
                  if (data != null && data.id != null && data.action != null) {
                      if (data.id == id) {
                          if (data.action == "record") {
                              TVXInteractionPlugin.info("Program recorder is not yet implemented.");
                              return true;
                          } else if (data.action == "remind") {
                              TVXInteractionPlugin.info("Program reminder is not yet implemented.");
                              return true;
                          }
                      }
                  }
                  return false;
              };
              this.createPanel = function(channelLabel) {
                  return {
                      cache: false,
                      headline: title,
                      pages: [{
                              items: [{
                                      type: "space",
                                      layout: "0,0,8,5",
                                      text: [
                                          "{txt:#fbc531:Описание:} "  + textinfo + "{br}{br}",
                                          "{txt:#fbc531:Телеканал:} " + channelLabel + "{br}",
                                          "{txt:#fbc531:Дата:} " + getDateLabel() + "{br}",
                                          "{txt:#fbc531:Время:} " + getFromLabel() + " - " + getToLabel() + "{br}",
                                          "{txt:#fbc531:Продолжительность:} " + getDurationLabel() + "{br}"
                                      ]
                                  }, {
                                      id: id + "_content",
                                      type: "button",
                                      layout: "0,5,1,1",
                                      icon: "pageview",
                                      iconSize: "small",
                                      action: "player:content"
                                  }, {
                                      id: id + "_record",
                                      type: "button",
                                      layout: "1,5,1,1",
                                      icon: "fiber-smart-record",
                                      iconSize: "small",
                                      action: "interaction:commit",
                                      data: {
                                          id: id,
                                          action: "record"
                                      }
                                  }, {
                                      id: id + "_remind",
                                      type: "button",
                                      layout: "2,5,1,1",
                                      icon: "alarm",
                                      iconSize: "small",
                                      action: "interaction:commit",
                                      data: {
                                          id: id,
                                          action: "remind"
                                      }
                                  }]
                          }]
                  };
              };
          }
          /******************************************************************************/

          /******************************************************************************/
          //LivePlayer
          /******************************************************************************/
          function LivePlayer() {
              var readyService = new TVXBusyService();
              var backend = new LiveBackend();
              var active = false;
              var channelLabel = null;
              var channelNumber = -2;
              var programNumber = -2;
              var currentProgram = null;
              var requestedProgram = null;
              var clock = new TVXClock();

              var applyProgram = function(data) {
                  //Note: Check if the player is still active
                  if (active && data != null && data.from > 0 && data.to > 0 && data.to > data.from) {
                      currentProgram = new LiveProgram(data);
                      currentProgram.apply();
                      programNumber++;
                  }
                  readyService.stop();
              };
              var updateProgram = function() {
                  backend.loadProgram(channelNumber, programNumber, applyProgram);
              };
              var validateProgram = function() {
                  if (currentProgram == null || currentProgram.isOver()) {
                      updateProgram();
                  } else {
                      currentProgram.updateProgress();
                  }
              };
              this.onReady = function(callback) {
                  readyService.onReady(callback);
              };
              this.prepare = function() {
                  readyService.start();
              };
              this.init = function() {
                  clock.onTick("live", validateProgram);
              };
              this.setup = function(infoData) {
                  channelLabel = TVXTools.strFullCheck(infoData != null ? infoData.label : null, null);
                  channelNumber = TVXPropertyTools.getNum(infoData, "live:channel", -2);
                  programNumber = TVXPropertyTools.getNum(infoData, "live:program", -2);
                  currentProgram = null;
                  clock.stop();
                  if (channelNumber >= -1 && programNumber >= -1) {
                      active = true;
                      validateProgram();
                      clock.start();
                  } else {
                      if (active) {
                          active = false;
                          LiveTools.resetPlayer();
                      }
                      readyService.stop();
                  }
              };
              this.clear = function() {
                  this.setup(null);
                  readyService.stop(true);
              };
              this.apply = function() {
                  if (currentProgram != null) {
                      currentProgram.apply();
                  }
              };
              this.handleSeek = function() {
                  if (active) {
                      LiveTools.invalidateProgressMarker();
                      return true;
                  }
                  return false;
              };
              this.handleData = function(data) {
                  if (requestedProgram != null) {
                      return requestedProgram.handleData(data.data);
                  }
                  return false;
              };
              this.handleRequest = function(dataId, callback) {
                  if (dataId == "program") {
                      if (currentProgram != null) {
                          requestedProgram = currentProgram;
                          callback(requestedProgram.createPanel(channelLabel));
                          return true;
                      }
                  }
                  return false;
              };
          }
          /******************************************************************************/

          /******************************************************************************/
          //LiveHandler
          /******************************************************************************/
          function LiveHandler() {
              var player = new LivePlayer();

              this.init = function() {
                  player.init();
              };
              this.ready = function() {
                  player.prepare();
                  TVXInteractionPlugin.requestData("video:info", function(data) {
                      player.setup(data.video != null ? data.video.info : null);
                  });
              };
              this.handleEvent = function(data) {
                  if (data.event == "video:load") {
                      player.prepare();
                      player.setup(data.info);
                  } else if (data.event == "video:stop") {
                      player.clear();
                  } else if (data.event == "video:restart") {
                      player.apply();
                  } else if (data.event == "custom:video:seek") {
                      player.handleSeek();
                  }
              };
              this.handleData = function(data) {
                  player.handleData(data);
              };
              this.handleRequest = function(dataId, data, callback) {
                  player.onReady(function() {
                      if (!player.handleRequest(dataId, callback)) {
                          callback();
                      }
                  });
              };
          }
          /******************************************************************************/

          /******************************************************************************/
          //Setup
          /******************************************************************************/
          TVXPluginTools.onReady(function() {
              TVXInteractionPlugin.setupHandler(new LiveHandler());
              TVXInteractionPlugin.init();
          });
          /******************************************************************************/

        </script>
</head>
<body>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"864c29bdfc3706be","r":1,"version":"2024.2.4","token":"1b80f8adaf1643b4a33c96b02bd23434"}' crossorigin="anonymous"></script>
</body>
</html>
