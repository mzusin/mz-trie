import { trie } from './trie';
import { ITrie } from './interfaces';

// TODO: implemented compressed trie and change suffix tree to use it
export const suffixTree = (text: string) : ITrie => {
    const _trie = trie();

    for(let i=0; i<text.length; i++) {
        // Find all suffixes of given text.
        const suffix = text.substring(i);
        _trie.insert(suffix);
    }

    return _trie;
};