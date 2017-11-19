// Type definitions for Jquery Confirm Dialog
/// <reference types="jquery"/>
declare namespace $s {

    interface confirmOptions {
            buttons? : object,
            title? : string,
            content?  : string,
    }

    /**
     * confirm Dialog
     * @param {confirmOptions} pOtions
     */
    function confirm( pOtions: confirmOptions): boolean | void;



}
