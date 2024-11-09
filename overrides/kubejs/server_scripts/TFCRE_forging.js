ServerEvents.recipes((event) => {
    const { tfc } = event.recipes;

    event.remove({ output: "sns:pack_frame" });

    tfc.anvil("sns:pack_frame", "tfc:metal/double_ingot/steel", ["punch_not_last", "shrink_last"]).bonus(false).tier(4);
});
