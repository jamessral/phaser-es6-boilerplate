class GameState extends Phaser.State {
  create() {
    let center = { x: this.game.world.centerX, y: this.game.world.centerY }
    text.anchor.set(0.5);
  }
}

export default GameState;
