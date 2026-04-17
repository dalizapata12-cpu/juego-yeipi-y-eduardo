gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.GDWhiteSleekButtonObjects1= [];
gdjs.menuCode.GDWhiteSleekButtonObjects2= [];
gdjs.menuCode.GDnew_9595tiled_9595spriteObjects1= [];
gdjs.menuCode.GDnew_9595tiled_9595spriteObjects2= [];
gdjs.menuCode.GDDino_9595DouxObjects1= [];
gdjs.menuCode.GDDino_9595DouxObjects2= [];
gdjs.menuCode.GDSummer_9595BackgroundObjects1= [];
gdjs.menuCode.GDSummer_9595BackgroundObjects2= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects1= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects2= [];
gdjs.menuCode.GDSummer_9595Tile_9595Top_9595Right_9595CornerObjects1= [];
gdjs.menuCode.GDSummer_9595Tile_9595Top_9595Right_9595CornerObjects2= [];
gdjs.menuCode.GDSummer_9595Tile_9595Top_9595Left_9595CornerObjects1= [];
gdjs.menuCode.GDSummer_9595Tile_9595Top_9595Left_9595CornerObjects2= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2= [];
gdjs.menuCode.GDtriger_9595abajoObjects1= [];
gdjs.menuCode.GDtriger_9595abajoObjects2= [];
gdjs.menuCode.GDtriger_9595arribaObjects1= [];
gdjs.menuCode.GDtriger_9595arribaObjects2= [];
gdjs.menuCode.GDtriger_9595izquierdaObjects1= [];
gdjs.menuCode.GDtriger_9595izquierdaObjects2= [];
gdjs.menuCode.GDtrigger_9595derechaObjects1= [];
gdjs.menuCode.GDtrigger_9595derechaObjects2= [];
gdjs.menuCode.GDGold_9595CoinObjects1= [];
gdjs.menuCode.GDGold_9595CoinObjects2= [];
gdjs.menuCode.GDarea_9595riesgo2Objects1= [];
gdjs.menuCode.GDarea_9595riesgo2Objects2= [];
gdjs.menuCode.GDspikes_9595block3Objects1= [];
gdjs.menuCode.GDspikes_9595block3Objects2= [];
gdjs.menuCode.GDtxt_9595coinObjects1= [];
gdjs.menuCode.GDtxt_9595coinObjects2= [];
gdjs.menuCode.GDsubvida1Objects1= [];
gdjs.menuCode.GDsubvida1Objects2= [];
gdjs.menuCode.GDsubvida2Objects1= [];
gdjs.menuCode.GDsubvida2Objects2= [];
gdjs.menuCode.GDbloque_9595fantasmaObjects1= [];
gdjs.menuCode.GDbloque_9595fantasmaObjects2= [];
gdjs.menuCode.GDFloater_9595enemyObjects1= [];
gdjs.menuCode.GDFloater_9595enemyObjects2= [];
gdjs.menuCode.GDWalking_9595enemy2Objects1= [];
gdjs.menuCode.GDWalking_9595enemy2Objects2= [];
gdjs.menuCode.GDBushObjects1= [];
gdjs.menuCode.GDBushObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteSleekButton"), gdjs.menuCode.GDWhiteSleekButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDWhiteSleekButtonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDWhiteSleekButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDWhiteSleekButtonObjects1[k] = gdjs.menuCode.GDWhiteSleekButtonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDWhiteSleekButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena 1", true);
}
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.menuCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.menuCode.GDnew_9595tiled_9595spriteObjects1.length = 0;
gdjs.menuCode.GDnew_9595tiled_9595spriteObjects2.length = 0;
gdjs.menuCode.GDDino_9595DouxObjects1.length = 0;
gdjs.menuCode.GDDino_9595DouxObjects2.length = 0;
gdjs.menuCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.menuCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Top_9595Right_9595CornerObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Top_9595Right_9595CornerObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Top_9595Left_9595CornerObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Top_9595Left_9595CornerObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.menuCode.GDtriger_9595abajoObjects1.length = 0;
gdjs.menuCode.GDtriger_9595abajoObjects2.length = 0;
gdjs.menuCode.GDtriger_9595arribaObjects1.length = 0;
gdjs.menuCode.GDtriger_9595arribaObjects2.length = 0;
gdjs.menuCode.GDtriger_9595izquierdaObjects1.length = 0;
gdjs.menuCode.GDtriger_9595izquierdaObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects1.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects2.length = 0;
gdjs.menuCode.GDarea_9595riesgo2Objects1.length = 0;
gdjs.menuCode.GDarea_9595riesgo2Objects2.length = 0;
gdjs.menuCode.GDspikes_9595block3Objects1.length = 0;
gdjs.menuCode.GDspikes_9595block3Objects2.length = 0;
gdjs.menuCode.GDtxt_9595coinObjects1.length = 0;
gdjs.menuCode.GDtxt_9595coinObjects2.length = 0;
gdjs.menuCode.GDsubvida1Objects1.length = 0;
gdjs.menuCode.GDsubvida1Objects2.length = 0;
gdjs.menuCode.GDsubvida2Objects1.length = 0;
gdjs.menuCode.GDsubvida2Objects2.length = 0;
gdjs.menuCode.GDbloque_9595fantasmaObjects1.length = 0;
gdjs.menuCode.GDbloque_9595fantasmaObjects2.length = 0;
gdjs.menuCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.menuCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.menuCode.GDWalking_9595enemy2Objects1.length = 0;
gdjs.menuCode.GDWalking_9595enemy2Objects2.length = 0;
gdjs.menuCode.GDBushObjects1.length = 0;
gdjs.menuCode.GDBushObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.menuCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.menuCode.GDnew_9595tiled_9595spriteObjects1.length = 0;
gdjs.menuCode.GDnew_9595tiled_9595spriteObjects2.length = 0;
gdjs.menuCode.GDDino_9595DouxObjects1.length = 0;
gdjs.menuCode.GDDino_9595DouxObjects2.length = 0;
gdjs.menuCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.menuCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Top_9595Right_9595CornerObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Top_9595Right_9595CornerObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Top_9595Left_9595CornerObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Top_9595Left_9595CornerObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.menuCode.GDtriger_9595abajoObjects1.length = 0;
gdjs.menuCode.GDtriger_9595abajoObjects2.length = 0;
gdjs.menuCode.GDtriger_9595arribaObjects1.length = 0;
gdjs.menuCode.GDtriger_9595arribaObjects2.length = 0;
gdjs.menuCode.GDtriger_9595izquierdaObjects1.length = 0;
gdjs.menuCode.GDtriger_9595izquierdaObjects2.length = 0;
gdjs.menuCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.menuCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects1.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects2.length = 0;
gdjs.menuCode.GDarea_9595riesgo2Objects1.length = 0;
gdjs.menuCode.GDarea_9595riesgo2Objects2.length = 0;
gdjs.menuCode.GDspikes_9595block3Objects1.length = 0;
gdjs.menuCode.GDspikes_9595block3Objects2.length = 0;
gdjs.menuCode.GDtxt_9595coinObjects1.length = 0;
gdjs.menuCode.GDtxt_9595coinObjects2.length = 0;
gdjs.menuCode.GDsubvida1Objects1.length = 0;
gdjs.menuCode.GDsubvida1Objects2.length = 0;
gdjs.menuCode.GDsubvida2Objects1.length = 0;
gdjs.menuCode.GDsubvida2Objects2.length = 0;
gdjs.menuCode.GDbloque_9595fantasmaObjects1.length = 0;
gdjs.menuCode.GDbloque_9595fantasmaObjects2.length = 0;
gdjs.menuCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.menuCode.GDFloater_9595enemyObjects2.length = 0;
gdjs.menuCode.GDWalking_9595enemy2Objects1.length = 0;
gdjs.menuCode.GDWalking_9595enemy2Objects2.length = 0;
gdjs.menuCode.GDBushObjects1.length = 0;
gdjs.menuCode.GDBushObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
