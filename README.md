<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# smskmin

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the minimum value of a single-precision floating-point strided array according to a mask.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import smskmin from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-smskmin@esm/index.mjs';
```

#### smskmin( N, x, strideX, mask, strideMask )

Computes the minimum value of a single-precision floating-point strided array `x` according to a `mask`.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';

var x = new Float32Array( [ 1.0, -2.0, -4.0, 2.0 ] );
var mask = new Uint8Array( [ 0, 0, 1, 0 ] );

var v = smskmin( x.length, x, 1, mask, 1 );
// returns -2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.
-   **mask**: mask [`Uint8Array`][@stdlib/array/uint8]. If a `mask` array element is `0`, the corresponding element in `x` is considered valid and **included** in computation. If a `mask` array element is `1`, the corresponding element in `x` is considered invalid/missing and **excluded** from computation.
-   **strideMask**: index increment for `mask`.

The `N` and `stride` parameters determine which elements are accessed at runtime. For example, to compute the minimum value of every other element in `x`,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';

var x = new Float32Array( [ 1.0, 2.0, 7.0, -2.0, -4.0, 3.0, -5.0, -6.0 ] );
var mask = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1 ] );
var N = floor( x.length / 2 );

var v = smskmin( N, x, 2, mask, 2 );
// returns -4.0
```

Note that indexing is relative to the first index. To introduce offsets, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';

var x0 = new Float32Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, -5.0, -6.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var mask0 = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1 ] );
var mask1 = new Uint8Array( mask0.buffer, mask0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = smskmin( N, x1, 2, mask1, 2 );
// returns -2.0
```

#### smskmin.ndarray( N, x, strideX, offsetX, mask, strideMask, offsetMask )

Computes the minimum value of a single-precision floating-point strided array according to a `mask` and using alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';

var x = new Float32Array( [ 1.0, -2.0, -4.0, 2.0 ] );
var mask = new Uint8Array( [ 0, 0, 1, 0 ] );

var v = smskmin.ndarray( x.length, x, 1, 0, mask, 1, 0 );
// returns -2.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetMask**: starting index for `mask`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the minimum value for every other value in `x` starting from the second value

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';

var x = new Float32Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, -5.0, -6.0 ] );
var mask = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1 ] );
var N = floor( x.length / 2 );

var v = smskmin.ndarray( N, x, 2, 1, mask, 2, 1 );
// returns -2.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';
import smskmin from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-smskmin@esm/index.mjs';

var mask;
var x;
var i;

x = new Float32Array( 10 );
mask = new Uint8Array( x.length );
for ( i = 0; i < x.length; i++ ) {
    if ( randu() < 0.2 ) {
        mask[ i ] = 1;
    } else {
        mask[ i ] = 0;
    }
    x[ i ] = round( (randu()*100.0) - 50.0 );
}
console.log( x );
console.log( mask );

var v = smskmin( x.length, x, 1, mask, 1 );
console.log( v );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-base/dmskmin`][@stdlib/stats/base/dmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array according to a mask.</span>
-   <span class="package-name">[`@stdlib/stats-base/mskmin`][@stdlib/stats/base/mskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array according to a mask.</span>
-   <span class="package-name">[`@stdlib/stats-base/smin`][@stdlib/stats/base/smin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats-base/smskmax`][@stdlib/stats/base/smskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array according to a mask.</span>
-   <span class="package-name">[`@stdlib/stats-base/snanmin`][@stdlib/stats/base/snanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-base/snanmskmin`][@stdlib/stats/base/snanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array according to a mask, ignoring NaN values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-smskmin.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-smskmin

[test-image]: https://github.com/stdlib-js/stats-base-smskmin/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/stats-base-smskmin/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-smskmin/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-smskmin?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-smskmin.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-smskmin/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-smskmin/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-smskmin/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-smskmin/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-smskmin/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-smskmin/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-smskmin/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-smskmin/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-smskmin/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/esm

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8/tree/esm

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/dmskmin]: https://github.com/stdlib-js/stats-base-dmskmin/tree/esm

[@stdlib/stats/base/mskmin]: https://github.com/stdlib-js/stats-base-mskmin/tree/esm

[@stdlib/stats/base/smin]: https://github.com/stdlib-js/stats-base-smin/tree/esm

[@stdlib/stats/base/smskmax]: https://github.com/stdlib-js/stats-base-smskmax/tree/esm

[@stdlib/stats/base/snanmin]: https://github.com/stdlib-js/stats-base-snanmin/tree/esm

[@stdlib/stats/base/snanmskmin]: https://github.com/stdlib-js/stats-base-snanmskmin/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
