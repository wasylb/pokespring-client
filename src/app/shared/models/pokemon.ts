export class Pokemon {
  id: string;
  name: string;
  type: string;
  avatarUrl: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;

  constructor() {
    this.id = '';
    this.name = '';
    this.type = '';
    this.avatarUrl = '';
    this.hp = 0;
    this.attack = 0;
    this.defense = 0;
    this.speed = 0;
  }
}
