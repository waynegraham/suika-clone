import { Scene, Types } from "phaser";

export class InitialScene extends Scene {
  constructor() {
    super("initial");
  }

  create(): void {
    this.scene.start("PreloaderScene");
  }
}
