/* eslint-disable */
const strip = require('strip-comments');
const code = `
const a = 1; // test comment
const b = "http://example.com";
/* disable eslint */
function c() {
    return 2;
}
`;

const stripped = strip(code, { keepProtected: true });
console.log(stripped);
