const links = [
    {
        id: 1,
        url: "/",
        text: "Home",
        page: <Home />
    },
        {
        id: 2,
        url: "/about",
        text: "About",
        page: <About />
    },
        {
        id: 3,
        url: "/products",
        text: "Products",
        page: <Products />
    },
        {
        id: 4,
        url: "/cart",
        text: "Cart",
        page: <Cart />
    },
        {
        id: 5,
        url: "/error",
        text: "Cart",
        page: <Error />
        }
]
export default links

/*
<Navbar />
<Switch>
    <Route exact path="/">
        <Home />
    </Route>

    <Route exact path="/about">
        <About />
    </Route>
</Switch>
*/