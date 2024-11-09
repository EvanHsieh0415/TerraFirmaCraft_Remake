ClientEvents.init((event) => {
    $KeyMappingRegistry.register(global.testKey);
});

ClientEvents.tick((event) => {
    const { player } = event;
    const { testKey } = global; // 访问 global

    if (testKey.consumeClick()) {
        event.player.triggerAnimation("tfcre:sit");
        player.sendData("global.testKey.consumeClick");
    }
});
