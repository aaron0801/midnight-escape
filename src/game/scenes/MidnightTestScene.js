import Phaser from 'phaser';

const PLAYER_SPEED = 230;

export class MidnightTestScene extends Phaser.Scene {
  constructor() {
    super('MidnightTestScene');
    this.player = null;
    this.cursors = null;
    this.wasd = null;
    this.pointerTarget = null;
  }

  create() {
    this.physics.world.setBounds(0, 0, 960, 540);
    this.cameras.main.setBackgroundColor('#10151f');

    this.drawFloor();

    this.add
      .text(32, 28, '午夜逃殺場 / 本機單人測試', {
        color: '#edf5ff',
        fontFamily: 'Arial, "Noto Sans TC", sans-serif',
        fontSize: '24px',
        fontStyle: '700',
      })
      .setDepth(2);

    this.add
      .text(32, 62, '鍵盤 WASD / 方向鍵，手機可點住畫面移動方塊', {
        color: '#9fb1c8',
        fontFamily: 'Arial, "Noto Sans TC", sans-serif',
        fontSize: '16px',
      })
      .setDepth(2);

    this.player = this.add.rectangle(480, 300, 34, 34, 0x66f2b8);
    this.player.setStrokeStyle(3, 0xeafff7);
    this.physics.add.existing(this.player);
    this.player.body.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasd = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });

    this.input.on('pointerdown', (pointer) => {
      this.pointerTarget = new Phaser.Math.Vector2(pointer.worldX, pointer.worldY);
    });

    this.input.on('pointermove', (pointer) => {
      if (pointer.isDown) {
        this.pointerTarget = new Phaser.Math.Vector2(pointer.worldX, pointer.worldY);
      }
    });

    this.input.on('pointerup', () => {
      this.pointerTarget = null;
    });
  }

  update() {
    const body = this.player.body;
    const keyboardVector = this.getKeyboardVector();

    if (keyboardVector.lengthSq() > 0) {
      keyboardVector.normalize().scale(PLAYER_SPEED);
      body.setVelocity(keyboardVector.x, keyboardVector.y);
      this.pointerTarget = null;
      return;
    }

    if (this.pointerTarget) {
      const pointerVector = new Phaser.Math.Vector2(
        this.pointerTarget.x - this.player.x,
        this.pointerTarget.y - this.player.y,
      );

      if (pointerVector.length() > 10) {
        pointerVector.normalize().scale(PLAYER_SPEED);
        body.setVelocity(pointerVector.x, pointerVector.y);
        return;
      }
    }

    body.setVelocity(0, 0);
  }

  getKeyboardVector() {
    const x =
      Number(this.cursors.right.isDown || this.wasd.right.isDown) -
      Number(this.cursors.left.isDown || this.wasd.left.isDown);
    const y =
      Number(this.cursors.down.isDown || this.wasd.down.isDown) -
      Number(this.cursors.up.isDown || this.wasd.up.isDown);

    return new Phaser.Math.Vector2(x, y);
  }

  drawFloor() {
    const graphics = this.add.graphics();

    graphics.fillStyle(0x151c28, 1);
    graphics.fillRect(0, 0, 960, 540);

    graphics.lineStyle(1, 0x273246, 0.75);
    for (let x = 0; x <= 960; x += 48) {
      graphics.lineBetween(x, 0, x, 540);
    }
    for (let y = 0; y <= 540; y += 48) {
      graphics.lineBetween(0, y, 960, y);
    }

    graphics.lineStyle(4, 0x425a78, 1);
    graphics.strokeRect(16, 96, 928, 412);
  }
}
