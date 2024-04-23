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


// May contain unused imports in some cases
// @ts-ignore
import { Reason } from './reason';

/**
 * 
 * @export
 * @interface ReasonList
 */
export interface ReasonList {
    /**
     * Indicates whether current page is the first page.
     * @type {boolean}
     * @memberof ReasonList
     */
    'first': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof ReasonList
     */
    'hasNext': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof ReasonList
     */
    'hasPrevious': boolean;
    /**
     * A chunk of items.
     * @type {Array<Reason>}
     * @memberof ReasonList
     */
    'items': Array<Reason>;
    /**
     * Indicates whether current page is the last page.
     * @type {boolean}
     * @memberof ReasonList
     */
    'last': boolean;
    /**
     * Page number, starts from 1. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof ReasonList
     */
    'page': number;
    /**
     * Size of each page. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof ReasonList
     */
    'size': number;
    /**
     * Total elements.
     * @type {number}
     * @memberof ReasonList
     */
    'total': number;
    /**
     * Indicates total pages.
     * @type {number}
     * @memberof ReasonList
     */
    'totalPages': number;
}

