# react-native-avsc

Simple JavaScript wrapper for [avsc](https://github.com/mtth/avsc) module, based in [avsc-js](https://github.com/aszmyd/avsc-js).

## Installation

```
$ npm install react-native-avsc
```

## Usage

```
import { avro } from 'react-native-avsc';

var type = avro.parse({
  name: 'Pet',
  type: 'record',
  fields: [
    {name: 'kind', type: {name: 'Kind', type: 'enum', symbols: ['CAT', 'DOG']}},
    {name: 'name', type: 'string'}
  ]
});
// console.log(type);
var buf = type.toBuffer({kind: 'CAT', name: 'Albert'}); // Encoded buffer.
var val = type.fromBuffer(buf); // {kind: 'CAT', name: 'Albert'}
```

## Limitations

+ The same as here https://github.com/mtth/avsc#limitations
+ No support for **file-related** operations, so `avsc.decodeFile` and `avsc.getFileHeader` **are not available**
+ `avsc.parse` support schema as an **`object` only** (we cannot read file in browser so passing string will not work)

## License

"Azuki", "Azk" and the Azuki logo are copyright (c) 2013-2016 Azuki Serviços de Internet LTDA.

Azk-dev source code is released under Apache 2 License.

Check LEGAL and LICENSE files for more information.

