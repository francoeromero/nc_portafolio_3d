import { atom, useAtom } from "jotai";
import { useEffect } from "react";
// HOJAS
const pictures = [
  // HOJAS 1 - 2
  "DSC00680",
  "DSC00933",
 // HOJAS 3 - 4
  "DSC00966",
  "DSC00983",
 // HOJAS 5 - 6
  "DSC01011",
  "DSC01040",
 // HOJAS 7 - 8
  "DSC01064",
  "DSC01071",
 // HOJAS 9 - 10
  "DSC01103",
  "DSC01145",
];
// INICIO DE LA PAGINA 0
export const pageAtom = atom(0);
// inicializamos front y back
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];

// bucle, agrega paginas 
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}
// agrega la tapa de frente y de atras
pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">

      <header className="flex justify-around items-center space-x-10 mt-10">
      <a
        className="pointer-events-auto"
        href="#"
      >
        <img className="w-20" src="/images/wawasensei-white.png" />
      </a>


      <a
  className="pointer-events-auto"
  href="#"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 430 430"
    width="80"
    height="80"
    preserveAspectRatio="xMidYMid meet"
    style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible' }}
  >
    <defs>
      <clipPath id="__lottie_element_51">
        <rect width="430" height="430" x="0" y="0"/>
      </clipPath>
      <clipPath id="__lottie_element_53">
        <path d="M0,0 L430,0 L430,430 L0,430z"/>
      </clipPath>
    </defs>
    <g clipPath="url(#__lottie_element_51)">
      <g clipPath="url(#__lottie_element_53)" transform="matrix(1,0,0,1,0,0)" opacity="1" style={{ display: 'block' }}>
        <g transform="matrix(1,0,0,1,-35,-35)" opacity="1" style={{ display: 'block' }}>
          <g opacity="1" transform="matrix(1,0,0,1,250,224.48)">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity="0"
              className="primary"
              stroke="white"
              strokeOpacity="1"
              strokeWidth="12.04"
              d="M0,158.64 C0,158.64 0,158.64 0,158.64 C-46.054,158.64 -82.648,119.943 -80.079,73.961 C-80.079,73.961 -73.414,-45.322 -73.414,-45.322 C-72.241,-66.316 -61.387,-84.577 -45.332,-95.869 C-34.532,-103.465 -21.377,-107.908 -7.232,-107.908 C-7.232,-107.908 7.233,-107.908 7.233,-107.908 C42.404,-107.908 71.452,-80.438 73.414,-45.322 C73.414,-45.322 80.079,73.961 80.079,73.961 C82.648,119.943 46.054,158.64 0,158.64z M0,-70.467 C0,-70.467 0,-107.912 0,-107.912 M75.532,-7.414 C45.449,20.97 -45.449,20.97 -75.532,-7.414 M0,13.87 C0,13.87 0,-13.432 0,-13.432"
            />
          </g>
          <g opacity="1" transform="matrix(1,0,0,1,250,182.561)">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity="0"
              className="secondary"
              stroke="#FF4500"
              strokeOpacity="1"
              strokeWidth="12.04"
              d="M-0.126,28.052 C-0.126,28.052 0.126,28.052 0.126,28.052 C6.991,28.052 12.556,22.487 12.556,15.622 C12.556,15.622 12.556,-15.622 12.556,-15.622 C12.556,-22.487 6.991,-28.052 0.126,-28.052 C0.126,-28.052 -0.126,-28.052 -0.126,-28.052 C-6.991,-28.052 -12.556,-22.487 -12.556,-15.622 C-12.556,-15.622 -12.556,15.622 -12.556,15.622 C-12.556,22.487 -6.991,28.052 -0.126,28.052z"
            />
          </g>
        </g>
        <g transform="matrix(1,0,0,1,215,41.003)" opacity="1" style={{ display: 'block' }}>
          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity="0"
              className="secondary"
              stroke="#FF4500"
              strokeOpacity="1"
              strokeWidth="12.04"
              d="M-25.617,12.808 C-25.617,12.808 0,-12.808 0,-12.808 C0,-12.808 25.617,12.808 25.617,12.808"
            />
          </g>
        </g>
        <g transform="matrix(1,0,0,-1,215,388.997)" opacity="1" style={{ display: 'block' }}>
          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity="0"
              className="secondary"
              stroke="#FF4500"
              strokeOpacity="1"
              strokeWidth="12.04"
              d="M-25.617,12.808 C-25.617,12.808 0,-12.808 0,-12.808 C0,-12.808 25.617,12.808 25.617,12.808"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
</a>


      <a
        className="pointer-events-auto"
        href="#"
      >
        {/* LOGO DERECHA */}
        {/* <img className="w-20" src="/images/wawasensei-white.png" /> */}
      </a>

    </header>






  <div className="fixed right-0 top-1/2 transform -translate-y-1/2 w-20 h-64 bg-gray-800 flex flex-col justify-around items-center rounded-l-lg">
  <a href="#" className="w-12 h-12 flex items-center justify-center">
    <img src="/images/cv.png" alt="Logo 1" className="w-full h-full object-contain" />
  </a>
  <a href="#" className="w-12 h-12 flex items-center justify-center">
    <img src="/images/llamada.png" alt="Logo 2" className="w-full h-full object-contain" />
  </a>
  <a href="#" className="w-12 h-12 flex items-center justify-center">
    <img src="/images/whatsap.png" alt="Logo 3" className="w-full h-full object-contain" />
  </a>
  </div>






        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "tapa" : `Pag ${index}`}
              </button>
            ))}
            
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              tapa final
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        {/* LETRAS DE FONDO */}
        {/* <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              Wawa Sensei
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              React Three Fiber
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Three.js
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Ultimate Guide
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Tutorials
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Learn
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              Practice
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creative
            </h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              Wawa Sensei
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              React Three Fiber
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Three.js
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Ultimate Guide
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Tutorials
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Learn
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              Practice
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creative
            </h2>
          </div>
        </div> */}
      </div>
    </>
  );
};
