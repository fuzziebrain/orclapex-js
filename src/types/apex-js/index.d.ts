// Type definitions for apex-js 5.1
// Project: Type Definitions for Oracle Application Express JavaScript APIs
// Definitions by: Adrian Png <https://github.com/fuzziebrain/>

/// <reference types="jquery"/>

declare namespace apex {
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
     * @return boolean
     */
    function trigger(pSelector: any, pEvent: string, pData?: Object): boolean;
  }

  namespace page {
    interface parameterSet {
      [key: string]: string | number
    }

    interface SubmitOptions {
      request?: string,
      set?: parameterSet,
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
     * @returns boolean | void
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
     * @returns boolean
     */
    function validate(): boolean;

    /**
     * apex.page.isChanged
     * @returns boolean
     */
    function isChanged(): boolean;

    /**
     * apex.page.warnOnUnsavedChanges
     * @param pMessage
     * @param pExtraIsChanged
     */
    function warnOnUnsavedChanges(pMessage: string, pExtraIsChanged: Function): void;
  }
}