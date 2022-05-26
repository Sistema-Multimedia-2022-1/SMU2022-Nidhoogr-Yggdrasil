// Import Phaser modules
import Phaser from "phaser";

import WebFontFile from '../assets/font/WebFontFile'

// Create scene
class ModeSelectionScene extends Phaser.Scene {
  constructor() {
    super({
      // Assigning a key to the the scene
      key: "ModeSelectionScene",
    });
  }

  // Preload assets
  preload()
  {
    this.load.addFile(new WebFontFile(this.load, 'Press Start 2P'));
  }

  // Creating all that will be used in the scene
  create() {
    // Creating interactive text to enter single player scene
    this.add
      .text(640, 360, "Single Player", {
        fontFamily: '"Press Start 2P"',
        fontSize: "30pt"
      })
      .setInteractive()
      .setOrigin(0.5, 0.5)
      .on(
        "pointerdown",
        () => {
          this.scene.start("GameScene");
        },
        this
      );

    // Creating interactive text to enter multiplayer scene
    this.add
      .text(640, 360, "Multiplayer - Create", {
        fontFamily: '"Press Start 2P"',
        fontSize: "30pt"
      })
      .setInteractive()
      .setOrigin(0.5, 0.5)
      .on(
        "pointerdown",
        () => {
          this.scene.start("LobbyScene", "create-room");
        },
        this
      );

    this.add
      .text(640, 460, "Multiplayer - Join", {
        fontFamily: '"Press Start 2P"',
        fontSize: "30pt"
      })
      .setInteractive()
      .setOrigin(0.5, 0.5)
      .on(
        "pointerdown",
        () => {
          this.scene.start("LobbyScene", "join-room");
        },
        this
      );
  }
}

export default ModeSelectionScene;
