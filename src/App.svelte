<script>
  import { Router, Route } from "svelte-navigator";
  import Footer from "./lib/components/Footer.svelte";
  import Navbar from "./lib/components/Navbar.svelte";
  import Home from "./features/Home.svelte";
  import NotFound from "./features/NotFound.svelte";
</script>

<Router>
  <div class="flex flex-col min-h-screen">
    <div class="mb-auto">
      <Navbar />
      <div class="mx-2 sm:mx-12 my-12">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </div>
    </div>
    <Footer />
  </div>
</Router>
