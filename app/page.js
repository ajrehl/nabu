'use client'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Button, Container, Group, SimpleGrid, useMantineTheme } from '@mantine/core'
import { CardWithStats } from './previewCard'
import HeroImageBackground from './hero'
import { FeaturesCard } from './featuresCard'
import FooterLinks from './footerLinks'
import { IconPoint } from '@tabler/icons-react'

const inter = Inter({ subsets: ['latin'] })

// const mockData = {
//   "image": "https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
//   "title": "Running challenge",
//   "description": "56 km this month • 17% improvement compared to last month • 443 place in global scoreboard",
//   "stats": [
//     {
//       "title": "Distance",
//       "value": "27.4 km"
//     },
//     {
//       "title": "Avg. speed",
//       "value": "9.6 km/h"
//     },
//     {
//       "title": "Score",
//       "value": "88/100"
//     }
//   ]
// }

const mockData = {
  "data": [
    {
      "title": "About",
      "links": [
        {
          "label": "Features",
          "link": "#"
        },
        {
          "label": "Pricing",
          "link": "#"
        },
        {
          "label": "Support",
          "link": "#"
        },
        {
          "label": "Forums",
          "link": "#"
        }
      ]
    },
    {
      "title": "Project",
      "links": [
        {
          "label": "Contribute",
          "link": "#"
        },
        {
          "label": "Media assets",
          "link": "#"
        },
        {
          "label": "Changelog",
          "link": "#"
        },
        {
          "label": "Releases",
          "link": "#"
        }
      ]
    },
    {
      "title": "Community",
      "links": [
        {
          "label": "Join Discord",
          "link": "#"
        },
        {
          "label": "Follow on Twitter",
          "link": "#"
        },
        {
          "label": "Email newsletter",
          "link": "#"
        },
        {
          "label": "GitHub discussions",
          "link": "#"
        }
      ]
    }
  ]
}

const products = [
  // {
  //   src: "https://m.media-amazon.com/images/I/31LLzbtQWyL._AC_UF226,226_FMjpg_.jpg",
  //   link: "https://www.amazon.com/Stainless-Mill-Premium-included-Portable-Adjustable-Camping-Manual/dp/B0BHRZ5MVQ/ref=sr_1_3_sspa?crid=7MZAAW80MYGV&keywords=coffee+grinder+manual&qid=1681309686&sprefix=coffee+grinder+manual%2Caps%2C139&sr=8-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTjBQTklKRkhISEkmZW5jcnlwdGVkSWQ9QTAzODU1NzMyQUdWUVZXU0IzQ1dVJmVuY3J5cHRlZEFkSWQ9QTA5MDAzOTMyT0ZKRURETUs2VVBBJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
  //   title: "Podcast Microphone",
  //   subtitle: "Free recharge at any station",
  //   badge: "50% off",
  //   price: 100,
  //   features: [
  //     { label: '4 passengers', icon: IconPoint },
  //     { label: '100 km/h in 4 seconds', icon: IconPoint },
  //     { label: 'Automatic gearbox', icon: IconPoint },
  //     { label: 'Electric', icon: IconPoint },
  //   ]
  // },
  {
    src: "https://m.media-amazon.com/images/I/81q21ppXJaL._AC_UL400_.jpg",
    link: "https://www.amazon.com/Stainless-Mill-Premium-included-Portable-Adjustable-Camping-Manual/dp/B0BHRZ5MVQ/ref=sr_1_3_sspa?crid=7MZAAW80MYGV&keywords=coffee+grinder+manual&qid=1681309686&sprefix=coffee+grinder+manual%2Caps%2C139&sr=8-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTjBQTklKRkhISEkmZW5jcnlwdGVkSWQ9QTAzODU1NzMyQUdWUVZXU0IzQ1dVJmVuY3J5cHRlZEFkSWQ9QTA5MDAzOTMyT0ZKRURETUs2VVBBJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    title: "Manual Coffee Grinder",
    subtitle: "Stainless Steel Conical Burr Mill-Premium Brush",
    badges: ["Black", "AL/SS", "430g"],
    price: 59.99,
    features: [
      { label: 'Portability: Perfect for traveling!', icon: IconPoint },
      { label: 'Adjustable grind settings: Great for different types of coffee', icon: IconPoint },
      { label: 'Easy to clean: Easy and quick to clean', icon: IconPoint },
      { label: 'Durable construction: Built like a tank', icon: IconPoint },
    ]
  },
  {
    src: "https://m.media-amazon.com/images/I/71Cz0deEiTL._AC_SX522_.jpg",
    link: "https://www.amazon.com/Gazelle-GT400GR-Portable-4-Person-Overlanding/dp/B08B2FGLV8/ref=sr_1_1?crid=ZGE2PMTWKIVT&keywords=waterproof+tent&qid=1681344937&sprefix=waterproof+tent%2Caps%2C166&sr=8-1",
    title: "Mesh Oxford Tent",
    subtitle: "Easy to Set-Up Gazelle tents",
    badges: ["UV Protection", "Waterproof", "4 Person", "Alpine Green", "4 Season"],
    price: 349.99,
    features: [
      { label: 'Super Easy Setup: Setup is quick and hassle-free', icon: IconPoint },
      { label: 'Remarkably Lightweight: Easy to carry on long hikes', icon: IconPoint },
      { label: 'Great Ventilation: Air flows freely in and out', icon: IconPoint },
    ]
  },
  {
    src: "https://m.media-amazon.com/images/I/61OGMvr3meL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/GS-3400P-Portable-Backpacking-Emergency-Preparedness/dp/B01HQRD8EO?th=1",
    title: "Propane/Butane Portable Camping Stove",
    subtitle: "Liquefied Petroleum Gas One stove ",
    badges: ["Alloy Steel", "Dual Fuel", "3.1 lbs"],
    price: 34.94,
    features: [
      { label: 'Easy to use - Simple setup', icon: IconPoint },
      { label: 'Compact and lightweight - Easy to carry', icon: IconPoint },
      { label: 'Durable - High - quality materials', icon: IconPoint },
      { label: 'Efficient - Boils water quickly', icon: IconPoint },
    ]
  }
]



export default function Home() {
  const theme = useMantineTheme()
  return (
    <><Container size={"lg"}>

      <HeroImageBackground imgSrc="https://th.bing.com/th/id/OIP.NNkfwI_HaIz9AYvKaXqsAQHaE7?pid=ImgDet&rs=1" />

      <main className={styles.main} style={{ marginBottom: theme.spacing.xl }}>
        {/* <Group grow>{
          products.map((product) => (
            <FeaturesCard mockdata={product} />

          ))
        }</Group> */}
        <SimpleGrid cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: '62rem', cols: 3, spacing: 'md' },
            { maxWidth: '48rem', cols: 2, spacing: 'sm' },
            { maxWidth: '36rem', cols: 1, spacing: 'sm' },
          ]}>

          {
            products.map((product) => (
              <FeaturesCard mockdata={product} />

            ))
          }
        </SimpleGrid>

      </main>
      {/* <FooterLinks data={mockData.data} /> */}
    </Container>


    </>
  )
}
