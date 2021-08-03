// eslint-disable-next-line no-undef
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export { prefix }



// EXAMPLE To fix the non-loading images on NEXT.js
// ...
// import { prefix } from './utils/prefix.js';
// ...
// <img src={`${prefix}/someimage.jpg`} alt='some alt text' />
// ...