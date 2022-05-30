import { makeAutoObservable } from "mobx";

class ToolState {
  tool = null
  constructor() {
    makeAutoObservable(this)
  }

  setTool(canvas) {
    this.tool = canvas
  }
}

export default new ToolState()
