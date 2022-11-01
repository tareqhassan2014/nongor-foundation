import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import * as React from 'react';

interface Props {
    children: React.ReactElement;
}

function HideOnScroll({ children }: Props) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function TopHeader(props: Props) {
    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <p>top header</p>
            </HideOnScroll>
        </React.Fragment>
    );
}
