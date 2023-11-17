import { trie } from './core/main';

const api = {
    ...trie,
};

declare global {
    interface Window {
        mzTrie: typeof api,
    }
}

window.mzTrie = window.mzTrie || api;

export * from './core/main';