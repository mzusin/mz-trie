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

    const log = () => {
        return JSON.stringify(root, (_key, value) => {
            if(value instanceof Map) {
                return [...value];
            }

            return value;
        }, 4);
    };

    const getWords = () : string[] => {

        const words: string[] = [];

        const traverse = (node: INode, level: number, strArray: string[]) => {

            if(node.isEndOfWord) {
                words.push(strArray.slice(0, level).join(''));
            }

            for(const [letter, child] of node.children) {
                strArray[level] = letter;
                traverse(child, level + 1, strArray);
            }
        };

        traverse(root, 0, []);

        return words;
    };

    const getLeavesCount = (node?: INode) : number => {
        const traverse = (node?: INode) : number => {
            if(!node) return 0;

            let count = 0;

            if(node.isEndOfWord){
                count++;
            }

            for(const child of node.children.values()) {
                count += getLeavesCount(child);
            }

            return count;
        };

        return traverse(node ?? root);
    };

    const getHeight = (node?: INode) : number => {
        let maxLevel = 0;

        const traverse = (node: INode, level: number) => {
            maxLevel = Math.max(maxLevel, level);

            for(const child of node.children.values()) {
                traverse(child, level + 1);
            }
        };

        traverse(node ?? root, 0);

        return maxLevel;
    };

    const printTrie = () : string => {

        if(root.children.size <= 0) return '';

        const rowsCount = getHeight(root);

        const colWidthList: number[] = [];
        let c=0;
        for(const child of root.children.values()) {
            colWidthList[c] = getLeavesCount(child);
            c++;
        }

        const resultTbl: (string|undefined)[][] = [];
        for(let r=0; r<rowsCount; r++) {
            resultTbl.push([]);
        }

        const getCol = (c: number) => {
            let shift = 0;
            for(let i=0; i<c; i++) {
                shift += colWidthList[i];
            }
            return shift;
        };

        const traverse = (node: INode, level: number, col: number, kidShift: number) => {
            let t = 0;
            const shift = getCol(col);
            for(const [letter, kid] of node.children) {
                resultTbl[level][shift + kidShift + t] = letter;
                traverse(kid, level + 1, col, kidShift + t);
                t++;
            }
        };

        c = 0;
        for(const [letter, child] of root.children) {
            resultTbl[0][getCol(c)] = letter;
            traverse(child, 1, c, 0);
            c++;
        }

        let tree = '';
        for(let r=0; r<resultTbl.length; r++) {
            const row = resultTbl[r];
            for(let c=0; c<row.length; c++) {
                tree += (row[c] ?? ' ') + ' ';
            }
            tree += '\n';

            for(let c=0; c<row.length; c++) {
                if(row[c] === undefined || !resultTbl[r + 1] || resultTbl[r + 1][c] === undefined) {
                    tree += '  ';
                }
                else{
                    if(row[c + 1] === undefined && resultTbl[r + 1] && resultTbl[r + 1][c + 1] !== undefined) {
                        tree += '|\\';
                    }
                    else{
                        tree += '| ';
                    }
                }
            }
            tree += '\n';
        }

        return tree.trim();
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

        getLeavesCount,
        getHeight,

        log,
        getWords,
        printTrie,
    };
};