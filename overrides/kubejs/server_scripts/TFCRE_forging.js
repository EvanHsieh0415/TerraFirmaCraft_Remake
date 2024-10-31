ServerEvents.recipes(event => {
    event.remove({output:'sns:pack_frame'})
     
})
ServerEvents.recipes(event => {
    event.recipes.tfc.anvil
    (
        'sns:pack_frame',
        'tfc:metal/double_ingot/steel',
        ['punch_not_last', 'shrink_last']
    )
    .bonus(false)
    .tier(4)
})