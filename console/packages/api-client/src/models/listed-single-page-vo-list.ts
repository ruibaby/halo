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
import { ListedSinglePageVo } from "./listed-single-page-vo";

/**
 *
 * @export
 * @interface ListedSinglePageVoList
 */
export interface ListedSinglePageVoList {
  /**
   * Indicates whether current page is the first page.
   * @type {boolean}
   * @memberof ListedSinglePageVoList
   */
  first: boolean;
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof ListedSinglePageVoList
   */
  hasNext: boolean;
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof ListedSinglePageVoList
   */
  hasPrevious: boolean;
  /**
   * A chunk of items.
   * @type {Array<ListedSinglePageVo>}
   * @memberof ListedSinglePageVoList
   */
  items: Array<ListedSinglePageVo>;
  /**
   * Indicates whether current page is the last page.
   * @type {boolean}
   * @memberof ListedSinglePageVoList
   */
  last: boolean;
  /**
   * Page number, starts from 1. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof ListedSinglePageVoList
   */
  page: number;
  /**
   * Size of each page. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof ListedSinglePageVoList
   */
  size: number;
  /**
   * Total elements.
   * @type {number}
   * @memberof ListedSinglePageVoList
   */
  total: number;
  /**
   * Indicates total pages.
   * @type {number}
   * @memberof ListedSinglePageVoList
   */
  totalPages: number;
}
