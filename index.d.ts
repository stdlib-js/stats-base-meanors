/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@esm/index.d.ts"/>

import { NumericArray } from '@stdlib/types/array';

/**
* Interface describing `meanors`.
*/
interface Routine {
	/**
	* Computes the arithmetic mean of a strided array using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = meanors( x.length, x, 1 );
	* // returns ~0.3333
	*/
	( N: number, x: NumericArray, stride: number ): number;

	/**
	* Computes the arithmetic mean of a strided array using ordinary recursive summation and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @param offset - starting index
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = meanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	ndarray( N: number, x: NumericArray, stride: number, offset: number ): number; // tslint:disable-line:max-line-length
}

/**
* Computes the arithmetic mean of a strided array using ordinary recursive summation.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - stride length
* @returns arithmetic mean
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = meanors( x.length, x, 1 );
* // returns ~0.3333
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = meanors.ndarray( x.length, x, 1, 0 );
* // returns ~0.3333
*/
declare var meanors: Routine;


// EXPORTS //

export = meanors;