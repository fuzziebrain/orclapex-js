// Type definitions for apex-js 5.1
// Project: Type Definitions for Oracle Application Express JavaScript APIs
// Definitions by: Adrian Png <https://github.com/fuzziebrain/>

/// <reference types="jquery"/>

declare namespace apex {
  let gPageContext$: any;

  let JQuery: JQuery;

  /**
   * apex.confirm Signature 1 (alias for apex.page.confirm)
   * @param {string} pMessage
   * @param {string} pRequest
   */
  function confirm(pMessage: string, pRequest: string): void;

  /**
   * apex.confirm Signature 2 (alias for apex.page.confirm)
   * @param {string} pMessage
   * @param {page.SubmitOptions} pOptions
   * @returns {boolean | void}
   */
  function confirm(pMessage: string, pOptions: page.SubmitOptions): boolean | void;

  /**
   * apex.page.submit Signature 1 (alias for apex.page.submit)
   * @param {string} pRequest
   */
  function submit(pRequest: string): void;

  /**
   * apex.page.submit Signature 2 (alias for apex.page.submit)
   * @param {SubmitOptions} pOptions
   */
  function submit(pOptions: page.SubmitOptions): void;

  namespace da {
    /**
     * apex.da.resume
     * @param {Function} pCallback
     * @param {boolean} pErrorOccurred
     */
    function resume(pCallback: Function, pErrorOccurred: boolean): void;
  }

  namespace event {
    /**
     * apex.event.trigger
     * @param {any} pSelector
     * @param {string} pEvent
     * @param {Object} pData
     * @return {boolean}
     */
    function trigger(pSelector: any, pEvent: string, pData?: Object): boolean;
  }

  namespace page {
    interface ParameterSet {
      [key: string]: string | number
    }

    interface SubmitOptions {
      request?: string,
      set?: ParameterSet,
      showWait?: boolean,
      submitIfEnter?: JQuery.Event,
      reloadOnSubmit?: string,
      ignoreChange?: boolean,
      validate?: boolean
    }

    /**
     * apex.page.confirm Signature 1
     * @param {string} pMessage
     * @param {string} pRequest
     */
    function confirm(pMessage: string, pRequest: string): void;

    /**
     * apex.page.confirm Signature 2
     * @param {string} pMessage
     * @param {SubmitOptions} pOptions
     * @returns {boolean | void}
     */
    function confirm(pMessage: string, pOptions: SubmitOptions): boolean | void;

    /**
     * apex.page.submit Signature 1
     * @param {string} pRequest
     */
    function submit(pRequest: string): void;

    /**
     * apex.page.submit Signature 2
     * @param {SubmitOptions} pOptions
     */
    function submit(pOptions: SubmitOptions): void;

    /**
     * apex.page.validate
     * @returns {boolean}
     */
    function validate(): boolean;

    /**
     * apex.page.isChanged
     * @returns {boolean}
     */
    function isChanged(): boolean;

    /**
     * apex.page.warnOnUnsavedChanges
     * @param pMessage
     * @param pExtraIsChanged
     */
    function warnOnUnsavedChanges(pMessage: string, pExtraIsChanged: Function): void;
  }

  namespace server {
    interface ScriptConfig {
      path: string;
      requirejs: boolean;
      global?: string;
    }

    interface PluginData {
      pageItems: string | JQuery | HTMLElement | Array<string>,
      x01?: string,
      x02?: string,
      x03?: string,
      x04?: string,
      x05?: string,
      x06?: string,
      x07?: string,
      x08?: string,
      x09?: string,
      x10?: string,
      f01?: string | Array<string | number>
      f02?: string | Array<string | number>
      f03?: string | Array<string | number>
      f04?: string | Array<string | number>
      f05?: string | Array<string | number>
      f06?: string | Array<string | number>
      f07?: string | Array<string | number>
      f08?: string | Array<string | number>
      f09?: string | Array<string | number>
      f10?: string | Array<string | number>
      f11?: string | Array<string | number>
      f12?: string | Array<string | number>
      f13?: string | Array<string | number>
      f14?: string | Array<string | number>
      f15?: string | Array<string | number>
      f16?: string | Array<string | number>
      f17?: string | Array<string | number>
      f18?: string | Array<string | number>
      f19?: string | Array<string | number>
      f20?: string | Array<string | number>
    }

    interface Queue {
      name: string,
      action: string
    }

    // @todo refreshObjectData
    interface PluginOptions {
      refreshObject?: string | JQuery | HTMLElement,
      refreshObjectData?: Object | Array<any>
      clear?: Function,
      loadingIndicator?: string | JQuery | HTMLElement | Function,
      loadingIndicatorPosition?: string,
      queue?: Queue,
      target?: string | HTMLElement
    }

    function loadScript(pConfig: ScriptConfig, pCallback: Function): Function;

    // @todo return type
    function plugin(pAjaxIdentifier?: string, pData?: PluginData, pOptions?: PluginOptions): any;

    function pluginUrl(pAjaxIdentifier: string, pData?:PluginData): string;

    // @todo return type
    function process(pName: string, pData?: PluginData, pOptions?: PluginOptions): any;

    function url(pData?: PluginData, pPage?: string): string;
  }

  namespace storage {
    interface StorageOptions {
      prefix: string,
      useAppId: boolean,
      usePageId: boolean,
      regionId: string
    }

    interface ScopedStorage {
      prefix: string,
      length: number,
      key(n: number): string,
      getItem(key: string): any,
      setItem(key: string, data: any): void,
      removeItem(key: string): void,
      clear(): void,
      sync(): void
    }

    function getCookie(pName: string): string;

    function setCookie(pName: string, pValue: string): void;

    function hasLocalStorageSupport(): boolean;

    function hasSessionStorageSupport(): boolean;

    function getScopedLocalStorage(pOption: StorageOptions): ScopedStorage;

    function getScopedSessionStorage(pOption: StorageOptions): ScopedStorage;
  }

  namespace util {
    let delayLinger: DelayLingerSingleton;

    interface DelayLingerSingleton {
      /**
       * Call this function when a potentially long running async process starts. For each call to start with a given
       * `pScopeName`, you must make a corresponding call to finish with the same `pScopeName`. Calls with different
       * `pScopeName` arguments will not interfere with each other.
       *
       * @param {string} pScopeName - Unique name for each unique progress indicator.
       * @param {Function} pAction - Function called to display the progress indicator.
       */
      start(pScopeName: string, pAction: Function): void;

      /**
       * Call this function when a potentially long running async process finishes. For each call to start with a given
       * `pScopeName`, you must make a corresponding call to finish with the same pScopeName. The `pAction` is called
       * exactly once if and only if the corresponding start `pAction` was called. If there are multiple calls to finish
       * , the `pAction` from the last one is called.
       *
       * @param {string} pScopeName - Unique name for each unique progress indicator.
       * @param {Function} pAction - Function called to display the progress indicator.
       */
      finish(pScopeName: string, pAction: Function): void;
    }

    interface PlaceholderSet {
      [key: string]: string
    }

    interface SubstitutionSet {
      [key: string]: string
    }

    interface SpinnerOptions {
      alert: string
      spinnerClass: string
    }

    // @todo model
    // @todo record
    interface TemplateOptions {
      placeholders?: PlaceholderSet,
      defaultEscapeFilter?: string,
      includePageItems?: boolean,
      model?: any,
      record?: any,
      extraSubstitutions?: SubstitutionSet,
      includeBuiltinSubstitutions?: boolean
    }

    /**
     * Returns string `pValue` with any CSS meta-characters are escaped. Use this function when the value is used as in
     * a CSS selector. Whenever possible constrain the value so that it cannot contain CSS meta-characters making it
     * unnecessary to use this function.
     *
     * @param {string} pValue - The string that may contain CSS meta-characters to be escaped.
     * @returns {string} - The escaped string.
     */
    function escapeCSS(pValue: string): string;

    /**
     * Returns string `pValue` with any special HTML characters (`&<>"'/`) escaped to prevent cross site scripting (XSS)
     * attacks.
     *
     * @param {string} pValue - The string that may contain special HTML characters to be escaped.
     * @returns {string} - The escaped string.
     */
    function escapeHTML(pValue: string): string;

    /**
     * Function that renders a spinning alert to show the user processing is taking place. Note that the alert is
     * defined as an ARIA alert so that assistive technologies such as screen readers are alerted to the processing
     * status.
     *
     * @param {JQuery} pContainer - Optional jQuery selector, jQuery, or DOM object identifying the container within
     *                              which you want to center the spinner. If not passed, the spinner will be centered on
     *                              the whole page. The default is `$("body")`.
     * @param {spinnerOptions} pOptions - Optional object with the following options: - "alert" Alert text visually
     *                                    hidden, but available to assistive technologies. Defaults to Processing. The
     *                                    default is Processing.
     */
    function showSpinner(pContainer?: JQuery, pOptions?: SpinnerOptions): JQuery;

    /**
     * Return string `pText` with all HTML tags removed.
     *
     * @param {string} pText - A string that may contain HTML markup that you want removed.
     * @returns {string}
     */
    function stripHTML(pText: string): string;

    /**
     * This function applies data to a template. It processes the template string given in pTemplate by substituting
     * values according to the options in pOptions. The template supports Application Express server style placeholder
     * and item substitution syntax.
     *
     * @param {string} pTemplate - A template string with the format described above.
     * @param {templateOptions} pOptions - An object that specifies how the template is to be processed. Refer to the
     *                                     following pOptions properties table.
     */
    function applyTemplate(pTemplate: string, pOptions: TemplateOptions): string;


  }

  namespace widget {
    /**
     *
     */
    // function initPageItem(): void;
  }
}