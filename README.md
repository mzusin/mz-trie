# Trie

Typescript implementation of trie/digital tree/radix tree/prefix tree/suffix tree. 

![](docs/trie.png)

## Definition
**Trie** (derived from re**trie**val) is a type of k-ary **search tree** used for storing and searching a specific string from a set. It is used to store a large amount of strings. The **pattern matching** can be done efficiently using tries.

- Using trie, the key can be searched in **O(M)** time, where M is the **maximum string length**. However, the penalty is the storage requirements.
- Tries take less space when they contain a large number of short strings, as nodes are shared between the keys.

## Usage Examples
- Autocompletion.
- The longest prefix.
- Spell-checking software.

## Interfaces

```ts
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
    log: () => string;
    getWords: () => string[];
}

export const trie: (keys?: string[]) => ITrie;
export const suffixTree: (text: string) => ITrie;
```

## Documentation

```ts
const _trie = trie(['orange', 'apple']);

console.log(_trie.search('orange')); // true or false

_trie.insert('potato');
_trie.remove('potato');

console.log(_trie.log());
console.log(_trie.getWords()); // ['orange', 'apple']
console.log(_trie.printTrie());
```

**Suffix Tree**

```ts
const st = suffixTree('banana');
console.log(st.search('apple')); // false
console.log(st.search('banana')); // true
console.log(st.search('anana')); // true
console.log(st.search('nana')); // true
console.log(st.search('ana')); // true
console.log(st.search('na')); // true
console.log(st.search('a')); // true
```


