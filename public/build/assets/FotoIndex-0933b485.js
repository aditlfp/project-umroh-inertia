import{r as o,j as e}from"./app-de41a49e.js";import{I as m}from"./ItemGalerry-e2893bdc.js";import{A as d}from"./AuthenticatedLayout-c0911777.js";import"./react-toastify.esm-8dbcef16.js";import c from"./FotoCreate-17cc6e1b.js";import{A as x,m as i}from"./index-d3b04a38.js";import"./FotoEdit-a92428be.js";import"./index.esm-5262379c.js";import"./index.esm-c6da0204.js";import"./AdminLayout-491c67cf.js";function N({foto:a}){const[s,t]=o.useState(),r=o.useRef(),l=()=>{t(!0)},n=()=>{t(!1)};return e.jsx(e.Fragment,{children:e.jsxs(d,{children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("span",{className:"text-lg font-semibold bg-[#C69749] text-white p-2 rounded-md",children:"Foto Gallery"}),e.jsxs("div",{children:[e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{onClick:()=>l(),className:"bg-[#C69749] p-3 text-white font-semibold rounded-md",children:"new data +"})}),e.jsx(e.Fragment,{children:e.jsx(m,{datas:a})})]})]}),e.jsx(x,{children:s&&e.jsx(i.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50",children:e.jsx(i.div,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},className:"bg-white w-1/3 p-4 rounded-md modal",ref:r,children:e.jsx(c,{closeModal:n})})})})]})})}export{N as default};
