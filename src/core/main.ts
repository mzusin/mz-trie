import { INode, ITrie } from './interfaces';

/**
 * Space: O(ALPHABET_SIZE * key_length * N) where N is the number of keys in Trie.
 */
export const trie = (keys?: string[]) : ITrie => {

    const root: INode = {
        children: new Map(),
        isEndOfWord: false,
    };

    /**
     * Every character of the input key is inserted as an individual Trie node.
     * Time: O(key_length)
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
     * Time: O(key_length)
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
        search,
    };
};