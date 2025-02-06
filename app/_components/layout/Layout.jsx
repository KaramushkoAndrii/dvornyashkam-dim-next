
import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import DonateSection from "../donateSection/DonateSection";
import ScrollToTop from "../ScrollToTop";

const Layout = () => {
    return (
        <>
            <Header />
            <ScrollToTop />
            <main>
                {<Outlet />}
            </main>

            <DonateSection />
            <Footer />
        </>
    )
}

export default Layout;