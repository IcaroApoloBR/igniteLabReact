import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Event />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App