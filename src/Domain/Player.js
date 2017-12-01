

function Player(id){
    this.id = id;
    this.username = null;
    this.hash = null;
    this.position = null;
    this.skillLevel = null;
    this.gender = null;

    this.editProfile =(username, hash, position, skillLevel, gender)=>{
        this.username = username;
        this.hash = hash;
        this.position = position;
        this.skillLevel = skillLevel;
        this.gender = gender;
    }
}

module.exports = Player;