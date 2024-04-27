import { Scene } from "phaser";

type Fruit = {
  name: string;
  radius: number;
  bounce: number;
  friction: number;
};

const fruits: Fruit[] = [
  { name: "fruit1", radius: 30, bounce: 0.8, friction: 0.005 },
  { name: "fruit2", radius: 35, bounce: 0.6, friction: 0.005 },
  { name: "fruit3", radius: 40, bounce: 0.4, friction: 0.005 },
  { name: "fruit4", radius: 50, bounce: 0.2, friction: 0.005 },
  { name: "fruit5", radius: 65, bounce: 0.1, friction: 0.005 },
  { name: "fruit6", radius: 70, bounce: 1, friction: 0.005 },
  { name: "fruit7", radius: 80, bounce: 0.2, friction: 0.005 },
  { name: "fruit8", radius: 90, bounce: 0.2, friction: 0.005 },
  { name: "fruit9", radius: 100, bounce: 0.2, friction: 0.005 },
  { name: "fruit10", radius: 110, bounce: 0.2, friction: 0.005 },
  { name: "fruit11", radius: 120, bounce: 0.2, friction: 0.005 },
];

export class PreloaderScene extends Scene {
  constructor() {
    super("preloader");
  }

  preload(): void {
    this.load.image("frame", "assets/frame.png");

    this.load.image("newgame", "assets/new_game.png");

    this.load.audio("theme", ["music/holder.mp3"]);

    for (let i = 0; i <= 9; i++) {
      this.load.image(`${i}`, `assets/${i}.png`);
    }

    for (const fruit of fruits) {
      this.load.image(`${fruit.name}`, `assets/${fruit.name}.png`);
    }
  }

  create(): void {
    this.scene.start("initial");
  }
}
