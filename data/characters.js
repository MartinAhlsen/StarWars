

function Character(name, role, weapon) {
    this.name = name,
    this.role = role,
    this.weapon = weapon
}

const luke = new Character ("Luke Skywalker", "farm boy", " lightsaber");
const obi = new Character ("Obi-wan Kenobi", "Jedi council member", "blue lightsaber");


export const jediKnights = [luke, obi];
export const sithLords = [
    new Character("Darth Vader", "Absent father", "red lightsaber"),
    new Character("Emperor Palpatine", "Emperor", "lightning"),
    new Character("Darth Maul", "Assasin", "Saberstaff")

]