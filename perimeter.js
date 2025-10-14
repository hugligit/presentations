// SETTINGS {{{
const content = [
  ["Rectangles", rectangle,
    [
      ["Find area and perimeter of the shape", [5, 7]],
      ["Find area and perimeter of the shape", [1, 13]],
      ["Find area and perimeter of the shape", [6, 8]],
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
    ],
    ["Triangles", triangle,
      [
        ["Finding perimeters using grids", "TPC"],
      ],
    ],
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
// TRIANGLE {{{
function triangle(currentSlide){
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
// }}}
