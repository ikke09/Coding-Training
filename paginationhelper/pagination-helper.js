// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection || [];
        this.itemsPerPage = itemsPerPage || 1;
        this.pages = this.buildUpPages();
    }

    buildUpPages() {
        const pages = Array.from({ length: this.pageCount() }, (_, pageIndex) => {
            const page = [];
            const leftItems = Math.min(this.itemCount() - this.itemsPerPage * pageIndex,
                this.itemsPerPage);
            for (let i = 0; i < leftItems; i += 1) {
                page.push(this.collection[i + pageIndex * this.itemsPerPage]);
            }
            return page;
        });
        return pages;
    }

    // returns the number of items within the entire collection
    itemCount() {
        return this.collection.length;
    }

    // returns the number of pages
    pageCount() {
        return Math.floor(this.itemCount() / this.itemsPerPage)
        + (this.itemCount() % this.itemsPerPage === 0
            ? 0
            : 1);
    }

    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    pageItemCount(pageIndex) {
        return this.pages[pageIndex] ? this.pages[pageIndex].length : -1;
    }

    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    pageIndex(itemIndex) {
        if (itemIndex >= this.itemCount() || itemIndex < 0) {
            return -1;
        }
        let result = -1;
        this.pages.forEach((page, index) => {
            if (page.includes(this.collection[itemIndex])) {
                result = index;
            }
        });
        return result;
    }
}

module.exports = PaginationHelper;
