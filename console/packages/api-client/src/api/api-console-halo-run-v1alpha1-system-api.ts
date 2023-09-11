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

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { SystemInitializationRequest } from "../models";
/**
 * ApiConsoleHaloRunV1alpha1SystemApi - axios parameter creator
 * @export
 */
export const ApiConsoleHaloRunV1alpha1SystemApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Initialize system
     * @param {SystemInitializationRequest} [systemInitializationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    initialize: async (
      systemInitializationRequest?: SystemInitializationRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/system/initialize`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        systemInitializationRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * ApiConsoleHaloRunV1alpha1SystemApi - functional programming interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1SystemApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    ApiConsoleHaloRunV1alpha1SystemApiAxiosParamCreator(configuration);
  return {
    /**
     * Initialize system
     * @param {SystemInitializationRequest} [systemInitializationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async initialize(
      systemInitializationRequest?: SystemInitializationRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.initialize(
        systemInitializationRequest,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * ApiConsoleHaloRunV1alpha1SystemApi - factory interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1SystemApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ApiConsoleHaloRunV1alpha1SystemApiFp(configuration);
  return {
    /**
     * Initialize system
     * @param {ApiConsoleHaloRunV1alpha1SystemApiInitializeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    initialize(
      requestParameters: ApiConsoleHaloRunV1alpha1SystemApiInitializeRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<boolean> {
      return localVarFp
        .initialize(requestParameters.systemInitializationRequest, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for initialize operation in ApiConsoleHaloRunV1alpha1SystemApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1SystemApiInitializeRequest
 */
export interface ApiConsoleHaloRunV1alpha1SystemApiInitializeRequest {
  /**
   *
   * @type {SystemInitializationRequest}
   * @memberof ApiConsoleHaloRunV1alpha1SystemApiInitialize
   */
  readonly systemInitializationRequest?: SystemInitializationRequest;
}

/**
 * ApiConsoleHaloRunV1alpha1SystemApi - object-oriented interface
 * @export
 * @class ApiConsoleHaloRunV1alpha1SystemApi
 * @extends {BaseAPI}
 */
export class ApiConsoleHaloRunV1alpha1SystemApi extends BaseAPI {
  /**
   * Initialize system
   * @param {ApiConsoleHaloRunV1alpha1SystemApiInitializeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1SystemApi
   */
  public initialize(
    requestParameters: ApiConsoleHaloRunV1alpha1SystemApiInitializeRequest = {},
    options?: AxiosRequestConfig
  ) {
    return ApiConsoleHaloRunV1alpha1SystemApiFp(this.configuration)
      .initialize(requestParameters.systemInitializationRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
