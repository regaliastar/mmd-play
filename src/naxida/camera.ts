import * as THREE from "three";

export class Camera {
  private _camera: THREE.PerspectiveCamera;

  constructor() {}

  getCamera() {
    return this._camera;
  }

  init(container: HTMLElement) {
    const { clientHeight, clientWidth } = container;
    this._camera = new THREE.PerspectiveCamera(
      90,
      clientWidth / clientHeight,
      0.1,
      1000
    );

    // this._camera.lookAt(1.6, 14, -4);
    this._camera.lookAt(0, 1, 0);
  }
}

export default new Camera();
