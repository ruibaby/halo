/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.17.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { FileReverseProxyProvider } from './file-reverse-proxy-provider';

/**
 * 
 * @export
 * @interface ReverseProxyRule
 */
export interface ReverseProxyRule {
    /**
     * 
     * @type {FileReverseProxyProvider}
     * @memberof ReverseProxyRule
     */
    'file'?: FileReverseProxyProvider;
    /**
     * 
     * @type {string}
     * @memberof ReverseProxyRule
     */
    'path'?: string;
}

