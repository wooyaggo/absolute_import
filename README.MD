# Absolute path for import.

## 1. For Javascript.

```
process.env.NODE_PATH = "./bin;";
require( "module" ).Module._initPaths();
```

 - line 1 : Set <code>NODE_PATH</code> programtically.
 - line 2 : Update module paths.

### Use

import absolute path.

```
import * as util from 'util/date';

console.log( util.dateToStr( Date.now() ) );
```

Legacy code is

```
import * as util from './util/date';
```

### Use inside folder

Import in side sub folder.

```
import * as util from 'util/date';

console.log( "Test", util.dateToStr( Date.now() ) );
```

Legacy code is

```
import * as util from '../util/date';

console.log( "Test", util.dateToStr( Date.now() ) );
```

## 2. For TypeScript

Add option into <code>tsconfig.json</code>

```
"baseUrl": "src",
"paths": {
	"*": ["*"]
}
```

Now, typescript will find module inside <code>baseUrl</code> if not found default module scope.

See https://nodejs.org/api/modules.html#modules_all_together