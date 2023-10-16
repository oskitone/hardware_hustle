import { isUndefined } from "lodash";
import { Open_Sans } from "next/font/google";
import { useRouter } from "next/router";
import Head from "next/head";

import { Front, Back } from "components/sheet";
import { getCommitProps } from "common/utils";
import RollTable from "components/roll-table";
import Page from "components/page";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

function RollTablePage({ year, count }) {
  const router = useRouter();
  count = !isUndefined(router.query.count)
    ? parseInt(router.query.count)
    : count;

  // TODO: DRY against globals.css?
  const legal_sheet_width = "8.5in";
  const legal_sheet_height = "14in";
  const letter_sheet_width = "8.5in";
  const letter_sheet_height = "11in";
  const page_width = "8in";
  const page_height = "6in";

  const pageSize = `${letter_sheet_height} ${letter_sheet_width}`;

  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`@page { size: ${pageSize}; }`}</style>
      </Head>
      <main className={`${font.className}`}>
        {[...Array(count)].map((e, i) => (
          <div key={i}>
            <Front size="letter" landscape>
              <Page size="letter">
                <RollTable year={year} />
              </Page>
              <Page size="letter">
                <RollTable year={year} />
              </Page>
            </Front>
            <Back size="letter" landscape>
              <Page size="letter">
                <RollTable year={year} />
              </Page>
              <Page size="letter">
                <RollTable year={year} />
              </Page>
            </Back>
          </div>
        ))}
      </main>
    </>
  );
}

RollTablePage.defaultProps = {
  year: undefined,
  count: 1,
};

export default RollTablePage;
