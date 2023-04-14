import { Carousel } from '@mantine/carousel';
import { createStyles, getStylesRef } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    controls: {
        ref: getStylesRef('controls'),
        transition: 'opacity 150ms ease',
        opacity: 0,
    },

    root: {
        '&:hover': {
            [`& .${getStylesRef('controls')}`]: {
                opacity: 1,
            },
        },
    },
    indicator: {
        backgroundColor: theme.colors.blue
    }
}));

export default function CardCarousel({ data }) {
    const { classes } = useStyles();
    return (
        <Carousel maw={320} mx="auto" withIndicators height={200} classNames={classes}>
            <Carousel.Slide>{data}</Carousel.Slide>
            <Carousel.Slide>{data}</Carousel.Slide>
            <Carousel.Slide>{data}</Carousel.Slide>
        </Carousel>
    );
}