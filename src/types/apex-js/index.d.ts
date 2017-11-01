declare namespace apex {
  namespace page {
    interface parameterSet {
      [key: string]: string | number
    }
    interface submitOptions {
      request?: string,
      set?: parameterSet,
      showWait?: boolean,
      submitIfEnter?: Function,
      reloadOnSubmit?: string,
      ignoreChange?: boolean,
      validate?: boolean
    }
    function confirm(pMessage: string, pRequest: string): void;
    function confirm(pMessage: string, pOptions: submitOptions): void;
  }
}