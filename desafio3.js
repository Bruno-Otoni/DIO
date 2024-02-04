class Heroi {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar() {
        let ataque = "";

        switch (this.type) {
            case "Mago":
                ataque = "usou magia";
                break;

            case "Guerreiro":
                ataque = "usou espada";
                break;

            case "Monge":
                ataque = "usou artes marciais";
                break;

            case "Ninja":
                ataque = "usou shuriken";
                break;

            default:
                ataque = "ataque desconhecido";
        }

        console.log(`O ${this.type} ${this.name} atacou usando ${ataque}`);
    }
}

const mago = new Heroi("Véio da Gota", 41, "Mago");
const guerreiro = new Heroi("Tio do Churras", 41, "Guerreiro");

mago.atacar();
guerreiro.atacar(); 