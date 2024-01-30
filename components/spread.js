// NOTE: columns may seem weird but the print bugs that flex
// created were even weirder.

const Spread = ({ children }) => (
  <div
    style={{
      columns: 2,
      columnGap: 0,
    }}
  >
    {children}
  </div>
);

export default Spread;
