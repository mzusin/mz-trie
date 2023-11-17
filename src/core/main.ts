import { INode, ITrie } from './interfaces';

export const trie = (keys?: string[]) : ITrie => {

    const root: INode = {
        children: new Map(),
        isEndOfWord: false,
    };

    /**
     * Every character of the input key is inserted as an individual Trie node.
     * Time Complexity: O(key_length)
     * Space Complexity: O(ALPHABET_SIZE * key_length * N) where N is the number of keys in Trie.
     */
    const insert = (key: string) => {

        let node = root;

        for(let i = 0; i<key.length; i++) {
            const letter = key[i];

            if(!node.children.has(letter)) {
                node.children.set(letter, {
                    children: new Map(),
                    isEndOfWord: false,
                });
            }

            node = node.children.get(letter) as INode;
        }

        node.isEndOfWord = true;
    };

    /**
     * Delete the key in bottom up manner using recursion.
     * - Key may not be there in trie. Delete operation should not modify trie.
     * - Key present as unique key (no part of key contains another key (prefix), nor the key itself is prefix of another key in trie). Delete all the nodes.
     * - Key is prefix key of another long key in trie. Unmark the leaf node.
     * - Key present in trie, having at least one other key as prefix key. Delete nodes from end of key until first leaf node of longest prefix key.
     */
    const remove = (key: string) => {

        // The function returns true if this was the last child
        // and the children array is empty.
        const traverse = (node: INode|undefined, depth: number) : boolean => {
            if(!node) return false;

            // If it's a last character in the key,
            // and the node is marked as the end of the word:
            if (depth === key.length && node.isEndOfWord) {
                node.isEndOfWord = false;
                return node.children.size === 0;
            }

            const letter = key[depth];
            const child = node.children.get(letter)

            if (traverse(child, depth + 1)) {
                node.children.delete(letter);
                return node.children.size === 0;
            }

            return false;
        };

        traverse(root, 0);
    };

    /**
     * Time Complexity: O(key_length)
     * Space Complexity: O(1)
     */
    const search = (key: string) : boolean => {
        let node = root;

        for(let i = 0; i<key.length; i++) {
            const letter = key[i];

            if(!node.children.has(letter)) return false;
            node = node.children.get(letter) as INode;
        }

        return node.isEndOfWord;
    };

    const isEmpty = (node?: INode) : boolean => {
        node = node || root;
        return node?.children.size <= 0;
    };

    const printTrie = () => {
        return JSON.stringify(root, (_key, value) => {
            if(value instanceof Map) {
                return [...value];
            }

            return value;
        }, 4);
    };

    /**
     * Entry point
     */
    (() => {
        if(!keys) return;

        for(const key of keys) {
            insert(key);
        }
    })();

    return {
        insert,
        remove,
        search,
        isEmpty,
        printTrie,
    };
};