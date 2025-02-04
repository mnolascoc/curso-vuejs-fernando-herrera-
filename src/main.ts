import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
// import "./bases/01-const-let";
// import "./bases/02-objets";
// import "./bases/03-arrays";
// import "./bases/04-functions";
// import "./bases/05-desestructuracion-obj";
// import "./bases/06-desestructuracion-arreglos";
// import "./bases/07-import-export";
// import "./bases/08-promesas";
// import "./bases/09-fetch-api";
// import "./bases/10-axios";
import "./bases/11-async-await";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
  </div>
`;
