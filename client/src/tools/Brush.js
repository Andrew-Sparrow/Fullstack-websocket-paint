import Tool from "./Tool";

export default class Brush extends Tool {
  constructor(canvas) {
    super(canvas)
    this.listen()
  }

  listen(evt) {
    this.canvas.onmousemove = this.mouseHandler.bind(this)
    this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    this.canvas.onmouseup = this.mouseUpHandler.bind(this)
  }

  mouseUpHandler(evt) {
    this.mouseDown = false
  }
  mouseDownHandler(evt) {
    this.mouseDown = true
    this.ctx.beginPath()
    this.ctx.moveTo(evt.pageX - evt.target.offsetLeft, evt.pageY - evt.target.offsetTop)
  }
  mouseHandler(evt) {
    if (this.mouseDown) {
      this.draw(evt.pageX - evt.target.offsetLeft, evt.pageY - evt.target.offsetTop)
    }
  }

  draw(x, y) {
    this.ctx.lineTo(x, y)
    this.ctx.stroke()
  }
}