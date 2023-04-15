import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem, List, useMantineTheme, Container } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import CardCarousel from './cardCarousel';
import { Carousel } from '@mantine/carousel';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    imageSection: {
        padding: theme.spacing.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    label: {
        marginBottom: theme.spacing.xs,
        lineHeight: 1,
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        letterSpacing: rem(-0.25),
        textTransform: 'uppercase',
    },

    section: {
        padding: theme.spacing.md,
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    icon: {
        marginRight: rem(5),
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },
}));



export function FeaturesCard({ mockdata }) {
    const theme = useMantineTheme()
    const { classes } = useStyles();
    const features = mockdata.features.map((feature) => (
        <Center key={feature.label}>
            <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
            <Text size="xs">{feature.label}</Text>
        </Center>
    ));

    return (
        <Card withBorder radius="md" className={classes.card} >
            <Card.Section className={classes.imageSection}>
                <Image height={200} fit='contain' src={mockdata.src} alt="Tesla Model S" />
            </Card.Section>

            {/* <Group position="apart" mt="md"> */}
            <div>
                <Text fw={500}>{mockdata.title}</Text>
                <Text fz="xs" c="dimmed">
                    {mockdata.subtitle}
                </Text>
            </div>
            <Carousel
                // maw={32}
                // mx="auto"
                // withIndicators
                // height={200}
                withControls={false}
                dragFree
                slideGap={-200}
                align="start"
            >
                {mockdata.badges.map((badge) => (
                    <Carousel.Slide>
                        <Badge variant="outline" >{badge}</Badge>
                    </Carousel.Slide>
                ))}
            </Carousel>


            <Card.Section className={classes.section} mt="md">


                <Text fz="sm" c="dimmed" className={classes.label}>
                    Special Features
                </Text>

                <List >{mockdata.features.map((feature) => (<List.Item><Text fz="sm" c="dimmed" fw={500}>
                    {feature.label}
                </Text></List.Item>))}</List>


                {/* <CardCarousel data={
                    <>
                        <Text fz="sm" c="dimmed" className={classes.label}>
                            Special Features
                        </Text>

                        <List >{mockdata.features.map((feature) => (<List.Item><Text fz="sm" c="dimmed" fw={500}>
                            {feature.label}
                        </Text></List.Item>))}</List>
                    </>
                } /> */}

                {/* <Group spacing={8} mb={-8}>
                    {features}
                </Group> */}
            </Card.Section>

            <Card.Section className={classes.section} style={{ disply: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
                <Group spacing={30}>
                    <div>
                        <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                            {`$${mockdata.price}`}
                        </Text>
                        {/* <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
                            per day
                        </Text> */}
                    </div>

                    <Button radius="xl" style={{ flex: 1 }} component="a" href={mockdata.link}>
                        Buy Now
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
}