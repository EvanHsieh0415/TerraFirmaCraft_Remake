ServerEvents.blockLootTables((event) => {
    const NORMAL_ALUMINUMS = [
        "tfc:ore/normal_chalk/aluminum",
        "tfc:ore/normal_chert/aluminum",
        "tfc:ore/normal_claystone/aluminum",
        "tfc:ore/normal_conglomerate/aluminum",
        "tfc:ore/normal_dolomite/aluminum",
        "tfc:ore/normal_granite/aluminum",
        "tfc:ore/normal_limestone/aluminum",
        "tfc:ore/normal_shale/aluminum",
    ];
    const POOR_ALUMINUMS = [
        "tfc:ore/poor_chalk/aluminum",
        "tfc:ore/poor_chert/aluminum",
        "tfc:ore/poor_claystone/aluminum",
        "tfc:ore/poor_conglomerate/aluminum",
        "tfc:ore/poor_dolomite/aluminum",
        "tfc:ore/poor_granite/aluminum",
        "tfc:ore/poor_limestone/aluminum",
        "tfc:ore/poor_shale/aluminum",
    ];

    const RICH_ALUMINUMS = [
        "tfc:ore/rich_chalk/aluminum",
        "tfc:ore/rich_chert/aluminum",
        "tfc:ore/rich_claystone/aluminum",
        "tfc:ore/rich_conglomerate/aluminum",
        "tfc:ore/rich_dolomite/aluminum",
        "tfc:ore/rich_granite/aluminum",
        "tfc:ore/rich_limestone/aluminum",
        "tfc:ore/rich_shale/aluminum",
    ];

    NORMAL_ALUMINUMS.forEach((item) => {
        event.addBlock(item, (loot) => {
            loot.addPool((pool) => {
                Item.list.forEach((item) => {
                    pool.addItem("tfc:ore/poor_aluminum");
                });
            });
        });
    });

    POOR_ALUMINUMS.forEach((item) => {
        event.addBlock(item, (loot) => {
            loot.addPool((pool) => {
                Item.list.forEach((item) => {
                    pool.addItem("tfc:ore/normal_aluminum");
                });
            });
        });
    });

    RICH_ALUMINUMS.forEach((item) => {
        event.addBlock(item, (loot) => {
            loot.addPool((pool) => {
                Item.list.forEach((item) => {
                    pool.addItem("tfc:ore/rich_aluminum");
                });
            });
        });
    });
});
