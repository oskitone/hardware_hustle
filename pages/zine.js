import { Open_Sans } from "next/font/google";
import Head from "next/head";

import { letter_page_width, letter_page_height } from "common/dimensions";
import { getCommitProps } from "common/utils";
import Booklet from "components/booklet";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

const RulesPage = ({ year, draftId }) => {
  const pageDimensions = `${letter_page_width} ${letter_page_height}`;

  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`@page { size: ${pageDimensions}; }`}</style>
      </Head>
      <main className={`${font.className}`}>
        <Booklet year={year} draftId={draftId} gameSheetPanels={8} />
      </main>
    </>
  );
};

export default RulesPage;
