import { Level } from './Levels';
import { GameLevel } from './GameLevel';

export class Flags{

    public amount : number ;
    public image : string;

    constructor( gameLevel : GameLevel ){
        switch (gameLevel._level) {
            case Level.Easy : this.amount = 10;break;
            case Level.Medium : this.amount = 20;break;
            case Level.Hard : this.amount = 50;break;
        }
        this.image = null;
    }

    FlagUsed(){
        if( this.amount > 0 ){
            this.amount --;
            return;
        }
        throw new Error('Cannot use any more flags, flag amount is 0');
    }

    FlagReturned(){
        this.amount ++;
    }
}