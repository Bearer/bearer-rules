import { Server, Request, ResponseToolkit } from "@hapi/hapi";
import { format as formatUrl } from 'url';

export class Foo {
  public async bad(request: Request, responseToolkit: ResponseToolkit) {
    // bearer:expected javascript_hapi_open_redirect
    return responseToolkit
      .redirect(formatUrl({
          pathname: request.url.pathname
        })
      )
      .takeover();
  }
}
