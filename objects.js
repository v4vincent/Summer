
let game = {
    lives: 3,
    coins: 0,
    get points(){
        return this.coins * 10;
    }
}

game.playerDies = function (){
    if (this.lives > 0){
        this.lives -= 1;
    }
}

game.newGame = function (){
    this.lives = 3;
    this.coins = 0;
}