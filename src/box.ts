// 引入需要的three里面的模块
import { BoxGeometry, Mesh, MeshNormalMaterial, PerspectiveCamera, Scene, WebGL1Renderer,WebGLRenderer } from 'three';

// 获取场景
const scene = new Scene();
// 获取相机
const camera = new PerspectiveCamera(
  75, // 垂直夹角是75
  window.innerWidth / window.innerHeight, // 视口的宽高比
  0.1, // 近处的距离
  1000, // 远处的距离
);

// 自己创建画布
const canvas = <HTMLCanvasElement>document.getElementById('canvas'); // HTMLCanvasElement要做一个类型断言 
// 设置canvas的尺寸
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 实例话renderer
const renderer = new WebGLRenderer({canvas })

// 获取geometry对象，相当于webgl里的geo对象，该对象中存储了立方体的顶点、geo坐标、顶点索引等等
const geometry = new BoxGeometry();
// material是和数据相关的东西，即材质
const material = new MeshNormalMaterial();
// cube是立方体对象，几何体对象，即网格 
const cube = new Mesh( geometry, material );
// 将立方体添加到场景里，进行渲染
scene.add( cube );
// 设置相机位置，默认是在原点，赋值5可以设置距离远一点，方便观察
camera.position.z = 5;

// 给立方体来个动画，让它旋转起来
function animate(){
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  // console.log(cube.matrix.elements);// 上面修改了rotation的值，就会在cube里面一直变
  // 进行渲染
  renderer.render(scene,camera)
  
}
animate();