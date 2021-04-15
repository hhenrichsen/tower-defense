import Vector2 from "../geometry/Vector2";
import { Texture } from "./Texture";
import { VirtualCoordinateSystem } from "./VirtualCoordinate";

export class VirtualCanvas {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private virtualSize: Vector2;
  private aspectRatio: Vector2;
  private vcs: VirtualCoordinateSystem;
  private installed = false;
  private parent: HTMLElement;

  constructor(virtualSize: Vector2) {
    this.virtualSize = virtualSize;
    this.aspectRatio = virtualSize.normalize();
  }

  public install(element: HTMLElement): void {
    const canvas = document.createElement("canvas");
    this.canvas = canvas;
    this.initCanvas();
    element.appendChild(canvas);
    this.parent = element;
    this.installed = true;
    this.resize();
  }

  private initCanvas() {
    const canvas = this.canvas;
    this.context = this.canvas.getContext("2d");
    canvas.width = this.virtualSize.x;
    canvas.height = this.virtualSize.y;
    canvas.id = "canvas";
    canvas.addEventListener("resize", this.resize);
  }

  public findCanvas() {
    const el = document.getElementById("canvas");
    if (el.nodeName.toLowerCase() !== "canvas") {
      console.error(`Cannot find valid canvas, found ${el.nodeName} instead.`);
    } else {
      this.canvas = el as HTMLCanvasElement;
      this.initCanvas();
    }
  }

  public uninstall(): void {
    this.installed = false;
    this.parent.removeEventListener("resize", this.resize);
  }

  public drawText(
    text: string,
    position: Vector2,
    style?: string,
    size = 1,
    font = "Montserrat",
    textAlign: CanvasTextAlign = "center",
    weight = 500
  ): void {
    const adjustedPosition = this.vcs.translate(position);
    this.context.fillStyle = style || "#ffffff";
    this.context.font = `${weight} ${size * 16}px ${font}`;
    this.context.textAlign = textAlign;
    this.context.fillText(text, adjustedPosition.x, adjustedPosition.y);
  }

  public drawImage(
    texture: Texture,
    position: Vector2,
    size: Vector2,
    rotation = 0,
    opacity = 1
  ): void {
    if (!texture.ready) {
      return;
    }
    this.context.globalAlpha = opacity;
    const adjustedPosition = this.vcs.translate(position);
    const adjustedSize = this.vcs.translate(size);
    this.context.save();
    this.context.translate(adjustedPosition.x, adjustedPosition.y);
    this.context.rotate((rotation * Math.PI) / 180);
    this.context.translate(-adjustedPosition.x, -adjustedPosition.y);
    this.context.drawImage(
      texture.texture,
      adjustedPosition.x - adjustedSize.x / 2,
      adjustedPosition.y - adjustedSize.y / 2,
      adjustedSize.x,
      adjustedSize.y
    );
    this.context.restore();
    this.context.globalAlpha = 1;
  }

  public drawCircle(
    center: Vector2,
    radius: number,
    fillStyle?: string,
    strokeStyle?: string,
    lineWidth?: number
  ): void {
    const adjustedPosition = this.vcs.translate(center);
    const adjustedRadius = this.vcs.translateValueX(radius);

    this.context.fillStyle = fillStyle || "#ffffff00";
    this.context.beginPath();
    this.context.arc(
      adjustedPosition.x,
      adjustedPosition.y,
      adjustedRadius,
      0,
      2 * Math.PI
    );
    this.context.fill();

    this.context.strokeStyle = strokeStyle || "#ff0000";
    this.context.lineWidth = this.vcs.translateValueX(lineWidth) || 1;
    this.context.arc(
      adjustedPosition.x,
      adjustedPosition.y,
      adjustedRadius,
      0,
      2 * Math.PI
    );
    this.context.stroke();
  }

  public drawImageAnimated(
    texture: Texture,
    position: Vector2,
    rotation: number,
    size: Vector2,
    frameSize: Vector2,
    frame: number,
    opacity = 1
  ): void {
    if (!texture.ready) {
      return;
    }
    this.context.globalAlpha = opacity;
    const adjustedPosition = this.vcs.translate(position);
    const adjustedSize = this.vcs.translate(size);
    this.context.save();
    this.context.translate(adjustedPosition.x, adjustedPosition.y);
    this.context.rotate((rotation * Math.PI) / 180);
    this.context.translate(-adjustedPosition.x, -adjustedPosition.y);
    this.context.drawImage(
      texture.texture,
      frameSize.x * frame,
      0,
      frameSize.x,
      frameSize.y,
      adjustedPosition.x - adjustedSize.x / 2,
      adjustedPosition.y - adjustedSize.y / 2,
      adjustedSize.x,
      adjustedSize.y
    );
    this.context.restore();
    this.context.globalAlpha = 1;
  }

  public drawRectangle(
    p1: Vector2,
    p2: Vector2,
    fillStyle: string | CanvasPattern | CanvasGradient = "#ffffff00",
    strokeStyle: string | CanvasPattern | CanvasGradient = "#ffffff00"
  ): void {
    const p1adj = this.vcs.translate(p1);
    const p2adj = this.vcs.translate(p2);

    this.context.fillStyle = fillStyle || "#ff0000";
    this.context.fillRect(
      p1adj.x,
      p1adj.y,
      p2adj.x - p1adj.x,
      p2adj.y - p1adj.y
    );

    this.context.strokeStyle = strokeStyle || "#ff0000";
    this.context.strokeRect(
      p1adj.x,
      p1adj.y,
      p2adj.x - p1adj.x,
      p2adj.y - p1adj.y
    );
  }

  public line(
    p1: Vector2,
    p2: Vector2,
    style?: string | CanvasPattern | CanvasGradient
  ): void {
    const p1adj = this.vcs.translate(p1);
    const p2adj = this.vcs.translate(p2);
    this.beginPath();
    this.strokeStyle = style || "#ff0000";
    this.context.lineTo(p1adj.x, p1adj.y);
    this.context.lineTo(p2adj.x, p2adj.y);
    this.stroke();
  }

  public beginPath(): void {
    this.context.beginPath();
  }

  public set strokeStyle(style: string | CanvasPattern | CanvasGradient) {
    this.context.strokeStyle = style;
  }

  public stroke(): void {
    this.context.stroke();
  }

  private translate(vec: Vector2): void {
    const target = this.vcs.translate(vec);
    this.context.translate(target.x, target.y);
  }

  public clear(): void {
    this.context.clearRect(
      0,
      0,
      this.vcs.translateValueX(this.virtualSize.x),
      this.vcs.translateValueY(this.virtualSize.y)
    );
  }

  public getCoordinates(): VirtualCoordinateSystem {
    return this.vcs;
  }

  public getOffset(): Vector2 {
    const rect = this.canvas.getBoundingClientRect();
    return new Vector2(rect.x, rect.y);
  }

  private resize(): void {
    if (
      this.parent.clientWidth / this.aspectRatio.x <
      this.parent.clientHeight / this.aspectRatio.y
    ) {
      this.canvas.width = this.parent.clientWidth;
      this.canvas.height =
        (this.parent.clientWidth * this.aspectRatio.y) / this.aspectRatio.x;
    } else {
      this.canvas.width =
        (this.parent.clientHeight * this.aspectRatio.x) / this.aspectRatio.y;
      this.canvas.height = this.parent.clientHeight;
    }

    this.vcs = new VirtualCoordinateSystem(
      this.canvas.width / this.virtualSize.x,
      this.canvas.height / this.virtualSize.y
    );
  }
}
