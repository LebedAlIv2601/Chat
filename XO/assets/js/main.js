
var GameState = {
preload: function() {
this.load.image('background', 'assets/images/dodze.png');
this.load.image('kvadrat', 'assets/images/kvadrat.png')
this.load.image('nolik', 'assets/images/nolik.png')
this.load.image('krestik', 'assets/images/krestik.png')
this.load.image('gamename', 'assets/images/gamename.png')
this.load.image('krestikiWin', 'assets/images/krestikiWin.png')
this.load.image('nolikWin', 'assets/images/nolikWin.png')
this.load.image('restartButton', 'assets/images/restartButton.png')

this.load.audio('music', 'assets/audio/music.mp3');
},

init: function() { 
this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
this.scale.pageAlignHorizontally = true;
this.scale.pageAlignVertically = true;
},

create: function() {
this.sound.play('music')
this.background = this.game.add.sprite(0,0,'background')
this.gamename = this.game.add.sprite(0,0,'gamename')
this.restartButton = this.game.add.sprite(640, this.game.world.centerY+300-20,'restartButton')
this.restartButton.anchor.setTo(0.5)
this.restartButton.inputEnabled = true
this.restartButton.input.pixelPerfectClick = true
this.restartButton.events.onInputDown.add(this.restart, this)

var x = 0
var y = this.game.world.centerY
this.button = [];
this.game.field = [];
this.game.turn = true;
this.game.count = 0;

this.button = this.game.add.sprite(550,this.game.world.centerY-90-20,'kvadrat');
this.button.inputEnabled = true
this.button.pixelPerfectClick = true
this.button.events.onInputDown.add(this.paint, self)

for (var i = 0; i < 9; i++) {

if(i > 0 && (i % 3) === 0)
y += 90

x = i % 3

this.button[i] = this.game.add.sprite(550+90 * x,y-20 ,'kvadrat');
this.button[i].prop = {number : i, status: true};
this.button[i].inputEnabled = true
this.button[i].pixelPerfectClick = true
this.button[i].events.onInputDown.add(this.paint, self)

}

// this.kvadratOne = this.game.add.sprite(550, this.game.world.centerY-90-20,'kvadrat')
// this.kvadratOne.anchor.setTo(0.5)
// this.kvadratOne.inputEnabled = true
// this.kvadratOne.input.pixelPerfectClick = true
// this.kvadratOne.events.onInputDown.add(this.paintOne, this)


// this.kvadratTwo = this.game.add.sprite(640, this.game.world.centerY-90-20,'kvadrat')
// this.kvadratTwo.anchor.setTo(0.5)
// this.kvadratTwo.inputEnabled = true
// this.kvadratTwo.input.pixelPerfectClick = true
// this.kvadratTwo.events.onInputDown.add(this.paintTwo, this)

// this.kvadratThree = this.game.add.sprite(730, this.game.world.centerY-90-20,'kvadrat')
// this.kvadratThree.anchor.setTo(0.5)
// this.kvadratThree.inputEnabled = true
// this.kvadratThree.input.pixelPerfectClick = true
// this.kvadratThree.events.onInputDown.add(this.paintThree, this)

// this.kvadratFour = this.game.add.sprite(550, this.game.world.centerY-20,'kvadrat')
// this.kvadratFour.anchor.setTo(0.5)
// this.kvadratFour.inputEnabled = true
// this.kvadratFour.input.pixelPerfectClick = true
// this.kvadratFour.events.onInputDown.add(this.paintFour, this)

// this.kvadratFive = this.game.add.sprite(640, this.game.world.centerY-20,'kvadrat')
// this.kvadratFive.anchor.setTo(0.5)
// this.kvadratFive.inputEnabled = true
// this.kvadratFive.input.pixelPerfectClick = true
// this.kvadratFive.events.onInputDown.add(this.paintFive, this)

// this.kvadratSix = this.game.add.sprite(730, this.game.world.centerY-20,'kvadrat')
// this.kvadratSix.anchor.setTo(0.5)
// this.kvadratSix.inputEnabled = true
// this.kvadratSix.input.pixelPerfectClick = true
// this.kvadratSix.events.onInputDown.add(this.paintSix, this)

// this.kvadratSeven = this.game.add.sprite(550, this.game.world.centerY+90-20,'kvadrat')
// this.kvadratSeven.anchor.setTo(0.5)
// this.kvadratSeven.inputEnabled = true
// this.kvadratSeven.input.pixelPerfectClick = true
// this.kvadratSeven.events.onInputDown.add(this.paintSeven, this)

// this.kvadratEight = this.game.add.sprite(640, this.game.world.centerY+90-20,'kvadrat')
// this.kvadratEight.anchor.setTo(0.5)
// this.kvadratEight.inputEnabled = true
// this.kvadratEight.input.pixelPerfectClick = true
// this.kvadratEight.events.onInputDown.add(this.paintEight, this)

// this.kvadratNine = this.game.add.sprite(730, this.game.world.centerY+90-20,'kvadrat')
// this.kvadratNine.anchor.setTo(0.5)
// this.kvadratNine.inputEnabled = true
// this.kvadratNine.input.pixelPerfectClick = true
// this.kvadratNine.events.onInputDown.add(this.paintNine, this)



},

update: function() {
this.winner(true)
this.winner(false)
},

actionOnClick: function(index) {
this.button.this.prop.index
},

paint: function(index){
var id = index.prop.number

if(index.prop.status) {
this.button = this.game.add.sprite(index.x, index.y, this.game.turn === true? 'krestik': 'nolik' );
this.game.field[id] = this.game.turn
this.game.turn === true? this.game.turn = false : this.game.turn = true;
this.game.count++;
}

index.prop.status = false
},

// paintOne: function(){


// 	if(!this.krest){
// 	this.krestik = this.game.add.sprite(550, this.game.world.centerY-90-20,'krestik')
// this.krestik.anchor.setTo(0.5)
// this.krest = true
// this.one = true
// } else {
// 		this.nolik = this.game.add.sprite(550, this.game.world.centerY-90-20,'nolik')
// this.nolik.anchor.setTo(0.5)
// this.krest = false
// this.one = false
// }
// this.kvadratOne.inputEnabled = false
// this.winner();
// },

// paintTwo: function(){

// 	if(!this.krest){
// 	this.krestik = this.game.add.sprite(640, this.game.world.centerY-90-20,'krestik')
// this.krestik.anchor.setTo(0.5)
// this.krest = true
// this.two = true
// } else {
// 		this.nolik = this.game.add.sprite(640, this.game.world.centerY-90-20,'nolik')
// this.nolik.anchor.setTo(0.5)
// this.krest = false
// this.two = false
// }
// this.kvadratTwo.inputEnabled = false
// this.winner();
// },

// paintThree: function(){
// 	if(!this.krest){
// 	this.krestik = this.game.add.sprite(730, this.game.world.centerY-90-20,'krestik')
// this.krestik.anchor.setTo(0.5)
// this.krest = true
// this.three = true
// } else {
// 		this.nolik = this.game.add.sprite(730, this.game.world.centerY-90-20,'nolik')
// this.nolik.anchor.setTo(0.5)
// this.krest = false
// this.three = false
// }
// this.kvadratThree.inputEnabled = false
// this.winner();
// },

// paintFour: function(){
// 	if(!this.krest){
// 	this.krestik = this.game.add.sprite(550, this.game.world.centerY-20,'krestik')
// this.krestik.anchor.setTo(0.5)
// this.krest = true
// this.four = true
// } else {
// 		this.nolik = this.game.add.sprite(550, this.game.world.centerY-20,'nolik')
// this.nolik.anchor.setTo(0.5)
// this.krest = false
// this.four = false
// }
// this.kvadratFour.inputEnabled = false
// this.winner();
// },

// paintFive: function(){
// 	if(!this.krest){
// 	this.krestik = this.game.add.sprite(640, this.game.world.centerY-20,'krestik')
// this.krestik.anchor.setTo(0.5)
// this.krest = true
// this.five = true
// } else {
// 		this.nolik = this.game.add.sprite(640, this.game.world.centerY-20,'nolik')
// this.nolik.anchor.setTo(0.5)
// this.krest = false
// this.five = false
// }
// this.kvadratFive.inputEnabled = false
// this.winner();
// },

// paintSix: function(){
// 	if(!this.krest){
// 	this.krestik = this.game.add.sprite(730, this.game.world.centerY-20,'krestik')
// this.krestik.anchor.setTo(0.5)
// this.krest = true
// this.six = true
// } else {
// 		this.nolik = this.game.add.sprite(730, this.game.world.centerY-20,'nolik')
// this.nolik.anchor.setTo(0.5)
// this.krest = false
// this.six = false
// }
// this.kvadratSix.inputEnabled = false
// this.winner();
// },

// paintSeven: function(){
// 	if(!this.krest){
// 	this.krestik = this.game.add.sprite(550, this.game.world.centerY+90-20,'krestik')
// this.krestik.anchor.setTo(0.5)
// this.krest = true
// this.seven = true
// } else {
// 		this.nolik = this.game.add.sprite(550, this.game.world.centerY+90-20,'nolik')
// this.nolik.anchor.setTo(0.5)
// this.krest = false
// this.seven = false
// }
// this.kvadratSeven.inputEnabled = false
// this.winner();
// },

// paintEight: function(){
// 	if(!this.krest){
// 	this.krestik = this.game.add.sprite(640, this.game.world.centerY+90-20,'krestik')
// this.krestik.anchor.setTo(0.5)
// this.krest = true
// this.eight = true
// } else {
// 		this.nolik = this.game.add.sprite(640, this.game.world.centerY+90-20,'nolik')
// this.nolik.anchor.setTo(0.5)
// this.krest = false
// this.eight = false
// }
// this.kvadratEight.inputEnabled = false
// this.winner();
// },

// paintNine: function(){
// 	if(!this.krest){
// 	this.krestik = this.game.add.sprite(730, this.game.world.centerY+90-20,'krestik')
// this.krestik.anchor.setTo(0.5)
// this.krest = true
// this.nine = true

// } else {
// 		this.nolik = this.game.add.sprite(730, this.game.world.centerY+90-20,'nolik')
// this.nolik.anchor.setTo(0.5)
// this.krest = false
// this.nine = false
// }
// this.kvadratNine.inputEnabled = false
// this.winner();
// },

restart: function(){
	location.reload();
},

winner: function(number){
	if((this.game.field[0] == number && this.game.field[1] == number && this.game.field[2] == number)||(this.game.field[0] == number && this.game.field[3] == number && this.game.field[6] == number)||(this.game.field[0] == number && this.game.field[4] == number && this.game.field[8] == number)||(this.game.field[1] == number && this.game.field[4] == number && this.game.field[7] == number)||(this.game.field[2] == number && this.game.field[5] == number && this.game.field[8] == number)||(this.game.field[2] == number && this.game.field[4] == number && this.game.field[6] == number)||(this.game.field[3] == number && this.game.field[4] == number && this.game.field[5] == number)||(this.game.field[6] == number && this.game.field[7] == number && this.game.field[8] == number)){
		if (number) {
		this.nolikWin = this.game.add.sprite(640, this.game.world.centerY-20,'nolikWin')
		this.nolikWin.anchor.setTo(0.5)
	}
		if (!number){
			this.krestikiWin = this.game.add.sprite(640, this.game.world.centerY-20,'krestikiWin')
		this.krestikiWin.anchor.setTo(0.5)
		}
	} 
// 	if (((this.one)&&(!this.kvadratOne.inputEnabled) && (!this.kvadratTwo.inputEnabled) && (this.two)&&(!this.kvadratThree.inputEnabled)&&(this.three))||((this.two)&&(!this.kvadratTwo.inputEnabled) && (!this.kvadratFive.inputEnabled) && (this.five)&&(!this.kvadratEight.inputEnabled)&&(this.eight))||((this.one)&&(!this.kvadratOne.inputEnabled) && (!this.kvadratFour.inputEnabled) && (this.four)&&(!this.kvadratSeven.inputEnabled)&&(this.seven))||((this.four)&&(!this.kvadratFour.inputEnabled) && (!this.kvadratFive.inputEnabled) && (this.five)&&(!this.kvadratSix.inputEnabled)&&(this.six))||((this.one)&&(!this.kvadratOne.inputEnabled) && (!this.kvadratFive.inputEnabled) && (this.five)&&(!this.kvadratNine.inputEnabled)&&(this.nine))||((this.three)&&(!this.kvadratThree.inputEnabled) && (!this.kvadratSix.inputEnabled) && (this.six)&&(!this.kvadratNine.inputEnabled)&&(this.nine))||((this.three)&&(!this.kvadratThree.inputEnabled) && (!this.kvadratFive.inputEnabled) && (this.five)&&(!this.kvadratSeven.inputEnabled)&&(this.seven))||((this.seven)&&(!this.kvadratSeven.inputEnabled) && (!this.kvadratEight.inputEnabled) && (this.eight)&&(!this.kvadratNine.inputEnabled)&&(this.nine))){
// 		this.krestikiWin = this.game.add.sprite(640, this.game.world.centerY-20,'krestikiWin')
// 		this.krestikiWin.anchor.setTo(0.5)
// }
},





};
var game = new Phaser.Game(1280, 720, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');