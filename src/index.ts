import { trie } from './core/trie';
import { suffixTree } from './core/suffix-tree';

const api = {
    ...trie,
    ...suffixTree,
};

declare global {
    interface Window {
        mzTrie: typeof api,
    }
}

window.mzTrie = window.mzTrie || api;

export * from './core/trie';
export * from './core/suffix-tree';