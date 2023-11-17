import { trie } from './core';

const api = {
    ...trie,
};

declare global {
    interface Window {
        mzTrie: typeof api,
    }
}

window.mzTrie = window.mzTrie || api;

export * from './core';