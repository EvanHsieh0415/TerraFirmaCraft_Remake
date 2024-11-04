TFCEvents.worldgenData(event => {
    event.pipeVein(
        'aluminum_pipe_vein', [
            event.veinReplacement(['tfc:rock/raw/chalk'], ['tfc:ore/poor_chalk/aluminum','tfc:ore/normal_chalk/aluminum','tfc:ore/rich_chalk/aluminum']),
            event.veinReplacement(['tfc:rock/raw/shale'], ['tfc:ore/poor_shale/aluminum','tfc:ore/normal_shale/aluminum','tfc:ore/rich_shale/aluminum']),
            event.veinReplacement(['tfc:rock/raw/claystone'], ['tfc:ore/poor_claystone/aluminum','tfc:ore/normal_claystone/aluminum','tfc:ore/rich_claystone/aluminum']),
            event.veinReplacement(['tfc:rock/raw/limestone'], ['tfc:ore/poor_limestone/aluminum','tfc:ore/normal_limestone/aluminum','tfc:ore/rich_limestone/aluminum']),
            event.veinReplacement(['tfc:rock/raw/conglomerate'], ['tfc:ore/poor_conglomerate/aluminum','tfc:ore/normal_conglomerate/aluminum','tfc:ore/rich_conglomerate/aluminum']),
            event.veinReplacement(['tfc:rock/raw/dolomite'], ['tfc:ore/poor_dolomite/aluminum','tfc:ore/normal_dolomite/aluminum','tfc:ore/rich_dolomite/aluminum']),
            event.veinReplacement(['tfc:rock/raw/chert'], ['tfc:ore/poor_chert/aluminum','tfc:ore/normal_chert/aluminum','tfc:ore/rich_chert/aluminum']),
        ], 67, 0.80, 39, 53, 30, 4, 0, 2, 0, 4, 0.5, vein => {
            vein.indicator(15, 5, 7, 3, ['minecraft:sponge'])
        }, placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'kubejs_tfc:aluminum_pipe_vein')
})
