// set NODE_PATH programatically and force update.
process.env.NODE_PATH = "./bin;";
require( "module" ).Module._initPaths();

import * as util from 'util/date';

console.log( util.dateToStr( Date.now() ) );

import "sub/test";