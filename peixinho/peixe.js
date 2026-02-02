var config = { 
    type: Phaser.AUTO,
    width: 800, 
    height: 600, 

    scene: { 
        preload: preload, 
        create: create, 
        update: update
    }
}; 

var game = new Phaser.Game(config); 

var peixinho; 


function preload() {
    this.load.image ('mar', 'assets/bg_azul-claro.png');

    this.load.image ('logo', 'assets/logo-inteli_branco.png');

    this.load.image ('tartaruga', 'assets/tartaruga.png');

    this.load.image('algaRosa', 'assets/alga.png');

    this.load.image('algaRoxa', 'assets/algaRoxa.png');

    this.load.image('algaVerde', 'assets/algaVerde.png');
}
function create () {
    this.add.image(400, 300, 'mar');

    this.add.image(10, 10, 'logo').setScale(0.5).setOrigin(0,0); 

    peixinho = this.add.image(400, 300, 'tartaruga').setOrigin(0.5, 0.5).setFlip(true, false);

    peixinho.setFlip(true, false)

    var listaAlgas = ['algaRosa', 'algaRoxa', 'algaVerde'];

    for (var j = 0; j < 5; j++) {

        for (var i = 0; i < listaAlgas.length; i++) {
            var xPos = -10 + (i * 70) + (j * 210); 

            this.add.image(xPos, 510, listaAlgas[i])
                .setOrigin(0, 0)
                .setScale(0.05);
        }
    }

}
function update () {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}