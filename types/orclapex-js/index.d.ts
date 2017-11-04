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

  /**
   * This API returns an Application Express item object, which can then be used to access item related functions and
   * properties.
   *
   * @param {HTMLElement} pNd - Application Express item name or DOM node. This parameter can refer to either a page
   *                            item or column item.
   */
  function item(pNd: HTMLElement | string): item.ItemObject;

  /**
   * This API returns an Application Express region object for the given region id. The returned region object can then
   * be used to access region related functions and properties.
   *
   * @param {string} pRegionId - Region id or region static id. It is a best practice to give a region a Static ID if it
   *                             is going to be used from JavaScript otherwise an internally generated id is used. The
   *                             region id is substituted in the region template using the #REGION_STATIC_ID# string.
   *                             The region id can be found by viewing the page source in the browser.
   */
  function region(pRegionId: string): region.Region;

  namespace da {
    /**
     * apex.da.resume
     * @param {Function} pCallback
     * @param {boolean} pErrorOccurred
     */
    function resume(pCallback: Function, pErrorOccurred: boolean): void;
  }

  /**
   * This namespace stores all debug functions of Oracle Application Express.
   */
  namespace debug {
    let LOG_LEVEL: {
      /**
       * Logging is off. Value: 0
       */
      OFF: number;

      /**
       * Error logging level. Value: 1
       */
      ERROR: number;

      /**
       * Warning logging level. Value: 2
       */
      WARN: number;

      /**
       * Information logging level. Value: 4
       */
      INFO: number;

      /**
       * Application tracing logging level. Value: 6
       */
      APP_TRACE: number;

      /**
       * Engine tracing logging level. Value: 9
       */
      ENGINE_TRACE: number;
    };

    function getLevel(): number;

    function setLevel(pLevel: number): void;

    function error(...message: any[]): void;

    function info(...message: any[]): void;

    function log(...message: any[]): void;

    function message(pLevel: number, ...message: any[]): void;

    function trace(...message: any[]): void;

    function warn(...message: any[]): void;
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

  namespace item {
    interface ItemObject {
      id: string;
      node: HTMLElement;

      addValue(pValue: string): void;

      disable(): void;

      displayValueFor(pValue: string): string;

      enable(): void;

      getValidity(): ValidityState;

      getValidationMessage(): string;

      getValue(): string | string[];

      hide(pHideRow?: boolean): void;

      isChanged(): boolean;

      isDisabled(): void;

      isEmpty(): boolean;

      setFocus(): void;

      setStyle(pPropertyName: string, pPropertyValue: string): void;

      setValue(pValue: string | string[], pDisplayValue?: string, pSuppressChangeEvent?: boolean): void;

      show(pShowRow?: boolean): void;
    }

    interface ValidityState {

    }

    // @todo A ItemImpl instead of ItemObject?
    function create(pName: HTMLElement | string, pItemImpl: ItemObject): void;
  }

  namespace lang {
    interface Message {
      [key: string]: string
    }
    function addMessages(pMessages: Message): void;

    function clearMessages(): void;

    function format(pPattern: string, ...replacementValue: any[]): string;

    function formatMessage(pKey: string, ...replacementValue: any[]): string;

    function formatMessageNoEscape(pKey: string, ...replacementValue: any[]): string;

    function formatNoEscape(pPattern: string, ...replacementValue: any[]): string;

    function getMessage(pKey: string): string;
  }

  namespace message {
    let TYPE: {
      SUCCESS: string;
      ERROR: string;
    };

    interface Error {
      type?: string;
      location?: string | Array<string>;
      pageItem?: string;
      message?: string;
      unsafe?: boolean;
    }

    interface ThemeHookOptions {
      beforeShow?: Function;
      beforeHide?: Function;
      closeNotificationSelector?: string;
    }

    function addVisibilityCheck(pFunction: Function): void;
    function alert(pMessage: string, pCallback: Function): void;
    function clearErrors(): void;
    function confirm(pMessage: string, pCallback: Function): void;
    function hidePageSuccess(): void;
    function setThemeHooks(): void; // @todo
    function showErrors(pErrors: Error | Array<Error>): void; // @todo
    function showPageSuccess(pMessage: string): void;
  }

  namespace navigation {
    function cancel(): void;
    function close(): void;
    function fireCloseHandler(): void;
    function registerCloseHandler(): void;
    function openInNewWindow(): void;
    function popup(): void;
    function redirect(): void;
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

  namespace region {
    interface Region {
      type: string;
      focus: Function;
      refresh: Function;
      widget(): widget.Widget;
    }

    function create(pRegionId: string, pRegionImpl: Region): void;

    function destroy(pRegionId: string): void;

    function isRegion(pRegionId: string): boolean;

    function findClosest(pTarget: HTMLElement | string): Region;
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
    interface Widget {
      interactiveGrid(pName: string): InteractiveGrid
    }

    interface InteractiveGrid {
      invoke(pAction: string): void
    }

    /**
     *
     */
    // function initPageItem(): void;
  }
}

// Non-namespaced APIs
/**
 *
 * @param {HTMLElement | string} pNd
 * @returns {HTMLElement}
 */
declare function $x(pNd: HTMLElement | string): HTMLElement;

/**
 *
 * @param {HTMLElement | string} pNd
 * @returns {string | number}
 */
declare function $v(pNd: HTMLElement | string): string | number;

/**
 *
 * @param {HTMLElement | string} pNd
 * @returns {string | string[]}
 */
declare function $v2(pNd: HTMLElement | string): string | string[];

/**
 *
 * @param {HTMLElement | string }pNd
 * @param { string | string[]} pValue
 * @param { string } pDisplayValue
 * @param { boolean } pSuppressChangeEvent
 */
declare function $s(
  pNd: HTMLElement | string,
  pValue: string | string[],
  pDisplayValue:  string,
  pSuppressChangeEvent: boolean
): void;

/**
 *
 * @param { pItem: HTMLElement | string | string[] } pItem
 * @returns { HTMLElement | string | string[] | number[] }
 */
declare function $u_Narray(pItem: HTMLElement | string | string[]): HTMLElement | string | string[] | number[];

/**
 *
 * @param { pItem: HTMLElement | string | string[] } pItem
 * @returns { HTMLElement | string | string[] | number[] }
 */
declare function $u_Carray(pItem: HTMLElement | string | string[]): HTMLElement | string | string[] | number[];

/**
 *
 * @param { string | string[] } pTest
 * @param { string | string[] } pDefault
 * @returns { string | string[] }
 */
declare function $nvl(pTest: string | string[], pDefault: string | string[]): string | string[];

/**
 *
 * @param { HTMLElement | string | HTMLElement[] } pNd
 * @param { string } pStyle
 * @param { string } pString
 * @returns { HTMLElement | HTMLElement[] }
 */
declare function $x_Style(
  pNd: HTMLElement | string | HTMLElement[],
  pStyle: string,
  pString: string
): HTMLElement | HTMLElement[];

/**
 *
 * @param { HTMLElement | string | HTMLElement[] } pNd
 * @returns { HTMLElement | HTMLElement }
 */
declare function $x_Hide(pNd: HTMLElement | string | HTMLElement[]): HTMLElement | HTMLElement[];

/**
 *
 * @param { HTMLElement | string | HTMLElement[] } pNd
 * @returns { HTMLElement | HTMLElement }
 */
declare function $x_Show(pNd: HTMLElement | string | HTMLElement[]): HTMLElement | HTMLElement[];

/**
 *
 * @param { HTMLElement | string | HTMLElement[] } pNd
 * @returns { HTMLElement | HTMLElement }
 */
declare function $x_Toggle(pNd: HTMLElement | string | HTMLElement[]): HTMLElement | HTMLElement[];

/**
 *
 * @param { HTMLElement | string | HTMLElement[] } pNd
 * @returns { HTMLElement | HTMLElement }
 */
declare function $x_Remove(pNd: HTMLElement | string | HTMLElement[]): HTMLElement | HTMLElement[];

/**
 *
 * @param { HTMLElement | string | HTMLElement[] } pNd
 * @param { HTMLElement | HTMLElement } pValue
 */
declare function $x_Value(pNd: HTMLElement | string | HTMLElement[], pValue: string): void;

/**
 *
 * @param { HTMLElement | string } pNd
 * @param { string } pToTag
 * @param { string } pToClass
 */
declare function $x_UpTill(pNd: HTMLElement | string, pToTag: string, pToClass?: string): HTMLElement | boolean;

/**
 *
 * @param { HTMLElement | string | HTMLElement[] } pNd
 * @param { string } pFunc
 */
declare function $x_ItemRow(pNd: HTMLElement | string | HTMLElement[], pFunc: string): void;

/**
 *
 * @param { HTMLElement | string | HTMLElement[] } pNd
 */
declare function $x_HideItemRow(pNd: HTMLElement |  string | HTMLElement[]): void;

/**
 *
 * @param { HTMLElement | string | HTMLElement[] } pNd
 */
declare function $x_ShowItemRow(pNd: HTMLElement | string | HTMLElement[]): void;

/**
 *
 * @param { HTMLElement | string | HTMLElement[] } pNd
 */
declare function $x_ToggleItemRow(pNd: HTMLElement | string | HTMLElement[]): void;

/**
 *
 * @param { HTMLElement | string | HTMLElement[] } pNd
 * @param { HTMLElement | string | string[] } pNdArray
 */
declare function $x_HideAllExcept(
  pNd: HTMLElement | string | HTMLElement[],
  pNdArray: HTMLElement |  string | string[]
): void;

/**
 *
 * @param { HTMLElement | string } pNd
 * @returns { HTMLElement }
 */
declare function $x_HideSiblings(pNd: HTMLElement | string): HTMLElement;

/**
 *
 * @param { HTMLElement | string } pNd
 * @returns { HTMLElement }
 */
declare function $x_ShowSiblings(pNd: HTMLElement | string): HTMLElement;

/**
 *
 * @param { HTMLElement | string | HTMLElement[] } pNd
 * @param { string } pClass
 */
declare function $x_Class(pNd: HTMLElement | string | HTMLElement[], pClass: string): void;

/**
 *
 * @param { HTMLElement | string } pNd
 * @param { string } pClass
 * @param { string } pThisClass
 * @returns { HTMLElement | boolean }
 */
declare function $x_SetSiblingsClass(
  pNd: HTMLElement | string,
  pClass: string,
  pThisClass: string
): HTMLElement | boolean;

/**
 *
 * @param { string } pClass
 * @param { HTMLElement | string } pNd
 * @param { string } pTag
 * @returns { HTMLElement[] }
 */
declare function $x_ByClass(
  pClass: string,
  pNd: HTMLElement | string,
  pTag: string
): HTMLElement[];

/**
 *
 * @param { HTMLElement | string } pNd
 * @param { string } pClass
 * @param { string } pTag
 */
declare function $x_ShowAllByClass(
  pNd: HTMLElement | string,
  pClass: string,
  pTag: string
): void;

/**
 *
 * @param { HTMLElement | string } pNd
 */
declare function $x_ShowChildren(pNd: HTMLElement | string): void;

/**
 *
 * @param { HTMLElement | string } pNd
 */
declare function $x_HideChildren(pNd: HTMLElement | string): void;

/**
 *
 * @param { HTMLElement | string | HTMLElement[] } pNd
 * @param { boolean } a
 */
declare function $x_disableItem(pNd: HTMLElement | string | HTMLElement[], a: boolean): void;

declare function $f_get_emptys(): void;
declare function $v_Array(): void;
declare function $f_ReturnChecked(): void;
declare function $d_ClearAndHide(): void;
declare function $f_SelectedOptions(): void;
declare function $f_SelectValue(): void;
declare function $u_ArrayToString(): void;
declare function $x_CheckImageSrc(): void;
declare function $v_CheckValueAgainst(): void;
declare function $f_Hide_On_Value_Item(): void;
declare function $f_Show_On_Value_Item(): void;
declare function $f_Hide_On_Value_Item_Row(): void;
declare function $f_Show_On_Value_Item_Row(): void;
declare function $f_DisableOnValue(): void;
declare function $x_ClassByClass(): void;
declare function $f_ValuesToArray(): void;
declare function $x_FormItems(): void;
declare function $f_CheckAll(): void;
declare function $f_CheckFirstColumn(): void;
declare function $x_ToggleWithImage(): void;
declare function $x_SwitchImageSrc(): void;
declare function $x_CheckImageSrc(): void;
declare function $u_SubString(): void;
declare function html_RemoveAllChildren(): void;
declare function html_SetSelectValue(): void;
declare function addLoadEvent(): void;
declare function $f_Swap(): void;
declare function $f_SetValueSequence(): void;
declare function $dom_AddTag(): void;
declare function $tr_AddTD(): void;
declare function $tr_AddTH(): void;
declare function $dom_AddInput(): void;
declare function $dom_MakeParent(): void;
declare function $x_RowHighlight(): void;
declare function $x_RowHighlightOff(): void;
declare function $v_Upper(): void;
declare function $d_Find(): void;
declare function $f_First_field(): void;
// END - Non-namespaced APIs