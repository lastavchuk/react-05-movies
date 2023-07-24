import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
// import Footer from 'components/Footer/Footer';
import Loader from 'components/Loader/Loader';

function SharedLayout() {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            {/* <Footer /> */}
        </>
    );
}
export default SharedLayout;
