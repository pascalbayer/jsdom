"use strict";
const { mixin } = require("../../utils");
const DOMTokenList = require("../generated/DOMTokenList");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const HTMLHyperlinkElementUtilsImpl = require("./HTMLHyperlinkElementUtils-impl").implementation;

class HTMLAreaElementImpl extends HTMLElementImpl {
  constructor(args, privateData) {
    super(args, privateData);

    this._htmlHyperlinkElementUtilsSetup();
  }

  get relList() {
    if (this._relList === undefined) {
      this._relList = DOMTokenList.createImpl([], {
        element: this,
        attributeLocalName: "rel"
      });
    }
    return this._relList;
  }

  _attrModified(name, value, oldValue) {
    super._attrModified(name, value, oldValue);

    if (name === "rel" && this._relList !== undefined) {
      this._relList.attrModified();
    }
  }
}

mixin(HTMLAreaElementImpl.prototype, HTMLHyperlinkElementUtilsImpl.prototype);

module.exports = {
  implementation: HTMLAreaElementImpl
};
