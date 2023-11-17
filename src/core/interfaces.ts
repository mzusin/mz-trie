export interface INode {

    children: Map<string, INode>;

    // isEndOfWord represents end of a word
    isEndOfWord: boolean;
}

export interface ITrie {
    insert: (key: string) => void;
    search: (key: string) => boolean;
}