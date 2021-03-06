import { Location } from "./Location";
import { state } from "./State";

export class Block extends Location {
  private _isFlagged: boolean;

  public _state: state;

  private _isMined: boolean = false;

  private _nearby_mines: number = 0;

  constructor(x: number, y: number) {
    super(x, y);
    this._isFlagged = false;
    this._state = state.unset;
  }

  open() {
    this._state = state.open;
  }

  get state() {
    return this._state;
  }

  set state(value: state) {
    this._state = value;
  }

  get isMined(): boolean {
    return this._isMined;
  }
  set isMined(newIsMined: boolean) {
    this._isMined = newIsMined;
  }
  get isFlagged(): boolean {
    return this._isFlagged;
  }
  set isFlagged(value: boolean) {
    this._isFlagged = value;
  }
  get nearbyMines(){
    return this._nearby_mines
  }
  set nearbyMines(value: number){
    this._nearby_mines = value
  }
}
