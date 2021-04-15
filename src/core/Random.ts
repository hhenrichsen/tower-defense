class Random {
  gaussian(count = 6): number {
    let rand = 0;

    for (let i = 0; i < count; i++) {
      rand += Math.random();
    }

    return rand / count - 0.5;
  }
  withoutReplacement(top: number): Array<number> {
    const arr: Array<number> = [];
    for (let i = 1; i <= top; i++) {
      arr[i - 1] = i;
    }
    this.shuffleArray(arr);
    return arr;
  }

  withoutReplacementGenerator(top: number): Generator<number, number, number> {
    const arr: Array<number> = [];
    for (let i = 1; i <= top; i++) {
      arr[i - 1] = i;
    }
    this.shuffleArray(arr);
    return (function* () {
      for (let i = 0; i < arr.length; i++) yield arr[i];
      while (true) yield 0;
    })();
  }

  shuffleArray<T>(array: Array<T>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

export const random = new Random();
