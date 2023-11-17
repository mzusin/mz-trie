declare module 'mz-trie' {

    export interface INode {
        children: Map<string, INode>;
        isEndOfWord: boolean;
    }
    export interface ITrie {
        insert: (key: string) => void;
        remove: (key: string) => void;
        search: (key: string) => boolean;
        isEmpty: (node?: INode) => boolean;
        getLeavesCount: (node?: INode) => number;
        getHeight: (node?: INode) => number;
        printTrie: () => string;
        logTree: () => string;
        getWords: () => string[];
    }

    export const trie: (keys?: string[]) => ITrie;
}