import { trie } from '../src/core/trie';

describe('Trie', () => {

    describe('Init', () => {
        test('Init the trie with multiple values', () => {
            const _trie = trie(['orange', 'apple']);
            expect(_trie.search('orange')).toBeTruthy();
            expect(_trie.search('apple')).toBeTruthy();
            expect(_trie.search('grape')).toBeFalsy();
        });
    });

    describe('Insert & Search', () => {

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

        test('trie is empty', () => {
            const _trie = trie();
            expect(_trie.isEmpty()).toBeTruthy();
        });

        test('trie is not empty', () => {
            const _trie = trie();
            _trie.insert('apple');
            _trie.insert('app');
            expect(_trie.isEmpty()).toBeFalsy();
        });

        test('insert twice', () => {
            const _trie = trie();
            _trie.insert('apple');
            _trie.insert('apple');
            expect(_trie.search('apple')).toBeTruthy();
        });
    });

    describe('Remove', () => {

        // Key may not be there in trie. Delete operation should not modify trie.
        test('delete a key in an empty', () => {
            const _trie = trie();
            _trie.remove('app');
            expect(_trie.search('app')).toBeFalsy();
        });

        test('delete a key that doesn\'t exist', () => {
            const _trie = trie();
            _trie.insert('apple');
            _trie.remove('orange')
            expect(_trie.search('orange')).toBeFalsy();
            expect(_trie.search('apple')).toBeTruthy();
        });

        test('delete a key that exists', () => {
            const _trie = trie();
            _trie.insert('apple');
            _trie.insert('orange');
            _trie.remove('apple')
            expect(_trie.search('apple')).toBeFalsy();
            expect(_trie.search('app')).toBeFalsy();
            expect(_trie.search('a')).toBeFalsy();
            expect(_trie.search('orange')).toBeTruthy();
        });

        test('Key is prefix key of another long key in trie.', () => {
            const _trie = trie();
            _trie.insert('abcde');
            _trie.insert('cd');
            _trie.remove('cd')
            expect(_trie.search('abcde')).toBeTruthy();
            expect(_trie.search('cd')).toBeFalsy();
        });

        test('Key is con contain other keys.', () => {
            const _trie = trie();
            _trie.insert('abcde');
            _trie.insert('cd');
            _trie.remove('abcde')
            expect(_trie.search('abcde')).toBeFalsy();
            expect(_trie.search('cd')).toBeTruthy();
        });

        test('Key is prefix of another key', () => {
            const _trie = trie();
            _trie.insert('abc');
            _trie.insert('abd');
            _trie.remove('abc')
            expect(_trie.search('abc')).toBeFalsy();
            expect(_trie.search('abd')).toBeTruthy();
        });
    });

    describe('Get Words', () => {

        test('Get empty trie words', () => {
            const _trie = trie();
            expect(_trie.getWords()).toEqual([]);
        });

        test('Get trie words: apple, oranges', () => {
            const words = ['apple', 'oranges'];
            const _trie = trie(words);
            expect(_trie.getWords().sort()).toEqual(words.sort());
        });

        test('Get trie words: abcde, abcdef, ab, cd, cde', () => {
            const words = ['abcde', 'abcdef', 'ab', 'cd', 'cde'];
            const _trie = trie(words);
            expect(_trie.getWords().sort()).toEqual(words.sort());
        });

        test('Get trie words: abc, abd', () => {
            const words = ['abcde', 'abd'];
            const _trie = trie(words);
            expect(_trie.getWords().sort()).toEqual(words.sort());
        });
    });

    describe('findLeavesCount()', () => {

        test('Leaves count in empty trie', () => {
            const _trie = trie();
            expect(_trie.getLeavesCount()).toEqual(0);
        });

        test('Leaves count in abc, abd', () => {
            const _trie = trie(['abc', 'abd']);
            expect(_trie.getLeavesCount()).toEqual(2);
        });

        test('Leaves count in answer, any', () => {
            const _trie = trie(['answer', 'any']);
            expect(_trie.getLeavesCount()).toEqual(2);
        });
    });

    describe('getHeight()', () => {

        test('getHeight() in empty trie', () => {
            const _trie = trie();
            expect(_trie.getHeight()).toEqual(0);
        });

        test('getHeight() in abc, abd', () => {
            const _trie = trie(['abc', 'abd']);
            expect(_trie.getHeight()).toEqual(3);
        });

        test('getHeight() in answer, any', () => {
            const _trie = trie(['answer', 'any']);
            expect(_trie.getHeight()).toEqual(6);
        });
    });

    describe('Print', () => {

        test('Print empty trie', () => {
            const _trie = trie();
            expect(_trie.printTrie()).toEqual('');
        });

        test('Print a', () => {
            const _trie = trie(['a']);
            expect(_trie.printTrie()).toEqual('a');
        });

        test('Print a, b', () => {
            const _trie = trie(['a', 'b']);
            expect(_trie.printTrie()).toEqual('a b');
        });

        test('Print ab, ac', () => {
            const _trie = trie(['ab', 'ac']);
            expect(_trie.printTrie()).toEqual(`a 
|\\
b c`);
        });

        test('Print 1', () => {
            const _trie = trie(['answer', 'any', 'bye', 'their', 'there']);
            expect(_trie.printTrie()).toEqual(`a   b t 
|   | | 
n   y h 
|\\  | | 
s y e e 
|     |\\
w     i r 
|     | | 
e     r e 
|         
r`);
        });

        test('Print abcd, efcd', () => {
            const _trie = trie(['abcd', 'efcd']);
            expect(_trie.printTrie()).toEqual(`a e 
| | 
b f 
| | 
c c 
| | 
d d`);
        });
    });

    describe('Longest common prefix', () => {

        test('Longest common prefix 1', () => {
            const _trie = trie(['flower', 'flow', 'flight']);
            expect(_trie.longestCommonPrefix()).toEqual('fl');
        });

        test('Longest common prefix 1', () => {
            const _trie = trie(['dog', 'racecar', 'car']);
            expect(_trie.longestCommonPrefix()).toEqual('');
        });

        test('Longest common prefix 3', () => {
            const _trie = trie(['ab', 'a']);
            expect(_trie.longestCommonPrefix()).toEqual('a');
        });
    });
});

