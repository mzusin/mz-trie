import { suffixTree } from '../src/core/suffix-tree';

describe('Suffix Tree', () => {

    test('banana', () => {
        const st = suffixTree('banana');
        expect(st.search('apple')).toBeFalsy();
        expect(st.search('banana')).toBeTruthy();
        expect(st.search('anana')).toBeTruthy();
        expect(st.search('nana')).toBeTruthy();
        expect(st.search('ana')).toBeTruthy();
        expect(st.search('na')).toBeTruthy();
        expect(st.search('a')).toBeTruthy();
    });
});

