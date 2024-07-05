# Tetris Game

A childhood memory Tetris game built with Angular and Akita.

## How to play

### Before playing

- You can use both keyboard and mouse to play. But prefer to use <u>keyboard</u>
- Press arrow left and right to change the speed of the game **(1 - 6)**. The higher the number, the faster the piece will fall
- Press arrow up and down to change how many of lines have been filled before starting the game **(1 - 10)**
- Press `Space` to start the game
- Press `P` for pause/resume game
- Press `R` for resetting the game
- Press `S` for the turn on/off the sounds

### Playing game

- Press `Space` make the piece drop quickly
- Press `Arrow left` and `right` for moving left and right
- Press `Arrow up` to rotate the piece
- Press `Arrow down` to move a piece faster
- When clearing lines, you will receive a point - 100 points for 1 line, 300 points for 2 lines, 700 points for 3 lines, 1500 points for 4 lines
- The drop speed of the pieces increases with the number of rows eliminated (one level up for every 20 lines cleared)

## Development Challenge

I got the inspiration from the same but different [Tetris game built with Vue][vue]. To not reinvented the wheel, I started to look at Vue code and thought it would be very identical to Angular. But later on, I realized a few catches:

- The Vue source code was written a few years ago with pure JS. I could find several problems that the compiler didn't tell you. Such as giving `parseInt` a number. It is still working though, but I don't like it.
- There was extensive use of `setTimeout` and `setInterval` for making animations. I rewrote all of the animation logic using RxJS. You will see the detail below.
- The brain of the game also used `setTimeout` for the game loop. It was not a problem, but I was having a <u>hard time</u> understanding the code on some essential elements: how to render the piece to the UI, how the calculation makes sense with XY axis. In the end, I changed all of the logic to a proper OOP way using TypeScript class, based on [@chrum/ngx-tetris][ngx-tetris].

### Tetris Core

It is the most important part of the game. As I am following the Vue source code, It is getting harder to understand what was the developer's intention. The Vue version inspired me but I think I have to write the core Tetris differently.

Take a look at the two blocks of code below which do the same rendering piece on the screen and you will understand what I am talking about. The left side was rewritten with Angular and TypeScript and the right side was the JS version.

### Tetris Game

I always think that your code must be written as you talk to people, without explaining a word. Otherwise, when someone comes in and reads your code and maintains it, they will be struggling.

> “ Code is like humor. When you have to explain it, it’s bad.” – Cory House

And let me emphasize it again, I didn't write the brain of the game from scratch. I adapted the well-written source by [@chrum/ngx-tetris][ngx-tetris] for Tetris core. I did refactor some parts to support Akita and wrote some new functionality as well.

### Akita state management + dev tool support

Although you don't dispatch any action, Akita will still do it undo the hood as the Update action. And you still can see the data with [Redux DevTools][redux-devtool]. Remember to put that option into your `AppModule`

```ts
imports: [environment.production ? [] : AkitaNgDevtools.forRoot()];
```

![Tetris Game][akita-devtool]

> Note: opening the DevTools could reduce the performance of the game significantly. I recommended you turn it off when you want to archive a high score 🤓

### Customizing Piece

I defined a base [Piece class][piece-class] for a piece. And for each type of piece, it will extend from the same base class to inherit the same capability

[piece-class]: src/app/interface/piece/piece.ts

```ts
export class Piece {
  x: number;
  y: number;
  rotation = PieceRotation.Deg0;
  type: PieceTypes;
  shape: Shape;
  next: Shape;

  private shapes: Shapes;
  private lastConfig: Partial<Piece>;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  store(): Piece {
    this.lastConfig = {
      x: this.x,
      y: this.y,
      rotation: this.rotation,
      shape: this.shape
    };
    return this.newPiece();
  }

  //code removed for brevity
}
```

For example, I have a piece L. I create a new class name [PieceL][piecel]. I will contain the shape of L in four different rotation so that I don't have to mess up with the math to do minus plus on the XY axis. And I think defining in that way makes the code self-express better. If you see 1, it means on the matrix it will be filled, 0 mean empty tile.

If my team member needs to maintain the code, I hope he will understand what I was trying to write immediately. Or maybe not 🤣

One import property of the Piece is the `next` property to display the piece shape on the decoration box for the upcoming piece.

[piecel]: src/app/interface/piece/L.ts

```ts
const ShapesL: Shapes = [];
ShapesL[PieceRotation.Deg0] = [
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 1, 0, 0]
];

ShapesL[PieceRotation.Deg90] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 0],
  [1, 0, 0, 0]
];
//code removed for brevity

export class PieceL extends Piece {
  constructor(x: number, y: number) {
    super(x, y);
    this.type = PieceTypes.L;
    this.next = [
      [0, 0, 1, 0],
      [1, 1, 1, 0]
    ];
    this.setShapes(ShapesL);
  }
}
```

Now is the interesting part, you create a custom piece by yourself. Simply create a new class that extends from `Piece` with different rotations.

For instance, I will define a new piece call F with class name [`PieceF`][piecef]. That is how it should look like.

[piecef]: https://github.com/trungk18/tetris-game/blob/feature/pieceF/src/app/interface/piece/F.ts

```ts
const ShapesF: Shapes = [];
ShapesF[PieceRotation.Deg0] = [
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 1, 0, 0]
];

export class PieceF extends Piece {
  constructor(x, y) {
    super(x, y);
    this.type = PieceTypes.F;
    this.next = [
      [1, 0, 1, 0],
      [1, 1, 1, 1]
    ];
    this.setShapes(ShapesF);
  }
}
```

And the last step, go to [PieceFactory][piecefactory] to add the new PieceF into the available pieces.

[piecefactory]: src/app/factory/piece-factory.ts

```ts
export class PieceFactory {
  private available: typeof Piece[] = [];

  constructor() {
    //code removed for brevity
    this.available.push(PieceF);
  }
}
```

And you're all set, this is the result. See how easy it is to understand the code and add a custom piece that you like.

The source code for that custom piece F, you can see at [feature/pieceF][feature/piecef] branch.

![Tetris Game Piece F][piecef-demo]

[feature/piecef]: https://github.com/trungk18/tetris-game/tree/feature/pieceF
[piecef-demo]: src/game/assets/readme/piecef-demo.gif

### Animation

I rewrote the animation with RxJS. See the comparison below for the simple dinosaurs running animation at the beginning of the game.

You could do a lot of stuff if you know RxJS well enough :) I think I need to strengthen my RxJS knowledge soon enough as well. Super powerful.

![Tetris Game][compare02]

The actual result doesn't look very identical but it is good enough in my standard.

![Tetris Game][compare02-result]

### Web Audio API

There are many sound effects in the game such as when you press space, or left, right. In reality, all of the sounds were a reference to a single file [assets/tetris-sound.mp3][sounds].

I don't have much experience working with audio before but the Web Audio API looks very promising. You could do more with it.

- See the [official documentation][webaudio]
- See how I load the mp3 file and store it in [sound-manager.service.ts][sound-manager]
- [Writing Web Audio API code that works in every browser][web_audio_api_cross_browser]

### Keyboard handling

I planned to use [@ngneat/hotkeys][hotkeys] but I decided to use `@HostListener` instead. A simple implementation could look like:

```typescript
@HostListener(`${KeyDown}.${TetrisKeyboard.Left}`)
keyDownLeft() {
  this.soundManager.move();
  this.keyboardService.setKeỵ({
    left: true
  });
  if (this.hasCurrent) {
    this.tetrisService.moveLeft();
  } else {
    this.tetrisService.decreaseLevel();
  }
}
```

See more at [containers/tetris-game/tetris-game.component.ts][hotkeys-implementation]

## Setting up development environment 🛠

- `git clone https://github.com/ramironunes/tetris.git`
- `cd tetris/frontend`
- `npm start`
- The app should run on `http://localhost:4200/`

## Credits and references

| Resource                                      | Description                                                                                                                       |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [@Binaryify/vue-tetris][vue]                  | Vue Tetris, I reused part of HTML, CSS and static assets from that project                                                        |
| [@chrum/ngx-tetris][ngx-tetris]               | A comprehensive core Tetris written with Angular, I reused part of that for the brain of the game.                                |
| [Game Development: Tetris in Angular][medium] | A detailed excellent article about how to build a complete Tetris game. I didn't check the code but I learned much more from that |
| [Super Rotation System][srs]                  | A standard for how the piece behaves. I didn't follow everything but it is good to know as wells                                  |

## Contributing

If you have any ideas, just [open an issue][issues] and tell me what you think.

If you'd like to contribute, please fork the repository and make changes as you'd like. [Pull requests][pull] are warmly welcome.

## License

Feel free to use my code on your project. It would be great if you put a reference to this repository.

[MIT](https://opensource.org/licenses/MIT)

[issues]: https://github.com/ramironunes/tetris/issues/new/choose
[pull]: https://github.com/ramironunes/tetris/pulls
[medium]: https://medium.com/angular-in-depth/game-development-tetris-in-angular-64ef96ce56f7
[srs]: https://tetris.fandom.com/wiki/SRS
[vue]: https://github.com/Binaryify/vue-tetris
[tetris]: src/game/assets/readme/retro-tetris.jpg
[demo]: src/game/assets/readme/tetris-game-demo.gif
[iphonex]: src/game/assets/readme/tetris-game-iphonex.gif
[ngx-tetris]: https://github.com/chrum/ngx-tetris
[techstack]: src/game/assets/readme/tech-stack.png
[compare02-result]: src/game/assets/readme/compare02-result.gif
[timespending]: src/game/assets/readme/time-spending.png
[akita-devtool]: src/game/assets/readme/akita-devtool.gif
[sounds]: src/game/assets/tetris-sound.mp3
[sound-manager]: src/app/services/sound-manager.service.ts
[webaudio]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
[redux-devtool]: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
[hotkeys]: https://github.com/ngneat/hotkeys
[hotkeys-implementation]: src/app/containers/tetris-game/tetris-game.component.ts
[chautran]: https://github.com/nartc
[web_audio_api_cross_browser]: https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Web_Audio_API_cross_browser
