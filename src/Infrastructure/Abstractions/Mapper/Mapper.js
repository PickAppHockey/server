function Mapper(){
    
    this.map =(entity,dto,destinationDto = true)=>{
        let src = destinationDto? entity: dto;
        let dest = destinationDto? dto : entity;
    
        for(let prop in dto){
            dest[prop] = src[prop];
        }
        return dest;    
    }
}

module.exports = Mapper;
