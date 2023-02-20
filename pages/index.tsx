import Index from "@views/index";
import { GetServerSideProps } from "next";
import { IndexProps } from "@views/index/types";
import { BaseContext } from "@/src/utils/context/context";
import { isRedirect } from "@/src/utils/redirectUrl";

export const getServerSideProps: GetServerSideProps<Partial<IndexProps>> = async (ctx: BaseContext) => {
    const redirect = isRedirect(ctx);
    if (redirect) {
        return redirect;
    }

    const baseInfo = ctx.req.baseInfo || null;
    return {
        props: {

        }
    };
};

export default Index;
