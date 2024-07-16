namespace SpriteKind {
    export const CommonFlower = SpriteKind.create()
    export const UnCommonFlower = SpriteKind.create()
    export const RareFlower = SpriteKind.create()
    export const EpicFlower = SpriteKind.create()
    export const LegendaryFlower = SpriteKind.create()
    export const MythicalFlower = SpriteKind.create()
    export const BadassFlower = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.CommonFlower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.EpicFlower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(8)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.UnCommonFlower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.MythicalFlower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(32)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BadassFlower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(64)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.LegendaryFlower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(16)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.RareFlower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(4)
})
let mySprite2: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(2000, function () {
    if (Math.percentChance(60)) {
        mySprite2 = sprites.create(img`
            . 6 6 6 6 6 . 
            6 6 1 1 1 6 6 
            6 1 5 5 5 1 6 
            6 1 5 5 5 1 6 
            6 6 1 1 1 6 6 
            . 6 6 7 6 6 . 
            . . 6 7 6 . . 
            . . 6 7 6 . . 
            . . 6 7 6 . . 
            . . 6 6 6 . . 
            `, SpriteKind.CommonFlower)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
    } else if (Math.percentChance(60)) {
        mySprite2 = sprites.create(img`
            . 6 6 6 6 6 . 
            6 6 9 9 9 6 6 
            6 9 5 5 5 9 6 
            6 9 5 5 5 9 6 
            6 6 9 9 9 6 6 
            . 6 6 7 6 6 . 
            . . 6 7 6 . . 
            . . 6 7 6 . . 
            . . 6 7 6 . . 
            . . 6 6 6 . . 
            `, SpriteKind.UnCommonFlower)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
    } else if (Math.percentChance(60)) {
        mySprite2 = sprites.create(img`
            . 6 6 6 6 6 . 
            6 6 2 2 2 6 6 
            6 2 5 5 5 2 6 
            6 2 5 5 5 2 6 
            6 6 2 2 2 6 6 
            . 6 6 7 6 6 . 
            . . 6 7 6 . . 
            . . 6 7 6 . . 
            . . 6 7 6 . . 
            . . 6 6 6 . . 
            `, SpriteKind.RareFlower)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
    } else if (Math.percentChance(60)) {
        mySprite2 = sprites.create(img`
            . 6 6 6 6 6 . 
            6 6 4 4 4 6 6 
            6 4 5 5 5 4 6 
            6 4 5 5 5 4 6 
            6 6 4 4 4 6 6 
            . 6 6 7 6 6 . 
            . . 6 7 6 . . 
            . . 6 7 6 . . 
            . . 6 7 6 . . 
            . . 6 6 6 . . 
            `, SpriteKind.EpicFlower)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
    } else if (Math.percentChance(60)) {
        mySprite2 = sprites.create(img`
            . 6 6 6 6 6 . 
            6 6 5 5 5 6 6 
            6 5 1 1 1 5 6 
            6 5 1 1 1 5 6 
            6 6 5 5 5 6 6 
            . 6 6 7 6 6 . 
            . . 6 7 6 . . 
            . . 6 7 6 . . 
            . . 6 7 6 . . 
            . . 6 6 6 . . 
            `, SpriteKind.LegendaryFlower)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
        mySprite2.startEffect(effects.halo)
    } else if (Math.percentChance(60)) {
        mySprite2 = sprites.create(img`
            . 6 6 6 6 6 . 
            6 6 a a a 6 6 
            6 a 5 5 5 a 6 
            6 a 5 5 5 a 6 
            6 6 a a a 6 6 
            . 6 6 7 6 6 . 
            . . 6 7 6 . . 
            . . 6 7 6 . . 
            . . 6 7 6 . . 
            . . 6 6 6 . . 
            `, SpriteKind.MythicalFlower)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
        mySprite2.startEffect(effects.halo)
    } else if (Math.percentChance(60)) {
        mySprite2 = sprites.create(img`
            . 6 6 6 6 6 . 
            6 6 f f f 6 6 
            6 f 5 5 5 f 6 
            6 f 5 5 5 f 6 
            6 6 f f f 6 6 
            . 6 6 7 6 6 . 
            . . 6 7 6 . . 
            . . 6 7 6 . . 
            . . 6 7 6 . . 
            . . 6 6 6 . . 
            `, SpriteKind.BadassFlower)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass2)
        mySprite2.startEffect(effects.halo)
        mySprite2.sayText("Thats a badass flower")
    }
})
