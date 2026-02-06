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

    let contador = 5;

    let p1 = -70; // posição inicial da conjunto de algas na tela no eixo x.

    while (contador > 0) { 

        this.add.image(p1,510 ,'algaRosa').setOrigin(0,0).setScale(0.05);

        p1 = p1 + 70; // espaçamento entre a alga rosa -> alga roxa

        this.add.image(p1,510 ,'algaRoxa').setOrigin(0,0).setScale(0.05);

        p1 = p1 + 50; // espaçamento entre a alga roxa -> alga verde

        this.add.image(p1,510 ,'algaVerde').setOrigin(0,0).setScale(0.05);

        p1 = p1 + 50;

        contador = contador - 1; 
    };
 

}

function update () {
    // para minha tartaruguinha seguir o mouse 
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}