import{r as m,a as l,j as n,c as d,b as u,d as j,e as x}from"./index-CbrezAOz.js";import{d as o,a as h}from"./Track-recommendation-B3QKRTyw.js";import{M as f,S as p}from"./Thumbnail-u5_CHvno.js";const v=[{name:"Demon Slayer",thumb:"./Audio/DemonSlayer/images.png"},{name:"Favourite",thumb:void 0},{name:"Doraemon",thumb:"./Audio/Doraemon/doraemon.jpg"}];function b({openedAlbum:a="Favourite",onClick:e=()=>{}}){const s=l(),c=v.filter(i=>i.name!==a);return n.jsxs("div",{className:"album-recommendation-container",children:[n.jsx("div",{className:"heading-font-size",children:"Album & sets selected for you"}),n.jsx("div",{className:"album-container",children:c.map(i=>n.jsx(N,{albumName:i.name,albumTrackCount:o[i.name].length,trackName:o[i.name][0].name,thumbnail:i.thumb,onClick:()=>{e(i.name),s(d(o[i.name][0].name)),s(u(o[i.name][0].source)),s(j("unknown")),s(x("./Icons/Music-icon3.jpg"))}},i.name))})]})}const g=m.memo(b);function N({thumbnail:a="./Icons/Music-icon3.jpg",albumName:e="Unknown",albumTrackCount:s=0,trackThumbnail:c,trackName:i,trackAuthor:t,onClick:r=()=>{}}){return a===""&&(a="./Icons/Music-icon3.jpg"),e===""&&(e="Unknown"),s===""&&(s="NaN"),n.jsxs("div",{className:"album",onClick:r,children:[n.jsx(f,{thumbnail:a,createDot:!0}),n.jsxs("div",{className:"album-details",children:[n.jsx("div",{className:"album-name",children:e.length>12?e.slice(0,10)+"..":e}),n.jsxs("div",{className:"album-track-count",children:[s," Tracks"]})]}),n.jsx(k,{thumbnail:c,trackName:i,trackAuthor:t})]})}function k({thumbnail:a="./Icons/Music-icon3.jpg",trackName:e="Unknown",trackAuthor:s="unknown"}){return a===""&&(a="./Icons/Music-icon3.jpg"),e===""&&(e="Unknown"),s===""&&(s="unknown"),n.jsxs("div",{className:"album-track-container normal-text-font-size",children:[n.jsx(p,{thumbnail:a}),n.jsxs("div",{className:"album-track-details",children:[n.jsx("div",{className:"album-track-name",title:e,children:e.length>7?e.slice(0,7)+"..":e}),n.jsx("div",{className:"album-track-author",children:s.length>7?s.slice(0,7)+"..":s})]})]})}function S(){const[a,e]=m.useState("Favourite");return n.jsxs("div",{className:"recommendation-container",children:[n.jsx(h,{albumName:a}),n.jsx(g,{openedAlbum:a,onClick:e})]})}export{S as default};
