import { Open_Sans } from "next/font/google";
import Head from "next/head";

import Sheet from "components/sheet";
import { getCommitProps } from "common/utils";
import Sleeve from "components/sleeve";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

function SleevePage({ draftId }) {
  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${font.className}`}>
        <Sheet>
          <Sleeve draftId={draftId} />
        </Sheet>
      </main>
    </>
  );
}

SleevePage.defaultProps = {
  draftId: undefined,
};

export default SleevePage;
