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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { Snapshot } from '../models';
/**
 * UcApiContentHaloRunV1alpha1SnapshotApi - axios parameter creator
 * @export
 */
export const UcApiContentHaloRunV1alpha1SnapshotApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get snapshot for one post.
         * @param {string} name Snapshot name.
         * @param {string} postName Post name.
         * @param {boolean} [patched] Should include patched content and raw or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSnapshotForPost: async (name: string, postName: string, patched?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getSnapshotForPost', 'name', name)
            // verify required parameter 'postName' is not null or undefined
            assertParamExists('getSnapshotForPost', 'postName', postName)
            const localVarPath = `/apis/uc.api.content.halo.run/v1alpha1/snapshots/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (postName !== undefined) {
                localVarQueryParameter['postName'] = postName;
            }

            if (patched !== undefined) {
                localVarQueryParameter['patched'] = patched;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UcApiContentHaloRunV1alpha1SnapshotApi - functional programming interface
 * @export
 */
export const UcApiContentHaloRunV1alpha1SnapshotApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UcApiContentHaloRunV1alpha1SnapshotApiAxiosParamCreator(configuration)
    return {
        /**
         * Get snapshot for one post.
         * @param {string} name Snapshot name.
         * @param {string} postName Post name.
         * @param {boolean} [patched] Should include patched content and raw or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSnapshotForPost(name: string, postName: string, patched?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Snapshot>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSnapshotForPost(name, postName, patched, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UcApiContentHaloRunV1alpha1SnapshotApi.getSnapshotForPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UcApiContentHaloRunV1alpha1SnapshotApi - factory interface
 * @export
 */
export const UcApiContentHaloRunV1alpha1SnapshotApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UcApiContentHaloRunV1alpha1SnapshotApiFp(configuration)
    return {
        /**
         * Get snapshot for one post.
         * @param {UcApiContentHaloRunV1alpha1SnapshotApiGetSnapshotForPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSnapshotForPost(requestParameters: UcApiContentHaloRunV1alpha1SnapshotApiGetSnapshotForPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<Snapshot> {
            return localVarFp.getSnapshotForPost(requestParameters.name, requestParameters.postName, requestParameters.patched, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getSnapshotForPost operation in UcApiContentHaloRunV1alpha1SnapshotApi.
 * @export
 * @interface UcApiContentHaloRunV1alpha1SnapshotApiGetSnapshotForPostRequest
 */
export interface UcApiContentHaloRunV1alpha1SnapshotApiGetSnapshotForPostRequest {
    /**
     * Snapshot name.
     * @type {string}
     * @memberof UcApiContentHaloRunV1alpha1SnapshotApiGetSnapshotForPost
     */
    readonly name: string

    /**
     * Post name.
     * @type {string}
     * @memberof UcApiContentHaloRunV1alpha1SnapshotApiGetSnapshotForPost
     */
    readonly postName: string

    /**
     * Should include patched content and raw or not.
     * @type {boolean}
     * @memberof UcApiContentHaloRunV1alpha1SnapshotApiGetSnapshotForPost
     */
    readonly patched?: boolean
}

/**
 * UcApiContentHaloRunV1alpha1SnapshotApi - object-oriented interface
 * @export
 * @class UcApiContentHaloRunV1alpha1SnapshotApi
 * @extends {BaseAPI}
 */
export class UcApiContentHaloRunV1alpha1SnapshotApi extends BaseAPI {
    /**
     * Get snapshot for one post.
     * @param {UcApiContentHaloRunV1alpha1SnapshotApiGetSnapshotForPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UcApiContentHaloRunV1alpha1SnapshotApi
     */
    public getSnapshotForPost(requestParameters: UcApiContentHaloRunV1alpha1SnapshotApiGetSnapshotForPostRequest, options?: RawAxiosRequestConfig) {
        return UcApiContentHaloRunV1alpha1SnapshotApiFp(this.configuration).getSnapshotForPost(requestParameters.name, requestParameters.postName, requestParameters.patched, options).then((request) => request(this.axios, this.basePath));
    }
}

