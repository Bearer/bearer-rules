// This file is indirectly testing javascript_shared_express_user_input

// bearer:expected javascript_express_cross_site_scripting
res.send(req.params.oops)

let { params } = req
let { oops } = params
let { subOops } = oops

// bearer:expected javascript_express_cross_site_scripting
res.send(params.oops)
// bearer:expected javascript_express_cross_site_scripting
res.send(oops)

const foo: Request = x
// bearer:expected javascript_express_cross_site_scripting
res.send(foo.params.oops)

const f = (x: string, foo2: Request, { params }: Request) => {
// bearer:expected javascript_express_cross_site_scripting
  res.send(foo2.params.oops)
// bearer:expected javascript_express_cross_site_scripting
  res.send(params.oops)
}

function(foo3: Request, { params }: Request) {
// bearer:expected javascript_express_cross_site_scripting
  res.send(foo3.params.oops)
// bearer:expected javascript_express_cross_site_scripting
  res.send(params.oops)
}

function f2(foo4: Request, { params }: Request) {
// bearer:expected javascript_express_cross_site_scripting
  res.send(foo4.params.oops)
// bearer:expected javascript_express_cross_site_scripting
  res.send(params.oops)
}


class X extends Y {
  m(foo5: Request, { params }: Request) {
// bearer:expected javascript_express_cross_site_scripting
    res.send(foo5.params.oops)
// bearer:expected javascript_express_cross_site_scripting
    res.send(params.oops)
  }
}
