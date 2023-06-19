import { Open_Sans } from "next/font/google";
import Head from "next/head";

import { getCommitProps } from "common/utils";
import { Labels } from "components/label";
import Sheet from "components/sheet";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

function LabelsPage({ count, draftId }) {
  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${font.className}`}>
        <Sheet landscape size="letter">
          <Labels count={count} draftId={draftId} />
        </Sheet>
      </main>
    </>
  );
}

LabelsPage.defaultProps = {
  count: 8,
  draftId: undefined,
};

export default LabelsPage;
