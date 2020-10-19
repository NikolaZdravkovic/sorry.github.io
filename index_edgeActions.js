
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("tvspot_30")[0].muted=true;sym.$("tvspot_30")[0].play();sym.$("ANIM").play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){document.getElementsByTagName('video')[0].addEventListener('ended',endHandler,false);function endHandler(e){sym.stop("endframe");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8990,function(sym,e){sym.stop();sym.$("play_control").hide();sym.$("sound_control").hide();sym.$("tvspot_30").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9996,function(sym,e){sym.$("tvspot_30").show();sym.$("play_control").show();sym.$("sound_control").show();sym.getSymbol("sound_control").$("sound_on").hide();sym.getSymbol("sound_control").$("sound_off").show();sym.$("tvspot_30")[0].muted=false;sym.$("tvspot_30")[0].currentTime=0;if(sym.$("tvspot_30")[0].paused){sym.$("tvspot_30")[0].play();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10250,function(sym,e){document.getElementsByTagName('video')[0].addEventListener('ended',endHandler,false);function endHandler(e){sym.stop("endframe");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){adVideoOne=document.getElementsByTagName("Video")[0]});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){function initEB(){if(!EB.isInitialized()){EB.addEventListener(EBG.EventName.EB_INITIALIZED,stratAd);}
else{startAd();}}
function startAd(){sym.play();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sound_control}","click",function(sym,e){sym.$("tvspot_30")[0].muted=!sym.$("tvspot_30")[0].muted;if(sym.getSymbol("sound_control").$("sound_on").is(":visible")){sym.getSymbol("sound_control").$("sound_on").hide();}
else{sym.getSymbol("sound_control").$("sound_on").show();}
if(sym.getSymbol("sound_control").$("sound_off").is(":visible")){sym.getSymbol("sound_control").$("sound_off").hide();}
else{sym.getSymbol("sound_control").$("sound_off").show();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_control}","click",function(sym,e){if(sym.$("tvspot_30")[0].paused){sym.$("tvspot_30")[0].play();}else{sym.$("tvspot_30")[0].pause();}
if(sym.getSymbol("play_control").$("pause").is(":visible")){sym.getSymbol("play_control").$("pause").hide();}else{sym.getSymbol("play_control").$("pause").show();}
if(sym.getSymbol("play_control").$("play").is(":visible")){sym.getSymbol("play_control").$("play").hide();}else{sym.getSymbol("play_control").$("play").show();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hit}","click",function(sym,e){EB.clickthrough();sym.$("tvspot_30")[0].pause();sym.stop("endframe");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hit}","mouseout",function(sym,e){sym.getSymbol("ANIM").getSymbol("CTA").stop('stop');sym.getSymbol("ANIM").getSymbol("CHARA_MOV").stop('stop');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hit}","mouseover",function(sym,e){sym.getSymbol("ANIM").getSymbol("CTA").play('start');sym.getSymbol("ANIM").getSymbol("CHARA_MOV").play('start');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'sound_control'
(function(symbolName){})("sound_control");
//Edge symbol end:'sound_control'

//=========================================================

//Edge symbol: 'play_control'
(function(symbolName){})("play_control");
//Edge symbol end:'play_control'

//=========================================================

//Edge symbol: 'ANIM'
(function(symbolName){})("ANIM");
//Edge symbol end:'ANIM'
})(jQuery,AdobeEdge,"EDGE-69201358");