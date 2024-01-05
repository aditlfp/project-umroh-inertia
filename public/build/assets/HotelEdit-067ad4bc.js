import{W as g,r as n,j as e,y as f}from"./app-7fb21f07.js";import{R as x}from"./index.esm-4f1570b3.js";import{Q as c}from"./react-toastify.esm-8b6e2cdf.js";import{n as p}from"./no-image-c6047506.js";function w({datas:s,closeModal:m}){const{data:t,setData:d,patch:u,errors:o}=g({id:s.id,img:"",oldimage:s.hotel}),[h,l]=n.useState();n.useEffect(()=>{async function i(){try{(await fetch(`/storage/images/${s.hotel}`)).ok?l(`/storage/images/${s.hotel}`):l(p)}catch(r){console.error("Error fetching image:",r)}}s.hotel&&i()},[s.hotel]);const a=async i=>{i.preventDefault();try{f.post(`hotel/${t.id}`,{_method:"patch",img:t.img,oldimage:t.oldimage}),c.success("Done"),m()}catch(r){c.error("Telah Terjadi Error"),console.error(r)}};return e.jsxs("div",{children:[e.jsxs("form",{onSubmit:a,className:"mx-5",encType:"multipart/form-data",children:[e.jsx("span",{className:"flex justify-center items-center text-lg font-bold",children:e.jsx("p",{children:"Edit Hotel"})}),e.jsxs("div",{className:"my-2 flex flex-col",children:[e.jsx("label",{htmlFor:"img",children:"Upload Gambar"}),!t.img&&t.oldimage==null&&e.jsx("label",{htmlFor:"img",className:"bg-slate-300/70 rounded-lg my-4 drop-shadow-md",children:e.jsxs("span",{className:"flex items-center gap-2 justify-center py-16 font-semibold",children:[e.jsx(x,{className:"font-bold"}),e.jsx("p",{children:"Pilih Gambar"})]})}),e.jsx("input",{type:"file",id:"img",name:"img",onChange:i=>d("img",i.target.files[0]),className:"hidden",accept:"image/*"}),o.img&&e.jsx("span",{className:"text-red-500",children:o.img}),e.jsx("div",{children:e.jsx("label",{htmlFor:"img",className:"flex justify-center items-center rounded-md ",children:e.jsx("img",{src:t.img?URL.createObjectURL(t.img):h,alt:"Image Preview",style:{maxWidth:"160px"},className:"rounded-md drop-shadow-md"})})})]})]}),e.jsxs("div",{className:"flex justify-between mt-5",children:[e.jsx("button",{onClick:m,className:"py-2 px-4 rounded-md bg-[#ce2f2f] text-white font-semibold",children:"Kembali"}),e.jsx("button",{onClick:a,type:"submit",className:"py-2 px-4 rounded-md bg-[#C69749] text-white font-semibold",children:"Submit"})]})]})}export{w as default};