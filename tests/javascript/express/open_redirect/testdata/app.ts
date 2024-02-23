import { format as formatUrl } from 'url';

export class Foo {
  public async bad(req: Request, res: Response) {
    // bearer:expected javascript_express_open_redirect
    return res.redirect(formatUrl({
          pathname: req.url.pathname
        })
      )
      .takeover();
  }
}
