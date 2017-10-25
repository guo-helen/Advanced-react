class DataApi {

    constructor(rawData) {
        this.rawData = rawData;
    }
    
    /* this is a hash map, key is id, value is object */
    mapIntoObject(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.id] =curr;
            return acc;
        }, {});
    }

    getArticles() {
        return this.mapIntoObject(this.rawData.articles);
    }
    getAuthors() {
        return this.mapIntoObject(this.rawData.authors);
    }
}

export default DataApi;