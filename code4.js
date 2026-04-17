gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.idToCallbackMap = new Map();
gdjs.game_32overCode.GDgame_9595overObjects1= [];
gdjs.game_32overCode.GDgame_9595overObjects2= [];
gdjs.game_32overCode.GDnew_9595tiled_9595spriteObjects1= [];
gdjs.game_32overCode.GDnew_9595tiled_9595spriteObjects2= [];
gdjs.game_32overCode.GDDino_9595DouxObjects1= [];
gdjs.game_32overCode.GDDino_9595DouxObjects2= [];
gdjs.game_32overCode.GDSummer_9595BackgroundObjects1= [];
gdjs.game_32overCode.GDSummer_9595BackgroundObjects2= [];
gdjs.game_32overCode.GDSummer_9595Tile_9595Platform_9595RightObjects1= [];
gdjs.game_32overCode.GDSummer_9595Tile_9595Platform_9595RightObjects2= [];
gdjs.game_32overCode.GDSummer_9595Tile_9595Top_9595Right_9595CornerObjects1= [];
gdjs.game_32overCode.GDSummer_9595Tile_9595Top_9595Right_9595CornerObjects2= [];
gdjs.game_32overCode.GDSummer_9595Tile_9595Top_9595Left_9595CornerObjects1= [];
gdjs.game_32overCode.GDSummer_9595Tile_9595Top_9595Left_9595CornerObjects2= [];
gdjs.game_32overCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1= [];
gdjs.game_32overCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2= [];
gdjs.game_32overCode.GDtriger_9595abajoObjects1= [];
gdjs.game_32overCode.GDtriger_9595abajoObjects2= [];
gdjs.game_32overCode.GDtriger_9595arribaObjects1= [];
gdjs.game_32overCode.GDtriger_9595arribaObjects2= [];
gdjs.game_32overCode.GDtriger_9595izquierdaObjects1= [];
gdjs.game_32overCode.GDtriger_9595izquierdaObjects2= [];
gdjs.game_32overCode.GDtrigger_9595derechaObjects1= [];
gdjs.game_32overCode.GDtrigger_9595derechaObjects2= [];
gdjs.game_32overCode.GDGold_9595CoinObjects1= [];
gdjs.game_32overCode.GDGold_9595CoinObjects2= [];
gdjs.game_32overCode.GDarea_9595riesgo2Objects1= [];
gdjs.game_32overCode.GDarea_9595riesgo2Objects2= [];
gdjs.game_32overCode.GDspikes_9595block3Objects1= [];
gdjs.game_32overCode.GDspikes_9595block3Objects2= [];
gdjs.game_32overCode.GDtxt_9595coinObjects1= [];
gdjs.game_32overCode.GDtxt_9595coinObjects2= [];
gdjs.game_32overCode.GDsubvida1Objects1= [];
gdjs.game_32overCode.GDsubvida1Objects2= [];
gdjs.game_32overCode.GDsubvida2Objects1= [];
gdjs.game_32overCode.GDsubvida2Objects2= [];
gdjs.game_32overCode.GDbloque_9595fantasmaObjects1= [];
gdjs.game_32overCode.GDbloque_9595fantasmaObjects2= [];
gdjs.game_32overCode.GDFloater_9595enemyObjects1= [];
gdjs.game_32overCode.GDFloater_9595enemyObjects2= [];
gdjs.game_32overCode.GDWalking_9595enemy2Objects1= [];
gdjs.game_32overCode.GDWalking_9595enemy2Objects2= [];
gdjs.game_32overCode.GDBushObjects1= [];
gdjs.game_32overCode.GDBushObjects2= [];


gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("game_over"), gdjs.game_32overCode.GDgame_9595overObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32overCode.GDgame_9595overObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDgame_9595overObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.game_32overCode.GDgame_9595overObjects1[k] = gdjs.game_32overCode.GDgame_9595overObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDgame_9595overObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}
}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDgame_9595overObjects1.length = 0;
gdjs.game_32overCode.GDgame_9595overObjects2.length = 0;
gdjs.game_32overCode.GDnew_9595tiled_9595spriteObjects1.length = 0;
gdjs.game_32overCode.GDnew_9595tiled_9595spriteObjects2.length = 0;
gdjs.game_32overCode.GDDino_9595DouxObjects1.length = 0;
gdjs.game_32overCode.GDDino_9595DouxObjects2.length = 0;
gdjs.game_32overCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.game_32overCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Top_9595Right_9595CornerObjects1.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Top_9595Right_9595CornerObjects2.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Top_9595Left_9595CornerObjects1.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Top_9595Left_9595CornerObjects2.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.game_32overCode.GDtriger_9595abajoObjects1.length = 0;
gdjs.game_32overCode.GDtriger_9595abajoObjects2.length = 0;
gdjs.game_32overCode.GDtriger_9595arribaObjects1.length = 0;
gdjs.game_32overCode.GDtriger_9595arribaObjects2.length = 0;
gdjs.game_32overCode.GDtriger_9595izquierdaObjects1.length = 0;
gdjs.game_32overCode.GDtriger_9595izquierdaObjects2.length = 0;
gdjs.game_32overCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.game_32overCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.game_32overCode.GDGold_9595CoinObjects1.length = 0;
gdjs.game_32overCode.GDGold_9595CoinObjects2.length = 0;
gdjs.game_32overCode.GDarea_9595riesgo2Objects1.length = 0;
gdjs.game_32overCode.GDarea_9595riesgo2Objects2.length = 0;
gdjs.game_32overCode.GDspikes_9595block3Objects1.length = 0;
gdjs.game_32overCode.GDspikes_9595block3Objects2.length = 0;
gdjs.game_32overCode.GDtxt_9595coinObjects1.length = 0;
gdjs.game_32overCode.GDtxt_9595coinObjects2.length = 0;
gdjs.game_32overCode.GDsubvida1Objects1.length = 0;
gdjs.game_32overCode.GDsubvida1Objects2.length = 0;
gdjs.game_32overCode.GDsubvida2Objects1.length = 0;
gdjs.game_32overCode.GDsubvida2Objects2.length = 0;
gdjs.game_32overCode.GDbloque_9595fantasmaObjects1.length = 0;
gdjs.game_32overCode.GDbloque_9595fantasmaObjects2.length = 0;
gdjs.game_32overCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.game_32overCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.game_32overCode.GDWalking_9595enemy2Objects1.length = 0;
gdjs.game_32overCode.GDWalking_9595enemy2Objects2.length = 0;
gdjs.game_32overCode.GDBushObjects1.length = 0;
gdjs.game_32overCode.GDBushObjects2.length = 0;

gdjs.game_32overCode.eventsList0(runtimeScene);
gdjs.game_32overCode.GDgame_9595overObjects1.length = 0;
gdjs.game_32overCode.GDgame_9595overObjects2.length = 0;
gdjs.game_32overCode.GDnew_9595tiled_9595spriteObjects1.length = 0;
gdjs.game_32overCode.GDnew_9595tiled_9595spriteObjects2.length = 0;
gdjs.game_32overCode.GDDino_9595DouxObjects1.length = 0;
gdjs.game_32overCode.GDDino_9595DouxObjects2.length = 0;
gdjs.game_32overCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.game_32overCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Top_9595Right_9595CornerObjects1.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Top_9595Right_9595CornerObjects2.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Top_9595Left_9595CornerObjects1.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Top_9595Left_9595CornerObjects2.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.game_32overCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.game_32overCode.GDtriger_9595abajoObjects1.length = 0;
gdjs.game_32overCode.GDtriger_9595abajoObjects2.length = 0;
gdjs.game_32overCode.GDtriger_9595arribaObjects1.length = 0;
gdjs.game_32overCode.GDtriger_9595arribaObjects2.length = 0;
gdjs.game_32overCode.GDtriger_9595izquierdaObjects1.length = 0;
gdjs.game_32overCode.GDtriger_9595izquierdaObjects2.length = 0;
gdjs.game_32overCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.game_32overCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.game_32overCode.GDGold_9595CoinObjects1.length = 0;
gdjs.game_32overCode.GDGold_9595CoinObjects2.length = 0;
gdjs.game_32overCode.GDarea_9595riesgo2Objects1.length = 0;
gdjs.game_32overCode.GDarea_9595riesgo2Objects2.length = 0;
gdjs.game_32overCode.GDspikes_9595block3Objects1.length = 0;
gdjs.game_32overCode.GDspikes_9595block3Objects2.length = 0;
gdjs.game_32overCode.GDtxt_9595coinObjects1.length = 0;
gdjs.game_32overCode.GDtxt_9595coinObjects2.length = 0;
gdjs.game_32overCode.GDsubvida1Objects1.length = 0;
gdjs.game_32overCode.GDsubvida1Objects2.length = 0;
gdjs.game_32overCode.GDsubvida2Objects1.length = 0;
gdjs.game_32overCode.GDsubvida2Objects2.length = 0;
gdjs.game_32overCode.GDbloque_9595fantasmaObjects1.length = 0;
gdjs.game_32overCode.GDbloque_9595fantasmaObjects2.length = 0;
gdjs.game_32overCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.game_32overCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.game_32overCode.GDWalking_9595enemy2Objects1.length = 0;
gdjs.game_32overCode.GDWalking_9595enemy2Objects2.length = 0;
gdjs.game_32overCode.GDBushObjects1.length = 0;
gdjs.game_32overCode.GDBushObjects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
