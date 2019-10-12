import HTTP from './HTTP.js';
import Response from './DAV/Response.js';

export default class DAV {
    #cache;
    #http;

    #validDestination = (destination) => {
      const hostname = `${location.protocol}//${location.hostname}`,
        hostnameRegExp = new RegExp(`^${hostname}`)
        ;

      if (!destination.match(hostnameRegExp)) {
        if (destination.match(/^http/)) {
          throw new TypeError(`Invalid destination host: '${destination}'.`);
        }

        return `${hostname}${destination}`;
      }

      return destination;
    };

    constructor(cache = new Map(), http = HTTP) {
      this.#cache = cache;
      this.#http  = http;
    }

    async get(uri) {
      return this.#http.GET(uri);
    }

    async list(uri, bypassCache) {
      if (!bypassCache) {
        const cached = await this.#cache.get(uri);

        if (cached) {
          return cached;
        }
      }

      const check = await this.check(uri);

      if (!check || !check.ok) {
        return;
      }

      const data = await this.#http.PROPFIND(uri),
        response = new Response(await data.text()),
        collection = response.collection()
      ;

      this.#cache.set(uri, collection);

      return collection;
    }

    async check(uri) {
      return this.#http.HEAD(uri);
    }

    async delete(uri) {
      return this.#http.DELETE(uri);
    }

    async mkcol(dest) {
      return this.#http.MKCOL(dest);
    }

    async copy(from, to) {
      return this.#http.COPY(from, {
        headers: {
          Destination: this.#validDestination(to)
        }
      });
    }

    async move(from, to) {
      return this.#http.MOVE(from, {
        headers: {
          Destination: this.#validDestination(to)
        }
      });
    }

    async upload(path, files) {
      return await Promise.all(
        Array.from(files)
          .map(async (fileObject) => {
            const targetFile = path + fileObject.name,
              collection = await this.list(path),
              [existingFile] = collection.filter((entry) => entry.name === fileObject.name)
            ;

            if (existingFile) {
              // TODO: nicer notification
              // TODO: i18m
              if (!confirm(`A file called '${existingFile.name}' already exists, would you like to overwrite it?`)) {
                return false;
              }
            }

            return this.#http.PUT(targetFile, {
              headers: {
                'Content-Type': fileObject.type
              },
              body: fileObject
            });
          })
      );
    }

    async del(uri) {
      return this.#http.DELETE(uri);
    }
}