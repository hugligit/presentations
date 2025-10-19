// SETTINGS {{{
const content = [
  ["Rectangles", rectangle, // {{{
    [
      ["Find area and perimeter of the shape", [5, 7]],
      ["Find area and perimeter of the shape", [13, 3]],
      ["Find area and perimeter of the shape", [6, 9]],
      ["Find area and perimeter of the shape", [10, 9]],
      ["Find area and perimeter of the shape", [4, 4]],
      ["Find area and perimeter of the shape", [3, 11]],
      ["Find area and perimeter of the shape", [8, 8]],
      ["Find area and perimeter of the shape", [5, 13]],
      ["Find area and perimeter of the shape", [4, 19]],
      ["Find area and perimeter of the shape", [6, 15]],
      ["Find area and perimeter of the shape", [12, 12]],
      ["Find area and perimeter of the shape", [2, 9]],
      ["Find area and perimeter of the shape", [10, 17]],
      ["Find area and perimeter of the shape", [7, 7]],
      ["Find area and perimeter of the shape", [14, 16]],
      ["Find area and perimeter of the shape", [3, 18]],
      ["Find area and perimeter of the shape", [9, 12]],
      ["Find area and perimeter of the shape", [5, 5]],
      ["Find area and perimeter of the shape", [11, 19]],
      ["Find area and perimeter of the shape", [4, 8]],
      ["Find area and perimeter of the shape", [6, 6]],
      ["Find area and perimeter of the shape", [7, 20]],
      ["Find area and perimeter of the shape", [10, 13]],
      ["Find area and perimeter of the shape", [9, 15]],
      ["Find area and perimeter of the shape", [16, 16]],
      ["Find area and perimeter of the shape", [3, 10]],
      ["Find area and perimeter of the shape", [2, 5]],
      ["Find area and perimeter of the shape", [8, 14]],
      ["Find area and perimeter of the shape", [12, 20]],
      ["Find area and perimeter of the shape", [11, 11]],
      ["Find area and perimeter of the shape", [4, 7]],
      ["Find area and perimeter of the shape", [9, 17]],
      ["Find area and perimeter of the shape", [15, 15]],
      ["Find area and perimeter of the shape", [5, 8]],
      ["Find area and perimeter of the shape", [6, 18]],
      ["Find area and perimeter of the shape", [13, 19]],
      ["Find area and perimeter of the shape", [10, 10]],
      ["Find area and perimeter of the shape", [7, 9]],
      ["Find area and perimeter of the shape", [3, 14]],
      ["Find area and perimeter of the shape", [4, 16]],
      ["Find area and perimeter of the shape", [12, 13]],
      ["Find area and perimeter of the shape", [18, 18]],
      ["Find area and perimeter of the shape", [5, 9]],
      ["Find area and perimeter of the shape", [8, 19]],
      ["Find area and perimeter of the shape", [9, 10]],
      ["Find area and perimeter of the shape", [2, 6]],
      ["Find area and perimeter of the shape", [11, 14]],
      ["Find area and perimeter of the shape", [13, 13]],
      ["Find area and perimeter of the shape", [7, 12]],
      ["Find area and perimeter of the shape", [4, 10]],
      ["Find area and perimeter of the shape", [6, 9]],
      ["Find area and perimeter of the shape", [15, 20]],
      ["Find area and perimeter of the shape", [5, 7]],
      ["Find area and perimeter of the shape", [17, 17]],
      ["Find area and perimeter of the shape", [8, 11]]
      ],
    ], // }}}
  ["Triangles", triangle, // {{{
    [
      ["Finding perimeters using grids", [3, 4, 5]],
      ["Finding perimeters using grids", [9, 4, 6]],
      ["Finding perimeters using grids", [5, 17, 13]],
      ["Finding perimeters using grids", [6, 8, 10]],
      ["Finding perimeters using grids", [8, 15, 17]],
      ["Finding perimeters using grids", [11, 14, 20]],
      ["Finding perimeters using grids", [9, 12, 15]],
      ["Finding perimeters using grids", [10, 24, 18]],
      ["Finding perimeters using grids", [12, 16, 20]],
      ["Finding perimeters using grids", [20, 21, 29]],
      ["Finding perimeters using grids", [15, 20, 25]],
      ["Finding perimeters using grids", [5, 5, 5]],
      ["Finding perimeters using grids", [4, 5, 6]],
      ["Finding perimeters using grids", [7, 7, 10]],
      ["Finding perimeters using grids", [8, 8, 8]],
      ["Finding perimeters using grids", [9, 9, 14]],
      ["Finding perimeters using grids", [11, 13, 17]],
      ["Finding perimeters using grids", [6, 7, 8]],
      ["Finding perimeters using grids", [3, 5, 7]],
      ["Finding perimeters using grids", [2, 6, 7]],
      ["Finding perimeters using grids", [14, 14, 18]],
      ["Finding perimeters using grids", [16, 17, 19]],
      ["Finding perimeters using grids", [12, 13, 14]],
      ["Finding perimeters using grids", [4, 9, 11]],
      ["Finding perimeters using grids", [10, 11, 12]],
      ["Finding perimeters using grids", [13, 13, 20]],
      ["Finding perimeters using grids", [2, 9, 10]],
      ["Finding perimeters using grids", [5, 7, 9]],
      ["Finding perimeters using grids", [6, 6, 10]],
      ["Finding perimeters using grids", [18, 7, 20]],
      ["Finding perimeters using grids", [1, 3, 3]],
      ["Finding perimeters using grids", [17, 8, 18]],
      ["Finding perimeters using grids", [14, 9, 12]],
      ["Finding perimeters using grids", [11, 11, 16]],
      ["Finding perimeters using grids", [2, 5, 6]],
      ["Finding perimeters using grids", [19, 10, 20]],
      ["Finding perimeters using grids", [21, 13, 18]],
      ["Finding perimeters using grids", [7, 11, 13]],
      ["Finding perimeters using grids", [9, 15, 18]],
      ["Finding perimeters using grids", [8, 13, 14]],
      ["Finding perimeters using grids", [3, 10, 12]],
      ["Finding perimeters using grids", [12, 12, 12]],
      ["Finding perimeters using grids", [5, 9, 13]],
      ["Finding perimeters using grids", [6, 11, 14]],
      ["Finding perimeters using grids", [4, 4, 6]],
      ["Finding perimeters using grids", [2, 7, 8]],
      ["Finding perimeters using grids", [13, 5, 12]]
    ],
  ], // }}}
  ];
// }}}
// GENERATE SLIDES {{{
const slides = document.querySelector(".slides");
content.forEach(
  (container) => {
    let c = document.createElement("section");
    c.classList.add("group");
    let h = document.createElement("section");
    h.innerHTML = `<h1 class="menu-title">${container[0]}</h1>`;
    h.insertAdjacentHTML("beforeend", `<h2>${container[0]}</h2>`);
    h.setAttribute("data-redraw", container[2]);
    c.appendChild(h);

    container[2].forEach(
      (subtitle) => {
        let s = document.createElement("section");
        let parameters = subtitle[1];
        s.innerHTML = `<h1 class="menu-title">${subtitle[0]}</h1>`;
        s.insertAdjacentHTML("beforeend", `<h4>${subtitle[0]}</h4>`);
        // s.setAttribute("data-redraw", subtitle[1]);
        container[1](s, parameters);
        // triangle(s);
        c.appendChild(s);
      }
    );
    slides.appendChild(c);
  }
);//}}}
// INITIALIZE {{{
Reveal.initialize({
  dependencies: [
    {src: "plugin/countdown/countdown.js"}
  ],
  katex: { trust: true },
  menu: {
    side: 'left',
    // custom: true,
    // themes: [
    //                { name: 'black', theme: 'dist/theme/black.css'},
    //             ],
    themes: true,
    themesPath: 'dist/theme/',

  },
  countdown: {
    defaultTime: 600,
    autostart: "no",
    tDelta: 10,
    playTickSoundLast: 5,
    tickSound: "http://soundbible.com/grab.php?id=2044&type=mp3",
    timeIsUpSound: "http://soundbible.com/grab.php?id=1746&type=mp3"
  },

  hash: true,
  // tldreveal does not support scroll view
  scrollActivationWidth: undefined,

  // Learn about plugins: https://revealjs.com/plugins/
  plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX, RevealMenu, Tldreveal.Tldreveal() ]
});
// }}}
// DRAW SLIDES {{{
// TRIANGLE 2 {{{
function triangle2(currentSlide){
  const draw = SVG().addTo(currentSlide).size(550, 550);

  // scale for visibility: 1 unit = 40 px
  const scale = 40;
  const A = {x: 40, y: 400};                   // bottom-left corner
  const B = {x: A.x + 11 * scale, y: 400};      // base: 4 units
  const C = {x: A.x, y: 200 - 3 * scale};      // height: 3 units

  // Draw triangle
  draw.polygon(`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`)
    .fill('none')
    .stroke({width: 3, color: '#fff'});

  draw.polyline([
    [A.x + 15, A.y], 
    [A.x + 15, A.y - 15], 
    [A.x, A.y - 15]
  ])
    .fill('none')
    .stroke({width: 2, colour: '#fff'});

  draw.fill('white');
  draw.font({
    // family: 'STIX Two Math',
    anchor: 'middle',
    size: 30
  })



  draw.text('4').move((A.x + B.x)/2 - 5, A.y + 10);           // base
  draw.text('3').move(A.x - 20, (A.y + C.y)/2 - 5);           // height
  draw.text('5').move((B.x + C.x)/2, (B.y + C.y)/2 );           // height
  // Vertex labels (optional)
  // draw.text('A').move(A.x - 15, A.y + 5);
  // draw.text('B').move(B.x + 5, B.y + 5);
  // draw.text('C').move(C.x - 10, C.y - 20);


}
// }}}
// TRIANGLE {{{
function triangle(currentSlide, parameters){
  // OLD {{{
  // const draw = SVG().addTo(currentSlide).size(550, 550);

  // scale for visibility: 1 unit = 40 px
  // const scale = 40;
  // const A = {x: 40, y: 400};                   // bottom-left corner
  // const B = {x: A.x + 11 * scale, y: 400};      // base: 4 units
  // const C = {x: A.x, y: 200 - 3 * scale};      // height: 3 units

  // Draw triangle
  // draw.polygon(`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`)
    // .fill('none')
    // .stroke({width: 3, color: '#fff'});

  // draw.polyline([
    // [A.x + 15, A.y], 
    // [A.x + 15, A.y - 15], 
    // [A.x, A.y - 15]
  // ])
    // .fill('none')
    // .stroke({width: 2, colour: '#fff'});

  // draw.fill('white');
  // draw.font({
    // family: 'STIX Two Math',
    // anchor: 'middle',
    // size: 30
  // })
  // draw.text('4').move((A.x + B.x)/2 - 5, A.y + 10);           // base
  // draw.text('3').move(A.x - 20, (A.y + C.y)/2 - 5);           // height
  // draw.text('5').move((B.x + C.x)/2, (B.y + C.y)/2 );           // height
  // }}}


  // NEW {{{
  // const draw = SVG().addTo(currentSlide).size('100%', '100%');
  const draw = SVG().addTo(currentSlide).size(550, 550);

  const a = parameters[0];
  const b = parameters[1];
  const c = parameters[2];
  

  // const sf = 50;
  const cosC = (a*a + b*b - c*c) / (2*b*a);
  const cosB = (a*a + c*c - b*b) / (2*c*a);
  const cosA = (b*b + c*c - a*a) / (2*b*c);

  console.log(a, b, c)
  console.log(cosA, cosB, cosC);
  const sinA = Math.sqrt(1 - cosA*cosA);

  const maxA = Math.max(b*cosA, c, Math.abs(b*cosA-c), b*sinA)
  const sf = 500/maxA;

  const cA = { x: 0, y: 0 };
  const cB = { x: c*sf, y: 0 };
  const cC = { x: b*sf * cosA, y: b*sf * sinA };

  const maxX = Math.max(cA.x, cB.x, cC.x);
  const maxY = Math.max(cA.y, cB.y, cC.y);
  

  let polygon = draw.polygon(` ${cA.x},${cA.y} ${cB.x},${cB.y} ${cC.x},${cC.y}`)
    .fill('none')
    .stroke({ width: 4, color: 'white', linecap: 'round', linejoin: 'round'})

  // let labelVertexA = draw.text("A").fill('red').move(cA.x, cA.y);
  // let labelVertexB = draw.text("B").fill('green').move(cB.x, cB.y);
  // let labelVertexC = draw.text("C").fill('blue').move(cC.x, cC.y);


  let labelLengthA = labelLength(cB, cC, a, draw);
  let labelLengthB = labelLength(cA, cC, b, draw);
  let labelLengthC = labelLength(cB, cA, c, draw);
  let labelLengthH;
  


  let height;
  if (cosA===0) { 
    height = draw.polygon(`0,0 3,0 3,3`)
    .fill('none')
    .stroke({ width: 3, color: 'white', linecap: 'round', linejoin: 'round', dasharray: '10 10'})
    labelLengthH = draw.polygon(`0,0 3,0 3,3`)
  }
  if (cosB===0) { 
    height = draw.polygon(`0,0 3,0 3,3`)
    .fill('none')
    .stroke({ width: 3, color: 'white', linecap: 'round', linejoin: 'round', dasharray: '10 10'})
    labelLengthH = draw.polygon(`0,0 3,0 3,3`)
  }
  if (cosC===0) { 
    height = draw.polygon(`0,0 3,0 3,3`)
    .fill('none')
    .stroke({ width: 3, color: 'white', linecap: 'round', linejoin: 'round', dasharray: '10 10'})
    labelLengthH = draw.polygon(`0,0 3,0 3,3`)
  }
  if(!(cosA===0 || cosB===0 || cosC===0)){
    height = draw.line(`${cC.x},${cC.y} ${cC.x},0`)
    .fill('none')
    .stroke({ width: 3, color: 'white', linecap: 'round', linejoin: 'round', dasharray: '10 10'})
    labelLengthH = labelLength(cC, {x: cC.x,y: 0}, Math.round(cC.y/sf), draw);
  }

  let base = draw.line(`${cC.x},0 ${cB.x},0`)
  .fill('none')
  .stroke({ opacity: 0.3,width: 3, color: 'white', linecap: 'round', linejoin: 'round', dasharray: '10 10'})




  let g = draw.group();
  g.add(height);
  g.add(base);
  g.add(polygon);
  // g.add(labelVertexA);
  // g.add(labelVertexB);
  // g.add(labelVertexC);
  g.add(labelLengthA);
  g.add(labelLengthB);
  g.add(labelLengthC);
  g.add(labelLengthH);

  g.move(20, 20);
  // }}}


}
// }}}
// RECTANGLE {{{
function rectangle(currentSlide, parameters){
  const size = 550;
  const offset = 20;
  let margin = 50;
  const width = parameters[0];
  const height = parameters[1];
  const max = Math.max(width, height);
  const sf = (size - margin*2-offset)/max;
  const hw = (width*sf)/2;
  const hh = (height*sf)/2;
  const draw = SVG().addTo(currentSlide).size(size, size);
  draw.fill('none').stroke({width: 4, color: '#fff'});
  // draw.fill("red")
  let A = {x: size/2 - hw, y: size/2 - hh};
  let B = {x: size/2 + hw, y: size/2 - hh};
  let C = {x: size/2 + hw, y: size/2 + hh};
  let D = {x: size/2 - hw, y: size/2 + hh};




  // let A = {x: margin, y: margin};
  // let B = {x: -margin+(width*sf), y: margin};
  // let C = {x: -margin+(width*sf), y: -margin+(height*sf)};
  // let D = {x: margin, y: (-margin+height*sf)};
  // draw.polygon(`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`)
  draw.polygon(`${A.x}, ${A.y} ${B.x}, ${B.y} ${C.x}, ${C.y} ${D.x}, ${D.y}`);




  draw.font({
    size: 50,
    anchor: 'middle'
  })


  draw.text(`${width}`).move((A.x + B.x)/2, A.y - offset).font({fill: 'white', stroke: 'none'});

  draw.text(`${height}`).move(C.x+offset, (A.y + D.y)/2).font({anchor: 'start', fill: 'white', stroke: 'none'});

  // draw.rect(300, 100)

}

// }}}

function labelLength(s, e, l, draw){
  const mx = Math.max(s.x, e.x)
  const nx = Math.min(s.x, e.x);
  const x = (mx-nx)/2 + nx
  const my = Math.max(s.y, e.y)
  const ny = Math.min(s.y, e.y);
  const y = (my-ny)/2 + ny

  // let background = draw.ellipse(30, 30).fill('white').stroke({color: 'black'}).move(x-15, y-15);
  let label = draw.text(`${l}`)
    .move(x, y-12)
    .stroke({color: '#669', width: 3})
    .attr('dominant-baseline', 'middle')
    .attr('text-anchor', 'middle');

  let label2 = draw.text(`${l}`)
    .move(x, y-12)
    .fill('white')
    .attr('dominant-baseline', 'middle')
    .attr('text-anchor', 'middle');


  
  let g = draw.group();
  // g.add(background);
  g.add(label);
  g.add(label2);
  
  return g
}
// }}}
