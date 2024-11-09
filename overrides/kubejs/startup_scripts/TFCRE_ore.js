Platform.setModName("kubejs", "TerraFirmaCraft");

StartupEvents.registry("block", (event) => {
    const aluminumOreBlockBuilder = (id) =>
        event
            .create(id)
            .stoneSoundType()
            .renderType("cutout")
            .hardness(4.5)
            .tagBlock("forge:ores")
            .tagBlock("forge:ores/aluminum")
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("minecraft:needs_stone_tool")
            .tagBlock("tfc:can_collapse")
            .tagBlock("tfc:can_start_collapse")
            .tagBlock("tfc:can_trigger_collapse")
            .tagBlock("tfc:monster_spawns_on")
            .tagBlock("tfc:powderkeg_breaking_blocks")
            .tagBlock("tfc:prospectable")
            .tagBlock("tfc:rock/ores")
            .requiresTool(true);

    // 贫瘠
    aluminumOreBlockBuilder("tfc:ore/poor_aluminum")
        .model("kubejs:block/ore/poor/aluminum")
        .tagBlock("forge:ores/aluminum/poor");
    // 普通
    aluminumOreBlockBuilder("tfc:ore/normal_aluminum")
        .model("kubejs:block/ore/normal/aluminum")
        .tagBlock("forge:ores/aluminum/normal");
    // 富集
    aluminumOreBlockBuilder("tfc:ore/rich_aluminum")
        .model("kubejs:block/ore/rich/aluminum")
        .tagBlock("forge:ores/aluminum/rich");

    // 贫瘠页岩
    aluminumOreBlockBuilder("tfc:ore/poor_shale/aluminum")
        .model("kubejs:block/ore/poor/shale_aluminum")
        .tagBlock("forge:ores/aluminum/poor");
    // 页岩
    aluminumOreBlockBuilder("tfc:ore/normal_shale/aluminum")
        .model("kubejs:block/ore/shale_aluminum")
        .tagBlock("forge:ores/aluminum/normal");
    // 富集页岩
    aluminumOreBlockBuilder("tfc:ore/rich_shale/aluminum")
        .model("kubejs:block/ore/rich/shale_aluminum")
        .tagBlock("forge:ores/aluminum/rich");

    //贫瘠黏土岩
    aluminumOreBlockBuilder("tfc:ore/poor_claystone/aluminum")
        .model("kubejs:block/ore/poor/claystone_aluminum")
        .tagBlock("forge:ores/aluminum/poor");
    //黏土岩
    aluminumOreBlockBuilder("tfc:ore/normal_claystone/aluminum")
        .model("kubejs:block/ore/claystone_aluminum")
        .tagBlock("forge:ores/aluminum/normal");
    //富集黏土岩
    aluminumOreBlockBuilder("tfc:ore/rich_claystone/aluminum")
        .model("kubejs:block/ore/rich/claystone_aluminum")
        .tagBlock("forge:ores/aluminum/rich");

    //贫瘠石灰岩
    aluminumOreBlockBuilder("tfc:ore/poor_limestone/aluminum")
        .model("kubejs:block/ore/poor/limestone_aluminum")
        .tagBlock("forge:ores/aluminum/poor");
    //石灰岩
    aluminumOreBlockBuilder("tfc:ore/normal_limestone/aluminum")
        .model("kubejs:block/ore/limestone_aluminum")
        .tagBlock("forge:ores/aluminum/normal");
    //富集石灰岩
    aluminumOreBlockBuilder("tfc:ore/rich_limestone/aluminum")
        .model("kubejs:block/ore/rich/limestone_aluminum")
        .tagBlock("forge:ores/aluminum/rich");

    //贫瘠砾岩
    aluminumOreBlockBuilder("tfc:ore/poor_conglomerate/aluminum")
        .model("kubejs:block/ore/poor/conglomerate_aluminum")
        .tagBlock("forge:ores/aluminum/poor");
    //砾岩
    aluminumOreBlockBuilder("tfc:ore/normal_conglomerate/aluminum")
        .model("kubejs:block/ore/conglomerate_aluminum")
        .tagBlock("forge:ores/aluminum/normal");
    //富集砾岩
    aluminumOreBlockBuilder("tfc:ore/rich_conglomerate/aluminum")
        .model("kubejs:block/ore/rich/conglomerate_aluminum")
        .tagBlock("forge:ores/aluminum/rich");

    //贫瘠白云岩
    aluminumOreBlockBuilder("tfc:ore/poor_dolomite/aluminum")
        .model("kubejs:block/ore/poor/dolomite_aluminum")
        .tagBlock("forge:ores/aluminum/poor");
    //白云岩
    aluminumOreBlockBuilder("tfc:ore/normal_dolomite/aluminum")
        .model("kubejs:block/ore/dolomite_aluminum")
        .tagBlock("forge:ores/aluminum/normal");
    //富集白云岩
    aluminumOreBlockBuilder("tfc:ore/rich_dolomite/aluminum")
        .model("kubejs:block/ore/rich/dolomite_aluminum")
        .tagBlock("forge:ores/aluminum/rich");

    //贫瘠硅质岩
    aluminumOreBlockBuilder("tfc:ore/poor_chert/aluminum")
        .model("kubejs:block/ore/poor/chert_aluminum")
        .tagBlock("forge:ores/aluminum/poor");
    //硅质岩
    aluminumOreBlockBuilder("tfc:ore/normal_chert/aluminum")
        .model("kubejs:block/ore/chert_aluminum")
        .tagBlock("forge:ores/aluminum/normal");
    //富集硅质岩
    aluminumOreBlockBuilder("tfc:ore/rich_chert/aluminum")
        .model("kubejs:block/ore/rich/chert_aluminum")
        .tagBlock("forge:ores/aluminum/rich");

    //贫瘠白垩岩
    aluminumOreBlockBuilder("tfc:ore/poor_chalk/aluminum")
        .model("kubejs:block/ore/poor/chalk_aluminum")
        .tagBlock("forge:ores/aluminum/poor");
    //白垩岩
    aluminumOreBlockBuilder("tfc:ore/normal_chalk/aluminum")
        .model("kubejs:block/ore/chalk_aluminum")
        .tagBlock("forge:ores/aluminum/normal");
    //富集白垩岩
    aluminumOreBlockBuilder("tfc:ore/rich_chalk/aluminum")
        .model("kubejs:block/ore/rich/chalk_aluminum")
        .tagBlock("forge:ores/aluminum/rich");

    //铝土矿粒
    // event
    //     .create("tfc:ore/small_aluminum", "basic")
    //     .property(BlockProperties.FACING)
    //     .placementState((callback) => {
    //         callback.set(BlockProperties.FACING, callback.horizontalDirection.opposite);
    //     })
    //     .stoneSoundType();
});
