import { LazyExoticComponent, Suspense } from 'react';

// project import
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable =
    (Component: LazyExoticComponent<() => JSX.Element>) => (props: any) =>
        (
            <Suspense fallback={<Loader />}>
                <Component {...props} />
            </Suspense>
        );

export default Loadable;

// zigipoka17@gmail.com
