import { Request, ResponseToolkit } from "@hapi/hapi";
import { format as formatUrl } from 'url';

export class Foo {
  public async bad(req: Request, res: ResponseToolkit) {
    // bearer:expected javascript_hapi_open_redirect
    return res
      .redirect(formatUrl({
          pathname: req.url.pathname
        })
      )
      .takeover();
  }
}
