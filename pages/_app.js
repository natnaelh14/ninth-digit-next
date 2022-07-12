import '../styles/globals.css';
import { withLDProvider } from "launchdarkly-react-client-sdk";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default withLDProvider({
  clientSideID: process.env.NEXT_PUBLIC_LAUNCH_DARKLY_CLIENT_SIDE_ID,
  options: {
    bootstrap: 'localStorage',
  },
})(MyApp);
