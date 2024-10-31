ClientEvents.init((event) => {
    $KeyMappingRegistry.register(global.testKey);
  });
  ClientEvents.tick((event) => {
    const key = global.testKey; // 访问global
    const { player } = event;
    if (key.consumeClick()) {
    event.player.triggerAnimation("tfcre:sit")
    player.sendData("global.testKey.consumeClick");
    }
  });