class Vector2 {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  add(v2: Vector2) {
    return new Vector2(
      this.x + v2.x,
      this.y + v2.y
    );
  }
}

export default Vector2;