export interface INode {

    children: Map<string, INode>;

    // isEndOfWord represents end of a word
    isEndOfWord: boolean;
}

export interface ITrie {
    insert: (key: string) => void;
    remove: (key: string) => void;
    search: (key: string) => boolean;
    isEmpty: (node?: INode) => boolean;
    //printTrie: () => string;
    logTree: () => string;
    getWords: () => string[];
}