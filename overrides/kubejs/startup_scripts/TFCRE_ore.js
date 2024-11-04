StartupEvents.registry("block", (event) => {
	Platform.mods.kubejs.name = "TerraFirmaCraft"
	//贫瘠
	event.create("tfc:ore/poor_granite/aluminum","basic")
	.model("kubejs:block/ore/poor/granite_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/pool')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//普通
	event.create("tfc:ore/normal_granite/aluminum","basic")
	.model("kubejs:block/ore/granite_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/normal')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//富集
	event.create("tfc:ore/rich_granite/aluminum","basic")
	.model("kubejs:block/ore/rich/granite_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/rich')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//贫瘠页岩
	event.create("tfc:ore/poor_shale/aluminum","basic")
	.model("kubejs:block/ore/poor/shale_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/pool')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//页岩
	event.create("tfc:ore/normal_shale/aluminum","basic")
	.model("kubejs:block/ore/shale_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/normal')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//富集页岩
	event.create("tfc:ore/rich_shale/aluminum","basic")
	.model("kubejs:block/ore/rich/shale_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/rich')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//贫瘠黏土岩
	event.create("tfc:ore/poor_claystone/aluminum","basic")
	.model("kubejs:block/ore/poor/claystone_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/pool')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//黏土岩
	event.create("tfc:ore/normal_claystone/aluminum","basic")
	.model("kubejs:block/ore/claystone_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/normal')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//富集黏土岩
	event.create("tfc:ore/rich_claystone/aluminum","basic")
	.model("kubejs:block/ore/rich/claystone_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/rich')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//贫瘠石灰岩
	event.create("tfc:ore/poor_limestone/aluminum","basic")
	.model("kubejs:block/ore/poor/limestone_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/pool')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//石灰岩
	event.create("tfc:ore/normal_limestone/aluminum","basic")
	.model("kubejs:block/ore/limestone_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/normal')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//富集石灰岩
	event.create("tfc:ore/rich_limestone/aluminum","basic")
	.model("kubejs:block/ore/rich/limestone_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/rich')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//贫瘠砾岩
	event.create("tfc:ore/poor_conglomerate/aluminum","basic")
	.model("kubejs:block/ore/poor/conglomerate_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/pool')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//砾岩
	event.create("tfc:ore/normal_conglomerate/aluminum","basic")
	.model("kubejs:block/ore/conglomerate_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/normal')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//富集砾岩
	event.create("tfc:ore/rich_conglomerate/aluminum","basic")
	.model("kubejs:block/ore/rich/conglomerate_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/rich')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//贫瘠白云岩
	event.create("tfc:ore/poor_dolomite/aluminum","basic")
	.model("kubejs:block/ore/poor/dolomite_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/pool')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//白云岩
	event.create("tfc:ore/normal_dolomite/aluminum","basic")
	.model("kubejs:block/ore/dolomite_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/normal')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//富集白云岩
	event.create("tfc:ore/rich_dolomite/aluminum","basic")
	.model("kubejs:block/ore/rich/dolomite_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/rich')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//贫瘠硅质岩
	event.create("tfc:ore/poor_chert/aluminum","basic")
	.model("kubejs:block/ore/poor/chert_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/pool')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//硅质岩
	event.create("tfc:ore/normal_chert/aluminum","basic")
	.model("kubejs:block/ore/chert_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/normal')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//富集硅质岩
	event.create("tfc:ore/rich_chert/aluminum","basic")
	.model("kubejs:block/ore/rich/chert_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/rich')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//贫瘠白垩岩
	event.create("tfc:ore/poor_chalk/aluminum","basic")
	.model("kubejs:block/ore/poor/chalk_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/pool')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//白垩岩
	event.create("tfc:ore/normal_chalk/aluminum","basic")
	.model("kubejs:block/ore/chalk_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/normal')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//富集白垩岩
	event.create("tfc:ore/rich_chalk/aluminum","basic")
	.model("kubejs:block/ore/rich/chalk_aluminum")
	.stoneSoundType()
	.renderType("cutout")
	.hardness(4.5)
	.tagBlock('tfc:prospectable')
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_stone_tool')
	.tagBlock('forge:ores/aluminum')
	.tagBlock('tfc:can_trigger_collapse')
	.tagBlock('tfc:monster_spawns_on')
	.tagBlock('tfc:can_start_collapse')
	.tagBlock('forge:ores')
	.tagBlock('tfc:rock/ores')
	.tagBlock('tfc:powderkeg_breaking_blocks')
	.tagBlock('forge:ores/aluminum/rich')
	.tagBlock('tfc:can_collapse')
	.requiresTool(true)
	//铝土矿粒
	//event.create("tfc:ore/small_aluminum","basic")
	//.property(BlockProperties.FACING)
	//.placementState(callback =>{
		//callback.set(BlockProperties.FACING,callback.horizontalDirection.opposite)
	//})
	//.stoneSoundType()
})