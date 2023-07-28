// This file is indirectly testing javascript_shared_express_user_input

res.send(req.params.oops)

let { params } = req
let { oops } = params
let { subOops } = oops

res.send(params.oops)
res.send(oops)

const foo: Request = x
res.send(foo.params.oops)

const f = (x: string, foo2: Request, { params }: Request) => {
  res.send(foo2.params.oops)
  res.send(params.oops)
}

function(foo3: Request, { params }: Request) {
  res.send(foo3.params.oops)
  res.send(params.oops)
}

function f2(foo4: Request, { params }: Request) {
  res.send(foo4.params.oops)
  res.send(params.oops)
}


class X extends Y {
  m(foo5: Request, { params }: Request) {
    res.send(foo5.params.oops)
    res.send(params.oops)
  }
}
