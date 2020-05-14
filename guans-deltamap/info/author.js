/* Basic information are listed below. For more info or wanna contact author please email haywardryan@foxmail.com */
let author = 'GUANS-Lab';
let email = 'qguan@kent.edu';
let institution = 'Kent State University';
let members = ['Betis', 'Safa', 'Hailong', 'Zhengyong', 'Yuxin', "Shaolun"];
let page = 'http://www.guans.cs.kent.edu/';
/* Create the logo via document.getElementById('divBox').innerHTML = logoOrigin */
let logoOrigin = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 5 220 85" width="180" height="65"><style type="text/css">.st0 {fill: none;stroke: #DD2911;stroke-width: 2px;}.st1 {fill: none;stroke: #007E45;stroke-width: 2px;}.st2{fill: #4737FF;}.st3 {fill: none;}</style><g><line class="st0" x1="117.3" y1="38.1" x2="80.6" y2="19.8"/><line class="st1" x1="52.6" y1="24.2" x2="153.4" y2="39.5"/><circle class="st2" cx="193.6" cy="44.2" r="4"/></g><g><rect x="14" y="12.3" class="st3" width="176.6" height="44.4"/><path class="st2" d="M19.9,17.1h9.5c6.8,0,10.4,4.6,10.4,10.2c0,7.7-5,13.1-14.2,13.1H15L19.9,17.1z M21.2,36h4.9c5.6,0,8-4.1,8-8.5c0-4-2.1-6.1-6-6.1h-3.8L21.2,36z"/><path class="st2" d="M47.5,33.1c0,0.1,0,0.3,0,0.5c0,1.9,1,3.4,3.5,3.4c2,0,2.8-0.6,3.5-1.6h5.3c-1.1,2.9-3.9,5.5-9.2,5.5c-5.7,0-8.1-3.5-8.1-7.8c0-4.7,3.2-10.2,10.4-10.2c5.6,0,8.1,3.3,8.1,7.3c0,1-0.1,1.8-0.4,2.9H47.5z M56,29.8c0-0.1,0-0.2,0-0.3c0-1.8-1.1-2.9-3.4-2.9c-2.4,0-3.8,1.4-4.3,3.3H56z"/><path class="st2" d="M62.5,40.4l5.2-24.6h5.1l-5.2,24.6H62.5z"/><path class="st2" d="M73.8,23.3h3l1.1-5.1H83l-1.1,5.1h3.8l-0.8,3.8h-3.8l-1.6,7.4c-0.3,1.5-0.2,2.1,1.4,2.1c0.5,0,1.4,0,1.8-0.1L82,40.1c-0.9,0.3-2.1,0.4-3.3,0.4c-4,0-5.1-1.9-4.4-5.1l1.8-8.3h-3L73.8,23.3z"/><path class="st2" d="M102.5,35.8c-0.5,2.3-0.8,3.9-0.9,4.6h-5c0-0.5,0.1-1.5,0.2-2.1c-1.1,1.5-2.9,2.5-6,2.5c-4.4,0-5.8-2.8-5.8-5c0-4.9,5-6,9.3-6.4c1.3-0.1,3.2-0.2,4.4-0.2l0.1-0.3c0.3-1.4-0.4-2.6-2.9-2.6c-2,0-3,0.7-3.4,1.9h-5.3c0.6-2.5,2.5-5.4,8.8-5.4c7.5,0,8.5,3.6,7.7,7.1L102.5,35.8z M98,32.6c-1.2,0-2.5,0.1-3.5,0.2c-1.8,0.2-4.1,0.6-4.1,2.5c0,1,0.8,1.7,2.4,1.7c2.8,0,4.5-1.3,5.2-4.2L98,32.6z"/><path class="st2" d="M138.2,31.5c0.8-4,1.9-8.2,2.6-10.8h0c-1.9,4.2-5.7,11.1-10.1,19.7h-4.8c-0.5-7.1-1.2-15.3-1.4-19.7h0c-0.4,2.7-1.2,7.2-2,11.2l-1.8,8.5h-4.9l4.9-23.2h7.8c0.6,6.6,1.4,14.5,1.4,16.5h0c1.3-2.7,5.2-9.8,8.7-16.5h7.8l-4.9,23.2h-5.2L138.2,31.5z"/><path class="st2" d="M163.6,35.8c-0.5,2.3-0.8,3.9-0.9,4.6h-5c0-0.5,0.1-1.5,0.2-2.1c-1.1,1.5-2.9,2.5-6,2.5c-4.4,0-5.8-2.8-5.8-5c0-4.9,5-6,9.3-6.4c1.3-0.1,3.2-0.2,4.4-0.2l0.1-0.3c0.3-1.4-0.4-2.6-2.9-2.6c-2,0-3,0.7-3.4,1.9h-5.3c0.6-2.5,2.5-5.4,8.8-5.4c7.5,0,8.5,3.6,7.7,7.1L163.6,35.8z M159.1,32.6c-1.2,0-2.5,0.1-3.5,0.2c-1.8,0.2-4.1,0.6-4.1,2.5c0,1,0.8,1.7,2.4,1.7c2.8,0,4.5-1.3,5.2-4.2L159.1,32.6z"/><path class="st2" d="M172.6,38.6l-1.9,9h-5.1l4.1-19.3c0.5-2.3,0.8-4.1,1-4.9h5.1c0,0.4-0.1,1-0.3,2c1.3-1.4,2.8-2.5,5.8-2.5c4.1,0,6.6,3.2,6.6,7.2c0,5.6-3.5,10.8-9.9,10.8C174.7,40.9,173.3,39.6,172.6,38.6z M182.4,30.6c0-2.1-0.9-3.7-3.4-3.7c-2.6,0-4.5,1.8-5.1,4.9c-0.6,3.1,0.7,4.9,3.4,4.9C180.6,36.7,182.4,34.1,182.4,30.6z"/></g></svg>'
let createLogo = (className='logo')=>{
    /* Set className(requried) before use it */
    /* 
    eg. document.getElementById('sideBookmark').innerHTML = dm.info.createLogo('myClass')
    */
    return `<svg class=${className} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 5 220 85" width=180 height=65><style type="text/css">.st0 {fill: none;stroke: #DD2911;stroke-width: 2px;}.st1 {fill: none;stroke: #007E45;stroke-width: 2px;}.st2{fill: #4737FF;}.st3 {fill: none;}</style><g><line class="st0" x1="117.3" y1="38.1" x2="80.6" y2="19.8"/><line class="st1" x1="52.6" y1="24.2" x2="153.4" y2="39.5"/><circle class="st2" cx="193.6" cy="44.2" r="4"/></g><g><rect x="14" y="12.3" class="st3" width="176.6" height="44.4"/><path class="st2" d="M19.9,17.1h9.5c6.8,0,10.4,4.6,10.4,10.2c0,7.7-5,13.1-14.2,13.1H15L19.9,17.1z M21.2,36h4.9c5.6,0,8-4.1,8-8.5c0-4-2.1-6.1-6-6.1h-3.8L21.2,36z"/><path class="st2" d="M47.5,33.1c0,0.1,0,0.3,0,0.5c0,1.9,1,3.4,3.5,3.4c2,0,2.8-0.6,3.5-1.6h5.3c-1.1,2.9-3.9,5.5-9.2,5.5c-5.7,0-8.1-3.5-8.1-7.8c0-4.7,3.2-10.2,10.4-10.2c5.6,0,8.1,3.3,8.1,7.3c0,1-0.1,1.8-0.4,2.9H47.5z M56,29.8c0-0.1,0-0.2,0-0.3c0-1.8-1.1-2.9-3.4-2.9c-2.4,0-3.8,1.4-4.3,3.3H56z"/><path class="st2" d="M62.5,40.4l5.2-24.6h5.1l-5.2,24.6H62.5z"/><path class="st2" d="M73.8,23.3h3l1.1-5.1H83l-1.1,5.1h3.8l-0.8,3.8h-3.8l-1.6,7.4c-0.3,1.5-0.2,2.1,1.4,2.1c0.5,0,1.4,0,1.8-0.1L82,40.1c-0.9,0.3-2.1,0.4-3.3,0.4c-4,0-5.1-1.9-4.4-5.1l1.8-8.3h-3L73.8,23.3z"/><path class="st2" d="M102.5,35.8c-0.5,2.3-0.8,3.9-0.9,4.6h-5c0-0.5,0.1-1.5,0.2-2.1c-1.1,1.5-2.9,2.5-6,2.5c-4.4,0-5.8-2.8-5.8-5c0-4.9,5-6,9.3-6.4c1.3-0.1,3.2-0.2,4.4-0.2l0.1-0.3c0.3-1.4-0.4-2.6-2.9-2.6c-2,0-3,0.7-3.4,1.9h-5.3c0.6-2.5,2.5-5.4,8.8-5.4c7.5,0,8.5,3.6,7.7,7.1L102.5,35.8z M98,32.6c-1.2,0-2.5,0.1-3.5,0.2c-1.8,0.2-4.1,0.6-4.1,2.5c0,1,0.8,1.7,2.4,1.7c2.8,0,4.5-1.3,5.2-4.2L98,32.6z"/><path class="st2" d="M138.2,31.5c0.8-4,1.9-8.2,2.6-10.8h0c-1.9,4.2-5.7,11.1-10.1,19.7h-4.8c-0.5-7.1-1.2-15.3-1.4-19.7h0c-0.4,2.7-1.2,7.2-2,11.2l-1.8,8.5h-4.9l4.9-23.2h7.8c0.6,6.6,1.4,14.5,1.4,16.5h0c1.3-2.7,5.2-9.8,8.7-16.5h7.8l-4.9,23.2h-5.2L138.2,31.5z"/><path class="st2" d="M163.6,35.8c-0.5,2.3-0.8,3.9-0.9,4.6h-5c0-0.5,0.1-1.5,0.2-2.1c-1.1,1.5-2.9,2.5-6,2.5c-4.4,0-5.8-2.8-5.8-5c0-4.9,5-6,9.3-6.4c1.3-0.1,3.2-0.2,4.4-0.2l0.1-0.3c0.3-1.4-0.4-2.6-2.9-2.6c-2,0-3,0.7-3.4,1.9h-5.3c0.6-2.5,2.5-5.4,8.8-5.4c7.5,0,8.5,3.6,7.7,7.1L163.6,35.8z M159.1,32.6c-1.2,0-2.5,0.1-3.5,0.2c-1.8,0.2-4.1,0.6-4.1,2.5c0,1,0.8,1.7,2.4,1.7c2.8,0,4.5-1.3,5.2-4.2L159.1,32.6z"/><path class="st2" d="M172.6,38.6l-1.9,9h-5.1l4.1-19.3c0.5-2.3,0.8-4.1,1-4.9h5.1c0,0.4-0.1,1-0.3,2c1.3-1.4,2.8-2.5,5.8-2.5c4.1,0,6.6,3.2,6.6,7.2c0,5.6-3.5,10.8-9.9,10.8C174.7,40.9,173.3,39.6,172.6,38.6z M182.4,30.6c0-2.1-0.9-3.7-3.4-3.7c-2.6,0-4.5,1.8-5.1,4.9c-0.6,3.1,0.7,4.9,3.4,4.9C180.6,36.7,182.4,34.1,182.4,30.6z"/></g></svg>`
}

let info = {
    author,
    email,
    institution,
    members,
    page,
    logoOrigin,
    createLogo
}

export {
    info
}