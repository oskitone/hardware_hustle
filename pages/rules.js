import { Open_Sans } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import { getCommitProps } from "common/utils";
import { letter_sheet_width, letter_sheet_height } from "common/dimensions";
import Page from "components/page";
import Rules from "components/rules.mdx";
import Sheet, { Front, Back } from "components/sheet";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

// TODO: #/4 page count?
// TODO: deter widows/orphans in headers/icons

function RulesPage({ year, draftId, view }) {
  const pageSize = `${letter_sheet_height} ${letter_sheet_width}`;

  const router = useRouter();
  view = view || router.query.view;

  function getContent() {
    if (view == "all") {
      return (
        <Sheet size="full">
          <Rules />
        </Sheet>
      );
    }

    return (
      <>
        <Front size="letter" landscape>
          <Page size="letter" landscape>
            <Rules page={3} year={year} draftId={draftId} />
          </Page>
          <Page size="letter" landscape>
            <Rules page={0} year={year} draftId={draftId} />
          </Page>
        </Front>
        <Back size="letter" landscape>
          <Page size="letter" landscape>
            <Rules page={1} year={year} draftId={draftId} />
          </Page>
          <Page size="letter" landscape>
            <Rules page={2} year={year} draftId={draftId} />
          </Page>
        </Back>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`@page { size: ${pageSize}; }`}</style>
      </Head>
      <main className={`${font.className}`}>{getContent()}</main>
    </>
  );
}

RulesPage.defaultProps = {
  year: undefined,
  draftId: undefined,
  view: undefined,
};

export default RulesPage;
