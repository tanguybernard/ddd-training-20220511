import MatchDto from "./match-dto"

export default class MatchDao{

    save(name: string){
        return new MatchDto(1, name);
    }

}