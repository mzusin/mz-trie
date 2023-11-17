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
    printTrie: () => string;
}

export const trie: (keys?: string[]) => ITrie;
```

## Documentation

```ts
const _trie = trie(['orange', 'apple']);

console.log(_trie.search('orange'));

_trie.insert('potato');
_trie.remove('potato');

console.log(_trie.printTrie());
```


