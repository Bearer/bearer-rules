import { Request, ResponseToolkit } from "@hapi/hapi";
import { format as formatUrl } from 'url';

export class Foo {
  async bad(req, responseToolkit) {
    // bearer:expected javascript_hapi_open_redirect
    return responseToolkit
      .redirect(formatUrl({
          pathname: req.url.pathname
        })
      )
      .takeover();
  }
}
