export class SoundEffect {
  private el: HTMLAudioElement;
  private ready = false;
  private continue = false;
  private loop = false;
  private start = 0;
  private end = 0;
  private _playing = false;
  private cutoff = 0;
  private currentCutoffTimeout: ReturnType<typeof setTimeout>;
  private currentLoopTimeout: ReturnType<typeof setTimeout>;
  private currentDurationTimeout: ReturnType<typeof setTimeout>;
  constructor(
    source: string,
    cutoff?: number,
    loop = false,
    start = 0,
    onLoad = (duration: number) => {
      return;
    }
  ) {
    this.el = new Audio(source);
    this.el.addEventListener(
      "load",
      (() => {
        this.ready = true;
        this.end = Math.min(cutoff, this.el.duration);
        onLoad(this.getDuration());
      }).bind(this)
    );
    if (cutoff) {
      this.cutoff = cutoff;
    }
    this.start = start;
    this.loop = loop;
  }

  public getDuration(): number {
    return this.end - this.start;
  }

  play(): void {
    this.el.play();
    this.continue = true;
    this.el.currentTime = this.start;
    this._playing = true;
    if (this.loop) {
      this.currentLoopTimeout = setTimeout(() => {
        if (!this.continue) return;
        this.el.currentTime = this.start;
        this.playRec();
      }, this.cutoff * 1000);
    } else if (this.cutoff > 0) {
      clearTimeout(this.currentCutoffTimeout);
      this.currentCutoffTimeout = setTimeout(() => {
        this.stop();
      }, this.cutoff * 1000);
    } else {
      clearTimeout(this.currentDurationTimeout);
      this.currentDurationTimeout = setTimeout(
        () => (this._playing = false),
        this.el.duration * 1000
      );
    }
  }

  playRec(): void {
    this.currentLoopTimeout = setTimeout(() => {
      if (!this.continue) return;
      this.el.currentTime = 0;
      this.playRec();
    }, this.cutoff * 1000);
  }

  stop(): void {
    this.el.pause();
    this.continue = false;
    this._playing = false;
    this.el.currentTime = 0;
  }

  public get playing(): boolean {
    return this._playing;
  }
}
