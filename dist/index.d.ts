declare module 'mz-trie' {

    export interface INode {
        children: Map<string, INode>;
        isEndOfWord: boolean;
    }
    export interface ITrie {
        insert: (key: string) => void;
        remove: (key: string) => void;
        search: (key: string) => boolean;
        longestCommonPrefix: () => string;

        isEmpty: (node?: INode) => boolean;
        getLeavesCount: (node?: INode) => number;
        getHeight: (node?: INode) => number;
        getWords: () => string[];

        printTrie: () => string;
        log: () => string;
    }

    export const trie: (keys?: string[]) => ITrie;
    export const suffixTree: (text: string) => ITrie;
}