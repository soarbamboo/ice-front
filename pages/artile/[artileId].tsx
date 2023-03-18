import { GetServerSideProps } from "next";
import { IndexProps } from "@views/index/types";
import { BaseContext } from "@/src/utils/context/context";
import Artile from "@/src/views/artile";

export const getServerSideProps: GetServerSideProps<Partial<IndexProps>> = async (ctx: BaseContext) => {
    const artileId = ctx.params.artileId as string
    return {
        props: {
            artileId
        }
    };
};

export default Artile;
