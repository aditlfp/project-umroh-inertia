import{W as o,j as e}from"./app-de41a49e.js";import{R as c}from"./index.esm-5262379c.js";import{Q as m}from"./react-toastify.esm-8dbcef16.js";function f({closeModal:t}){const{data:a,setData:i,post:d,processing:x,errors:l,reset:p}=o({img:"",desc:""}),r=s=>{if(s.preventDefault(),!a.img){m.error("Tolong Masukkan Gambar");return}d(route("galery.store"),{onSuccess:()=>{m.success("Foto Has Been Created!"),t()}})},n=s=>{r(s)};return e.jsxs("div",{children:[e.jsxs("form",{onSubmit:r,className:"mx-5",encType:"multipart/form-data",children:[e.jsx("span",{className:"flex justify-center items-center text-lg font-bold",children:e.jsx("p",{children:"Tambah Foto"})}),e.jsxs("div",{className:"my-2 flex flex-col",children:[e.jsx("label",{htmlFor:"img",children:"Upload Gambar"}),!a.img&&e.jsx("label",{htmlFor:"img",className:"bg-slate-300/70 rounded-lg my-4 drop-shadow-md",children:e.jsxs("span",{className:"flex items-center gap-2 justify-center py-16 font-semibold",children:[e.jsx(c,{className:"font-bold"}),e.jsx("p",{children:"Pilih Gambar"})]})}),e.jsx("input",{type:"file",id:"img",name:"img",onChange:s=>i("img",s.target.files[0]),className:"hidden",accept:"image/*"}),l.img&&e.jsx("span",{className:"text-red-500",children:l.img}),a.img&&e.jsx("div",{children:e.jsx("label",{htmlFor:"img",className:"flex justify-center items-center rounded-md ",children:e.jsx("img",{src:URL.createObjectURL(a.img),alt:"Image Preview",style:{maxWidth:"160px"},className:"rounded-md drop-shadow-md"})})})]}),e.jsxs("div",{className:"my-2 flex flex-col",children:[e.jsx("label",{children:"Deskripsi"}),e.jsx("textarea",{cols:"5",rows:"5",className:"rounded-lg drop-shadow-md",placeholder:"Masukkan deskripsi...",onChange:s=>i("desc",s.target.value),name:"desc",value:a.desc})]})]}),e.jsxs("div",{className:"flex justify-between mt-5",children:[e.jsx("button",{onClick:t,className:"py-2 px-4 rounded-md bg-[#ce2f2f] text-white font-semibold",children:"Kembali"}),e.jsx("button",{onClick:n,type:"submit",className:"py-2 px-4 rounded-md bg-[#C69749] text-white font-semibold",children:"Submit"})]})]})}export{f as default};
