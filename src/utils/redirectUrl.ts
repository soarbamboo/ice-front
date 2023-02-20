import { BaseContext } from "./context/context";

const needLogin = [

];
const samePath = [

];
const pathEqualUrl = [

];

function canRedirect(pathname: string, url: string): boolean {
  if (samePath.includes(pathname)) {
    return pathEqualUrl.includes(pathname) ? pathname === url : true;
  }
  return false;
}

export function isRedirect(ctx: BaseContext) {
  const { pathname = "", url = "" } = ctx.req;
  if (canRedirect(pathname, url)) {
    const mRelHost = "";
    const pcPath = url;
    return {
      redirect: {
        permanent: false,
        destination: `https://${mRelHost}${pcPath}`
      }
    };
  } else if (needLogin.includes(pathname) && !ctx.req.customerInfo?.userId) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      }
    };
  }
}