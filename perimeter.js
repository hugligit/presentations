// SETTINGS {{{
const content = [
  ["Perimeter",
    [
      ["Finding perimeters using grids", "TPC"],
      ["Finding the perimeter of rectangles and simple shapes", "TPC"],
      ["Finding the perimeter of compound shapes", "TPC"],
    ],
  ],
  ["Area",
    [
      ["Finding areas using grids", "TPC"],
      ["Finding the area of rectangles", "TPC"],
      ["Finding the area of compound shapes", "TPC"],
      ["Finding the area of triangles", "TPC"],
      ["Finding the area of compound shapes containing triangles", "TPC"],
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
    h.setAttribute("data-redraw", container[1]);
    c.appendChild(h);

    container[1].forEach(
      (subtitle) => {
        let s = document.createElement("section");
        s.innerHTML = `<h1 class="menu-title">${subtitle[0]}</h1>`;
        s.insertAdjacentHTML("beforeend", `<h2>${subtitle[0]}</h2>`);
        s.setAttribute("data-redraw", subtitle[1]);
        triangle(s);
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
function triangle(currentSlide){


  // const currentSlide = deck.getCurrentSlide();
  // currentSlide.innerHTML = "";
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

  // Mark right angle
  draw.polyline([
    [A.x + 15, A.y], 
    [A.x + 15, A.y - 15], 
    [A.x, A.y - 15]
  ])
    .fill('none')
    .stroke({width: 2, colour: '#fff'});

  draw.fill('white');
  draw.font({
    family: 'STIX Two Math',
    anchor: 'middle',
    size: 30
  })



  // draw.text('x').move(100, 100).font({
  //   family: 'STIX Two Math',
  //   size: 20,
  //   weight: 'normal',
  // });



  // Labels
  // draw.text('4').move((A.x + B.x)/2 - 5, A.y + 10);           // base
  draw.text('4').move((A.x + B.x)/2 - 5, A.y + 10);           // base
  draw.text('3').move(A.x - 20, (A.y + C.y)/2 - 5);           // height
  draw.text('5').move((B.x + C.x)/2, (B.y + C.y)/2 );           // height

  // Vertex labels (optional)
  // draw.text('A').move(A.x - 15, A.y + 5);
  // draw.text('B').move(B.x + 5, B.y + 5);
  // draw.text('C').move(C.x - 10, C.y - 20);


}
//
// }}}
