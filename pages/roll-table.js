import { isUndefined } from "lodash";
import { Open_Sans } from "next/font/google";
import { useRouter } from "next/router";
import Head from "next/head";

import { Front, Back } from "components/sheet";
import RollTable from "components/roll-table";
import Page from "components/page";

const font = Open_Sans({ subsets: ["latin"] });

function RollTablePage({ count }) {
  const router = useRouter();
  count = !isUndefined(router.query.count)
    ? parseInt(router.query.count)
    : count;

  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${font.className}`}>
        {[...Array(count)].map((e, i) => (
          <div key={i}>
            <Front size="letter" landscape>
              <Page size="letter">
                <RollTable />
              </Page>
              <Page size="letter">
                <RollTable />
              </Page>
            </Front>
            <Back size="letter" landscape>
              <Page size="letter">
                <RollTable />
              </Page>
              <Page size="letter">
                <RollTable />
              </Page>
            </Back>
          </div>
        ))}
      </main>
    </>
  );
}

RollTablePage.defaultProps = {
  count: 1,
};

export default RollTablePage;
