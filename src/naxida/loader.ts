import scene from "./scene";
import * as THREE from "three";
import { MMDLoader } from "three/examples/jsm/loaders/MMDLoader.js";
import { MMDAnimationHelper } from "three/examples/jsm/animation/MMDAnimationHelper.js";
import camera from "./camera";

export const helper = new MMDAnimationHelper();

export class Loader {
  loadModels() {
    const loader = new MMDLoader();

    loader.loadWithAnimation(
      "/public/naxida/纳西妲.pmx", // called when the resource is loaded
      "./public/pose/face.vmd",
      function onLoad(mmd) {
        const { mesh } = mmd;
        helper.add(mmd.mesh, {
          animation: mmd.animation,
        });

        scene.getScene().add(mmd.mesh);
      }
    );

    loader.loadAnimation(
      "./public/pose/face.vmd",
      camera.getCamera(),
      function (cameraAnimation) {
        helper.add(camera.getCamera(), {
          animation: cameraAnimation as THREE.AnimationClip,
        });
      }
    );
  }
}

export default new Loader();
