/// <reference path="../typings/tsd.d.ts" />

interface NSNode {
  appendChild: (options: AppendChildOptions) => NSNode;
  cloneNode: (options?: CloneNodeOptions) => NSNode;
  compareDocumentPosition: (options: CompareDocumentOptions) => number;
  hasAttributes: () => boolean;
  hasChildNodes: () => boolean;
  insertBefore: (options: InsertBeforeOptions) => NSNode;
  isDefaultNamespace: (options: IsDefaultNamespaceOptions) => boolean;
  isEqualNode: (options: CompareDocumentOptions) => boolean;
  isSameNode: (options: CompareDocumentOptions) => boolean;
  lookupNamespaceURI: (options: LookupNamespaceURIOptions) => string;
  lookupPrefix: (options: LookupPrefixOptions) => string;
  normalize: () => void;
  removeChild: (options: RemoveChildOptions) => NSNode;
  replaceChild: (options: ReplaceChildOptions) => NSNode;
  attributes: string;
  baseURI: string;
  childNodes: NSNode[];
  firstChild: NSNode;
  lastChild: NSNode;
  localName: string;
  namespaceURI: string;
  nextSibling: NSNode;
  nodeName: string;
  nodeType: NodeType;
  nodeValue: string;
  ownerDocument: NSXMLDocument;
  parentNode: NSNode;
  prefix: string;
  previousSibling: NSNode;
  textContent: string;
}

interface AppendChildOptions {
    newChild: NSNode;
}

interface CloneNodeOptions {
    deep?: boolean;
}

interface CompareDocumentOptions {
    other: NSNode;
}

interface InsertBeforeOptions {
    newChild: NSNode;
    refChild: NSNode;
}

interface IsDefaultNamespaceOptions {
    namespaceURI: string;
}

interface LookupNamespaceURIOptions {
    prefix: string;
}

interface LookupPrefixOptions {
    namespaceURI: string;
}

interface RemoveChildOptions {
    oldChild: NSNode;
}

interface ReplaceChildOptions {
    newChild: NSNode;
    oldChild: NSNode;
}

interface NodeType {
    ATTRIBUTE_NODE;
    CDATA_SECTION_NODE;
    COMMENT_NODE;
    DOCUMENT_FRAGMENT_NODE;
    DOCUMENT_NODE;
    DOCUMENT_TYPE_NODE;
    ELEMENT_NODE;
    ENTITY_NODE;
    ENTITY_REFERENCE_NODE;
    NOTATION_NODE;
    PROCESSING_INSTRUCTION_NODE;
    TEXT_NODE;
}

interface NSAttr extends NSNode {
    name: string;
    ownerElement: NSElement;
    specified: boolean;
    value: string;
    escape: (options: EscapeOptions) => string;
    validate: (options: ValidateOptions) => void;
}

interface EscapeOptions {
    xmlText: string;
}

interface ValidateOptions {
    xml: NSXMLDocument;
    xsdFilePathOrId: number | string;
    importFolderPathOrId?: number | string;
}

interface NSElement extends NSNode {
    getAttribute: (options: GetAttributeOptions) => NSAttr;
    getAttributeNodeNS: (options: GetAttributeNodeNSOpts) => NSAttr;
    getAttributeNS: (options: GetAttributeNodeNSOpts) => string;
    getElementsByTagName: (options: CreateElementOptions) => NSElement[];
    getElementsByTagNameNS: (options: GetAttributeNodeNSOpts) => NSElement[];
    hasAttribute: (options: GetAttributeOptions) => boolean;
    hasAttributeNS: (options: GetAttributeNodeNSOpts) => boolean;
    removeAttributes: (options: GetAttributeOptions) => void;
    removeAttributeNode: (options: RemoveAttributeNodeOptions) => NSAttr;
    removeAttributeNS: (options: GetAttributeNodeNSOpts) => void;
    setAttribute: (options: SetAttributeOptions) => void;
    setAttributeNode: (options: SetAttributeNodeOpts) => NSAttr;
    setAttributeNodeNS: (options: SetAttributeNodeOpts) => NSAttr;
    setAttributeNS: (options: SetAttributeNSOpts) => void;
    tagName: string;
}

interface GetAttributeOptions {
    name: string;
}

interface GetAttributeNodeNSOpts {
    namespaceURI: string;
    localName: string;
}

interface RemoveAttributeNodeOptions {
    oldAttr: NSAttr;
}

interface SetAttributeOptions {
    name: string;
    value: string;
}

interface SetAttributeNodeOpts {
    newAttr: NSAttr;
}

interface SetAttributeNSOpts {
    namespaceURI: string;
    qualifiedName: string;
    value: string;
}

interface NSXMLDocument extends NSNode {
    adoptNode: (options: AdoptNodeOptions) => NSNode;
    createAttribute: (options: CreateAttributeOptions) => NSAttr;
    createAttributeNS: (options: CreateAttributeNSOpts) => NSAttr;
    createCDATASection: (options: CDATAOptions) => NSNode;
    createComments: (options: CreateCommentOptions) => NSNode;
    createDocumentFragment: () => NSNode;
    createElements: (options: CreateElementOptions) => NSElement;
    createElementNS: (options: CreateElementNSOptions) => NSElement;
    createProcessingInstruction: (options: CreateProcessingOpts) => NSNode;
    createTextNode: (options: CreateTextNodeOptions) => NSNode;
    getElementById: (options: GetElementByIdOptions) => NSElement; 
    getElementsByTagName: (options: GetElementsByTagNameOptions) => NSElement[];
    getElementsByTagNameNS: (options: GetElementsByTagNameNSOpts) => NSElement[];
    importNodes: (options: ImportNodeOptions) => NSNode;
    doctype: NSElement;
    documentElement: NSElement;
    documentURI: string;
    inputEncoding: string;
    xmlEncoding: string;
    xmlStandalone: boolean;
    xmlVersion: string;
}

interface AdoptNodeOptions {
    source: NSNode;
}

interface CreateAttributeOptions {
    name: string;
    value?: string;
}

interface CreateAttributeNSOpts {
    namespaceURI: string;
    qualifiedName: string;
    value?: string;
}

interface CDATAOptions {
    data: string;
}

interface CreateCommentOptions {
    data: string;
}

interface CreateElementOptions {
    tagName: string;
}

interface CreateElementNSOptions {
    namespaceURI: string;
    qualifiedName: string;
}

interface CreateProcessingOpts {
    target: string;
    data: string;
}

interface CreateTextNodeOptions {
    data: string;
}

interface GetElementByIdOptions {
    elementId: string;
}

interface GetElementsByTagNameOptions {
    tag: string;
}

interface GetElementsByTagNameNSOpts {
    namespaceURI: string;
    localName: string;
}

interface ImportNodeOptions {
    importedNode: NSNode;
    deep: boolean;
}

interface ParserFromStringOptions {
  text: string;
}

interface ParserToStringOptions {
  document: XMLDocument;
}

interface Parser {
  fromString: (options: ParserFromStringOptions) => NSXMLDocument;
  toString: (options: ParserToStringOptions) => string;
}

interface XPath {
    select: (options: SelectOptions) => NSNode[];
}

interface SelectOptions {
    node: NSNode;
    xpath: string;
}

interface XMLModule {
    Attr: NSAttr;
    Document: NSXMLDocument;
    Element: NSElement;
    Node: NSNode;
    Parser: Parser;
    XPath: XPath;
}

declare module N {
    var xml: XMLModule;
}

declare module 'N/xml' {
    export = N.xml;
}
