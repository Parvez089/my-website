/** @format */

import "./App.css";

import Layout from "./components/Layout/Layout";
import Page from "./components/pages/page/Page";

function App() {
  return (
    <div className='mx-auto md:w-[1172px]  mt-12'>
      <Layout>
        <Page></Page>
      </Layout>
    </div>
  );
}

export default App;
