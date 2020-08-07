/* eslint-disable no-new,consistent-return,default-case,no-case-declarations */

function stub(proto, propertyKey, cb) {
  const fn = jest.fn(cb);
  const originalMethod = proto[propertyKey];

  fn.restore = () => {
    proto[propertyKey] = originalMethod;
  };

  proto[propertyKey] = fn;
  return fn;
}

global.stubThrow = (proto, propertyKey, er) => {
  const fn = jest.fn(() => {
    throw er;
  });
  const originalMethod = proto[propertyKey];

  fn.restore = () => {
    proto[propertyKey] = originalMethod;
  };

  proto[propertyKey] = fn;
  return fn;
};

global.stub = (...args) => {
  switch (args.length) {
    case 0:
      return jest.fn();

    case 1:
      const [proto] = args;
      const stubs = [];
      for (const key in proto) {
        if (typeof proto[key]) {
          stubs.push(stub(proto, key));
        }
      }

      proto.restore = function () {
        stubs.map((s) => s.restore());
        delete proto.restore;
      };
      return proto;

    case 2:
      return stub(args[0], args[1]);

    case 3:
      return stub(args[0], args[1], args[2]);
  }
};
