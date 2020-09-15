const PaginationHelper = require('./pagination-helper');

describe('PaginationHelper', () => {
    test('should be created', () => {
        expect(new PaginationHelper()).not.toBeUndefined();
    });

    test('item count', () => {
        const helper = new PaginationHelper([], 4);
        expect(helper.itemCount()).toBe(0);
        helper.collection = ['A'];
        expect(helper.itemCount()).toBe(1);
        helper.collection = ['A', 'A', 'A', 'A', 'A', 'A'];
        expect(helper.itemCount()).toBe(6);
    });

    test('page count', () => {
        const emptyHelper = new PaginationHelper();
        expect(emptyHelper.pageCount()).toBe(0);

        const singlePageHelper = new PaginationHelper(['A', 'A', 'A', 'A'], 4);
        expect(singlePageHelper.pageCount()).toBe(1);

        const multiPageHelper = new PaginationHelper(['A', 'A', 'A', 'A', 'A', 'A'], 4);
        expect(multiPageHelper.pageCount()).toBe(2);
    });

    test('pages', () => {
        const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
        expect(helper.pages).toEqual([
            ['a', 'b', 'c', 'd'],
            ['e', 'f'],
        ]);

        const helper2 = new PaginationHelper(['a', 'b', 'c', 'd'], 4);
        expect(helper2.pages).toEqual([
            ['a', 'b', 'c', 'd'],
        ]);
    });

    test('pageItemCount', () => {
        const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
        expect(helper.pageItemCount(0)).toBe(4);
        expect(helper.pageItemCount(1)).toBe(2);
        expect(helper.pageItemCount(2)).toBe(-1); // invalid
    });

    test('pageIndex', () => {
        const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
        expect(helper.pageIndex(5)).toBe(1);
        expect(helper.pageIndex(2)).toBe(0);
        expect(helper.pageIndex(20)).toBe(-1); // invalid
        expect(helper.pageIndex(-10)).toBe(-1); // invalid
    });
});
