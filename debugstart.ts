import { parse } from './parser';
import { stringifyTree } from './treeprinter';

var ast = parse("+1");
console.log(JSON.stringify(ast, null, 2))