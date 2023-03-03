import React from "react"
import NavbarComp from "../components/NavbarComp.js"
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import ContactPage from "../components/prbox.js"
import { Inter } from 'next/font/google'


export default function PrayerBinPage() {
    return (
      <>
        <Head>
          <title>Prayer Bin</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <NavbarComp/>
          <div className="pbinimg">
            <h1>Prayer Bin</h1>
            <p><i><b>"And pray in the Spirit on all occasions with all kinds of prayers and requests. With this in mind, be alert and always keep on praying for all the Lord’s people." Ephesians 6:18</b></i></p>
            <p><b>Dear brothers and sisters, life is tough, but our God is tougher. Although we are far apart, we are part of one body. You are loved not only by the Father, Son, and Spirit, but also by us, your family in Christ. That being said, please let us know how we can pray for you.</b></p>
            <ContactPage/>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p><i>“There is a paradox about tribulation in Christianity. Blessed are the poor, but by ‘judgement’ (i.e., social justice) and alms we are to remove poverty wherever possible. Blessed are we when persecuted, but we may avoid persecution by flying from city to city, and may pray to be spared it, as Our Lord prayed in Gethsemane. But if suffering is good, ought it not to be pursued rather than avoided? I answer that suffering is not good in itself. What is good in any painful experience is, for the sufferer, his submission to the will of God, and, for the spectators, the compassion aroused and the acts of mercy to which it leads.”</i></p>
            <p><i>– The Problem of Pain, C.S. Lewis</i></p>
          </div>
        </main>
      </>
    )
  }