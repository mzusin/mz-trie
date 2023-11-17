import { trie } from '../src/core/main';

describe('Trie', () => {

    test('insert and search for a key that exists', () => {
        const _trie = trie();
        _trie.insert('apple');
        expect(_trie.search('apple')).toBeTruthy();
    });

    test('search for a key that does not exist', () => {
        const _trie = trie();
        _trie.insert('apple');
        expect(_trie.search('orange')).toBeFalsy();
    });

    test('insert and search for a key with common prefix', () => {
        const _trie = trie();
        _trie.insert('apple');
        _trie.insert('app');
        expect(_trie.search('app')).toBeTruthy();
        expect(_trie.search('apple')).toBeTruthy();
    });

    test('search for a key with a common prefix that does not exist', () => {
        const _trie = trie();
        _trie.insert('apple');
        _trie.insert('app');
        expect(_trie.search('appl')).toBeFalsy();
    });

    test('search for an empty key', () => {
        const _trie = trie();
        _trie.insert('apple');
        _trie.insert('app');
        expect(_trie.search('')).toBeFalsy();
    });

    test('search for a key in an empty trie', () => {
        const _trie = trie();
        expect(_trie.search('apple')).toBeFalsy();
    });
});

