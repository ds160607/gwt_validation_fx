showcase.onScriptDownloaded(['var $wnd = $wnd || window.parent;var __gwtModuleFunction = $wnd.showcase;var $sendStats = __gwtModuleFunction.__sendStats;$sendStats(\'moduleStartup\', \'moduleEvalStart\');var $gwt_version = "0.0.0";var $strongName = \'\';var $gwt = {};var $doc = $wnd.document;var $moduleName, $moduleBase;function __gwtStartLoadingFragment(frag) {var fragFile = \'deferredjs/\' + $strongName + \'/\' + frag + \'.cache.js\';return __gwtModuleFunction.__startLoadingFragment(fragFile);}function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}function __gwt_isKnownPropertyValue(propName, propValue) {return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);}function __gwt_getMetaProperty(name) {return __gwtModuleFunction.__gwt_getMetaProperty(name);}var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);} : null;var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;/******************************************************************************\r\n * Variables used by the Plugin\r\n *****************************************************************************/\r\nvar $entry;\r\nvar $hostedHtmlVersion="2.1";\r\n\r\nvar $errFn;\r\nvar $moduleName;\r\nvar $moduleBase;\r\nvar __gwt_getProperty;\r\n\r\n/******************************************************************************\r\n * WRITE ME - what does this invokes stuff do??? Probably related to invoking\r\n * calls...\r\n *****************************************************************************/\r\nvar __gwt_javaInvokes = [];\r\n\r\n// Wrapper to call JS methods, which we need both to be able to supply a\r\n// different this for method lookup and to get the exception back\r\nfunction __gwt_jsInvoke(thisObj, methodName) {\r\n try {\r\n   var args = Array.prototype.slice.call(arguments, 2);\r\n   return [0, window[methodName].apply(thisObj, args)];\r\n } catch (e) {\r\n   return [1, e];\r\n }\r\n}\r\n\r\nfunction __gwt_makeJavaInvoke(argCount) {\r\n  return __gwt_javaInvokes[argCount] || __gwt_doMakeJavaInvoke(argCount);\r\n}\r\n\r\nfunction __gwt_doMakeJavaInvoke(argCount) {\r\n  // IE6 won\'t eval() anonymous functions except as r-values\r\n  var argList = "";\r\n  for (var i = 0; i < argCount; i++) {\r\n    argList += ",p" + i;\r\n  }\r\n  var argListNoComma = argList.substring(1);\r\n\r\n  return eval(\r\n    "__gwt_javaInvokes[" + argCount + "] =\\n" +\r\n    "  function(thisObj, dispId" + argList + ") {\\n" +\r\n    "    var result = __static(dispId, thisObj" + argList + ");\\n" +\r\n    "    if (result[0]) {\\n" +\r\n    "      throw result[1];\\n" +\r\n    "    } else {\\n" +\r\n    "      return result[1];\\n" +\r\n    "    }\\n" +\r\n    "  }\\n"\r\n  ); \r\n}\r\n\r\n\r\n/******************************************************************************\r\n * Functions used to create tear-offs of Java methods.  Each function corresponds\r\n * to exactly one dispId, and also embeds the argument count.  We get the "this"\r\n * value from the context in which the function is being executed.\r\n * Function-object identity is preserved by caching in a sparse array.\r\n *****************************************************************************/\r\nvar __gwt_tearOffs = [];\r\nvar __gwt_tearOffGenerators = [];\r\nfunction __gwt_makeTearOff(proxy, dispId, argCount) {\r\n  return __gwt_tearOffs[dispId] || __gwt_doMakeTearOff(dispId, argCount);\r\n}\r\n\r\nfunction __gwt_doMakeTearOff(dispId, argCount) {\r\n  return __gwt_tearOffs[dispId] = \r\n      (__gwt_tearOffGenerators[argCount] || __gwt_doMakeTearOffGenerator(argCount))(dispId);\r\n}\r\n\r\nfunction __gwt_doMakeTearOffGenerator(argCount) {\r\n  // IE6 won\'t eval() anonymous functions except as r-values\r\n  var argList = "";\r\n  for (var i = 0; i < argCount; i++) {\r\n    argList += ",p" + i;\r\n  }\r\n  var argListNoComma = argList.substring(1);\r\n\r\n  return eval(\r\n    "__gwt_tearOffGenerators[" + argCount + "] =\\n" +\r\n    "  function(dispId) {\\n" +\r\n    "    return function(" + argListNoComma + ") {\\n" +\r\n    "      var result = __static(dispId, this" + argList + ");\\n" +\r\n    "      if (result[0]) {\\n" +\r\n    "        throw result[1];\\n" +\r\n    "      } else {\\n" +\r\n    "        return result[1];\\n" +\r\n    "      }\\n" +\r\n    "    }\\n" +\r\n    "  }\\n"\r\n  ); \r\n}\r\n\r\n\r\n/******************************************************************************\r\n *Code to give visual feedback when something goes wrong in Dev Mode\r\n *****************************************************************************/\r\nfunction __gwt_disconnected() {\r\n  // Prevent double-invocation.\r\n  window.__gwt_disconnected = new Function();\r\n  // Do it in a timeout so we can be sure we have a clean stack.\r\n  window.setTimeout(__gwt_disconnected_impl, 1);\r\n}\r\n\r\nfunction __gwt_disconnected_impl() {\r\n  __gwt_displayGlassMessage(\'GWT Code Server Disconnected\',\r\n      \'Most likely, you closed GWT Development Mode. Or, you might have lost \'\r\n      + \'network connectivity. To fix this, try restarting GWT Development Mode and \'\r\n      + \'refresh this page.\');\r\n}\r\n\r\n// Keep track of z-index to allow layering of multiple glass messages\r\nvar __gwt_glassMessageZIndex = 2147483647;\r\n\r\n// Note this method is also used by ModuleSpace.java\r\nfunction __gwt_displayGlassMessage(summary, details) {\r\n  var topWin = window.top;\r\n  var topDoc = topWin.document;\r\n  var outer = topDoc.createElement("div");\r\n  // Do not insert whitespace or outer.firstChild will get a text node.\r\n  outer.innerHTML = \r\n    \'<div style="position:absolute;z-index:\' + __gwt_glassMessageZIndex-- +\r\n    \';left:50px;top:50px;width:600px;color:#FFF;font-family:verdana;text-align:left;">\' +\r\n    \'<div style="font-size:30px;font-weight:bold;">\' + summary + \'<\/div>\' +\r\n    \'<div style="font-size:15px;">\' + details + \'<\/div>\' +\r\n    \'<\/div>\' +\r\n    \'<div style="position:absolute;z-index:\' + __gwt_glassMessageZIndex-- +\r\n    \';left:0px;top:0px;right:0px;bottom:0px;filter:alpha(opacity=60);opacity:0.6;background-color:#000;"><\/div>\'\r\n  ;\r\n  topDoc.body.appendChild(outer);\r\n  var glass = outer.firstChild;\r\n  var glassStyle = glass.style;\r\n\r\n  // Scroll to the top and remove scrollbars.\r\n  topWin.scrollTo(0, 0);\r\n  if (topDoc.compatMode == "BackCompat") {\r\n    topDoc.body.style["overflow"] = "hidden";\r\n  } else {\r\n    topDoc.documentElement.style["overflow"] = "hidden";\r\n  }\r\n\r\n  // Steal focus.\r\n  glass.focus();\r\n\r\n  if ((navigator.userAgent.indexOf("MSIE") >= 0) && (topDoc.compatMode == "BackCompat")) {\r\n    // IE quirks mode doesn\'t support right/bottom, but does support this.\r\n    glassStyle.width = "125%";\r\n    glassStyle.height = "100%";\r\n  } else if (navigator.userAgent.indexOf("MSIE 6") >= 0) {\r\n    // IE6 doesn\'t have a real standards mode, so we have to use hacks.\r\n    glassStyle.width = "125%"; // Get past scroll bar area.\r\n    // Nasty CSS; onresize would be better but the outer window won\'t let us add a listener IE.\r\n    glassStyle.setExpression("height", "document.documentElement.clientHeight");\r\n  }\r\n\r\n  $doc.title = summary + " [" + $doc.title + "]";\r\n}\r\n\r\n\r\n/******************************************************************************\r\n * Other functions called by the Plugin\r\n *****************************************************************************/\r\nfunction __gwt_makeResult(isException, result) {\r\n  return [isException, result];\r\n}\r\n\r\n//should be prefixed with "__gwt_"\r\nfunction fireOnModuleLoadStart(className) {\r\n  $sendStats("moduleStartup", "onModuleLoadStart");\r\n}\r\n\r\n\r\n/******************************************************************************\r\n * Helper functions for the Development Mode startup code. Listed alphabetically\r\n *****************************************************************************/\r\nfunction doBrowserSpecificFixes() {\r\n  var ua = navigator.userAgent.toLowerCase();\r\n  if (ua.indexOf("gecko") != -1) {\r\n    // install eval wrapper on FF to avoid EvalError problem\r\n    var __eval = window.eval;\r\n    window.eval = function(s) {\r\n      return __eval(s);\r\n    }\r\n  }\r\n  if (ua.indexOf("chrome") != -1) {\r\n    // work around __gwt_ObjectId appearing in JS objects\r\n    var hop = window.Object.prototype.hasOwnProperty;\r\n    window.Object.prototype.hasOwnProperty = function(prop) {\r\n      return prop != "__gwt_ObjectId" && hop.call(this, prop);\r\n    };\r\n    var hop2 = window.Object.prototype.propertyIsEnumerable;\r\n    window.Object.prototype.propertyIsEnumerable = function(prop) {\r\n      return prop != "__gwt_ObjectId" && hop2.call(this, prop);\r\n    };\r\n    // do the same in the main window if it is different from our window\r\n    if ($wnd != window) {\r\n      var hop3 = $wnd.Object.prototype.hasOwnProperty;\r\n      $wnd.Object.prototype.hasOwnProperty = function(prop) {\r\n        return prop != "__gwt_ObjectId" && hop3.call(this, prop);\r\n      };\r\n      var hop4 = $wnd.Object.prototype.propertyIsEnumerable;\r\n      $wnd.Object.prototype.propertyIsEnumerable = function(prop) {\r\n        return prop != "__gwt_ObjectId" && hop4.call(this, prop);\r\n      };\r\n    }\r\n  }\r\n}\r\n\r\nfunction embedPlugin() {\r\n  var embed = document.createElement(\'embed\');\r\n  embed.id = \'pluginEmbed\';\r\n  embed.type = \'application/x-gwt-hosted-mode\';\r\n  embed.width = \'10\';\r\n  embed.height = \'20\';\r\n\r\n  var obj = document.createElement(\'object\');\r\n  obj.id = \'pluginObject\';\r\n  obj.classid = \'clsid:1D6156B6-002B-49E7-B5CA-C138FB843B4E\';\r\n\r\n  document.body.appendChild(embed);\r\n  document.body.appendChild(obj);\r\n}\r\n\r\nfunction findPluginObject() {\r\n  try {\r\n    return document.getElementById(\'pluginObject\');\r\n  } catch (e) {\r\n    return null;\r\n  }\r\n}\r\n\r\nfunction findPluginEmbed() {\r\n  try {\r\n    return document.getElementById(\'pluginEmbed\')\r\n  } catch (e) {\r\n    return null;\r\n  }\r\n}\r\n\r\nfunction findPluginXPCOM() {\r\n  try {\r\n    return __gwt_HostedModePlugin;\r\n  } catch (e) {\r\n    return null;\r\n  }\r\n}\r\n\r\nfunction getCodeServer() {\r\n  var server = "localhost:9997";\r\n  var query = $wnd.location.search;\r\n  var idx = query.indexOf("gwt.codesvr=");\r\n  if (idx >= 0) {\r\n    idx += 12;  // "gwt.codesvr=".length == 12\r\n  } else {\r\n    idx = query.indexOf("gwt.codesvr.showcase=");\r\n    idx += (13 + "showcase".length);  // \r\n  }\r\n  if (idx >= 0) {\r\n    var amp = query.indexOf("&", idx);\r\n    if (amp >= 0) {\r\n      server = query.substring(idx, amp);\r\n    } else {\r\n      server = query.substring(idx);\r\n    }\r\n    // According to RFC 3986, some of this component\'s characters (e.g., \':\')\r\n    // are reserved and *may* be escaped.\r\n    return decodeURIComponent(server);\r\n  }\r\n}\r\n\r\nfunction generateSessionId() {\r\n  var ASCII_EXCLAMATION = 33;\r\n  var ASCII_TILDE = 126;\r\n  var chars = [];\r\n  for (var i = 0; i < 16; ++i) {\r\n    chars.push(Math.floor(ASCII_EXCLAMATION\r\n    + Math.random() * (ASCII_TILDE - ASCII_EXCLAMATION + 1)));\r\n  }\r\n  return String.fromCharCode.apply(null, chars);\r\n}\r\n\r\nfunction loadIframe(url) {\r\n  var topDoc = window.top.document;\r\n\r\n  // create an iframe\r\n  var iframeDiv = topDoc.createElement("div");\r\n  iframeDiv.innerHTML = "<iframe scrolling=no frameborder=0 src=\'" + url + "\'>";\r\n  var iframe = iframeDiv.firstChild;\r\n\r\n  // mess with the iframe style a little\r\n  var iframeStyle = iframe.style;\r\n  iframeStyle.position = "absolute";\r\n  iframeStyle.borderWidth = "0";\r\n  iframeStyle.left = "0";\r\n  iframeStyle.top = "0";\r\n  iframeStyle.width = "100%";\r\n  iframeStyle.backgroundColor = "#ffffff";\r\n  iframeStyle.zIndex = "1";\r\n  iframeStyle.height = "100%";\r\n\r\n  // update the top window\'s document\'s body\'s style\r\n  var hostBodyStyle = window.top.document.body.style; \r\n  hostBodyStyle.margin = "0";\r\n  hostBodyStyle.height = iframeStyle.height;\r\n  hostBodyStyle.overflow = "hidden";\r\n\r\n  // insert the iframe\r\n  topDoc.body.insertBefore(iframe, topDoc.body.firstChild);\r\n}\r\n\r\nfunction pluginConnectionError(codeServer) {\r\n  __gwt_displayGlassMessage(\r\n      "Plugin failed to connect to Development Mode server at " + simpleEscape(codeServer),\r\n      "Follow the troubleshooting instructions at "\r\n      + "<a href=\'http://code.google.com/p/google-web-toolkit/wiki/TroubleshootingOOPHM\'>"\r\n      + "http://code.google.com/p/google-web-toolkit/wiki/TroubleshootingOOPHM<\/a>");\r\n  if ($errFn) {\r\n    $errFn($moduleName);\r\n  }\r\n}\r\n\r\nfunction simpleEscape(originalString) {\r\n  return originalString.replace(/&/g,"&amp;")\r\n    .replace(/<\/g,"&lt;")\r\n    .replace(/>/g,"&gt;")\r\n    .replace(/\\\'/g, "&#39;")\r\n    .replace(/\\"/g,"&quot;");\r\n}\r\n\r\nfunction tryConnectingToPlugin(sessionId, url) {\r\n  // Note that the order is important\r\n  var pluginFinders = [findPluginXPCOM, findPluginObject, findPluginEmbed];\r\n  var codeServer = getCodeServer();\r\n  var plugin = null;\r\n  for (var i = 0; i < pluginFinders.length; ++i) {\r\n    try {\r\n      var maybePlugin = pluginFinders[i]();\r\n      if (maybePlugin != null && maybePlugin.init(window)) {\r\n        plugin = maybePlugin;\r\n        break;\r\n      }\r\n    } catch (e) {\r\n    }\r\n  }\r\n\r\n  if (plugin == null) {\r\n    // Plugin initialization failed. Show the missing-plugin page.\r\n    return null;\r\n  }\r\n  if (!plugin.connect(url, sessionId, codeServer, $moduleName,\r\n                      $hostedHtmlVersion)) {\r\n    // Connection failed. Show the error alert and troubleshooting page.\r\n    pluginConnectionError(codeServer);\r\n  }\r\n\r\n  return plugin;\r\n}\r\n\r\n\r\n/******************************************************************************\r\n * Development Mode startup code\r\n *****************************************************************************/\r\nfunction gwtOnLoad(errFn, moduleName, moduleBase, softPermutationId, computePropValue) {\r\n  $errFn = errFn;\r\n  $moduleName = moduleName;\r\n  $moduleBase = moduleBase;\r\n  __gwt_getProperty = computePropValue;\r\n  \r\n  doBrowserSpecificFixes();\r\n\r\n  if (!findPluginXPCOM()) {\r\n    embedPlugin();\r\n  }\r\n\r\n  var topWin = window.top;\r\n  if (!topWin.__gwt_SessionID) {\r\n    topWin.__gwt_SessionID = generateSessionId();\r\n  }\r\n\r\n  var plugin = tryConnectingToPlugin(topWin.__gwt_SessionID, topWin.location.href);\r\n  if (plugin == null) {\r\n    loadIframe("http://www.gwtproject.org/missing-plugin/");\r\n  } else {\r\n    // take over the onunload function, wrapping any existing call if it exists\r\n    var oldUnload = window.onunload;\r\n    window.onunload = function() {\r\n      // run wrapped unload first in case it is running gwt code\r\n      !!oldUnload && oldUnload();\r\n      try {\r\n        // wrap in try/catch since plugins are not required to supply this\r\n        plugin.disconnect();\r\n      } catch (e) {\r\n      }\r\n    };\r\n  }\r\n}\r\n$sendStats(\'moduleStartup\', \'moduleEvalEnd\');gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);$sendStats(\'moduleStartup\', \'end\');$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);\n//# sourceURL=showcase-0.js\n']);
