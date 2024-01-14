import { isUndefined } from "lodash";
import { Open_Sans } from "next/font/google";
import { useRouter } from "next/router";
import Head from "next/head";

import { Front, Back } from "components/page";
import { getCommitProps } from "common/utils";
import { letter_page_width, letter_page_height } from "common/dimensions";
import Panel from "components/panel";
import RollTable from "components/roll-table";

const font = Open_Sans({ subsets: ["latin"] });

export const getStaticProps = async (context) => getCommitProps();

function RollTablePage({ year, count }) {
  const router = useRouter();
  count = !isUndefined(router.query.count)
    ? parseInt(router.query.count)
    : count;

  const pageDimensions = `${letter_page_height} ${letter_page_width}`;

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
        {[...Array(count)].map((e, i) => (
          <div key={i}>
            <Front size="letter" landscape>
              <Panel size="letter">
                <RollTable year={year} />
              </Panel>
              <Panel size="letter">
                <RollTable year={year} />
              </Panel>
            </Front>
            <Back size="letter" landscape>
              <Panel size="letter">
                <RollTable year={year} />
              </Panel>
              <Panel size="letter">
                <RollTable year={year} />
              </Panel>
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
