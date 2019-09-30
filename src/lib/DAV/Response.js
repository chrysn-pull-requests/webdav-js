import Collection from './Collection.js';

export default class Response {
    #parser;
    #document;
    #collection;

    #getTag = (doc, tag) => doc.querySelector(tag);

    #getTagContent = (doc, tag) => {
        const node = this.#getTag(doc, tag);

        return node ? node.textContent : '';
    };

    constructor(rawDocument, parser = new DOMParser()) {
        this.#parser = parser;
        this.#document = parser.parseFromString(rawDocument, 'application/xml');
    }

    responseToPrimitives(responses) {
        return Array.from(responses).map((response) => ({
                directory: !! this.#getTag(response,'collection'),
                fullPath: this.#getTagContent(response, 'href'),
                modified: Date.parse(
                        this.#getTagContent(response, 'getlastmodified')
                    )
                ,
                size: parseInt(
                        this.#getTagContent(response, 'getcontentlength'),
                      10
                    )
                ,
                mimeType: this.#getTagContent(response, 'getcontenttype'),
                del: true
            }))
        ;
    }

    collection() {
        if (! this.#collection) {
            this.#collection = new Collection(
                this.responseToPrimitives(
                    this.#document.querySelectorAll('response')
                )
            );
        }

        return this.#collection;
    }
}
