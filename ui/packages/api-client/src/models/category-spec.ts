/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface CategorySpec
 */
export interface CategorySpec {
    /**
     * 
     * @type {Array<string>}
     * @memberof CategorySpec
     */
    'children'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CategorySpec
     */
    'cover'?: string;
    /**
     * 
     * @type {string}
     * @memberof CategorySpec
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof CategorySpec
     */
    'displayName': string;
    /**
     * 
     * @type {number}
     * @memberof CategorySpec
     */
    'priority': number;
    /**
     * 
     * @type {string}
     * @memberof CategorySpec
     */
    'slug': string;
    /**
     * 
     * @type {string}
     * @memberof CategorySpec
     */
    'template'?: string;
}

