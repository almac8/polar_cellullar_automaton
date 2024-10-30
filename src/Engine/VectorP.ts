class VectorP {
  radius: number;
  theta: number;

  constructor(radius?: number, theta?: number) {
    this.radius = radius ?? 0;
    this.theta = theta ?? 0;
  }
}

export default VectorP;