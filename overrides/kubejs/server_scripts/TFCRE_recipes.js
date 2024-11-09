ServerEvents.recipes((event) => {
    const { kubejs, tfc } = event.recipes;

    kubejs.shapeless("tfc:kaolin_clay", ["minecraft:clay_ball", "3x tfc:powder/flux"]);
    kubejs.shaped("tfc:fire_clay", ["KPK", "PCP", "KPK"], {
        K: "tfc:powder/kaolinite",
        P: "tfc:powder/aluminum",
        C: "minecraft:clay_ball",
    });
    
    tfc.quern("3x tfc:powder/aluminum", "tfc:ore/poor_aluminum");
    tfc.quern("5x tfc:powder/aluminum", "tfc:ore/normal_aluminum");
    tfc.quern("7x tfc:powder/aluminum", "tfc:ore/rich_aluminum");
});
