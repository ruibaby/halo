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
import { Theme } from "../models";
// @ts-ignore
import { ThemeList } from "../models";
/**
 * ThemeHaloRunV1alpha1ThemeApi - axios parameter creator
 * @export
 */
export const ThemeHaloRunV1alpha1ThemeApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Create theme.halo.run/v1alpha1/Theme
     * @param {Theme} [theme] Fresh theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createthemeHaloRunV1alpha1Theme: async (
      theme?: Theme,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/theme.halo.run/v1alpha1/themes`;
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
        theme,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Delete theme.halo.run/v1alpha1/Theme
     * @param {string} name Name of theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletethemeHaloRunV1alpha1Theme: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("deletethemeHaloRunV1alpha1Theme", "name", name);
      const localVarPath =
        `/apis/theme.halo.run/v1alpha1/themes/{name}`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
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

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Get theme.halo.run/v1alpha1/Theme
     * @param {string} name Name of theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getthemeHaloRunV1alpha1Theme: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("getthemeHaloRunV1alpha1Theme", "name", name);
      const localVarPath =
        `/apis/theme.halo.run/v1alpha1/themes/{name}`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
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

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List theme.halo.run/v1alpha1/Theme
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listthemeHaloRunV1alpha1Theme: async (
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/theme.halo.run/v1alpha1/themes`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
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

      if (fieldSelector) {
        localVarQueryParameter["fieldSelector"] = fieldSelector;
      }

      if (labelSelector) {
        localVarQueryParameter["labelSelector"] = labelSelector;
      }

      if (page !== undefined) {
        localVarQueryParameter["page"] = page;
      }

      if (size !== undefined) {
        localVarQueryParameter["size"] = size;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Update theme.halo.run/v1alpha1/Theme
     * @param {string} name Name of theme
     * @param {Theme} [theme] Updated theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatethemeHaloRunV1alpha1Theme: async (
      name: string,
      theme?: Theme,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("updatethemeHaloRunV1alpha1Theme", "name", name);
      const localVarPath =
        `/apis/theme.halo.run/v1alpha1/themes/{name}`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
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
        theme,
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
 * ThemeHaloRunV1alpha1ThemeApi - functional programming interface
 * @export
 */
export const ThemeHaloRunV1alpha1ThemeApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    ThemeHaloRunV1alpha1ThemeApiAxiosParamCreator(configuration);
  return {
    /**
     * Create theme.halo.run/v1alpha1/Theme
     * @param {Theme} [theme] Fresh theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createthemeHaloRunV1alpha1Theme(
      theme?: Theme,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Theme>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createthemeHaloRunV1alpha1Theme(
          theme,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Delete theme.halo.run/v1alpha1/Theme
     * @param {string} name Name of theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletethemeHaloRunV1alpha1Theme(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deletethemeHaloRunV1alpha1Theme(
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Get theme.halo.run/v1alpha1/Theme
     * @param {string} name Name of theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getthemeHaloRunV1alpha1Theme(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Theme>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getthemeHaloRunV1alpha1Theme(
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * List theme.halo.run/v1alpha1/Theme
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listthemeHaloRunV1alpha1Theme(
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThemeList>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listthemeHaloRunV1alpha1Theme(
          fieldSelector,
          labelSelector,
          page,
          size,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Update theme.halo.run/v1alpha1/Theme
     * @param {string} name Name of theme
     * @param {Theme} [theme] Updated theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatethemeHaloRunV1alpha1Theme(
      name: string,
      theme?: Theme,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Theme>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updatethemeHaloRunV1alpha1Theme(
          name,
          theme,
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
 * ThemeHaloRunV1alpha1ThemeApi - factory interface
 * @export
 */
export const ThemeHaloRunV1alpha1ThemeApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ThemeHaloRunV1alpha1ThemeApiFp(configuration);
  return {
    /**
     * Create theme.halo.run/v1alpha1/Theme
     * @param {ThemeHaloRunV1alpha1ThemeApiCreatethemeHaloRunV1alpha1ThemeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createthemeHaloRunV1alpha1Theme(
      requestParameters: ThemeHaloRunV1alpha1ThemeApiCreatethemeHaloRunV1alpha1ThemeRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<Theme> {
      return localVarFp
        .createthemeHaloRunV1alpha1Theme(requestParameters.theme, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete theme.halo.run/v1alpha1/Theme
     * @param {ThemeHaloRunV1alpha1ThemeApiDeletethemeHaloRunV1alpha1ThemeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletethemeHaloRunV1alpha1Theme(
      requestParameters: ThemeHaloRunV1alpha1ThemeApiDeletethemeHaloRunV1alpha1ThemeRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .deletethemeHaloRunV1alpha1Theme(requestParameters.name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get theme.halo.run/v1alpha1/Theme
     * @param {ThemeHaloRunV1alpha1ThemeApiGetthemeHaloRunV1alpha1ThemeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getthemeHaloRunV1alpha1Theme(
      requestParameters: ThemeHaloRunV1alpha1ThemeApiGetthemeHaloRunV1alpha1ThemeRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Theme> {
      return localVarFp
        .getthemeHaloRunV1alpha1Theme(requestParameters.name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List theme.halo.run/v1alpha1/Theme
     * @param {ThemeHaloRunV1alpha1ThemeApiListthemeHaloRunV1alpha1ThemeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listthemeHaloRunV1alpha1Theme(
      requestParameters: ThemeHaloRunV1alpha1ThemeApiListthemeHaloRunV1alpha1ThemeRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<ThemeList> {
      return localVarFp
        .listthemeHaloRunV1alpha1Theme(
          requestParameters.fieldSelector,
          requestParameters.labelSelector,
          requestParameters.page,
          requestParameters.size,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Update theme.halo.run/v1alpha1/Theme
     * @param {ThemeHaloRunV1alpha1ThemeApiUpdatethemeHaloRunV1alpha1ThemeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatethemeHaloRunV1alpha1Theme(
      requestParameters: ThemeHaloRunV1alpha1ThemeApiUpdatethemeHaloRunV1alpha1ThemeRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Theme> {
      return localVarFp
        .updatethemeHaloRunV1alpha1Theme(
          requestParameters.name,
          requestParameters.theme,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for createthemeHaloRunV1alpha1Theme operation in ThemeHaloRunV1alpha1ThemeApi.
 * @export
 * @interface ThemeHaloRunV1alpha1ThemeApiCreatethemeHaloRunV1alpha1ThemeRequest
 */
export interface ThemeHaloRunV1alpha1ThemeApiCreatethemeHaloRunV1alpha1ThemeRequest {
  /**
   * Fresh theme
   * @type {Theme}
   * @memberof ThemeHaloRunV1alpha1ThemeApiCreatethemeHaloRunV1alpha1Theme
   */
  readonly theme?: Theme;
}

/**
 * Request parameters for deletethemeHaloRunV1alpha1Theme operation in ThemeHaloRunV1alpha1ThemeApi.
 * @export
 * @interface ThemeHaloRunV1alpha1ThemeApiDeletethemeHaloRunV1alpha1ThemeRequest
 */
export interface ThemeHaloRunV1alpha1ThemeApiDeletethemeHaloRunV1alpha1ThemeRequest {
  /**
   * Name of theme
   * @type {string}
   * @memberof ThemeHaloRunV1alpha1ThemeApiDeletethemeHaloRunV1alpha1Theme
   */
  readonly name: string;
}

/**
 * Request parameters for getthemeHaloRunV1alpha1Theme operation in ThemeHaloRunV1alpha1ThemeApi.
 * @export
 * @interface ThemeHaloRunV1alpha1ThemeApiGetthemeHaloRunV1alpha1ThemeRequest
 */
export interface ThemeHaloRunV1alpha1ThemeApiGetthemeHaloRunV1alpha1ThemeRequest {
  /**
   * Name of theme
   * @type {string}
   * @memberof ThemeHaloRunV1alpha1ThemeApiGetthemeHaloRunV1alpha1Theme
   */
  readonly name: string;
}

/**
 * Request parameters for listthemeHaloRunV1alpha1Theme operation in ThemeHaloRunV1alpha1ThemeApi.
 * @export
 * @interface ThemeHaloRunV1alpha1ThemeApiListthemeHaloRunV1alpha1ThemeRequest
 */
export interface ThemeHaloRunV1alpha1ThemeApiListthemeHaloRunV1alpha1ThemeRequest {
  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof ThemeHaloRunV1alpha1ThemeApiListthemeHaloRunV1alpha1Theme
   */
  readonly fieldSelector?: Array<string>;

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof ThemeHaloRunV1alpha1ThemeApiListthemeHaloRunV1alpha1Theme
   */
  readonly labelSelector?: Array<string>;

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof ThemeHaloRunV1alpha1ThemeApiListthemeHaloRunV1alpha1Theme
   */
  readonly page?: number;

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof ThemeHaloRunV1alpha1ThemeApiListthemeHaloRunV1alpha1Theme
   */
  readonly size?: number;
}

/**
 * Request parameters for updatethemeHaloRunV1alpha1Theme operation in ThemeHaloRunV1alpha1ThemeApi.
 * @export
 * @interface ThemeHaloRunV1alpha1ThemeApiUpdatethemeHaloRunV1alpha1ThemeRequest
 */
export interface ThemeHaloRunV1alpha1ThemeApiUpdatethemeHaloRunV1alpha1ThemeRequest {
  /**
   * Name of theme
   * @type {string}
   * @memberof ThemeHaloRunV1alpha1ThemeApiUpdatethemeHaloRunV1alpha1Theme
   */
  readonly name: string;

  /**
   * Updated theme
   * @type {Theme}
   * @memberof ThemeHaloRunV1alpha1ThemeApiUpdatethemeHaloRunV1alpha1Theme
   */
  readonly theme?: Theme;
}

/**
 * ThemeHaloRunV1alpha1ThemeApi - object-oriented interface
 * @export
 * @class ThemeHaloRunV1alpha1ThemeApi
 * @extends {BaseAPI}
 */
export class ThemeHaloRunV1alpha1ThemeApi extends BaseAPI {
  /**
   * Create theme.halo.run/v1alpha1/Theme
   * @param {ThemeHaloRunV1alpha1ThemeApiCreatethemeHaloRunV1alpha1ThemeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeHaloRunV1alpha1ThemeApi
   */
  public createthemeHaloRunV1alpha1Theme(
    requestParameters: ThemeHaloRunV1alpha1ThemeApiCreatethemeHaloRunV1alpha1ThemeRequest = {},
    options?: AxiosRequestConfig
  ) {
    return ThemeHaloRunV1alpha1ThemeApiFp(this.configuration)
      .createthemeHaloRunV1alpha1Theme(requestParameters.theme, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Delete theme.halo.run/v1alpha1/Theme
   * @param {ThemeHaloRunV1alpha1ThemeApiDeletethemeHaloRunV1alpha1ThemeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeHaloRunV1alpha1ThemeApi
   */
  public deletethemeHaloRunV1alpha1Theme(
    requestParameters: ThemeHaloRunV1alpha1ThemeApiDeletethemeHaloRunV1alpha1ThemeRequest,
    options?: AxiosRequestConfig
  ) {
    return ThemeHaloRunV1alpha1ThemeApiFp(this.configuration)
      .deletethemeHaloRunV1alpha1Theme(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get theme.halo.run/v1alpha1/Theme
   * @param {ThemeHaloRunV1alpha1ThemeApiGetthemeHaloRunV1alpha1ThemeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeHaloRunV1alpha1ThemeApi
   */
  public getthemeHaloRunV1alpha1Theme(
    requestParameters: ThemeHaloRunV1alpha1ThemeApiGetthemeHaloRunV1alpha1ThemeRequest,
    options?: AxiosRequestConfig
  ) {
    return ThemeHaloRunV1alpha1ThemeApiFp(this.configuration)
      .getthemeHaloRunV1alpha1Theme(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List theme.halo.run/v1alpha1/Theme
   * @param {ThemeHaloRunV1alpha1ThemeApiListthemeHaloRunV1alpha1ThemeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeHaloRunV1alpha1ThemeApi
   */
  public listthemeHaloRunV1alpha1Theme(
    requestParameters: ThemeHaloRunV1alpha1ThemeApiListthemeHaloRunV1alpha1ThemeRequest = {},
    options?: AxiosRequestConfig
  ) {
    return ThemeHaloRunV1alpha1ThemeApiFp(this.configuration)
      .listthemeHaloRunV1alpha1Theme(
        requestParameters.fieldSelector,
        requestParameters.labelSelector,
        requestParameters.page,
        requestParameters.size,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update theme.halo.run/v1alpha1/Theme
   * @param {ThemeHaloRunV1alpha1ThemeApiUpdatethemeHaloRunV1alpha1ThemeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThemeHaloRunV1alpha1ThemeApi
   */
  public updatethemeHaloRunV1alpha1Theme(
    requestParameters: ThemeHaloRunV1alpha1ThemeApiUpdatethemeHaloRunV1alpha1ThemeRequest,
    options?: AxiosRequestConfig
  ) {
    return ThemeHaloRunV1alpha1ThemeApiFp(this.configuration)
      .updatethemeHaloRunV1alpha1Theme(
        requestParameters.name,
        requestParameters.theme,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
