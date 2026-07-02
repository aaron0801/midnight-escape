import Phaser from 'phaser';
import { MidnightTestScene } from './scenes/MidnightTestScene.js';

export function createGame(parent) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: 960,
    height: 540,
    backgroundColor: '#10151f',
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
      },
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      expandParent: true,
      autoRound: true,
    },
    scene: [MidnightTestScene],
  });
}
